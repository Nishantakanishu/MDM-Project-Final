import React from 'react';

const SummaryCard = ({ title, count, icon: Icon, colorClass, gradientClass }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-100/50 shadow-sm hover:shadow-cyan-200/50 transition-all duration-500 ease-out hover:-translate-y-1">
      {/* Decorative gradient blob background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-5 rounded-2xl transition-opacity duration-500 group-hover:opacity-10`} />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {/* Icon Container with glowing effect */}
        <div className={`p-4 rounded-xl bg-gradient-to-br ${gradientClass} text-white shadow-lg shadow-cyan-100 group-hover:scale-110 transition-transform duration-500`}>
             {Icon && <Icon className="text-3xl" />}
        </div>

        <div className="text-center space-y-1">
             <h3 className="text-4xl font-black text-gray-800 tracking-tight group-hover:text-cyan-700 transition-colors duration-300">
                {count.toLocaleString()}
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-cyan-600 transition-colors duration-300">
                {title}
            </p>
        </div>
      </div>
      
       {/* Bottom active line */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${gradientClass} rounded-full transition-all duration-500 group-hover:w-1/2 opacity-0 group-hover:opacity-100`} />
    </div>
  );
};

export default SummaryCard;
