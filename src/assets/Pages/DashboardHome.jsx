import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdManageAccounts,
  MdGroup,
  MdDevices,
  MdTrendingUp,
  MdElectricMeter,
  MdAnalytics,
  MdRouter,
  MdAssessment,
  MdAttachMoney,
  MdReportProblem,
  MdSupportAgent,
  MdElectricalServices,
  MdPerson,
  MdArrowForward,
  MdTrendingUp as MdTrending,
  MdTrendingDown as MdTrendingDownIcon,
  MdSpeed,
  MdCheckCircle,
} from 'react-icons/md';

const DashboardHome = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const moduleCards = [
    { 
      id: 'users', 
      title: 'Users', 
      subtitle: 'Management',
      icon: MdManageAccounts, 
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'users',
      stats: { active: 245, total: 256, change: '+2.3%', trend: 'up' },
      description: 'System administration'
    },
    { 
      id: 'consumers', 
      title: 'Consumers', 
      subtitle: 'Management',
      icon: MdGroup, 
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'consumers',
      stats: { active: 1847, total: 1923, change: '+4.1%', trend: 'up' },
      description: 'Consumer data'
    },
    { 
      id: 'assets', 
      title: 'Assets', 
      subtitle: 'Management',
      icon: MdDevices, 
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'assets',
      stats: { active: 892, total: 945, change: '+1.8%', trend: 'up' },
      description: 'Infrastructure'
    },
    { 
      id: 'demand', 
      title: 'Demand', 
      subtitle: 'Service',
      icon: MdTrendingUp, 
      color: 'from-teal-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'demand',
      stats: { active: 156, total: 178, change: '+6.2%', trend: 'up' },
      description: 'Forecasting'
    },
    { 
      id: 'mdm', 
      title: 'Meter Data',
      subtitle: 'Management',
      icon: MdElectricMeter, 
      color: 'from-cyan-500 to-teal-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'mdm',
      stats: { active: 3421, total: 3506, change: '+3.7%', trend: 'up' },
      description: 'Smart meters'
    },
    { 
      id: 'vee', 
      title: 'VEE', 
      subtitle: 'Management',
      icon: MdAnalytics, 
      color: 'from-sky-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'vee',
      stats: { active: 89, total: 92, change: '+1.2%', trend: 'up' },
      description: 'Validation'
    },
    { 
      id: 'communication', 
      title: 'Communication', 
      subtitle: 'Management',
      icon: MdRouter, 
      color: 'from-cyan-400 to-teal-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'communication',
      stats: { active: 234, total: 245, change: '+2.9%', trend: 'up' },
      description: 'Network'
    },
    { 
      id: 'audit', 
      title: 'Energy', 
      subtitle: 'Audit',
      icon: MdAssessment, 
      color: 'from-teal-600 to-cyan-800',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'audit',
      stats: { active: 67, total: 78, change: '+5.4%', trend: 'up' },
      description: 'Consumption'
    },
    { 
      id: 'revenue', 
      title: 'Revenue', 
      subtitle: 'Management',
      icon: MdAttachMoney, 
      color: 'from-emerald-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'revenue',
      stats: { active: 456, total: 478, change: '+8.1%', trend: 'up' },
      description: 'Financial'
    },
    { 
      id: 'exceptions', 
      title: 'Exception', 
      subtitle: 'Management',
      icon: MdReportProblem, 
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
      path: 'exceptions',
      stats: { active: 23, total: 28, change: '-12.3%', trend: 'down' },
      description: 'System alerts'
    },
    { 
      id: 'csm', 
      title: 'Customer', 
      subtitle: 'Service',
      icon: MdSupportAgent, 
      color: 'from-cyan-600 to-sky-800',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'csm',
      stats: { active: 189, total: 201, change: '+3.2%', trend: 'up' },
      description: 'Support'
    },
    { 
      id: 'prepaid', 
      title: 'Prepaid', 
      subtitle: 'Services',
      icon: MdElectricalServices, 
      color: 'from-teal-400 to-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      path: 'prepaid',
      stats: { active: 567, total: 589, change: '+7.6%', trend: 'up' },
      description: 'Payment'
    },
  ];

  const handleCardClick = (module) => {
    navigate(`/portal/${module.path}`);
  };

  const firstRow = moduleCards.slice(0, 6);
  const secondRow = moduleCards.slice(6, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-white p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="transform transition-all duration-500 hover:scale-105">
            <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent animate-gradient">
              MDM Control Center
            </h1>
            <p className="text-gray-600 mt-2 text-lg font-medium">
              Enterprise Meter Data Management Dashboard
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="glass-cyan px-6 py-3 rounded-2xl shadow-lg border border-cyan-200/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-sm text-cyan-600 font-medium">System Status</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" />
                <span className="text-sm font-bold text-gray-900">Operational</span>
              </div>
            </div>
            
            <div className="glass-cyan px-6 py-3 rounded-2xl shadow-lg border border-cyan-200/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-sm text-cyan-600 font-medium">Last Updated</p>
              <p className="text-sm font-bold text-gray-900">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* First Row - 6 Cards */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-cyan-700 rounded-full shadow-lg" />
          <h2 className="text-2xl font-bold text-gray-800">Core Operations</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-200 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {firstRow.map((module, index) => {
            const Icon = module.icon;
            const isHovered = hoveredCard === module.id;
            
            return (
              <div
                key={module.id}
                onClick={() => handleCardClick(module)}
                onMouseEnter={() => setHoveredCard(module.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative group cursor-pointer transform transition-all duration-300
                  ${isHovered ? 'scale-110 -translate-y-2 z-20' : 'scale-100 z-10'}
                  ${index % 2 === 0 ? 'animation-delay-100' : 'animation-delay-200'}
                `}
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${module.color} rounded-2xl blur-xl opacity-0 
                  group-hover:opacity-30 transition-opacity duration-300
                `} />
                
                {/* Card */}
                <div className={`
                  relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                  hover:shadow-2xl transition-all duration-300
                  ${isHovered ? 'border-cyan-300' : ''}
                `}>
                  {/* Gradient Header */}
                  <div className={`h-1 bg-gradient-to-r ${module.color} transform transition-all duration-300 ${isHovered ? 'h-2' : ''}`} />
                  
                  <div className="p-4">
                    {/* Icon */}
                    <div className={`
                      p-3 rounded-xl bg-gradient-to-br ${module.color} text-white shadow-lg mb-3
                      transform transition-all duration-300
                      ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                    `}>
                      <Icon className="text-xl" />
                    </div>
                    
                    {/* Title */}
                    <div className="mb-2">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500">{module.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-3 line-clamp-1">
                      {module.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{module.stats.active}</p>
                        <p className="text-xs text-gray-500">/ {module.stats.total}</p>
                      </div>
                      <div className={`
                        flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                        ${module.stats.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                      `}>
                        {module.stats.trend === 'up' ? (
                          <MdTrending className="text-xs" />
                        ) : (
                          <MdTrendingDownIcon className="text-xs" />
                        )}
                        {module.stats.change}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className={`
                      bg-gradient-to-r ${module.color} text-white px-3 py-1.5 rounded-lg text-xs font-medium
                      transform transition-all duration-300 text-center
                      ${isHovered ? 'scale-105 shadow-lg' : 'scale-100'}
                    `}>
                      {isHovered ? 'Open Module →' : 'Access'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Second Row - 6 Cards */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-gradient-to-b from-teal-500 to-cyan-700 rounded-full shadow-lg" />
          <h2 className="text-2xl font-bold text-gray-800">Support Services</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-teal-200 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {secondRow.map((module, index) => {
            const Icon = module.icon;
            const isHovered = hoveredCard === module.id;
            
            return (
              <div
                key={module.id}
                onClick={() => handleCardClick(module)}
                onMouseEnter={() => setHoveredCard(module.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative group cursor-pointer transform transition-all duration-300
                  ${isHovered ? 'scale-110 -translate-y-2 z-20' : 'scale-100 z-10'}
                  animation-delay-${(index + 6) * 100}
                `}
                style={{
                  animation: `slideInUp 0.6s ease-out ${(index + 6) * 0.1}s both`
                }}
              >
                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${module.color} rounded-2xl blur-xl opacity-0 
                  group-hover:opacity-30 transition-opacity duration-300
                `} />
                
                {/* Card */}
                <div className={`
                  relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                  hover:shadow-2xl transition-all duration-300
                  ${isHovered ? 'border-cyan-300' : ''}
                `}>
                  {/* Gradient Header */}
                  <div className={`h-1 bg-gradient-to-r ${module.color} transform transition-all duration-300 ${isHovered ? 'h-2' : ''}`} />
                  
                  <div className="p-4">
                    {/* Icon */}
                    <div className={`
                      p-3 rounded-xl bg-gradient-to-br ${module.color} text-white shadow-lg mb-3
                      transform transition-all duration-300
                      ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                    `}>
                      <Icon className="text-xl" />
                    </div>
                    
                    {/* Title */}
                    <div className="mb-2">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500">{module.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-3 line-clamp-1">
                      {module.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{module.stats.active}</p>
                        <p className="text-xs text-gray-500">/ {module.stats.total}</p>
                      </div>
                      <div className={`
                        flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                        ${module.stats.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                      `}>
                        {module.stats.trend === 'up' ? (
                          <MdTrending className="text-xs" />
                        ) : (
                          <MdTrendingDownIcon className="text-xs" />
                        )}
                        {module.stats.change}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className={`
                      bg-gradient-to-r ${module.color} text-white px-3 py-1.5 rounded-lg text-xs font-medium
                      transform transition-all duration-300 text-center
                      ${isHovered ? 'scale-105 shadow-lg' : 'scale-100'}
                    `}>
                      {isHovered ? 'Open Module →' : 'Access'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="relative z-10">
        <div className="glass-cyan rounded-2xl shadow-xl border border-cyan-200/50 p-6 transform transition-all duration-500 hover:scale-[1.01]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-lg mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">Active Modules</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl shadow-lg mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <p className="text-2xl font-bold text-white">8.2K</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">Total Assets</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-2xl shadow-lg mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <p className="text-2xl font-bold text-white">99.8%</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">System Uptime</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-700 rounded-2xl shadow-lg mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <p className="text-2xl font-bold text-white">24/7</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default DashboardHome;
