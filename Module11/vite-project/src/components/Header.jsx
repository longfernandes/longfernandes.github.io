import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({username, onLogout}) => {
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate();

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline"
      : "text-gray-700 hover:text-blue-500";


  const handleAboutClick = (e) => {
    e.preventDefault();
    setOpen((o) => !o);
  }

  return (
    <header className="bg-white shadow-md px-4 md:px-8">
      <div className="flex items-center gap-10 px-6 h-14">
            <nav className="flex items-center gap-6">
              <NavLink to="/" className={navItemClass}>Trang chủ</NavLink>
              <div className="relative">
              <NavLink to="/about" className={navItemClass} onClick={handleAboutClick}>
                  About
              </NavLink>
              {open && (
                <ul className="absolute left-0 top-full mt-1 w-40 bg-white rounded shadow-lg z-10">
                  <li>
                    <NavLink to="/about/team" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                      Team
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/about/history" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                      History
                    </NavLink>
                  </li>
                </ul>
              )}
              </div>
              <NavLink to="/students" className={navItemClass}>Students</NavLink>
            </nav>

            <div className="flex items-center gap-8 ml-auto margin-right: auto">
              {username ? (
                <>
                  <span className="font-medium">{username}</span>
                  <button onClick={onLogout} className="text-red-600 hover:underline">
                    Đăng Xuất
                  </button>
                </>
              ) : (
                <>
                <NavLink to="/signup" className={navItemClass}>Đăng ký</NavLink>
                <NavLink to="/login" className={navItemClass}>Đăng nhập</NavLink>
                </>               
              )}    
              </div>
      </div>

      
            
          </header>
  );
};

Header.propTypes = {
  username : PropTypes.string,

  onLogout : PropTypes.func.isRequired,
};

Header.defaultProps = {
  username : "",
};

export default Header;