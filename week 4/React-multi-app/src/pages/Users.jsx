import { useState } from "react";

export default function Users() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", role: "Editor", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", role: "Viewer", email: "charlie@example.com" },
    { id: 4, name: "David Wilson", role: "User", email: "david@example.com" },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users Management</h2>

      {/* Search Bar (Day 6-7 Notes Add-On) */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
              <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Email</th>
              <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                >
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
