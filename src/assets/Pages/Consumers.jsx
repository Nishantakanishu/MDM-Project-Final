import React from "react";

/* ------------------ DUMMY DATA ------------------ */
const consumersData = [
  {
    id: 1,
    name: "Praveen Sinha",
    email: "praveen@example.com",
    phone: "+32 456 789 123",
    status: "Active",
    joined: "12 Jan 2024",
  },
  {
    id: 2,
    name: "Mukesh sharma",
    email: "sharma@gmail.com",
    phone: "+32 467 123 456",
    status: "Inactive",
    joined: "03 Feb 2024",
  },
  {
    id: 3,
    name: "Satish sinha",
    email: "satish@gmail.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  
  {
    id: 4,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 5,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 6,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 7,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 8,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 9,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
  {
    id: 10,
    name: "Liam Brown",
    email: "liam@example.com",
    phone: "+32 478 987 654",
    status: "Active",
    joined: "19 Mar 2024",
  },
];

/* ------------------ MAIN COMPONENT ------------------ */
const Consumers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Consumer Management
        </h1>
        <p className="text-sm text-gray-500">
          View and manage all registered consumers
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard title="Total Consumers" value={consumersData.length} />
        <StatCard title="Active Consumers" value="9" />
        <StatCard title="Inactive Consumers" value="1" />
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search consumer..."
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
              <th className="px-6 py-3 text-left font-medium">Phone</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Joined</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {consumersData.map((consumer) => (
              <tr key={consumer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {consumer.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {consumer.email}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {consumer.phone}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={consumer.status} />
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {consumer.joined}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View
                  </button>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consumers;

/* ------------------ REUSABLE COMPONENTS ------------------ */

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-1">
        {value}
      </h2>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const isActive = status === "Active";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );
};
