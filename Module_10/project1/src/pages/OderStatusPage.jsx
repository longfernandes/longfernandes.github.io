import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import {
    ShopOutlined,
    CarOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";

const steps = [
    { label: "Cửa hàng đã nhận đơn", icon: <ShopOutlined /> },
    { label: "Shipper đang đến cửa hàng", icon: <ClockCircleOutlined /> },
    { label: "Shipper đã lấy hàng", icon: <CarOutlined /> },
    { label: "Đang giao đến bạn", icon: <EnvironmentOutlined /> },
    { label: "Đã giao hàng", icon: <CheckCircleOutlined /> },
];

function OrderStatusPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, receiverInfo } = location.state || {};

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isCancelled, setIsCancelled] = useState(false);

    useEffect(() => {
        if (!cartItems || !receiverInfo) {
            message.error("Không có thông tin đơn hàng.");
            navigate("/cart");
            return;
        }

        const timer = setInterval(() => {
            setTimeElapsed((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [cartItems, receiverInfo, navigate]);

    const handleCancelOrder = () => {
        setIsCancelled(true);
        message.warning("Đơn hàng đã được hủy.");
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const sec = (seconds % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    };

    const currentStepIndex = Math.min(
        Math.floor(timeElapsed / 60),
        steps.length - 1
    );

    const total = cartItems
        ? cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0).toFixed(2)
        : 0;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Trạng thái đơn hàng</h1>

            {isCancelled ? (
                <p className="text-red-600 text-xl font-semibold">
                    Đơn hàng đã bị hủy.
                </p>
            ) : (
                <>
                    <p className="mb-4 text-gray-700">
                        Cảm ơn bạn <strong>{receiverInfo.name}</strong> đã đặt
                        hàng. Đơn hàng sẽ được giao tới{" "}
                        <strong>{receiverInfo.address}</strong> vào lúc{" "}
                        <strong>{receiverInfo.deliveryTime}</strong>.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Thời gian chờ:{" "}
                        <span className="font-semibold text-blue-600">
                            {formatTime(timeElapsed)}
                        </span>
                    </p>

                    {/* Các bước đơn hàng */}
                    <div className="space-y-4 mb-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 p-3 border rounded-lg shadow ${
                                    index === currentStepIndex
                                        ? "bg-blue-100 border-blue-500"
                                        : index < currentStepIndex
                                        ? "bg-green-100 border-green-500"
                                        : "bg-gray-100"
                                }`}
                            >
                                <div className="text-xl">
                                    {index <= currentStepIndex ? (
                                        step.icon
                                    ) : (
                                        <ClockCircleOutlined />
                                    )}
                                </div>
                                <span
                                    className={`font-medium ${
                                        index === currentStepIndex
                                            ? "text-blue-600"
                                            : index < currentStepIndex
                                            ? "text-green-600"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Danh sách món */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border p-3 rounded shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500">
                                            SL: {item.quantity} | Giá: $
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold text-red-600">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-right text-xl font-bold mt-6">
                        Tổng cộng:{" "}
                        <span className="text-red-600">${total}</span>
                    </div>

                    {/* Nút hủy nếu chưa đến bước cuối và quá 3 phút */}
                    {timeElapsed >= 180 &&
                        currentStepIndex < steps.length - 1 && (
                            <div className="mt-8 text-right">
                                <Button
                                    danger
                                    type="primary"
                                    size="large"
                                    onClick={handleCancelOrder}
                                >
                                    Hủy đơn hàng
                                </Button>
                            </div>
                        )}
                </>
            )}
        </div>
    );
}

export default OrderStatusPage;
