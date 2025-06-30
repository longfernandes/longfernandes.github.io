import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function SignupPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // 👁️

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (!response.ok) throw new Error("Đăng nhập thất bại");

            const data = await response.json();
            const {
                accessToken,
                email,
                firstName,
                id,
                gender,
                image,
                refreshToken,
                lastName,
                username,
            } = data;

            const user = {
                email,
                id,
                gender,
                image,
                username,
                lastName,
                firstName,
            };

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
                className="bg-white px-30 py-60 rounded shadow-3xl h-200  w-full max-w-5xl"
            >
                <h2 className="text-5xl font-bold mb-10 text-center">
                    Đăng Nhập
                </h2>

                <div className="mb-8">
                    <label className="block text-2xl font-bold mb-4">
                        Tài khoản
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-8 relative">
                    <label className="block text-2xl font-bold mb-4">
                        Mật khẩu
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded pr-10 "
                    />
                    <span
                        className="absolute top-13 right-3 cursor-pointer text-gray-500 text-xl"
                        onClick={() => setShowPassword(!showPassword)}
                        title={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-2xl font-bold py-3 rounded"
                >
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
}

export default SignupPage;
