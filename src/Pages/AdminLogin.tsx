import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUser, IconLock } from '@tabler/icons-react';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true'); 
      navigate('/admin'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-mine-shaft-900 p-10 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl text-yellow-500 font-bold mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <div className="flex items-center border bg-mine-shaft-800 rounded px-3 py-2">
            <IconUser size={20} className="text-gray-400" />
            <input
              type="email"
              className="bg-transparent ml-2 w-full text-white outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Password</label>
          <div className="flex items-center border bg-mine-shaft-800 rounded px-3 py-2">
            <IconLock size={20} className="text-gray-400" />
            <input
              type="password"
              className="bg-transparent ml-2 w-full text-white outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
