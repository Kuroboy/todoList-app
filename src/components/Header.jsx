
import React from 'react';

const Header = ({ loggedInUser, onLogout, onLoginClick, onRegisterClick }) => {
  return (
    <header>
      <div className='navbar bg-gray-800'>
        <div className='flex space-x-4 ml-auto'>
          {loggedInUser ? (
            <a
              href="#"
              onClick={onLogout}
              className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
            >
              Logout
            </a>
          ) : (
            <>
              <a
                href="#"
                onClick={onRegisterClick}
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              >
                Register
              </a>
              <a
                href="#"
                onClick={onLoginClick}
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              >
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
