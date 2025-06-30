import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = ( {setUsername} ) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  

  const handleSubmit= (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setUsername(name.trim());
    alert("Đăng nhập thành công!");
    
    navigate("/")
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-6 space-y-6 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Đăng Nhập</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
              type="text"
              placeholder="Tên Đăng Nhập"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={name}
              onChange={(e) => setUserName(e.target.value)} 
          />

          <input 
              type="email"
              placeholder="Địa chỉ email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />

          <input 
              type="password"
              placeholder="Mật khẩu"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
          />

          <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded "
          >
              Đăng Nhập
          </button>
        </form>

        <p className="text-sm text-center">
          <NavLink to="/signup" className="text-blue-600 underline">
              Bạn chưa có tài khoản?
          </NavLink>

        </p>

      </div>

    </div>
  );
};

export default LoginPage;