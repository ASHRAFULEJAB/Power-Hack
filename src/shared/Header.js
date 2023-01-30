import React from 'react';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-gray-900 text-white">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              Power Hack
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <h1>Paid Total:</h1>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/08/16/14/click-978023__340.png"
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-900 text-white rounded-box w-52"
              >
                <li>
                  <a href="/" className="justify-between">
                    Login
                    
                  </a>
                </li>
                <li>
                  <a href="/">Register</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;