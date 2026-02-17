import React, { useState, useEffect } from 'react';

const SummaryCard = ({ title, count, icon: Icon, colorClass, gradientClass, onClick }) => {
  const [displayCount, setDisplayCount] = useState(0);

  // Count-up animation effect
  useEffect(() => {
    if (count === 0) {
      setDisplayCount(0);
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = count / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-cyan-100/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-200/30 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer overflow-hidden"
    >
      {/* Decorative gradient blob background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-5 rounded-2xl transition-opacity duration-500 group-hover:opacity-15`} />
      
      {/* Animated gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 rounded-2xl transition-opacity duration-500 group-hover:opacity-5`} />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {/* Icon Container with glowing effect */}
        <div className={`p-4 rounded-xl bg-gradient-to-br ${gradientClass} text-white shadow-lg shadow-cyan-200/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
             {Icon && <Icon className="text-3xl" />}
        </div>

        <div className="text-center space-y-1">
             <h3 className="text-3xl font-black text-gray-800 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-600 group-hover:to-teal-600 transition-all duration-300">
                {displayCount.toLocaleString()}
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                {title}
            </p>
        </div>
      </div>
      
      {/* Bottom active line */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass} transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100`} />
      
      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
    </div>
  );
};

export default SummaryCard;
