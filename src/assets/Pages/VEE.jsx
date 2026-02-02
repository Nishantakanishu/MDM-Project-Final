import React, { useState } from 'react';
import { MdAnalytics, MdAdd, MdSearch, MdCheckCircle, MdWarning, MdError, MdMoreVert, MdAccessTime, MdTrendingUp, MdAssessment, MdSpeed } from 'react-icons/md';

const VEE = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const validationRules = [
    {
      id: 'VR-001',
      name: 'Meter Reading Validation',
      type: 'Data Quality',
      status: 'Active',
      lastRun: '2 mins ago',
      successRate: 98.7,
      totalChecks: 15420,
      failedChecks: 201,
      severity: 'High'
    },
    {
      id: 'VR-002',
      name: 'Consumption Anomaly Detection',
      type: 'Anomaly Detection',
      status: 'Active',
      lastRun: '5 mins ago',
      successRate: 95.3,
      totalChecks: 8934,
      failedChecks: 418,
      severity: 'Medium'
    },
    {
      id: 'VR-003',
      name: 'Billing Data Integrity',
      type: 'Data Integrity',
      status: 'Warning',
      lastRun: '15 mins ago',
      successRate: 89.2,
      totalChecks: 5672,
      failedChecks: 612,
      severity: 'High'
    },
    {
      id: 'VR-004',
      name: 'Network Connectivity Check',
      type: 'System Health',
      status: 'Active',
      lastRun: '1 min ago',
      successRate: 99.8,
      totalChecks: 12478,
      failedChecks: 25,
      severity: 'Low'
    }
  ];

  const validationEvents = [
    {
      id: 'VE-2024-001',
      rule: 'Meter Reading Validation',
      severity: 'High',
      status: 'Open',
      description: 'Negative consumption values detected in 12 meters',
      affectedMeters: 12,
      detectedAt: '10 mins ago',
      assignedTo: 'John Smith',
      estimatedImpact: '$2,340'
    },
    {
      id: 'VE-2024-002',
      rule: 'Consumption Anomaly Detection',
      severity: 'Medium',
      status: 'In Progress',
      description: 'Unusual spike in consumption patterns detected',
      affectedMeters: 45,
      detectedAt: '45 mins ago',
      assignedTo: 'Sarah Johnson',
      estimatedImpact: '$8,920'
    },
    {
      id: 'VE-2024-003',
      rule: 'Billing Data Integrity',
      severity: 'Critical',
      status: 'Open',
      description: 'Mismatch between meter readings and billing calculations',
      affectedMeters: 234,
      detectedAt: '2 hours ago',
      assignedTo: 'Mike Wilson',
      estimatedImpact: '$45,670'
    },
    {
      id: 'VE-2024-004',
      rule: 'Network Connectivity Check',
      severity: 'Low',
      status: 'Resolved',
      description: 'Temporary connectivity issues with gateway devices',
      affectedMeters: 8,
      detectedAt: '3 hours ago',
      assignedTo: 'Lisa Anderson',
      estimatedImpact: '$450'
    }
  ];

  const filteredRules = validationRules.filter(rule =>
    rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rule.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rule.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSuccessRateColor = (rate) => {
    if (rate >= 95) return 'text-green-600';
    if (rate >= 90) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">VEE Management</h1>
          <p className="text-gray-600 mt-1">Validation, Estimation, and Editing of meter data</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          New Validation Rule
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Rules</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdAssessment className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Open Events</p>
              <p className="text-2xl font-bold text-red-600 mt-1">18</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <MdWarning className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Success Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-1">95.8%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Data Quality</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">Excellent</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdSpeed className="text-blue-600 text-xl" />
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
                <MdAnalytics />
                Overview
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('rules')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'rules'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAssessment />
                Validation Rules
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
                Validation Events
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
                placeholder="Search validation rules..."
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
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Types</option>
              <option>Data Quality</option>
              <option>Anomaly Detection</option>
              <option>Data Integrity</option>
              <option>System Health</option>
            </select>
          </div>

          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Performance Chart Placeholder */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <MdAnalytics className="mx-auto text-6xl text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">VEE Performance Dashboard</h3>
                <p className="text-gray-500">Real-time validation performance and data quality metrics</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Validations Today</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">42.8K</span>
                    <span className="text-sm text-gray-500">+12.5% vs yesterday</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Critical Events</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">3</span>
                    <span className="text-sm text-gray-500">Requires immediate action</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Avg Processing Time</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">1.2s</span>
                    <span className="text-sm text-gray-500">Per validation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'rules' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Checks</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Failed Checks</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRules.map((rule) => (
                    <tr key={rule.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{rule.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MdAssessment className="text-blue-600 text-lg" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{rule.name}</div>
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(rule.severity)}`}>
                              {rule.severity}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
                          {rule.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(rule.status)}`}>
                          {rule.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`text-sm font-bold ${getSuccessRateColor(rule.successRate)}`}>
                            {rule.successRate}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2 ml-2">
                            <div 
                              className={`h-2 rounded-full ${
                                rule.successRate >= 95 ? 'bg-green-600' : 
                                rule.successRate >= 90 ? 'bg-yellow-600' : 'bg-red-600'
                              }`}
                              style={{ width: `${rule.successRate}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{rule.totalChecks.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-bold ${rule.failedChecks > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {rule.failedChecks.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {rule.lastRun}
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
              {validationEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-900">{event.id}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                        <span className="text-sm text-gray-500">{event.rule}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.description}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <span className="text-gray-500">Affected Meters:</span>
                          <span className="ml-2 font-medium text-gray-900">{event.affectedMeters}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Estimated Impact:</span>
                          <span className="ml-2 font-medium text-red-600">{event.estimatedImpact}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Assigned to:</span>
                          <span className="ml-2 font-medium text-gray-900">{event.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdAccessTime className="text-gray-400" />
                          <span className="text-gray-500">{event.detectedAt}</span>
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
        </div>
      </div>
    </div>
  );
};

export default VEE;