import React, { useState } from 'react';
import { MdRouter, MdSend, MdMessage, MdNotifications, MdSettings, MdAdd, MdSearch, MdFilterList, MdMoreVert, MdCheckCircle, MdError, MdSchedule } from 'react-icons/md';

const Communication = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('messages');

  const messages = [
    {
      id: 1,
      type: 'System Alert',
      subject: 'Scheduled Maintenance - Gateway GW-045',
      content: 'Gateway will undergo maintenance on Jan 31, 2026 from 2:00 AM to 4:00 AM EST.',
      status: 'sent',
      recipients: 1247,
      timestamp: '10 mins ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'Consumer Notification',
      subject: 'Billing Information Update',
      content: 'Your billing cycle has been updated. Please review your new billing schedule.',
      status: 'delivered',
      recipients: 5432,
      timestamp: '2 hours ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'Technical Update',
      subject: 'New Firmware Available',
      content: 'A new firmware version v2.1.3 is available for smart meters. Please update at your earliest convenience.',
      status: 'pending',
      recipients: 892,
      timestamp: '5 hours ago',
      priority: 'low'
    }
  ];

  const channels = [
    {
      id: 1,
      name: 'SMS Gateway',
      type: 'SMS',
      status: 'Active',
      throughput: '1000/min',
      successRate: 98.5,
      lastSync: '2 mins ago'
    },
    {
      id: 2,
      name: 'Email Server',
      type: 'Email',
      status: 'Active',
      throughput: '500/min',
      successRate: 99.2,
      lastSync: '1 min ago'
    },
    {
      id: 3,
      name: 'Push Notification',
      type: 'Push',
      status: 'Maintenance',
      throughput: '2000/min',
      successRate: 97.8,
      lastSync: '15 mins ago'
    }
  ];

  const filteredMessages = messages.filter(message =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communication Management</h1>
          <p className="text-gray-600 mt-1">Manage messages, notifications, and communication channels</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          New Message
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">15,847</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdMessage className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Channels</p>
              <p className="text-2xl font-bold text-green-600 mt-1">8</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdRouter className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Delivery Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-1">98.5%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Pending</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">234</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdSchedule className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('messages')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'messages'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdMessage />
                Messages
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('channels')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'channels'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdRouter />
                Channels
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('templates')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'templates'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdSettings />
                Templates
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
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <MdFilterList />
              Filter
            </button>
          </div>

          {selectedTab === 'messages' && (
            <div className="space-y-4">
              {filteredMessages.map((message) => (
                <div key={message.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          message.priority === 'high' 
                            ? 'bg-red-100 text-red-800' 
                            : message.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {message.priority.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">{message.type}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          message.status === 'sent' 
                            ? 'bg-green-100 text-green-800' 
                            : message.status === 'delivered'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {message.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{message.subject}</h3>
                      <p className="text-gray-600 text-sm mb-2">{message.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{message.recipients} recipients</span>
                        <span>•</span>
                        <span>{message.timestamp}</span>
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

          {selectedTab === 'channels' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Throughput</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {channels.map((channel) => (
                    <tr key={channel.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MdRouter className="text-blue-600 text-lg" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{channel.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {channel.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          channel.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {channel.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {channel.throughput}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">{channel.successRate}%</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${channel.successRate}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {channel.lastSync}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 transition-colors">
                          <MdSettings className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab === 'templates' && (
            <div className="text-center py-12">
              <MdMessage className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Message Templates</h3>
              <p className="text-gray-500 mb-6">Create and manage reusable message templates for quick communication</p>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-auto">
                <MdAdd />
                Create Template
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communication;