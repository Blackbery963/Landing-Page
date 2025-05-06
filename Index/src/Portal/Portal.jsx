import { useState, useEffect } from 'react';

function Portal() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    if (isPortalOpen) {
      const interval = setInterval(() => {
        setHue((prevHue) => (prevHue + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPortalOpen]);

  const handleBrushStroke = (e) => {
    setIsPortalOpen(true);
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const brush = document.createElement('div');
    brush.className = 'absolute w-4 h-4 rounded-full bg-white opacity-50 animate-brush';
    brush.style.left = `${x * 100}%`;
    brush.style.top = `${y * 100}%`;
    document.body.appendChild(brush);
    setTimeout(() => brush.remove(), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center overflow-hidden">
      <div
        className="relative w-full max-w-4xl h-[600px] bg-gray-900 rounded-lg shadow-lg cursor-crosshair"
        onClick={handleBrushStroke}
        onMouseMove={isPortalOpen ? null : handleBrushStroke}
        style={{
          background: isPortalOpen
            ? `linear-gradient(45deg, hsl(${hue}, 70%, 20%), hsl(${hue + 60}, 70%, 30%), hsl(${hue + 120}, 70%, 25%))`
            : 'url(/texture.jpg) center/cover',
        }}
      >
        {!isPortalOpen && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif opacity-80">
            Enter Your Artistic Realm
          </div>
        )}
        {isPortalOpen && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-serif space-y-4">
            <h1 className="text-yellow-300">Welcome to Painters' Diary</h1>
            <p className="text-gray-200">Explore the Gallery</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              onClick={() => setIsPortalOpen(false)}
            >
              Back
            </button>
          </div>
        )}
        <style>
          {`
            @keyframes brush {
              0% { transform: scale(1); opacity: 0.5; }
              100% { transform: scale(2); opacity: 0; }
            }
            .animate-brush {
              animation: brush 1s ease-out forwards;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Portal;