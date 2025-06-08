import React, { useEffect, useState, useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";

function CreateMenuModal({ onClose, onSave }) {
  const [menuName, setMenuName] = useState("");
  const [menuType, setMenuType] = useState("cá nhân");
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [note, setNote] = useState("");


  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setAllItems(data.recipes);
    };
    fetchMenuItems();
  }, []);

  const handleSelect = (item) => {
    if (!selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
  };

  const handleSave = () => {
    const newMenu = {
      name: menuName,
      type: menuType,
       items: selectedItems.map(item => ({
      ...item,
      price: item.price || (Math.random() * 20 + 5).toFixed(2)  // nếu chưa có price
    }))
    };
    const savedMenus = JSON.parse(localStorage.getItem("menus") || "[]");
    localStorage.setItem("menus", JSON.stringify([...savedMenus, newMenu]));
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-4/5 max-w-6xl p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-5 text-xl">×</button>

        <div className="mb-4 flex gap-4 items-center">
          <input
            type="text"
            placeholder="Tên menu"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            className="border px-4 py-2 w-full rounded"
          />
          <select
            value={menuType}
            onChange={(e) => setMenuType(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="cá nhân">Cá nhân</option>
            <option value="gia đình">Gia đình</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border p-4 rounded overflow-y-auto h-96">
            <h3 className="text-lg font-semibold mb-2">Tất cả món ăn</h3>
            <div className="grid grid-cols-4 gap-2">
                {allItems.map((item) => (
                    <div
                    key={item.id}
                    className="border p-2 rounded relative group hover:bg-gray-100 cursor-pointer"
                    >
                    <button
                        onClick={() => handleSelect(item)}
                        className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center hidden group-hover:flex"
                    >
                        +
                    </button>
                    <img src={item.image} alt={item.name} className="h-16 object-cover w-full rounded" />
                    <p className="text-sm mt-1 text-center">{item.name}</p>
                    </div>
                ))}
            </div>

          </div>

          <div className="border p-4 rounded overflow-y-auto h-96">
            <h3 className="text-lg font-semibold mb-2">Món đã chọn</h3>
            <div className="grid grid-cols-4 gap-2">
                {selectedItems.map((item) => (
                    <div
                    key={item.id}
                    className="border p-2 rounded relative group"
                    >
                    <button
                        onClick={() => handleRemove(item)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center hidden group-hover:flex"
                    >
                        −
                    </button>
                    <img src={item.image} alt={item.name} className="h-16 object-cover w-full rounded" />
                    <p className="text-sm mt-1 text-center">{item.name}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
           <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">Ghi chú</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Nhập ghi chú cho menu..."
            className="w-full border px-4 py-2 rounded bg-white text-sm text-gray-700 h-24 resize-none"
          />
        </div>

        <button
          onClick={handleSave}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 float-right"
        >
          Lưu menu
        </button>
      </div>
    </div>
  );
}

export default CreateMenuModal;
