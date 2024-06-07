import React, { useState } from 'react';
import { checkUser } from '../database/users'; 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = checkUser(email, password);

    if (user) {
      onLogin(user);
      setMessage('Login Success');
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="card border-double border-4 border-cyan-400 shadow-2xl p-8">
        <h1 className="text-3xl mb-4 text-center font-bold">Login</h1>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input input-bordered input-accent border-cyan-500 rounded-xl mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input input-bordered input-accent border-cyan-500 rounded-xl mb-4"
        />
        <button type="submit" className="btn btn-outline btn-info mt-2 rounded-xl w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;