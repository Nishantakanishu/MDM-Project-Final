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
  MdHistory,
  MdPublic
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
import Zone from './Zone';
import Circle from './Circle';
import Division from './Division';

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
        { id: 'zone', label: 'Zone', icon: MdPublic},
        { id: 'circle', label: 'Circle', icon: MdBusiness},
        { id: 'division', label: 'Division', icon: MdBusiness},
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

  // Professional Cyan/Teal/Blue Theme Data - 10 Cards for Hierarchical Grid
  const summaryData = [
    { title: 'ZONE', count: 5, icon: MdPublic, gradient: 'from-indigo-500 to-purple-600', route: '/portal/assets/zone' },
    { title: 'CIRCLE', count: 12, icon: MdBusiness, gradient: 'from-purple-500 to-pink-600', route: '/portal/assets/circle' },
    { title: 'DIVISION', count: 28, icon: MdBusiness, gradient: 'from-pink-500 to-rose-600', route: '/portal/assets/division' },
    { title: 'SUBDIVISION', count: 62, icon: MdBusiness, gradient: 'from-cyan-400 to-cyan-600', route: '/portal/assets/subdivision' },
    { title: 'SUBSTATION', count: 152, icon: MdSettingsInputComponent, gradient: 'from-sky-400 to-sky-600', route: '/portal/assets/substation' },
    { title: 'FEEDER', count: 290, icon: MdFlashOn, gradient: 'from-teal-400 to-teal-600', route: '/portal/assets/feeder' },
    { title: 'DT', count: 1006, icon: MdPower, gradient: 'from-emerald-400 to-emerald-600', route: '/portal/assets/dt' },
    { title: 'DEVICE', count: 121266, icon: MdDevicesOther, gradient: 'from-blue-500 to-indigo-600', route: '/portal/assets/device' },
    { title: 'STOCK', count: 85420, icon: MdInventory, gradient: 'from-violet-400 to-purple-600', route: '/portal/assets/stock' },
    { title: 'FAULTY/DAMAGE', count: 1847, icon: MdWarning, gradient: 'from-orange-400 to-red-500', route: '/portal/assets/faulty' },
  ];

  const renderContent = () => {
      switch(activeTab) {
          case 'zone': return <Zone />;
          case 'circle': return <Circle />;
          case 'division': return <Division />;
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
                     {/* Large Clickable Cards in 5x2 Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {summaryData.map((item, index) => (
                        <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                            <SummaryCard 
                                title={item.title}
                                count={item.count}
                                icon={item.icon}
                                gradientClass={item.gradient}
                                onClick={() => navigate(item.route)}
                            />
                        </div>
                        ))}
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
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-sans capitalize">
                        {navItems.find(i => i.id === activeTab)?.label || 'Assets Dashboard'}
                    </h1>
                 </div>
                 
                 <div className="flex items-center gap-4">
                     <span className="text-sm text-cyan-600 font-medium">{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                 </div>
            </div>

            <div className="flex-1 overflow-auto p-2 relative">
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





