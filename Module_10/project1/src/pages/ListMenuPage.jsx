import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ListMenuPage() {
    const [menus, setMenus] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("menus") || "[]");
        setMenus(saved);
        setIsLoggedIn(!!localStorage.getItem("user"));
    }, []);

    const calculateTotal = (items) =>
        items.reduce((sum, i) => sum + parseFloat(i.price), 0).toFixed(2);

    const handleSelectMenu = (menu, idx) => {
        const menuItem = {
            id: menu.id || `menu-${idx}`,
            name: menu.name,
            price: parseFloat(calculateTotal(menu.items)),
            quantity: 1,
            type: "menu",
            image: menu.items[0]?.image || "",
        };
        dispatch(addToCart(menuItem));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">List menu</h1>
            {isLoggedIn && (
                <button
                    onClick={() => {
                        /* mở modal tạo menu */
                    }}
                    className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Tạo menu cá nhân
                </button>
            )}
            {menus.length === 0 ? (
                <p>Chưa có menu nào.</p>
            ) : (
                menus.map((menu, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg mb-6 p-4 bg-white shadow"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">
                                {menu.name}
                            </h3>
                            {isLoggedIn && (
                                <button
                                    onClick={() => handleSelectMenu(menu, idx)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Chọn menu
                                </button>
                            )}
                        </div>
                        <div className="flex items-start gap-4">
                            {menu.items[0] && (
                                <img
                                    src={menu.items[0].image}
                                    alt="thumb"
                                    className="w-28 h-28 object-cover rounded"
                                />
                            )}
                            <ul className="flex-1 space-y-1 list-disc pl-5 text-gray-700">
                                {menu.items.map((i) => (
                                    <li key={i.id || i.name}>
                                        {i.name} — ${i.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ListMenuPage;
