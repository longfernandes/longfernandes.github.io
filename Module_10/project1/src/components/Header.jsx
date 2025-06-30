// src/components/Header.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import {
    DownOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons"; // import thêm ShoppingCartOutlined
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

function Header() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.user);
    const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearCart());
        navigate("/Signup");
    };

    const accountMenu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );

    return (
        <header className="sticky top-0 z-50 border flex items-center justify-between px-20 py-8 bg-white shadow-md">
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
                <NavLink to="/menu" className="hover:text-orange-600">
                    Thực Đơn
                </NavLink>
                <NavLink to="/about" className="hover:text-orange-600">
                    Về Chúng Tôi
                </NavLink>
                <NavLink to="/news" className="hover:text-orange-600">
                    Tin tức
                </NavLink>
                 <button
                    onClick={() => navigate("/login")}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-4 py-2"
                >
                    Đặt Tiệc Ngay
                </button>
            </nav>

            <div className="flex items-center gap-8">

                {user ? (
                    <Dropdown overlay={accountMenu}>
                        <div className="flex items-center gap-1 text-lg cursor-pointer hover:text-orange-600">
                            <UserOutlined /> <span>{user.username}</span>{" "}
                            <DownOutlined />
                        </div>
                    </Dropdown>
                ) : (
                    <div
                        onClick={() => navigate("/Signup")}
                        className="flex items-center gap-1 text-xl cursor-pointer hover:text-orange-600"
                    >
                        <UserOutlined /> Tài Khoản
                    </div>
                )}

                <div
                    onClick={() => navigate("/cart")}
                    className="relative text-black cursor-pointer hover:text-orange-600"
                >
                    <ShoppingCartOutlined className="text-2xl" />
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
