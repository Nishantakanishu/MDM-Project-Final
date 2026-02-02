import React, { useState } from 'react';
import { MdAssessment, MdAdd, MdSearch, MdAnalytics, MdCheckCircle, MdWarning, MdSchedule, MdMoreVert, MdElectricMeter, MdTrendingDown, MdTrendingUp, MdCalendarToday } from 'react-icons/md';

const EnergyAudit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('audits');

  const audits = [
    {
      id: 'EA-2024-001',
      facility: 'Main Office Building',
      type: 'Comprehensive Audit',
      status: 'In Progress',
      startDate: 'Jan 15, 2024',
      endDate: 'Jan 25, 2024',
      auditor: 'John Smith',
      energySaved: 'TBD',
      costSavings: 'TBD'
    },
    {
      id: 'EA-2024-002',
      facility: 'Manufacturing Plant A',
      type: 'Lighting Audit',
      status: 'Completed',
      startDate: 'Jan 5, 2024',
      endDate: 'Jan 12, 2024',
      auditor: 'Sarah Johnson',
      energySaved: '15,420 kWh',
      costSavings: '$3,855'
    },
    {
      id: 'EA-2024-003',
      facility: 'Warehouse Facility',
      type: 'HVAC Audit',
      status: 'Scheduled',
      startDate: 'Feb 1, 2024',
      endDate: 'Feb 10, 2024',
      auditor: 'Mike Wilson',
      energySaved: 'TBD',
      costSavings: 'TBD'
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: 'LED Lighting Upgrade',
      facility: 'Main Office Building',
      category: 'Lighting',
      priority: 'High',
      estimatedSavings: '25,000 kWh/year',
      cost: '$45,000',
      paybackPeriod: '3.2 years',
      status: 'Pending Approval'
    },
    {
      id: 2,
      title: 'HVAC System Optimization',
      facility: 'Manufacturing Plant A',
      category: 'HVAC',
      priority: 'Medium',
      estimatedSavings: '42,000 kWh/year',
      cost: '$78,000',
      paybackPeriod: '4.1 years',
      status: 'Approved'
    },
    {
      id: 3,
      title: 'Building Insulation Improvement',
      facility: 'Warehouse Facility',
      category: 'Building Envelope',
      priority: 'Low',
      estimatedSavings: '18,000 kWh/year',
      cost: '$32,000',
      paybackPeriod: '5.3 years',
      status: 'Under Review'
    }
  ];

  const filteredAudits = audits.filter(audit =>
    audit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audit.facility.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audit.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audit.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Energy Audit Management</h1>
          <p className="text-gray-600 mt-1">Conduct and track energy audits to optimize consumption</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          New Audit
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Audits</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdAssessment className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Energy Saved</p>
              <p className="text-2xl font-bold text-green-600 mt-1">2.8M kWh</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdTrendingDown className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Cost Savings</p>
              <p className="text-2xl font-bold text-green-600 mt-1">$724,500</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdTrendingUp className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Recommendations</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">47</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdAnalytics className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('audits')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'audits'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAssessment />
                Audits
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('recommendations')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'recommendations'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAnalytics />
                Recommendations
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('reports')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'reports'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdElectricMeter />
                Reports
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
                placeholder="Search audits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>Scheduled</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Types</option>
              <option>Comprehensive</option>
              <option>Lighting</option>
              <option>HVAC</option>
            </select>
          </div>

          {selectedTab === 'audits' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audit ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Saved</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAudits.map((audit) => (
                    <tr key={audit.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{audit.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{audit.facility}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
                          {audit.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          audit.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : audit.status === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {audit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {audit.startDate} - {audit.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {audit.auditor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {audit.energySaved}
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

          {selectedTab === 'recommendations' && (
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          rec.priority === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : rec.priority === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {rec.priority} Priority
                        </span>
                        <span className="text-sm text-gray-500">{rec.category}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          rec.status === 'Approved' 
                            ? 'bg-green-100 text-green-800' 
                            : rec.status === 'Pending Approval'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {rec.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{rec.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{rec.facility}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Energy Savings:</span>
                          <span className="ml-2 font-medium text-green-600">{rec.estimatedSavings}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Cost:</span>
                          <span className="ml-2 font-medium text-gray-900">{rec.cost}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Payback:</span>
                          <span className="ml-2 font-medium text-blue-600">{rec.paybackPeriod}</span>
                        </div>
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

          {selectedTab === 'reports' && (
            <div className="text-center py-12">
              <MdElectricMeter className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Energy Audit Reports</h3>
              <p className="text-gray-500 mb-6">Generate comprehensive reports for energy audits and savings analysis</p>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-auto">
                Generate Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnergyAudit;