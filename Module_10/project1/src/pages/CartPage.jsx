import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";
import { Button, message } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function CartPage() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [receiverInfo, setReceiverInfo] = useState({
        name: "",
        phone: "",
        address: "",
        deliveryTime: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cartItems
        .reduce((sum, i) => sum + i.quantity * parseFloat(i.price), 0)
        .toFixed(2);

    const handleSubmit = () => {
        if (
            !receiverInfo.name ||
            !receiverInfo.phone ||
            !receiverInfo.address ||
            !receiverInfo.deliveryTime
        ) {
            return message.warning("Vui lòng điền đầy đủ thông tin.");
        }
        if (cartItems.length === 0) {
            return message.warning("Giỏ hàng đang trống.");
        }
        const newOrder = {
            id: Date.now(),
            cartItems,
            receiverInfo,
            createdAt: new Date().toISOString(),
            status: "Cửa hàng đã nhận đơn",
        };
        const existing = JSON.parse(localStorage.getItem("orders") || "[]");
        localStorage.setItem("orders", JSON.stringify([...existing, newOrder]));
        navigate("/order-status", { state: { cartItems, receiverInfo } });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Giỏ Hàng</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Giỏ hàng đang trống.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border p-4 rounded-lg shadow"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity({
                                                id: item.id,
                                                quantity: item.quantity - 1,
                                            })
                                        )
                                    }
                                    className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600"
                                >
                                    −
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity({
                                                id: item.id,
                                                quantity: item.quantity + 1,
                                            })
                                        )
                                    }
                                    className="bg-green-500 text-white w-8 h-8 rounded-full hover:bg-green-600"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right mt-6 text-xl font-bold">
                        Tổng cộng:{" "}
                        <span className="text-red-600">${total}</span>
                    </div>
                </div>
            )}

            <div className="mt-10 border p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Thông tin người nhận</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["name", "phone", "address", "deliveryTime"].map(
                        (field) => (
                            <input
                                key={field}
                                type={field === "phone" ? "tel" : "text"}
                                name={field}
                                placeholder={
                                    {
                                        name: "Họ và tên",
                                        phone: "Số điện thoại",
                                        address: "Địa chỉ",
                                        deliveryTime: "Thời gian giao",
                                    }[field]
                                }
                                value={receiverInfo[field]}
                                onChange={(e) =>
                                    setReceiverInfo({
                                        ...receiverInfo,
                                        [field]: e.target.value,
                                    })
                                }
                                className="p-2 border rounded"
                            />
                        )
                    )}
                </div>
                <div className="text-right mt-4">
                    <Button
                        type="primary"
                        size="large"
                        icon={<ShoppingOutlined />}
                        onClick={handleSubmit}
                    >
                        Đặt hàng
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
