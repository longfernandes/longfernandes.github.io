import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenuList } from "../redux/menuSlice";
import { addToCart } from "../redux/cartSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";

function MenuPage() {
    const dispatch = useDispatch();
    const {
        list: menuItems,
        statusList,
        errorList,
    } = useSelector((state) => state.menu);
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(fetchMenuList());
    }, [dispatch]);

    if (statusList === "loading") {
        return (
            <Spin
                tip="Đang tải..."
                size="large"
                className="block mx-auto mt-20"
            />
        );
    }
    if (statusList === "failed") {
        return <p className="text-center mt-10 text-red-600">{errorList}</p>;
    }

    return (
        <div className="max-w-8xl mx-auto px-20 py-10">
            <Link
                to="/list-menu"
                className="fixed bottom-6 right-6 z-50 font-bold bg-red-500 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                List Menu
            </Link>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Menu</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <Link to={`/menu/${item.id}`} className="w-full">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-80 object-contain mb-4 w-full"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {item.instructions?.slice(0, 80)}...
                            </p>
                        </Link>
                        <div className="w-full flex justify-between items-center mt-2">
                            <span className="text-lg font-bold text-gray-900">
                                ${item.price}
                            </span>
                            <button
                                onClick={() => dispatch(addToCart(item))}
                                className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
                            >
                                Chọn
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPage;
