import React, { useState } from 'react';
import { Title, ActionIcon } from '@mantine/core';
import {
  IconUsers,
  IconDashboard,
  IconBriefcase,
  IconCirclesRelation,
  IconBellFilled,
  IconUser,
  IconPencil,
  IconTrash,
  IconUserPlus,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function AdminUsers() {
  const [users, setUsers] = useState([
    {
      name: 'Radadiya Shubham',
      email: 'shubhamradadiya20@gmail.com',
      role: 'Employer'
    },
    {
      name: 'Shubham',
      email: 'shubhamradadiya21@gmail.com',
      role: 'Job Seeker'
    },
    {
      name: 'Nitin',
      email: 'nitin@gmail.com',
      role: 'Job Seeker'
    },
    {
      name: 'Meet',
      email: 'meet@gmail.com',
      role: 'Employer'
    },
    {
      name: 'Nil',
      email: 'nil@gmail.com',
      role: 'Job Seeker'
    },
    {
      name: 'Janak',
      email: 'janak@gmail.com',
      role: 'Job Seeker'
    }
  ]);

  const handleDeleteUser = (index: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  const handleEditUser = (index: number) => {
    const user = users[index];
    const newName = window.prompt('Enter new name:', user.name);
    const newEmail = window.prompt('Enter new email:', user.email);
    const newRole = window.prompt('Enter new role (Job Seeker/Employer):', user.role);

    if (newName && newEmail && newRole) {
      const updatedUsers = [...users];
      updatedUsers[index] = {
        name: newName,
        email: newEmail,
        role: newRole
      };
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="flex h-screen bg-black-100">
      <div className="w-64 text-white">
        <div className="p-4">
          <div className="flex items-center gap-2">
            <IconCirclesRelation className="text-yellow-500" size={24} />
            <h1 className="text-xl font-bold text-yellow-500">CareerLink</h1>
            <h1 className="text-xl font-bold text-white">Admin</h1>
          </div>
        </div>
        <nav className="p-4">
          <div className="space-y-2">
            <Link
              to="/admin"
              className="flex items-center gap-2 p-3 hover:bg-yellow-600 rounded-lg"
            >
              <IconDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/jobs"
              className="flex items-center gap-2 p-3 hover:bg-yellow-600 rounded-lg"
            >
              <IconBriefcase size={20} />
              <span>Jobs</span>
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center gap-2 p-3 bg-yellow-600 rounded-lg"
            >
              <IconUsers size={20} />
              <span>Users</span>
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-1 overflow-auto">
        <header className="bg-black-600 shadow-sm">
          <div className="flex justify-between items-center px-8 py-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="relative">
                <IconBellFilled size={24} className="text-gray-300" />
              </span>
              <div className="w-8 h-8 bg-yellow-500 rounded-full text-white flex items-center justify-center">
                A
              </div>
            </div>
          </div>
        </header>
        <main className="p-8">
          <div className="mt-8">
            <div className="bg-black-100 border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">User Info</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-mine-shaft-800 text-gray-300">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mine-shaft-950">
                    {users.map((applicant, index) => (
                      <tr key={index} className="hover:bg-mine-shaft-950">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-white">{applicant.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{applicant.email}</td>
                        <td className="px-6 py-4 text-gray-300">{applicant.role}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <ActionIcon
                              variant="subtle"
                              color="green"
                              className="hover:bg-green-900/20"
                              onClick={() => handleEditUser(index)}
                            >
                              <IconPencil size={18} />
                            </ActionIcon>
                            <ActionIcon
                              variant="subtle"
                              color="red"
                              className="hover:bg-red-900/20"
                              onClick={() => handleDeleteUser(index)}
                            >
                              <IconTrash size={18} />
                            </ActionIcon>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminUsers; 