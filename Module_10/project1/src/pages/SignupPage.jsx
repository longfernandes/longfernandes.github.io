import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
      });
      if (!response.ok) throw new Error("Đăng nhập thất bại");
      const data = await response.json()
      const { accessToken, email, firstName, id, gender, image, refreshToken, lastName, username } = data;
      const user = {
        email: email,
        id: id,
        gender: gender,
        image: image,
        username: username,
        lastName: lastName,
        firstName: firstName
      }
      
      login(accessToken, user);

     
      navigate("/");
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại.");
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-50 py-50 rounded shadow-2xl w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Đăng Nhập</h2>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-1">Tài khoản</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xl font-bold mb-1">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl font-semibold py-2 rounded"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
