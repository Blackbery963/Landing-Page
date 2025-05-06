import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Client, Databases, Account } from 'appwrite';
import { FaBars, FaMoon, FaSun, FaTimes, FaSignOutAlt, FaPalette, FaHome, FaUser } from 'react-icons/fa';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

function Dashboard() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [engagementData, setEngagementData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [500, 800, 600, 1200, 900, 1500],
  });
  const [salesByType, setSalesByType] = useState({
    labels: ['Paintings', 'Sketches', 'Digital Art'],
    data: [2000, 1000, 450],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [profileImage, setProfileImage] = useState(null);
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const pieChartRef = useRef(null);
  const pieCanvasRef = useRef(null);

  // Fetch user profile from Appwrite
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = await account.get();
        const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        const savedProfileImage = localStorage.getItem('profileImage');
        setProfile({
          username: savedProfile.username || user.name || 'Artist',
          email: user.email,
        });
        setProfileImage(savedProfileImage || null);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setProfile({ username: 'Artist', email: '' });
      }
    };
    fetchUserProfile();
  }, []);

  // Fetch engagement and sales data from Appwrite
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch engagement data
        const engagementResponse = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID
        );
        const engagementLabels = engagementResponse.documents.map(doc => doc.month || 'Unknown');
        const engagementDataPoints = engagementResponse.documents.map(doc => doc.views || 0);
        setEngagementData({ labels: engagementLabels, data: engagementDataPoints });

        // Fetch sales data (assuming a separate collection)
        const salesResponse = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_SALES_COLLECTION_ID
        );
        const salesLabels = salesResponse.documents.map(doc => doc.type || 'Unknown');
        const salesDataPoints = salesResponse.documents.map(doc => doc.amount || 0);
        setSalesByType({ labels: salesLabels, data: salesDataPoints });

        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Initialize Line Chart
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: engagementData.labels,
          datasets: [{
            label: 'Artwork Views',
            data: engagementData.data,
            borderColor: isDarkMode ? '#F472B6' : '#DB2777',
            backgroundColor: isDarkMode ? 'rgba(244, 114, 182, 0.2)' : 'rgba(219, 39, 119, 0.2)',
            fill: true,
            tension: 0.4,
          }],
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
          plugins: {
            legend: {
              labels: {
                color: isDarkMode ? '#E5E7EB' : '#1F2937',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [isDarkMode, engagementData]);

  // Initialize Pie Chart
  useEffect(() => {
    if (pieCanvasRef.current) {
      const ctx = pieCanvasRef.current.getContext('2d');
      pieChartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: salesByType.labels,
          datasets: [{
            data: salesByType.data,
            backgroundColor: ['#DB2777', '#F472B6', '#FECDD3'],
            borderColor: isDarkMode ? '#E5E7EB' : '#1F2937',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: isDarkMode ? '#E5E7EB' : '#1F2937',
              },
            },
          },
        },
      });
    }

    return () => {
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, [isDarkMode, salesByType]);

  // Mock recent activity data (replace with Appwrite fetch if available)
  const recentActivity = [
    { id: 'ART001', customer: 'Emma Wilson', artwork: 'Sunset Glow', type: 'Sale', amount: 250.00, date: '2025-04-24' },
    { id: 'ART002', customer: 'Liam Brown', artwork: 'Moonlit Waves', type: 'Inquiry', amount: 0.00, date: '2025-04-23' },
    { id: 'ART003', customer: 'Sophia Lee', artwork: 'Urban Sketch', type: 'Sale', amount: 180.50, date: '2025-04-22' },
  ];

  // Handle logout
  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      localStorage.removeItem('userProfile');
      localStorage.removeItem('profileImage');
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
      setError('Failed to log out. Please try again.');
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900' : 'bg-pink-50'} min-h-screen transition-colors duration-300 font-inter`}>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400 font-Eagle">Painters' Diary</h2>
          <button
            className="lg:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 font-serif"
          >
            <FaHome className="mr-2" /> Home
          </button>
          <button
            onClick={() => navigate('/artworks')}
            className="flex items-center w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 font-serif"
          >
            <FaPalette className="mr-2" /> Artworks
          </button>
          <button
            onClick={() => navigate('/account')}
            className="flex items-center w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 font-serif"
          >
            <FaUser className="mr-2" /> Account
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 font-serif"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button
              className="lg:hidden text-gray-600 dark:text-gray-300 mr-4"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-3xl font-semibold text-black  dark:text-white font-playfair">Artist Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-pink-100 dark:bg-gray-700 text-pink-600 dark:text-pink-400"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-600">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <FaUser className="text-2xl text-gray-400" />
                )}
              </div>
              <span className="text-gray-800 dark:text-white">{profile.username || 'Artist'}</span>
            </div>
          </div>
        </header>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {/* KPI Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Artwork Views</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5,230</p>
              <p className="text-xs text-green-500">+15% this month</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Sales</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$3,450</p>
              <p className="text-xs text-green-500">+10% this month</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Followers</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,120</p>
              <p className="text-xs text-green-500">+5% this month</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Inquiries</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">45</p>
              <p className="text-xs text-yellow-500">+2 this month</p>
            </div>
          </div>
        )}

        {/* Chart and Table Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-playfair">Engagement Trends</h3>
            {loading ? (
              <div className="h-64 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
            ) : (
              <canvas ref={canvasRef} className="w-full"></canvas>
            )}
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-playfair">Sales by Artwork Type</h3>
            {loading ? (
              <div className="h-64 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
            ) : (
              <canvas ref={pieCanvasRef} className="w-full"></canvas>
            )}
          </div>

          {/* Recent Activity Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-playfair">Recent Activity</h3>
            {loading ? (
              <div className="h-64 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-pink-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Customer</th>
                      <th className="px-4 py-2">Artwork</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity) => (
                      <tr key={activity.id} className="border-b dark:border-gray-700 hover:bg-pink-50 dark:hover:bg-gray-700">
                        <td className="px-4 py-2">{activity.id}</td>
                        <td className="px-4 py-2">{activity.customer}</td>
                        <td className="px-4 py-2">{activity.artwork}</td>
                        <td className="px-4 py-2">{activity.type}</td>
                        <td className="px-4 py-2">{activity.amount > 0 ? `$${activity.amount.toFixed(2)}` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;