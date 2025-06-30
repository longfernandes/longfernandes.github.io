import React, { useContext, useState } from "react";
import { CartItemsContext } from "../context/CartItemsContext";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

function CartPage() {
  const { cartItems, updateQuantity } = useContext(CartItemsContext);
  const [receiverInfo, setReceiverInfo] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryTime: "",
  });

  const navigate = useNavigate();

  const total = cartItems
    .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

  const handleInputChange = (e) => {
    setReceiverInfo({ ...receiverInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (cartItems.length === 0) {
      message.warning("Giỏ hàng đang trống.");
      return;
    }

    const { name, phone, address, deliveryTime } = receiverInfo;
    if (!name || !phone || !address || !deliveryTime) {
      message.warning("Vui lòng điền đầy đủ thông tin người nhận.");
      return;
    }

    // 🔸 Tạo đơn hàng
    const newOrder = {
      id: Date.now(),
      cartItems,
      receiverInfo,
      createdAt: new Date().toISOString(),
      status: "Cửa hàng đã nhận đơn",
    };

    // 🔸 Lưu vào localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // 🔸 Điều hướng sang trang trạng thái đơn
    navigate("/order-status", {
      state: { cartItems, receiverInfo },
    });
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
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    {item.type === "menu" && (
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                        Menu
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-green-500 text-white w-8 h-8 rounded-full hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Tổng cộng: <span className="text-red-600">${total}</span>
          </div>
        </div>
      )}

      <div className="mt-10 border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Thông tin người nhận</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={receiverInfo.name}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={receiverInfo.phone}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ giao hàng"
            value={receiverInfo.address}
            onChange={handleInputChange}
            className="p-2 border rounded col-span-2"
          />
          <input
            type="time"
            name="deliveryTime"
            value={receiverInfo.deliveryTime}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
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
