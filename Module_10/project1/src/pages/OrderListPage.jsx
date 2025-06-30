import React from "react";
import { useNavigate } from "react-router-dom";

function OrderListPage() {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const handleViewStatus = (order) => {
    navigate("/order-status", {
      state: {
        cartItems: order.cartItems,
        receiverInfo: order.receiverInfo,
        createdAt: order.createdAt,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Quản lý đơn hàng</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Bạn chưa có đơn hàng nào.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const total = order.cartItems.reduce(
              (sum, item) => sum + item.quantity * parseFloat(item.price),
              0
            ).toFixed(2);

            return (
              <div
                key={order.id}
                className="border rounded-lg shadow p-5 space-y-2 cursor-pointer hover:bg-gray-50"
                onClick={() => handleViewStatus(order)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Người nhận: {order.receiverInfo.name}</p>
                    <p className="text-sm text-gray-600">Địa chỉ: {order.receiverInfo.address}</p>
                    <p className="text-sm text-gray-600">Giờ giao: {order.receiverInfo.deliveryTime}</p>
                  </div>
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {order.status || "Đang xử lý"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t">
                  {order.cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          SL: {item.quantity} | Giá: ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-right text-sm font-bold pt-2">
                  Tổng cộng: <span className="text-red-600">${total}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OrderListPage;
