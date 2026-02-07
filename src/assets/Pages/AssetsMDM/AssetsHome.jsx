import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MdBusiness,
  MdFlashOn, 
  MdSettingsInputComponent, 
  MdPower, 
  MdDevicesOther, 
  MdMap,
  MdInventory,
  MdWarning,
  MdFactCheck,
  MdNewReleases,
  MdHistory
} from 'react-icons/md';
import SummaryCard from './SummaryCard';
import AssetsMap from './AssetsMap';

// Component Imports
import SubdivisionList from './Subdivision'; 
import SubstationList from './Substation';
import FeederList from './Feeder';
import DTList from './DT';
import DeviceList from './Device';
import Stock from './Stock';
import FaultyDamageMeter from './FaultyDamageMeter';
import InstalledMeterSummary from './InstalledMeterSummary';
import NewMeters from './NewMeters';
import OldMeters from './OldMeters';

const AssetsHome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        const path = location.pathname;
        if (path.endsWith('/assets') || path.endsWith('/assets/')) {
            setActiveTab('dashboard');
        } else {
            const parts = path.split('/');
            const tab = parts[parts.length - 1]; // e.g. 'subdivision' from '/portal/assets/subdivision'
            setActiveTab(tab);
        }
    }, [location]);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: MdMap },
        { id: 'subdivision', label: 'Subdivision', icon: MdBusiness },
        { id: 'substation', label: 'Substation', icon: MdSettingsInputComponent },
        { id: 'feeder', label: 'Feeder', icon: MdFlashOn },
        { id: 'dt', label: 'DT', icon: MdPower },
        { id: 'device', label: 'Device', icon: MdDevicesOther },
        { id: 'stock', label: 'Stock', icon: MdInventory },
        { id: 'faulty', label: 'Faulty/Damage', icon: MdWarning },
        { id: 'installed', label: 'Installed Meter', icon: MdFactCheck },
        { id: 'new-meters', label: 'New Meters', icon: MdNewReleases },
        { id: 'old-meters', label: 'Old Meters', icon: MdHistory },
    ];

  // Professional Cyan/Teal/Blue Theme Data
  const summaryData = [
    { title: 'SUBDIVISION', count: 62, icon: MdBusiness, gradient: 'from-cyan-400 to-cyan-600' },
    { title: 'SUBSTATION', count: 152, icon: MdSettingsInputComponent, gradient: 'from-sky-400 to-sky-600' },
    { title: 'FEEDER', count: 290, icon: MdFlashOn, gradient: 'from-teal-400 to-teal-600' },
    { title: 'DT', count: 1006, icon: MdPower, gradient: 'from-emerald-400 to-emerald-600' },
    { title: 'DEVICE', count: 121266, icon: MdDevicesOther, gradient: 'from-blue-500 to-indigo-600' }, 
  ];

  const renderContent = () => {
      switch(activeTab) {
          case 'subdivision': return <SubdivisionList />;
          case 'substation': return <SubstationList />;
          case 'feeder': return <FeederList />;
          case 'dt': return <DTList />;
          case 'device': return <DeviceList />;
          case 'stock': return <Stock />;
          case 'faulty': return <FaultyDamageMeter />;
          case 'installed': return <InstalledMeterSummary />;
          case 'new-meters': return <NewMeters />;
          case 'old-meters': return <OldMeters />;
          default:
              return (
                <div className="space-y-8 animate-slideUp pb-10">
                     {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {summaryData.map((item, index) => (
                        <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                            <SummaryCard 
                                title={item.title}
                                count={item.count}
                                icon={item.icon}
                                gradientClass={item.gradient}
                            />
                        </div>
                        ))}
                    </div>

                    {/* Main Content Grid - Lists */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Subdivision List */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                            <div className="bg-gradient-to-r from-cyan-50 to-white p-3 border-b border-cyan-100 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                    <span className="p-1 bg-cyan-100 text-cyan-600 rounded-md text-xs"><MdBusiness /></span>
                                    Subdivision
                                </h3>
                                <button onClick={() => navigate('/portal/assets/subdivision')} className="text-xs font-semibold text-cyan-600 hover:text-cyan-800 hover:underline">View All</button>
                            </div>
                            <div className="p-1.5 flex-1 max-h-64 overflow-auto">
                                <SubdivisionList minimal={true} />
                            </div>
                        </div>

                        {/* Substation List */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                             <div className="bg-gradient-to-r from-sky-50 to-white p-3 border-b border-sky-100 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                     <span className="p-1 bg-sky-100 text-sky-600 rounded-md text-xs"><MdSettingsInputComponent /></span>
                                    Substation
                                </h3>
                                <button onClick={() => navigate('/portal/assets/substation')} className="text-xs font-semibold text-sky-600 hover:text-sky-800 hover:underline">View All</button>
                            </div>
                            <div className="p-1.5 flex-1 max-h-64 overflow-auto">
                                 <SubstationList minimal={true} />
                            </div>
                        </div>
                       
                        {/* Feeder List */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                             <div className="bg-gradient-to-r from-teal-50 to-white p-3 border-b border-teal-100 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                     <span className="p-1 bg-teal-100 text-teal-600 rounded-md text-xs"><MdFlashOn /></span>
                                    Feeder
                                </h3>
                                <button onClick={() => navigate('/portal/assets/feeder')} className="text-xs font-semibold text-teal-600 hover:text-teal-800 hover:underline">View All</button>
                            </div>
                            <div className="p-1.5 flex-1 max-h-64 overflow-auto">
                                <FeederList minimal={true} />
                            </div>
                        </div>

                        {/* DT List */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                             <div className="bg-gradient-to-r from-emerald-50 to-white p-3 border-b border-emerald-100 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                    <span className="p-1 bg-emerald-100 text-emerald-600 rounded-md text-xs"><MdPower /></span>
                                    DT
                                </h3>
                                <button onClick={() => navigate('/portal/assets/dt')} className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 hover:underline">View All</button>
                            </div>
                            <div className="p-1.5 flex-1 max-h-64 overflow-auto">
                                 <DTList minimal={true} />
                            </div>
                        </div>
                    </div>
                
                    {/* Map Section */}
                    <div className="pt-4">
                        <AssetsMap />
                    </div>
                </div>
              );
      }
  }

  return (
    <div className="flex bg-gradient-to-br from-white via-cyan-50/20 to-white h-full">
        {/* Main Content Area - Sidebar is now handled by Layout/Dashboard */}
        <div className="flex-1 flex flex-col h-full relative">
            {/* Header / Top Bar - Only show if we want a secondary header, or rely on active tab being clear */}
            <div className="glass-cyan border-b border-cyan-200/50 px-6 py-4 flex justify-between items-center sticky top-0 z-30 shadow-sm">
                 <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent tracking-tight capitalize">
                        {navItems.find(i => i.id === activeTab)?.label || 'Assets Dashboard'}
                    </h1>
                 </div>
                 
                 <div className="flex items-center gap-4">
                     <span className="text-sm text-cyan-600 font-medium">{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                 </div>
            </div>

            <div className="flex-1 overflow-auto p-6 relative">
                 {/* Background decoration */}
                 <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-50/50 to-transparent pointer-events-none -z-10" />
                {renderContent()}
            </div>
        </div>
        
        <style jsx>{`
            .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; opacity: 0; }
            .animate-slideUp { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `}</style>
    </div>
  );
};

export default AssetsHome;
