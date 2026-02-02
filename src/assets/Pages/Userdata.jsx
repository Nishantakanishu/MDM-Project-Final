import React, { useState } from 'react';
import { MdLocationOn, MdEdit, MdTrendingUp, MdTrendingDown, MdCheckCircle, MdWarning, MdError, MdAccessTime, MdCalendarToday, MdBarChart, MdShowChart, MdElectricBolt, MdSpeed } from 'react-icons/md';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import NishantProfilePic from '../Nishant profile pic.jpeg';

const Userdata = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('24h');

    // Water usage data per month
    const waterUsageData = [
        { month: 'Jan', usage: 4200, target: 4000 },
        { month: 'Feb', usage: 3800, target: 4000 },
        
        { month: 'Mar', usage: 4500, target: 4000 },
        { month: 'Apr', usage: 5200, target: 4000 },
        { month: 'May', usage: 5800, target: 4000 },
        { month: 'Jun', usage: 6100, target: 4000 },
        { month: 'Jul', usage: 5900, target: 4000 },
        { month: 'Aug', usage: 5400, target: 4000 },
        { month: 'Sep', usage: 4900, target: 4000 },
        { month: 'Oct', usage: 4300, target: 4000 },
        { month: 'Nov', usage: 3900, target: 4000 },
        { month: 'Dec', usage: 4100, target: 4000 }
    ];

    // Custom Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-stone-200">
                    <p className="text-sm font-semibold text-stone-800">{payload[0].payload.month}</p>
                    <p className="text-sm text-amber-600 font-bold">{payload[0].value.toLocaleString()} L</p>
                    {payload[1] && (
                        <p className="text-xs text-stone-500">Target: {payload[1].value.toLocaleString()} L</p>
                    )}
                </div>
            );
        }
        return null;
    };

    // Hourly data for the bar chart - consistent values for better visibility
    const hourlyData = [
        { hour: 0, consumption: 25 }, { hour: 1, consumption: 22 }, { hour: 2, consumption: 20 },
        { hour: 3, consumption: 18 }, { hour: 4, consumption: 19 }, { hour: 5, consumption: 24 },
        { hour: 6, consumption: 35 }, { hour: 7, consumption: 42 }, { hour: 8, consumption: 48 },
        { hour: 9, consumption: 52 }, { hour: 10, consumption: 55 }, { hour: 11, consumption: 58 },
        { hour: 12, consumption: 62 }, { hour: 13, consumption: 60 }, { hour: 14, consumption: 57 },
        { hour: 15, consumption: 54 }, { hour: 16, consumption: 50 }, { hour: 17, consumption: 45 },
        { hour: 18, consumption: 48 }, { hour: 19, consumption: 52 }, { hour: 20, consumption: 46 },
        { hour: 21, consumption: 38 }, { hour: 22, consumption: 32 }, { hour: 23, consumption: 28 }
    ];

    // Weekly consumption data
    const weeklyData = [
        { day: 'Mon', consumption: 45 },
        { day: 'Tue', consumption: 52 },
        { day: 'Wed', consumption: 48 },
        { day: 'Thu', consumption: 58 },
        { day: 'Fri', consumption: 62 },
        { day: 'Sat', consumption: 38 },
        { day: 'Sun', consumption: 35 }
    ];

    // Generate heatmap data (7 days x 24 hours) - consistent pattern for better visibility
    const heatmapData = [
        // Monday
        [20, 18, 15, 12, 10, 15, 25, 35, 45, 55, 60, 65, 70, 68, 62, 58, 52, 48, 45, 40, 35, 30, 25, 22],
        // Tuesday
        [22, 20, 18, 15, 12, 18, 28, 38, 48, 58, 62, 68, 72, 70, 65, 60, 55, 50, 48, 42, 38, 32, 28, 25],
        // Wednesday
        [25, 22, 20, 18, 15, 20, 30, 40, 50, 60, 65, 70, 75, 72, 68, 62, 58, 52, 50, 45, 40, 35, 30, 28],
        // Thursday
        [28, 25, 22, 20, 18, 22, 32, 42, 52, 62, 68, 72, 78, 75, 70, 65, 60, 55, 52, 48, 42, 38, 32, 30],
        // Friday
        [30, 28, 25, 22, 20, 25, 35, 45, 55, 65, 70, 75, 80, 78, 72, 68, 62, 58, 55, 50, 45, 40, 35, 32],
        // Saturday
        [35, 32, 30, 28, 25, 30, 40, 50, 60, 70, 75, 80, 85, 82, 78, 72, 68, 62, 60, 55, 50, 45, 40, 35],
        // Sunday
        [32, 30, 28, 25, 22, 28, 38, 48, 58, 68, 72, 78, 82, 80, 75, 70, 65, 60, 58, 52, 48, 42, 38, 35]
    ];

    const getHeatmapColor = (value) => {
        if (value < 20) return 'bg-blue-400';
        if (value < 40) return 'bg-green-400';
        if (value < 60) return 'bg-yellow-400';
        if (value < 80) return 'bg-orange-400';
        return 'bg-red-200';
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Water Analytics Dashboard</h1>
                    <p className="text-gray-600 mt-1">Real-time consumption monitoring and analysis</p>
                </div>
                <div className="flex gap-2">
                    {['24h', '7d', '30d'].map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                selectedPeriod === period
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {period === '24h' ? '24 Hours' : period === '7d' ? '7 Days' : '30 Days'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Profile Card - Below Dashboard Title */}
            <div className="bg-gradient-to-br from-amber-200 to-orange-400 rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                    <img
                        className="w-16 h-16 rounded-full border-3 border-white/20 object-cover shadow-lg"
                        src={NishantProfilePic}
                        alt="Profile"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-bold text-white mb-1">Ramkishore S/O Patan Deen</h2>
                        <p className="text-amber-100 opacity-90 font-medium mb-3">High Consumer Category • Active</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm border border-white/10">Meter #6799416</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm border border-white/10">Smart Meter Enabled</span>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform translate-x-12"></div>
            </div>

            {/* Daily Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <MdElectricBolt className="text-blue-600 text-xl" />
                        </div>
                        <span className="text-sm text-gray-500">Today</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">Total Consumption</h3>
                    <p className="text-2xl font-bold text-gray-900">847.5 <span className="text-sm font-normal text-gray-600">L</span></p>
                    <div className="flex items-center mt-2">
                        <MdTrendingUp className="text-green-600 text-sm mr-1" />
                        <span className="text-sm text-green-600">+12.5%</span>
                        <span className="text-sm text-gray-500 ml-1">vs yesterday</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <MdTrendingUp className="text-orange-600 text-xl" />
                        </div>
                        <span className="text-sm text-gray-500">Peak</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">Peak Demand</h3>
                    <p className="text-2xl font-bold text-gray-900">62.3 <span className="text-sm font-normal text-gray-600">L/h</span></p>
                    <div className="flex items-center mt-2">
                        <MdAccessTime className="text-gray-400 text-sm mr-1" />
                        <span className="text-sm text-gray-600">at 2:30 PM</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <MdTrendingDown className="text-green-600 text-xl" />
                        </div>
                        <span className="text-sm text-gray-500">Base</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">Base Load</h3>
                    <p className="text-2xl font-bold text-gray-900">18.7 <span className="text-sm font-normal text-gray-600">L/h</span></p>
                    <div className="flex items-center mt-2">
                        <MdCheckCircle className="text-green-600 text-sm mr-1" />
                        <span className="text-sm text-green-600">Optimal</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <MdBarChart className="text-purple-600 text-xl" />
                        </div>
                        <span className="text-sm text-gray-500">Pattern</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">Pattern Type</h3>
                    <p className="text-2xl font-bold text-gray-900">Residential</p>
                    <div className="flex items-center mt-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">Consistent</span>
                    </div>
                </div>
            </div>

            {/* Hourly Consumption Chart */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Hourly Consumption (Last 24 Hours)</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Average:</span>
                        <span className="text-sm font-medium text-gray-900">35.3 L</span>
                    </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-1">
                    {hourlyData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center justify-end">
                            <div 
                                className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t hover:from-green-600 hover:to-green-500 transition-colors cursor-pointer"
                                style={{ height: `${(data.consumption / 70) * 256}px` }}
                            />
                            <span className="text-xs text-gray-500 mt-1">{index}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Usage Heatmap */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Heatmap</h2>
                    <div className="space-y-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                            <div key={day} className="flex items-center gap-2">
                                <span className="text-xs text-gray-600 w-8">{day}</span>
                                <div className="flex gap-1 flex-1">
                                    {heatmapData[dayIndex].map((value, hourIndex) => (
                                        <div
                                            key={hourIndex}
                                            className={`w-3 h-3 rounded-sm ${getHeatmapColor(value)} hover:ring-2 hover:ring-gray-400 cursor-pointer transition-all`}
                                            title={`${hourIndex}:00 - ${value} L`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">Hour of day</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">Low</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 bg-blue-400 rounded-sm" />
                                <div className="w-3 h-3 bg-green-400 rounded-sm" />
                                <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                                <div className="w-3 h-3 bg-orange-400 rounded-sm" />
                                <div className="w-3 h-3 bg-red-400 rounded-sm" />
                            </div>
                            <span className="text-xs text-gray-500">High</span>
                        </div>
                    </div>
                </div>

                {/* Weekly Consumption */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Consumption</h2>
                    <div className="h-48 flex items-end justify-between gap-2 mb-4">
                        {weeklyData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center justify-end">
                                <div 
                                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t hover:from-blue-600 hover:to-blue-500 transition-colors cursor-pointer"
                                    style={{ height: `${(data.consumption / 70) * 192}px` }}
                                />
                                <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div>
                            <p className="text-xs text-gray-500">Weekly Average</p>
                            <p className="text-sm font-semibold text-gray-900">48.4 L</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Weekend Usage</p>
                            <p className="text-sm font-semibold text-gray-900">36.5 L</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Peak Day</p>
                            <p className="text-sm font-semibold text-gray-900">Friday</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Usage Patterns & Alerts */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Patterns & Alerts</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Pattern Type</span>
                                <span className="text-sm font-medium text-gray-900">Residential</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Stability Score</span>
                                <span className="text-sm font-medium text-green-600">92%</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Anomalies Detected</span>
                                <span className="text-sm font-medium text-orange-600">3</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-600">Load Changes</span>
                                <span className="text-sm font-medium text-blue-600">12</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center gap-2 mb-3">
                                <MdWarning className="text-yellow-600" />
                                <span className="text-sm font-medium text-gray-900">Warnings</span>
                                <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">2</span>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                                    Unusual spike detected at 3:00 AM
                                </div>
                                <div className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                                    Higher than average weekend usage
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center gap-2 mb-3">
                                <MdError className="text-red-600" />
                                <span className="text-sm font-medium text-gray-900">Critical Alerts</span>
                                <span className="ml-auto bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">1</span>
                            </div>
                            <div className="text-xs text-gray-600 bg-red-50 p-2 rounded">
                                Continuous high load for 4 hours - potential equipment stress
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monthly Trends */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Monthly Trends</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                                <span className="text-sm text-gray-600">2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                <span className="text-sm text-gray-600">2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {waterUsageData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center justify-end">
                                <div className="flex gap-1">
                                    <div 
                                        className="w-2 bg-green-500 rounded-t hover:bg-green-600 transition-colors cursor-pointer"
                                        style={{ height: `${(data.usage / 8000) * 256}px` }}
                                    />
                                    <div 
                                        className="w-2 bg-gray-400 rounded-t hover:bg-gray-500 transition-colors cursor-pointer"
                                        style={{ height: `${(data.target / 8000) * 256}px` }}
                                    />
                                </div>
                                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200">
                        <div>
                            <p className="text-xs text-gray-500">YTD Consumption</p>
                            <p className="text-sm font-semibold text-gray-900">59.1 kL</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">YoY Change</p>
                            <p className="text-sm font-semibold text-green-600">+8.3%</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Projected Annual</p>
                            <p className="text-sm font-semibold text-gray-900">71.0 kL</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-stone-100 flex items-center gap-2 bg-stone-50/50">
                        <MdLocationOn className="text-red-500" />
                        <h3 className="font-bold text-stone-800">Meter Location</h3>
                    </div>
                    <div className="h-[200px] relative">
                        <iframe
                            title="Consumer Location Map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2090%2C28.6139%2C77.2190%2C28.6239&layer=mapnik"
                            className="w-full h-full border-0 absolute inset-0"
                            allowFullScreen
                        ></iframe>
                    </div>
            </div>

            {/* Water Quality Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-stone-100 bg-gradient-to-r from-stone-50 to-cyan-50/30">
                    <h3 className="font-bold text-stone-800 text-base">Water Quality</h3>
                    <p className="text-xs text-stone-500 mt-1">Current metrics</p>
                </div>
                <div className="p-6">
                    <ResponsiveContainer width="100%" height={150}>
                        <AreaChart data={[
                            { name: 'pH', value: 7.2, safe: 7.5 },
                            { name: 'TDS', value: 180, safe: 200 },
                            { name: 'Turbidity', value: 0.8, safe: 1.0 }
                        ]}>
                            <defs>
                                <linearGradient id="colorQuality" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                            <XAxis 
                                dataKey="name" 
                                tick={{ fill: '#78716c', fontSize: 11 }}
                                tickLine={{ stroke: '#d6d3d1' }}
                            />
                            <YAxis 
                                tick={{ fill: '#78716c', fontSize: 11 }}
                                tickLine={{ stroke: '#d6d3d1' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#06b6d4" 
                                strokeWidth={2}
                                fill="url(#colorQuality)"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="safe" 
                                stroke="#10b981" 
                                strokeWidth={1}
                                strokeDasharray="3 3"
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                    
                    {/* Quality Indicators */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-100">
                        <div className="text-center">
                            <p className="text-[10px] text-stone-500 mb-0.5">pH Level</p>
                            <p className="text-sm font-bold text-cyan-600">7.2</p>
                            <span className="text-[9px] text-emerald-600">● Good</span>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-stone-500 mb-0.5">TDS (ppm)</p>
                            <p className="text-sm font-bold text-cyan-600">180</p>
                            <span className="text-[9px] text-emerald-600">● Good</span>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-stone-500 mb-0.5">Turbidity</p>
                            <p className="text-sm font-bold text-cyan-600">0.8 NTU</p>
                            <span className="text-[9px] text-emerald-600">● Good</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userdata;