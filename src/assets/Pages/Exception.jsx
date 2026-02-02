import React, { useState } from 'react';
import { MdReportProblem, MdAdd, MdSearch, MdWarning, MdError, MdInfo, MdCheckCircle, MdMoreVert, MdAccessTime, MdPriorityHigh, MdAssignment } from 'react-icons/md';

const Exception = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('active');

  const exceptions = [
    {
      id: 'EX-2024-001',
      type: 'Data Validation Error',
      severity: 'High',
      status: 'Active',
      source: 'Smart Meter SM-001',
      description: 'Invalid consumption data detected - negative values recorded',
      affectedRecords: 1247,
      detectedAt: '10 mins ago',
      assignedTo: 'John Smith',
      resolution: null
    },
    {
      id: 'EX-2024-002',
      type: 'Communication Timeout',
      severity: 'Medium',
      status: 'In Progress',
      source: 'Gateway GW-045',
      description: 'Gateway not responding to data collection requests',
      affectedRecords: 892,
      detectedAt: '45 mins ago',
      assignedTo: 'Sarah Johnson',
      resolution: 'Investigating network connectivity issues'
    },
    {
      id: 'EX-2024-003',
      type: 'System Performance Alert',
      severity: 'Low',
      status: 'Resolved',
      source: 'Database Server',
      description: 'High CPU utilization detected on primary database server',
      affectedRecords: 0,
      detectedAt: '2 hours ago',
      assignedTo: 'Mike Wilson',
      resolution: 'Optimized database queries and added indexes'
    },
    {
      id: 'EX-2024-004',
      type: 'Data Integrity Check',
      severity: 'Critical',
      status: 'Active',
      source: 'Billing System',
      description: 'Mismatch between meter readings and billing calculations detected',
      affectedRecords: 3421,
      detectedAt: '5 mins ago',
      assignedTo: 'Lisa Anderson',
      resolution: null
    }
  ];

  const filteredExceptions = exceptions.filter(exception =>
    exception.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exception.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exception.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exception.status.toLowerCase().includes(searchTerm.toLowerCase())
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
      case 'Active': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical': return <MdError className="text-red-600" />;
      case 'High': return <MdWarning className="text-orange-600" />;
      case 'Medium': return <MdWarning className="text-yellow-600" />;
      case 'Low': return <MdInfo className="text-blue-600" />;
      default: return <MdInfo className="text-gray-600" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Exception Management</h1>
          <p className="text-gray-600 mt-1">Monitor and resolve system exceptions and data anomalies</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          Report Exception
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Exceptions</p>
              <p className="text-2xl font-bold text-red-600 mt-1">23</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <MdReportProblem className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Critical Issues</p>
              <p className="text-2xl font-bold text-red-600 mt-1">3</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <MdPriorityHigh className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">12</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdAccessTime className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Resolved Today</p>
              <p className="text-2xl font-bold text-green-600 mt-1">47</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('active')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'active'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdWarning />
                Active ({exceptions.filter(e => e.status === 'Active').length})
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('inprogress')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'inprogress'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAccessTime />
                In Progress ({exceptions.filter(e => e.status === 'In Progress').length})
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('resolved')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'resolved'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdCheckCircle />
                Resolved ({exceptions.filter(e => e.status === 'Resolved').length})
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
                placeholder="Search exceptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Severity</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Types</option>
              <option>Data Validation Error</option>
              <option>Communication Timeout</option>
              <option>System Performance</option>
              <option>Data Integrity</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredExceptions
              .filter(exception => {
                if (selectedTab === 'active') return exception.status === 'Active';
                if (selectedTab === 'inprogress') return exception.status === 'In Progress';
                if (selectedTab === 'resolved') return exception.status === 'Resolved';
                return true;
              })
              .map((exception) => (
                <div key={exception.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          {getSeverityIcon(exception.severity)}
                          <span className="text-sm font-medium text-gray-900">{exception.id}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(exception.severity)}`}>
                          {exception.severity}
                        </span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(exception.status)}`}>
                          {exception.status}
                        </span>
                        <span className="text-sm text-gray-500">{exception.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{exception.description}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Source:</span>
                          <span className="font-medium text-gray-900">{exception.source}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Affected Records:</span>
                          <span className="font-medium text-gray-900">{exception.affectedRecords.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdAccessTime className="text-gray-400" />
                          <span className="text-gray-500">{exception.detectedAt}</span>
                        </div>
                      </div>
                      {exception.assignedTo && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-gray-500">Assigned to:</span>
                          <span className="font-medium text-gray-900">{exception.assignedTo}</span>
                        </div>
                      )}
                      {exception.resolution && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <MdCheckCircle className="text-green-600" />
                            <span className="text-sm font-medium text-green-800">Resolution</span>
                          </div>
                          <p className="text-sm text-green-700">{exception.resolution}</p>
                        </div>
                      )}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors ml-4">
                      <MdMoreVert className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;