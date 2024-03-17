'use client'

import React, { useState } from 'react';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <main className='bg-login-hero bg-no-repeat bg-cover h-screen flex justify-center items-center'>
      <form id="loginForm" onSubmit={handleSubmit} className='bg-white/25 p-5 rounded-md w-96 max-w-md'>
        <h1 className="text-2xl text-white mb-5 font-bold">Login</h1>
        {/* Display error messages here */}
        <div className="error" id="errorDisplay"></div>
        <input
          className="input"
          type="text"
          id="email"
          value={username}
          onChange={handleUsernameChange}
          name="email"
          placeholder="Enter your email"
        />
        <div className="password-container">
          <input
          className='input'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            placeholder="Enter your password"
          />
          {/* Add password visibility toggle functionality here if needed */}
          <i className="password-toggle fas fa-eye-slash"></i>
        </div>
        <div className="form-check mb-3 flex items-center gap-3">
          <input
            className="form-check-input w-4 h-4"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label text-white">
            Remember me
          </label>
        </div>
        <button className='bg-primary-color p-2 w-full text-white font-bold rounded-sm' type="submit">LOG IN</button>
      </form>
    </main>
  );
}

export default Login;
