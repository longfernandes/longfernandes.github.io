import React from "react";
import { Input, Badge } from "antd";
import {
    SearchOutlined,
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

const { Search } = Input;

function Header() {
    return (
        <div className="bg-blue-700 text-white py-3">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 px-4">
                {/* Logo */}
                <div className="text-yellow-400 text-3xl font-extrabold">
                    Paddy<span className="text-white">.vn</span>
                </div>

                {/* Search bar */}
                <div className="flex-1 max-w-xl">
                    <Search
                        placeholder="Tìm kiếm sản phẩm..."
                        enterButton={<SearchOutlined />}
                        size="large"
                    />
                </div>

                {/* Hotline */}
                <div className="text-lg leading-tight hidden md:block text-left">
                    <p className="font-bold">Hotline</p>
                    <p className="">086 767 7891</p>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6 text-lg">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                        <HeartOutlined />
                        Wishlist
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                        <UserOutlined />
                        Đăng Nhập
                    </div>
                    <div className="relative flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                        <Badge count={0} size="small" offset={[0, 6]}>
                            <ShoppingCartOutlined style={{ fontSize: 18 }} />
                        </Badge>
                        Giỏ Hàng
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="container flex justify-between  mx-auto mt-3 px-4">
                <nav className="flex flex-wrap gap-6 font-bold text-lg mt-5 ">
                    <a href="#" className="hover:text-yellow-300">
                        Chó
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Mèo
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Thiết bị thông minh
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Hàng mới về
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Thương hiệu
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Pagazine chăm Boss
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        News
                    </a>
                    <a href="#" className="hover:text-yellow-300">
                        Today's Sale
                    </a>
                    
                </nav>
                <div className="flex flex-wrap gap-6 font-bold text-lg mt-5">VI/USD</div>
            </div>
        </div>
    );
}

export default Header;
