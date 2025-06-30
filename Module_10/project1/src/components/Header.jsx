import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";
import useAuth from "../hook/useAuth";

function Header() {
    const { cartItems } = useContext(CartItemsContext);
    const { user, logout } = useAuth();
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/Signup");
    };

    const accountMenu = (
        <Menu className="w-52">
            <Menu.Item key="profile" onClick={() => navigate("/profile")}>
                Thông tin cá nhân
            </Menu.Item>
            <Menu.Item key="address" onClick={() => navigate("/address")}>
                Cài đặt địa chỉ
            </Menu.Item>
            <Menu.Item key="order-list" onClick={() => navigate("/order-list")}>
                Quản lý đơn hàng
            </Menu.Item>
            <Menu.Item key="saved" onClick={() => navigate("/saved")}>
                Mã đã lưu
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key="logout"
                onClick={handleLogout}
                className="text-red-600"
            >
                Đăng xuất
            </Menu.Item>
        </Menu>
    );

    return (
        <header className="sticky top-0 z-50 border flex items-center justify-between px-20 py-8 bg-white shadow-md">
            <div className="flex items-center gap-8">
                <nav className="flex gap-6 text-lg font-semibold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                                : "hover:text-orange-600"
                        }
                    >
                        Trang Chủ
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive
                                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                                : "hover:text-orange-600"
                        }
                    >
                        Thực Đơn
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                                : "hover:text-orange-600"
                        }
                    >
                        Về Chúng Tôi
                    </NavLink>
                    <NavLink
                        to="/news"
                        className={({ isActive }) =>
                            isActive
                                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                                : "hover:text-orange-600"
                        }
                    >
                        Tin tức
                    </NavLink>
                </nav>

                <button
                    onClick={() => navigate("/login")}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-4 py-2"
                >
                    Đặt Tiệc Ngay
                </button>
            </div>

            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative border-b border-black text-sm">
                    <input
                        type="text"
                        placeholder="Tìm kiếm món ăn"
                        className="outline-none pr-6 py-1 placeholder:text-gray-600"
                    />
                    <svg
                        className="w-4 h-4 absolute right-0 top-1.5 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                </div>

                {/* User */}
                {user ? (
                    <Dropdown overlay={accountMenu}>
                        <div className="flex items-center gap-1 text-lg text-black cursor-pointer hover:text-orange-600">
                            <UserOutlined />
                            <span>{user.username}</span>
                            <DownOutlined />
                        </div>
                    </Dropdown>
                ) : (
                    <div
                        onClick={() => navigate("/Signup")}
                        className="flex items-center gap-1 text-xl text-black cursor-pointer hover:text-orange-600"
                    >
                        <UserOutlined />
                        Tài Khoản
                    </div>
                )}

                {/* Cart */}
                <div
                    onClick={() => navigate("/cart")}
                    className="relative text-black cursor-pointer hover:text-orange-600"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386a1.5 1.5 0 011.415 1.013L5.91 6.75m0 0H19.5a1.5 1.5 0 011.428 1.993l-1.285 3.428a3 3 0 01-2.821 1.954H8.181a3 3 0 01-2.821-1.954L3.75 4.5M5.91 6.75L8.18 13.5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                        />
                    </svg>
                    {cartCount > 0 && (
                        <span className="absolute -top-1.5 -right-2 bg-orange-600 text-white text-xs px-1.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
