
import React, { useState } from 'react';
import { registerUser } from '../database/users';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { email, password };

    const success = registerUser(newUser);

    if (success) {
      onRegister(newUser);
    } else {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="card border-double border-4 border-cyan-400 shadow-2xl p-8">
        <h1 className="text-3xl mb-4 text-center font-bold">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
        <br />
        <button type="submit" className="btn btn-outline btn-info rounded-xl w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
