import React, { useState } from 'react';
import { Title, Paper, RingProgress, Text, Avatar, Badge, ActionIcon } from '@mantine/core';
import {
  IconUsers,
  IconDashboard,
  IconBriefcase,
  IconUserSearch,
  IconMessage,
  IconClock,
  IconCirclesRelation,
  IconBellFilled,
  IconUser,
  IconCopyCheckFilled,
  IconBan,
  IconFileText,
  IconCloud,
  IconMail,
  IconBrandGoogleFilled,
  IconCheck,
  IconTrash,
  IconBrandAmazon,
  IconBrandWindowsFilled,
  IconPencil,
  IconUserPlus,
  IconHourglassHigh
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

function AdminPanel() {
  const location = useLocation();

  // Add state for users and jobs
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
    }
  ]);

  const [jobs, setJobs] = useState([
    {
      name: 'Marketing Specialist',
      department: 'Netflix',
      date: 'March 31, 2025',
      status: 'Active',
    },
    {
      name: 'Data Analyst',
      department: 'Adobe ',
      date: 'march 31, 2025',
      status: 'Active',
    },
    {
      name: 'Sales Executive',
      department: 'Amazon ',
      date: 'March 31, 2025',
      status: 'Active',
    },
    {
      name: 'Developer',
      department: 'Google ',
      date: 'April 1, 2025',
      status: 'Active',
    },
    {
      name: 'Designer ',
      department: 'Microsoft',
      date: 'April 1, 2025',
      status: 'Active',
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

  const handleDeleteJob = (index: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (confirmDelete) {
      const updatedJobs = jobs.filter((_, i) => i !== index);
      setJobs(updatedJobs);
    }
  };

  return (
    <div className="flex h-screen bg-black-100">
      <div className="w-64 text-white">
        <div className="p-4">
          <div className="flex items-center gap-2">
            <IconCirclesRelation className="text-yellow-500" size={30} />
            <h1 className="text-xl font-bold text-yellow-500">CareerLink</h1>
            <h1 className="text-xl font-bold text-white">Admin</h1>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <Link 
              to="/admin" 
              className="flex items-center gap-2 p-3 rounded-lg bg-yellow-600  hover:bg-yellow-600">
              <IconDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/admin/jobs" 
              className={`flex items-center gap-2 p-3 rounded-lg ${
                location.pathname === '/admin/jobs' ? 'bg-yellow-600' : 'hover:bg-yellow-600'
              }`}
            >
              <IconBriefcase size={20} />
              <span>Jobs</span>
            </Link>
            <Link 
              to="/admin/users" 
              className={`flex items-center gap-2 p-3 rounded-lg ${
                location.pathname === '/admin/users' ? 'bg-yellow-600' : 'hover:bg-yellow-600'
              }`}
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
            <Link 
                  to="/"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 text-sm"
                >
                  Home Page
                </Link>
              <span className="relative">
                <IconBellFilled size={24} className="text-gray-300" />
              </span>
              <div className="w-8 h-8 cursor-pointer bg-yellow-600 rounded-full text-white flex items-center justify-center">
                A
              </div>
            </div>
          </div>
        </header>
        <main className="p-8">
          <div className="flex justify-between items-center mb-8">
            <Title order={2}>User Info</Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconUser size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Total Users</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconUser size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Admins</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                <IconUser size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Employers</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                <IconUser size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Job Seekers</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8 mt-8">
            <Title order={2}>Job Info</Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconBriefcase size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Total Jobs</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconHourglassHigh size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Pending</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconCopyCheckFilled size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Interview</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-mine-shaft-800 rounded-lg">
                  <IconBan size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Declined</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-10">
            <div className="bg-black-100 border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Famous Job</h2>
              <div className="flex items-center justify-around">
                <RingProgress
                  size={180}
                  thickness={20}
                  roundCaps
                  sections={[
                    { value: 65.48, color: '#00B8D9' },
                    { value: 19.58, color: '#FF5630' },
                    { value: 15.23, color: '#6554C0' },
                    { value: 12.48, color: '#36B37E' },
                  ]}
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#36B37E]"></div>
                    <Text size="sm" className="text-gray-300">Developer</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#6554C0]"></div>
                    <Text size="sm" className="text-gray-300">Sales Executive</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5630]"></div>
                    <Text size="sm" className="text-gray-300">Designer</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00B8D9]"></div>
                    <Text size="sm" className="text-gray-300">Product Manager</Text>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-black-200 p-4 rounded-lg">
                  <Text className="text-gray-400 mb-1">Designer Categories</Text>
                  <div className="flex items-center gap-2">
                    <Text className="text-2xl font-bold text-white">14</Text>
                  </div>
                </div>
                <div className="bg-black-200 p-4 rounded-lg">
                  <Text className="text-gray-400 mb-1">Developer Categories</Text>
                  <div className="flex items-center gap-2">
                    <Text className="text-2xl font-bold text-white">19</Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Post Jobs</h2>
                <Link
                  to="/admin/jobs"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 text-sm">
                  <IconBriefcase size={18} />
                  All Jobs
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-mine-shaft-950">
                  <div className="bg-mine-shaft-800 p-3 rounded-lg">
                    <IconBrandGoogleFilled size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Developer</h3>
                    <p className="text-sm text-gray-400">Google</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">23 hour ago</p>
                    <p className="text-xs text-gray-500">2 Applicants</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-mine-shaft-950">
                  <div className="bg-mine-shaft-800 p-3 rounded-lg">
                    <IconBrandAmazon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Sales Executive</h3>
                    <p className="text-sm text-gray-400">Amazon</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">1 day ago</p>
                    <p className="text-xs text-gray-500">2 Applicants</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-mine-shaft-950">
                  <div className="bg-mine-shaft-800 p-3 rounded-lg">
                    <IconBrandWindowsFilled size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Designer</h3>
                    <p className="text-sm text-gray-400">Microsoft</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">7 hour ago</p>
                    <p className="text-xs text-gray-500">0 Applicants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10">
            <div className="bg-black-100 border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">User Info</h2>
                <Link 
                  to="/admin/users"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <IconUserPlus size={18} />
                  All Users
                </Link>
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
          <div className="mt-10 mb-10">
            <div className="bg-black-100 border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Job Info</h2>
                <Link 
                  to="/admin/jobs"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <IconBriefcase size={18} />
                  All Jobs
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-mine-shaft-800 text-gray-300">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Job Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Company</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mine-shaft-950">
                    {jobs.map((job, index) => (
                      <tr key={index} className="hover:bg-mine-shaft-950">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-white">{job.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{job.department}</td>
                        <td className="px-6 py-4 text-gray-300">{job.date}</td>
                        <td className="px-6 py-4 text-gray-300">
                          {job.status}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <ActionIcon 
                              variant="subtle" 
                              color="red"
                              className="hover:bg-red-900/20"
                              onClick={() => handleDeleteJob(index)}
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

export default AdminPanel; 