import React, { useState } from 'react';
import { MdTrendingUp, MdAdd, MdSearch, MdShowChart, MdAccessTime, MdWarning, MdCheckCircle, MdMoreVert, MdElectricBolt, MdCalendarToday } from 'react-icons/md';

const DemandService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const demandData = [
    {
      id: 1,
      region: 'North Zone',
      currentDemand: 1247.5,
      forecastedDemand: 1320.8,
      peakDemand: 1456.2,
      status: 'Normal',
      lastUpdate: '5 mins ago'
    },
    {
      id: 2,
      region: 'South Zone',
      currentDemand: 987.3,
      forecastedDemand: 1056.7,
      peakDemand: 1189.4,
      status: 'High',
      lastUpdate: '3 mins ago'
    },
    {
      id: 3,
      region: 'East Zone',
      currentDemand: 756.8,
      forecastedDemand: 823.4,
      peakDemand: 945.6,
      status: 'Normal',
      lastUpdate: '7 mins ago'
    }
  ];

  const demandEvents = [
    {
      id: 1,
      type: 'Peak Alert',
      description: 'Demand exceeded threshold in South Zone',
      severity: 'High',
      timestamp: '15 mins ago',
      status: 'Active'
    },
    {
      id: 2,
      type: 'Forecast Update',
      description: 'Demand forecast updated based on weather data',
      severity: 'Medium',
      timestamp: '1 hour ago',
      status: 'Resolved'
    },
    {
      id: 3,
      type: 'Load Shedding',
      description: 'Scheduled load shedding in Industrial Area',
      severity: 'Low',
      timestamp: '2 hours ago',
      status: 'Scheduled'
    }
  ];

  const filteredDemandData = demandData.filter(data =>
    data.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Demand Service Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage electricity demand across all zones</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          Demand Forecast
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Current Demand</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3,456 MW</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdElectricBolt className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Peak Today</p>
              <p className="text-2xl font-bold text-red-600 mt-1">4,128 MW</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <MdTrendingUp className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Forecast Accuracy</p>
              <p className="text-2xl font-bold text-green-600 mt-1">94.2%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Alerts</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">7</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdWarning className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdShowChart />
                Overview
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('regions')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'regions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdElectricBolt />
                Regions
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('events')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'events'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdWarning />
                Events
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search regions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>Normal</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Demand Chart Placeholder */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <MdShowChart className="mx-auto text-6xl text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Demand Overview Chart</h3>
                <p className="text-gray-500">Real-time demand monitoring and forecasting visualization</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Demand Trend</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">+12.5%</span>
                    <span className="text-sm text-gray-500">vs yesterday</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Peak Hours</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">6-9 PM</span>
                    <span className="text-sm text-gray-500">daily</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Load Factor</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">78.3%</span>
                    <span className="text-sm text-gray-500">efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'regions' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Demand</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Forecasted</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peak Demand</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredDemandData.map((data) => (
                    <tr key={data.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MdElectricBolt className="text-blue-600 text-lg" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{data.region}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{data.currentDemand} MW</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{data.forecastedDemand} MW</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{data.peakDemand} MW</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          data.status === 'Normal' 
                            ? 'bg-green-100 text-green-800' 
                            : data.status === 'High'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {data.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.lastUpdate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-gray-600 hover:text-gray-900 transition-colors">
                          <MdMoreVert className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab === 'events' && (
            <div className="space-y-4">
              {demandEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          event.severity === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : event.severity === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {event.severity}
                        </span>
                        <span className="text-sm text-gray-500">{event.type}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          event.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : event.status === 'Resolved'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.description}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MdAccessTime className="text-gray-400" />
                        <span>{event.timestamp}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MdMoreVert className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemandService;