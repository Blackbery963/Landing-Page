import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function UnlockingPage() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const lastUnlocked = localStorage.getItem('lastUnlocked') || 1;
    const lastVisit = localStorage.getItem('lastVisit');

    const now = new Date();
    const lastVisitDate = lastVisit ? new Date(lastVisit) : null;

    if (!lastVisitDate || now.getDate() !== lastVisitDate.getDate()) {
      // Unlock next section after 24 hours
      const newSection = Math.min(parseInt(lastUnlocked) + 1, 5); // Max 5 sections
      localStorage.setItem('lastUnlocked', newSection);
      localStorage.setItem('lastVisit', now);
      setCurrentSection(newSection);
    } else {
      setCurrentSection(parseInt(lastUnlocked));
    }
  }, []);

  const sections = [
    "Welcome to Painters' Diary 🎨",
    "Explore Art Styles 🖌️",
    "Meet the Masters 👩‍🎨",
    "Create Your First Artwork 🖍️",
    "Join Our Artist Community 🤝"
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center w-[70%] h-[60vh] flex flex-col justify-center"
      >
        <h1 className="text-3xl font-bold">{sections[currentSection - 1]}</h1>
        <p className="mt-4">New content unlocks at midnight! 🌙</p>
      </motion.div>
    </div>
  );
}

export default UnlockingPage;
