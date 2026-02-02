import React, { useState } from 'react';
import { MdSupportAgent, MdAdd, MdSearch, MdPerson, MdPhone, MdEmail, MdChat, MdAssignment, MdWarning, MdCheckCircle, MdSchedule, MdMoreVert } from 'react-icons/md';

const CustomerService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('tickets');

  const tickets = [
    {
      id: 'CS-2024-001',
      customer: 'John Smith',
      subject: 'Billing Discrepancy - January 2024',
      category: 'Billing',
      priority: 'High',
      status: 'Open',
      assignedTo: 'Sarah Johnson',
      created: '2 hours ago',
      lastUpdate: '30 mins ago'
    },
    {
      id: 'CS-2024-002',
      customer: 'Emily Davis',
      subject: 'Smart Meter Not Responding',
      category: 'Technical',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: 'Mike Wilson',
      created: '5 hours ago',
      lastUpdate: '1 hour ago'
    },
    {
      id: 'CS-2024-003',
      customer: 'Robert Brown',
      subject: 'Request for Connection Transfer',
      category: 'Service',
      priority: 'Low',
      status: 'Resolved',
      assignedTo: 'Lisa Anderson',
      created: '1 day ago',
      lastUpdate: '2 hours ago'
    }
  ];

  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Support Agent',
      status: 'Available',
      activeTickets: 8,
      resolvedToday: 12,
      avgResponseTime: '2 min'
    },
    {
      id: 2,
      name: 'Mike Wilson',
      role: 'Support Agent',
      status: 'Busy',
      activeTickets: 15,
      resolvedToday: 7,
      avgResponseTime: '5 min'
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      role: 'Team Lead',
      status: 'Available',
      activeTickets: 5,
      resolvedToday: 18,
      avgResponseTime: '1 min'
    }
  ];

  const filteredTickets = tickets.filter(ticket =>
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Service</h1>
          <p className="text-gray-600 mt-1">Manage customer support tickets and service requests</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
          <MdAdd className="text-xl" />
          New Ticket
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Open Tickets</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">47</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MdAssignment className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">23</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MdSchedule className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Resolved Today</p>
              <p className="text-2xl font-bold text-green-600 mt-1">89</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3.2 min</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MdSupportAgent className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedTab('tickets')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'tickets'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdAssignment />
                Tickets
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('agents')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'agents'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <MdSupportAgent />
                Agents
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
                <MdChat />
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
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {selectedTab === 'tickets' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <MdPerson className="text-gray-600 text-sm" />
                          </div>
                          <span className="text-sm text-gray-900">{ticket.customer}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{ticket.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
                          {ticket.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          ticket.priority === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : ticket.priority === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          ticket.status === 'Open' 
                            ? 'bg-blue-100 text-blue-800' 
                            : ticket.status === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ticket.assignedTo}
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

          {selectedTab === 'agents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <div key={agent.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <MdSupportAgent className="text-green-600 text-lg" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{agent.name}</h3>
                        <p className="text-xs text-gray-500">{agent.role}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      agent.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Tickets</span>
                      <span className="font-medium text-gray-900">{agent.activeTickets}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Resolved Today</span>
                      <span className="font-medium text-green-600">{agent.resolvedToday}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Avg Response</span>
                      <span className="font-medium text-gray-900">{agent.avgResponseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="text-center py-12">
              <MdChat className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Service Analytics</h3>
              <p className="text-gray-500 mb-6">View detailed analytics and reports for customer service performance</p>
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

export default CustomerService;