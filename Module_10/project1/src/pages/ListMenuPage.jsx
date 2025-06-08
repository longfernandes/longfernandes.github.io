import React, { useState, useEffect, useContext } from "react";
import CreateMenuModal from "../components/CreateMenuModal";
import { CartItemsContext } from "../context/CartItemsContext";

function ListMenuPage() {
  const [menus, setMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { addToCart } = useContext(CartItemsContext);

  // Load menu và trạng thái đăng nhập
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("menus") || "[]");
    setMenus(saved);

    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true nếu có user
  }, [showModal]);

  // Tính tổng tiền của 1 menu
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };

  // Xóa 1 menu
  const handleDeleteMenu = (indexToDelete) => {
    const updatedMenus = menus.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("menus", JSON.stringify(updatedMenus));
    setMenus(updatedMenus);
  };

  // Thêm 1 menu vào giỏ hàng
  const handleSelectMenu = (menu, idx) => {
    const menuItem = {
        id: menu.id || `menu-${idx}`, // Tạo id nếu chưa có
        name: menu.name,
        price: parseFloat(calculateTotal(menu.items)),
        quantity: 1,
        type: "menu", // Phân biệt với món lẻ
        image: "https://amia.vn/wp-content/uploads/2021/10/hinh-anh-cac-mon-an-ngon-nhan-lam-theo-yeu-cau-rieng.jpg", // dùng ảnh đầu tiên hoặc ảnh mặc định

    };
    addToCart(menuItem);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center w-full sm:w-auto">List menu</h1>
        {isLoggedIn && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Tạo menu cá nhân
          </button>
        )}
      </div>

      {menus.length === 0 ? (
        <p>Chưa có menu nào.</p>
      ) : (
        menus.map((menu, idx) => (
          <div key={idx} className="border rounded-lg mb-6 p-4 bg-white shadow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  {menu.name} ({menu.type})
                </h3>
                <span className="font-bold text-red-600">
                  Tổng tiền: ${calculateTotal(menu.items)}
                </span>
              </div>
              <div className="flex gap-2">
                {isLoggedIn && (
                  <button
                    onClick={() => handleDeleteMenu(idx)}
                    className="bg-gray-200 text-red-600 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    Xóa
                  </button>
                )}
                <button
                  onClick={() => handleSelectMenu(menu, idx)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Chọn menu
                </button>
              </div>
            </div>
            <div className="flex items-start gap-4">
                {menu.items.length > 0 && (
                    <img
                    src={menu.items[0].image}
                    alt="menu thumbnail"
                    className="w-28 h-28 object-cover rounded"
                    />
                )}
                <ul className="flex-1 space-y-1">
                    {menu.items.map((item) => (
                    <li key={item.id} className="text-sm text-gray-700 flex justify-between">
                    <span>• {item.name}</span>
                    <span className="text-gray-500">${item.price}</span>
                    </li>
                    ))}
                </ul>

            </div>

          </div>
        ))
      )}

      {showModal && (
        <CreateMenuModal
          onClose={() => setShowModal(false)}
          onSave={() => {
            const saved = JSON.parse(localStorage.getItem("menus") || "[]");
            setMenus(saved);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default ListMenuPage;
