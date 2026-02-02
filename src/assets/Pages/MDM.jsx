import React, { useState } from 'react';
import { MdElectricMeter, MdAdd, MdSearch, MdDataUsage, MdSync, MdCheckCircle, MdWarning, MdMoreVert, MdAccessTime, MdCloudUpload, MdCloudDownload } from 'react-icons/md';

const MDM = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('meters');

  const meters = [
    {
      id: 'SM-001',
      type: 'Smart Electric Meter',
      status: 'Active',
      location: 'Building A - Floor 1',
      lastReading: '1,247.5 kWh',
      lastSync: '2 mins ago',
      dataQuality: 'Good',
      firmwareVersion: 'v2.1.3'
    },
    {
      id: 'SM-002',
      type: 'Smart Electric Meter',
      status: 'Active',
      location: 'Building B - Floor 2',
      lastReading: '987.3 kWh',
      lastSync: '5 mins ago',
      dataQuality: 'Good',
      firmwareVersion: 'v2.1.3'
    },
    {
      id: 'SM-003',
      type: 'Smart Electric Meter',
      status: 'Warning',
      location: 'Building C - Basement',
      lastReading: '756.8 kWh',
      lastSync: '1 hour ago',
      dataQuality: 'Poor',
      firmwareVersion: 'v2.0.1'
    },
    {
      id: 'GW-045',
      type: 'Data Concentrator',
      status: 'Active',
      location: 'Central Hub',
      lastReading: 'N/A',
      lastSync: '1 min ago',
      dataQuality: 'Good',
      firmwareVersion: 'v3.0.2'
    }
  ];

  const dataFlows = [
    {
      id: 1,
      name: 'Meter Data Collection',
      source: 'Smart Meters',
      destination: 'MDM Server',
      status: 'Active',
      throughput: '1,247 records/hour',
      lastSync: '2 mins ago',
      errors: 0
    },
    {
      id: 2,
      name: 'Billing Data Export',
      source: 'MDM Server',
      destination: 'Billing System',
      status: 'Active',
      throughput: '847 records/hour',
      lastSync: '15 mins ago',
      errors: 2
    },
    {
      id: 3,
      name: 'Analytics Data Feed',
      source: 'MDM Server',
      destination: 'Analytics Platform',
      status: 'Warning',
      throughput: '523 records/hour',
      lastSync: '1 hour ago',
      errors: 15
    }
  ];

  const filteredMeters = meters.filter(meter =>
    meter.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meter.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meter.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      case 'Offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meter Data Management</h1>
          <p className="text-gray-600 mt-1">Manage smart meter data collection and processing</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          Add Device
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Meters</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12,847</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdElectricMeter className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Devices</p>
              <p className="text-2xl font-bold text-green-600 mt-1">11,923</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Data Points Today</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">2.4M</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdDataUsage className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Sync Success Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-1">98.7%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdSync className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('meters')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'meters'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdElectricMeter />
                Meters
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('dataflows')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'dataflows'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdSync />
                Data Flows
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('analytics')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'analytics'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdDataUsage />
                Analytics
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
                placeholder="Search meters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Warning</option>
              <option>Error</option>
              <option>Offline</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Types</option>
              <option>Smart Electric Meter</option>
              <option>Data Concentrator</option>
              <option>Gateway</option>
            </select>
          </div>

          {selectedTab === 'meters' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Reading</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Quality</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMeters.map((meter) => (
                    <tr key={meter.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MdElectricMeter className="text-blue-600 text-lg" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{meter.id}</div>
                            <div className="text-sm text-gray-500">v{meter.firmwareVersion}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{meter.type}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{meter.location}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(meter.status)}`}>
                          {meter.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{meter.lastReading}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getQualityColor(meter.dataQuality)}`}>
                          {meter.dataQuality}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {meter.lastSync}
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

          {selectedTab === 'dataflows' && (
            <div className="space-y-4">
              {dataFlows.map((flow) => (
                <div key={flow.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(flow.status)}`}>
                          {flow.status}
                        </span>
                        <span className="text-sm text-gray-500">{flow.errors} errors</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{flow.name}</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <MdCloudUpload className="text-gray-400" />
                          <span className="text-sm text-gray-600">From:</span>
                          <span className="text-sm font-medium text-gray-900">{flow.source}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdCloudDownload className="text-gray-400" />
                          <span className="text-sm text-gray-600">To:</span>
                          <span className="text-sm font-medium text-gray-900">{flow.destination}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Throughput:</span>
                          <span className="ml-2 font-medium text-gray-900">{flow.throughput}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Last Sync:</span>
                          <span className="ml-2 font-medium text-gray-900">{flow.lastSync}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Errors:</span>
                          <span className={`ml-2 font-medium ${flow.errors > 0 ? 'text-red-600' : 'text-green-600'}`}>
                            {flow.errors}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors ml-4">
                      <MdMoreVert className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="text-center py-12">
              <MdDataUsage className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Data Analytics Dashboard</h3>
              <p className="text-gray-500 mb-6">Comprehensive analytics for meter data consumption patterns and quality metrics</p>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-auto">
                View Analytics
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MDM;