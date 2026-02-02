import React, { useState } from 'react';
import { MdElectricalServices, MdAdd, MdSearch, MdAccountBalanceWallet, MdCreditCard, MdWarning, MdCheckCircle, MdMoreVert, MdAccessTime, MdTrendingUp, MdPeople } from 'react-icons/md';

const PrepaidService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('customers');

  const customers = [
    {
      id: 'CUST-001',
      name: 'John Smith',
      meterNumber: 'SM-001',
      balance: 45.67,
      status: 'Active',
      lastRecharge: 'Jan 28, 2024',
      lastRechargeAmount: 100.00,
      dailyAverage: 2.34,
      estimatedDays: 19
    },
    {
      id: 'CUST-002',
      name: 'Emily Davis',
      meterNumber: 'SM-002',
      balance: 12.45,
      status: 'Low Balance',
      lastRecharge: 'Jan 25, 2024',
      lastRechargeAmount: 50.00,
      dailyAverage: 3.12,
      estimatedDays: 4
    },
    {
      id: 'CUST-003',
      name: 'Robert Brown',
      meterNumber: 'SM-003',
      balance: 0.00,
      status: 'Disconnected',
      lastRecharge: 'Jan 15, 2024',
      lastRechargeAmount: 75.00,
      dailyAverage: 4.56,
      estimatedDays: 0
    },
    {
      id: 'CUST-004',
      name: 'Lisa Anderson',
      meterNumber: 'SM-004',
      balance: 156.78,
      status: 'Active',
      lastRecharge: 'Jan 29, 2024',
      lastRechargeAmount: 200.00,
      dailyAverage: 1.89,
      estimatedDays: 83
    }
  ];

  const transactions = [
    {
      id: 'TXN-2024-001',
      customerId: 'CUST-001',
      customerName: 'John Smith',
      amount: 100.00,
      type: 'Recharge',
      method: 'Credit Card',
      status: 'Completed',
      timestamp: '2 hours ago',
      reference: 'CC-4582-1234'
    },
    {
      id: 'TXN-2024-002',
      customerId: 'CUST-002',
      customerName: 'Emily Davis',
      amount: 50.00,
      type: 'Recharge',
      method: 'Mobile Wallet',
      status: 'Completed',
      timestamp: '5 hours ago',
      reference: 'MW-7891-5678'
    },
    {
      id: 'TXN-2024-003',
      customerId: 'CUST-003',
      customerName: 'Robert Brown',
      amount: 25.00,
      type: 'Recharge',
      method: 'Bank Transfer',
      status: 'Pending',
      timestamp: '1 day ago',
      reference: 'BT-2345-9012'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.meterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Low Balance': return 'bg-yellow-100 text-yellow-800';
      case 'Disconnected': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBalanceColor = (balance, estimatedDays) => {
    if (estimatedDays === 0) return 'text-red-600';
    if (estimatedDays <= 7) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prepaid Services</h1>
          <p className="text-gray-600 mt-1">Manage prepaid electricity services and customer accounts</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          Top-up Account
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8,432</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdPeople className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Accounts</p>
              <p className="text-2xl font-bold text-green-600 mt-1">7,892</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Low Balance Alert</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">342</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdWarning className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Revenue Today</p>
              <p className="text-2xl font-bold text-green-600 mt-1">$12,847</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdTrendingUp className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('customers')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'customers'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdPeople />
                Customers
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('transactions')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdCreditCard />
                Transactions
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
                <MdAccountBalanceWallet />
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
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Low Balance</option>
              <option>Disconnected</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Balance Range</option>
              <option>$0 - $25</option>
              <option>$25 - $100</option>
              <option>$100+</option>
            </select>
          </div>

          {selectedTab === 'customers' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Number</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Average</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Days</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Recharge</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <MdPeople className="text-blue-600 text-lg" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                            <div className="text-sm text-gray-500">{customer.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.meterNumber}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-bold ${getBalanceColor(customer.balance, customer.estimatedDays)}`}>
                          ${customer.balance.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(customer.status)}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">${customer.dailyAverage}/day</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${getBalanceColor(customer.balance, customer.estimatedDays)}`}>
                          {customer.estimatedDays} days
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{customer.lastRecharge}</div>
                          <div className="text-sm text-gray-500">${customer.lastRechargeAmount.toFixed(2)}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 transition-colors mr-2">
                          <MdAccountBalanceWallet className="text-lg" />
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

          {selectedTab === 'transactions' && (
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-900">{transaction.id}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                        <span className="text-sm text-gray-500">{transaction.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {transaction.customerName} - ${transaction.amount.toFixed(2)}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <span className="text-gray-500">Method:</span>
                          <span className="ml-2 font-medium text-gray-900">{transaction.method}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Reference:</span>
                          <span className="ml-2 font-medium text-gray-900">{transaction.reference}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdAccessTime className="text-gray-400" />
                          <span className="text-gray-500">{transaction.timestamp}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Customer ID:</span>
                          <span className="ml-2 font-medium text-gray-900">{transaction.customerId}</span>
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
              <MdAccountBalanceWallet className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Prepaid Analytics Dashboard</h3>
              <p className="text-gray-500 mb-6">Comprehensive analytics for prepaid services revenue and customer behavior</p>
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

export default PrepaidService;