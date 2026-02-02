import React, { useState } from 'react';
import { MdAttachMoney, MdAdd, MdSearch, MdTrendingUp, MdAccountBalance, MdReceipt, MdCalendarToday, MdCheckCircle, MdWarning, MdMoreVert, MdAccessTime, MdDownload } from 'react-icons/md';

const Revenue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const revenueStreams = [
    {
      id: 1,
      name: 'Residential Billing',
      currentMonth: 2847500,
      lastMonth: 2654300,
      growth: 7.3,
      status: 'On Track',
      target: 3000000,
      achievement: 94.9
    },
    {
      id: 2,
      name: 'Commercial Billing',
      currentMonth: 1523400,
      lastMonth: 1489200,
      growth: 2.3,
      status: 'On Track',
      target: 1600000,
      achievement: 95.2
    },
    {
      id: 3,
      name: 'Industrial Billing',
      currentMonth: 987600,
      lastMonth: 1023400,
      growth: -3.5,
      status: 'Below Target',
      target: 1100000,
      achievement: 89.8
    },
    {
      id: 4,
      name: 'Prepaid Services',
      currentMonth: 456700,
      lastMonth: 398900,
      growth: 14.5,
      status: 'Exceeding Target',
      target: 400000,
      achievement: 114.2
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      customer: 'John Smith',
      amount: 245.67,
      dueDate: 'Feb 15, 2024',
      status: 'Paid',
      issueDate: 'Jan 15, 2024',
      type: 'Residential',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'INV-2024-002',
      customer: 'Emily Davis',
      amount: 189.23,
      dueDate: 'Feb 10, 2024',
      status: 'Pending',
      issueDate: 'Jan 10, 2024',
      type: 'Residential',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'INV-2024-003',
      customer: 'Tech Corp Industries',
      amount: 12450.00,
      dueDate: 'Feb 20, 2024',
      status: 'Overdue',
      issueDate: 'Jan 5, 2024',
      type: 'Commercial',
      paymentMethod: 'Wire Transfer'
    },
    {
      id: 'INV-2024-004',
      customer: 'Robert Brown',
      amount: 156.89,
      dueDate: 'Feb 12, 2024',
      status: 'Paid',
      issueDate: 'Jan 12, 2024',
      type: 'Residential',
      paymentMethod: 'Mobile Wallet'
    }
  ];

  const filteredRevenueStreams = revenueStreams.filter(stream =>
    stream.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stream.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'bg-green-100 text-green-800';
      case 'Exceeding Target': return 'bg-blue-100 text-blue-800';
      case 'Below Target': return 'bg-red-100 text-red-800';
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 0) return 'text-green-600';
    if (growth < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage revenue streams and billing operations</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          Generate Invoice
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(5813200)}</p>
              <p className="text-sm text-green-600 mt-1">+5.8% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdAttachMoney className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Outstanding</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">{formatCurrency(423800)}</p>
              <p className="text-sm text-gray-500 mt-1">127 invoices</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdReceipt className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Collection Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-1">92.7%</p>
              <p className="text-sm text-green-600 mt-1">+2.3% improvement</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Avg. Invoice</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{formatCurrency(2847)}</p>
              <p className="text-sm text-blue-600 mt-1">+8.2% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdAccountBalance className="text-blue-600 text-xl" />
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
                <MdTrendingUp />
                Overview
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('streams')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'streams'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAttachMoney />
                Revenue Streams
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('invoices')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'invoices'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdReceipt />
                Invoices
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
                placeholder="Search revenue streams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>On Track</option>
              <option>Exceeding Target</option>
              <option>Below Target</option>
            </select>
          </div>

          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Revenue Chart Placeholder */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <MdTrendingUp className="mx-auto text-6xl text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Revenue Overview Chart</h3>
                <p className="text-gray-500">Monthly revenue trends and forecasting visualization</p>
              </div>

              {/* Revenue Streams Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRevenueStreams.map((stream) => (
                  <div key={stream.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-gray-900">{stream.name}</h4>
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(stream.status)}`}>
                        {stream.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Current Month:</span>
                        <span className="text-sm font-bold text-gray-900">{formatCurrency(stream.currentMonth)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Growth:</span>
                        <span className={`text-sm font-bold ${getGrowthColor(stream.growth)}`}>
                          {stream.growth > 0 ? '+' : ''}{stream.growth}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Target Achievement:</span>
                        <span className="text-sm font-bold text-blue-600">{stream.achievement}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'streams' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Stream</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Month</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Month</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Achievement</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRevenueStreams.map((stream) => (
                    <tr key={stream.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <MdAttachMoney className="text-green-600 text-lg" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{stream.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{formatCurrency(stream.currentMonth)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{formatCurrency(stream.lastMonth)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-bold ${getGrowthColor(stream.growth)}`}>
                          {stream.growth > 0 ? '+' : ''}{stream.growth}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{formatCurrency(stream.target)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-blue-600 mr-2">{stream.achievement}%</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${Math.min(stream.achievement, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(stream.status)}`}>
                          {stream.status}
                        </span>
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

          {selectedTab === 'invoices' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MdReceipt className="text-blue-600 text-lg" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{invoice.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{invoice.customer}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold text-gray-900">{formatCurrency(invoice.amount)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <MdCalendarToday className="text-gray-400" />
                          <span className="text-sm text-gray-900">{invoice.dueDate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
                          {invoice.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{invoice.paymentMethod}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors mr-2">
                          <MdDownload className="text-lg" />
                        </button>
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
        </div>
      </div>
    </div>
  );
};

export default Revenue;