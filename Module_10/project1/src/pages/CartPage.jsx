import React, { useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";

function CartPage() {
  const { cartItems, updateQuantity } = useContext(CartItemsContext);

  const total = cartItems
    .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

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
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
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
    </div>
  );
}

export default CartPage;
