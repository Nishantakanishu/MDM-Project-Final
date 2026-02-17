import React from 'react';
import { motion } from 'framer-motion';

const AssetCard = ({ title, count, icon: Icon, gradient, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -5, scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 shadow-lg cursor-pointer h-48 flex flex-col justify-between group`}
      onClick={onClick}
    >
      {/* Background Decoration */}
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
      <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-black/5 rounded-full blur-xl" />

      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-inner border border-white/30">
          <Icon className="text-3xl text-white drop-shadow-md" />
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.4 }}
            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-xs font-semibold tracking-wider uppercase"
        >
            Active
        </motion.div>
      </div>

      {/* Content */}
      <div className="z-10 mt-4">
        <motion.h3 
            className="text-white/80 text-sm font-medium tracking-wide uppercase mb-1"
        >
            {title}
        </motion.h3>
        <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
            className="text-5xl font-bold text-white tracking-tight drop-shadow-sm"
        >
            {count.toLocaleString()}
        </motion.div>
      </div>
      
      {/* Hover Indication */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-white/20 rounded-full text-white backdrop-blur-sm">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
      </div>
    </motion.div>
  );
};

export default AssetCard;
