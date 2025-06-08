import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Spin, Row, Col } from "antd";
import { CartItemsContext } from "../context/CartItemsContext";

function MenuDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { cartItems, addToCart, updateQuantity } = useContext(CartItemsContext);
  const cartItem = cartItems.find((i) => i.id === Number(id));

  const [randomPrice] = useState(() => (Math.random() * 20 + 5).toFixed(2));


  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        const finalPrice = data.price || randomPrice;
        setItem({ ...data, price: finalPrice });
      } catch (error) {
        console.error("Lỗi khi load chi tiết món ăn:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, randomPrice]);

  if (loading) {
    return <Spin tip="Đang tải..." size="large" className="block mx-auto mt-20" />;
  }

  if (!item) {
    return <p className="text-center mt-10 text-red-600">Không tìm thấy món ăn</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-40 py-20 bg-white rounded-lg shadow-md mt-10 mb-10">
    <Row gutter={[32, 32]}>
      
      <Col xs={24} md={12}>
        <img
          src={item.image}
          alt={item.name}
          className="rounded-lg object-cover w-full h-[400px]"
        />
      </Col>

      
      <Col xs={24} md={12} className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl text-3xl font-bold mb-7">{item.name}</h1>
          

          <div className="mb-4">
            <h2 className="text-gray-800 text-xl font-bold">Mô tả</h2>
            <p className="text-gray-600 text-lg">{item.instructions}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-gray-800 text-xl font-bold mb-1">Nguyên liệu</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 text-lg list-disc pl-5">
              {item.ingredients?.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-800 text-xl font-bold">Giá</h2>
            <p className="text-blue-500 text-xl font-bold"> ${item.price || (Math.random() * 20 + 5).toFixed(2)}</p>
          </div>
        </div>
      </Col>
    </Row>

    
    <Row justify="center" className="mt-10">
      <Col xs={24} md={12}>
        {!cartItem ? (
          <button
            onClick={() => addToCart({ ...item})}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Thêm Vào Giỏ Hàng
          </button>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="bg-red-500 text-white w-10 h-10 rounded-full text-xl hover:bg-red-600"
            >
              −
            </button>
            <span className="text-lg font-bold">{cartItem.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="bg-green-500 text-white w-10 h-10 rounded-full text-xl hover:bg-green-600"
            >
              +
            </button>
          </div>
        )}
      </Col>
    </Row>
  </div>
  );
}

export default MenuDetail;
