import React from "react";

/* -------------------- DUMMY USER DATA -------------------- */
const usersData = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin",
    status: "Active",
    joined: "10 Jan 2024",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
    joined: "18 Feb 2024",
  },
  {
    id: 3,
    name: "Emma Smith",
    email: "emma@example.com",
    role: "Manager",
    status: "Inactive",
    joined: "05 Mar 2024",
  },
];

/* -------------------- MAIN COMPONENT -------------------- */
const Users = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Management
        </h1>
        <p className="text-sm text-gray-500">
          Manage users, roles, and access permissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Users" value={usersData.length} />
        <StatCard title="Admins" value="1" />
        <StatCard title="Managers" value="1" />
        <StatCard title="Active Users" value="2" />
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
              <th className="px-6 py-3 text-left font-medium">Role</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Joined</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {usersData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <RoleBadge role={user.role} />
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {user.joined}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Remove
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

export default Users;

/* -------------------- REUSABLE COMPONENTS -------------------- */

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

const RoleBadge = ({ role }) => {
  const styles = {
    Admin: "bg-purple-100 text-purple-700",
    Manager: "bg-blue-100 text-blue-700",
    User: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[role] || "bg-gray-100 text-gray-700"
      }`}
    >
      {role}
    </span>
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
