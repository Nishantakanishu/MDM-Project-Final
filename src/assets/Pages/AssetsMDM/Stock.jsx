import React from 'react';
import { MdSettingsInputComponent, MdWarning, MdCheckCircle, MdSimCard, MdSearch, MdVisibility } from 'react-icons/md';
import SummaryCard from './SummaryCard';

const Stock = () => {
    // Mock Data for Stock Summary
    // Mock Data for Stock Summary
    const stockSummary = [
        { title: 'Available Meters', count: 134610, icon: MdSettingsInputComponent, gradient: 'from-cyan-400 to-cyan-600' },
        { title: 'Installed Meters', count: 96624, icon: MdCheckCircle, gradient: 'from-teal-400 to-cyan-600' },
        { title: 'JIO Meters', count: 67522, icon: MdSimCard, gradient: 'from-sky-400 to-cyan-600' },
        { title: 'Airtel Meters', count: 29100, icon: MdSimCard, gradient: 'from-cyan-500 to-teal-700' },
        { title: 'Faulty Meters', count: 0, icon: MdWarning, gradient: 'from-red-400 to-red-600' },
    ];

    // Mock Data for Table
    const stockData = [
        { type: 'Single Phase', manufacturer: 'JPM', faulty: 0, ok: 100972, total: 100972 },
        { type: 'CT Meter', manufacturer: 'INESH', faulty: 0, ok: 110, total: 110 },
        { type: 'HT Meter', manufacturer: 'HPL', faulty: 0, ok: 40, total: 141 },
        { type: 'CT Meter', manufacturer: '', faulty: 0, ok: 0, total: 7 },
        { type: 'Three Phase', manufacturer: 'JPM', faulty: 0, ok: 1052, total: 1185 },
        { type: 'CT Meter', manufacturer: 'HPL', faulty: 0, ok: 0, total: 2155 },
    ];

  return (
    <div className="p-6 bg-gradient-to-br from-white via-cyan-50/20 to-white min-h-screen space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Physical Stock</h1>
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">Back</button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stockSummary.map((item, index) => (
                <SummaryCard 
                    key={index}
                    title={item.title}
                    count={item.count}
                    icon={item.icon}
                    gradientClass={item.gradient}
                />
            ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div>
                <label className="block text-sm font-medium text-cyan-700 mb-2">Manufacturer</label>
                <select className="w-full border border-cyan-200 rounded-lg p-2.5 bg-white focus:ring-cyan-500 focus:border-cyan-500 text-gray-600">
                    <option>--Select Manufacturer--</option>
                    <option>JPM</option>
                    <option>HPL</option>
                    <option>INESH</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-cyan-700 mb-2">Sim Type</label>
                <select className="w-full border border-cyan-200 rounded-lg p-2.5 bg-white focus:ring-cyan-500 focus:border-cyan-500 text-gray-600">
                    <option>--Select Sim Type--</option>
                    <option>JIO</option>
                    <option>Airtel</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-cyan-700 mb-2">Meter Type</label>
                 <select className="w-full border border-cyan-200 rounded-lg p-2.5 bg-white focus:ring-cyan-500 focus:border-cyan-500 text-gray-600">
                    <option>--Select MeterType--</option>
                    <option>Single Phase</option>
                    <option>Three Phase</option>
                    <option>CT Meter</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-cyan-700 mb-2">Meter Status</label>
                 <select className="w-full border border-cyan-200 rounded-lg p-2.5 bg-white focus:ring-cyan-500 focus:border-cyan-500 text-gray-600">
                    <option>--Select Status--</option>
                    <option>New</option>
                    <option>Installed</option>
                    <option>Faulty</option>
                </select>
            </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
             <div className="p-6 border-b border-cyan-100 flex justify-between items-center gap-4">
                 <h2 className="text-xl font-bold text-gray-800">Physical Stock</h2>
                  <div className="flex gap-2">
                       <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">Export Data</button>
                        <div className="relative">
                            <input type="text" placeholder="Search" className="border border-cyan-200 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                             <button className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-3 py-2 rounded-r-lg absolute right-0 top-0 bottom-0 hover:from-cyan-700 hover:to-cyan-800 transition-all"><MdSearch /></button>
                        </div>
                  </div>
             </div>
             
             <div className="overflow-x-auto">
                 <table className="w-full text-left">
                     <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
                         <tr>
                             <th className="p-4">Action</th>
                             <th className="p-4">Meter Type</th>
                             <th className="p-4">Meter Manufacture</th>
                             <th className="p-4">Faulty Count</th>
                             <th className="p-4">Ok Count</th>
                             <th className="p-4">Total Count</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                         {stockData.map((row, idx) => (
                             <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                 <td className="p-4">
                                     <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-1 rounded text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">View</button>
                                 </td>
                                 <td className="p-4 text-gray-700">{row.type}</td>
                                 <td className="p-4 text-gray-700">{row.manufacturer}</td>
                                 <td className="p-4 text-gray-700">{row.faulty}</td>
                                 <td className="p-4 text-gray-700">{row.ok}</td>
                                 <td className="p-4 text-gray-700 font-medium">{row.total}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>
    </div>
  );
};

export default Stock;
