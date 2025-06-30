import React, { useEffect, useState, useContext } from "react";
import { Spin } from "antd";
import { CartItemsContext } from "../context/CartItemsContext";
import { Link } from "react-router-dom";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { addToCart } = useContext(CartItemsContext);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        const recipesWithPrice = data.recipes.map((item) => ({
          ...item,
          price: item.price || (Math.random() * 20 + 5).toFixed(2),
        }))
        setMenuItems(recipesWithPrice);
      } catch (error) {
        console.error("Error loading menu:", error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
        return <Spin spinning={loading} tip="Loading menu..." size="large"/>;
      }
    fetchMenu();
  }, []);

  if (loading) {
      return <Spin tip="Đang tải..." size="large" className="block mx-auto mt-20" />;
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

      
      <div className="flex gap-4 mb-8">
        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white transition">
          Burger
        </button>
        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white transition">
          Pizza
        </button>
        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white transition">
          Dessert
        </button>
      </div>

     
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <Link to={`/menu/${item.id}`} className="w-full">
                <div className="flex justify-start gap-2 w-full mb-3">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition">
                    Vegan
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition">
                    New
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-80 object-contain mb-4 w-full"
                />
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.instructions?.slice(0, 80)}...
                </p>
              </Link>

              <div className="w-full flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-900">
                  ${item.price || (Math.random() * 20 + 5).toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(item)}
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
