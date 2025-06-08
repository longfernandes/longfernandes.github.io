import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react"

const SignupPage= () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || password !== confirm) {
      alert("Vui lòng điền đầy đủ thông tin.")
      return;
    }

    if (password !== confirm) {
      alert("Mật khẩu không khớp");
      return;
    }

    alert("Đăng kí thành công");
      navigate("/login");
    
  };
  

    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Đăng Ký</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input 
                type="text"
                placeholder="Tên Đăng Nhập"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
          
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
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}             
            />

            <input 
                type="password"
                placeholder="Xác nhận mật khẩu"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
            />

            <div className="text-sm flex gap-2 items-start text-gray-600 text-center">
                <input 
                    type="checkbox"
                    id="terms"
                    className="mt-1 accent-red-600 w-4 h-4" 
                    
                />

                <label htmlFor="terms" className="text-gray-700">
                  Tôi đồng ý với các thỏa thuận thành viên.

                </label>

              
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
              >
                Đăng Ký

            </button>
          </form>

          <p className="text-sm mt-4">
            <NavLink to="/login" className="text-blue-600 underline">
            Bạn đã có tài khoản chưa?

            </NavLink>

          </p>

        </div>
        
      </div>
    );
};

export default SignupPage;