import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItem } from "../redux/menuSlice";
import { addToCart, updateQuantity } from "../redux/cartSlice";
import { Spin, Row, Col } from "antd";

function MenuDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { item, statusItem, errorItem } = useSelector((state) => state.menu);
    const cartItem = useSelector((state) =>
        state.cart.cartItems.find((i) => i.id === Number(id))
    );

    useEffect(() => {
        dispatch(fetchMenuItem(Number(id)));
    }, [dispatch, id]);

    if (statusItem === "loading") {
        return (
            <Spin
                tip="Đang tải..."
                size="large"
                className="block mx-auto mt-20"
            />
        );
    }
    if (statusItem === "failed") {
        return <p className="text-center mt-10 text-red-600">{errorItem}</p>;
    }
    if (!item) {
        return (
            <p className="text-center mt-10 text-gray-600">
                Không tìm thấy món ăn
            </p>
        );
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
                    <h1 className="text-3xl font-bold mb-7">{item.name}</h1>

                    <div className="mb-4">
                        <h2 className="text-gray-800 text-xl font-bold">
                            Mô tả
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {item.instructions}
                        </p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-gray-800 text-xl font-bold mb-1">
                            Nguyên liệu
                        </h2>
                        <ul className="grid grid-cols-2 gap-2 text-gray-700 text-lg list-disc pl-5">
                            {item.ingredients?.map((ing, idx) => (
                                <li key={idx}>{ing}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-gray-800 text-xl font-bold">Giá</h2>
                        <p className="text-blue-500 text-xl font-bold">
                            ${item.price}
                        </p>
                    </div>

                    {!cartItem ? (
                        <button
                            onClick={() => dispatch(addToCart(item))}
                            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                        >
                            Thêm Vào Giỏ Hàng
                        </button>
                    ) : (
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={() =>
                                    dispatch(
                                        updateQuantity({
                                            id: item.id,
                                            quantity: cartItem.quantity - 1,
                                        })
                                    )
                                }
                                disabled={cartItem.quantity <= 1}
                                className="bg-red-500 text-white w-10 h-10 rounded-full text-xl hover:bg-red-600 disabled:opacity-50"
                            >
                                −
                            </button>
                            <span className="text-lg font-bold">
                                {cartItem.quantity}
                            </span>
                            <button
                                onClick={() =>
                                    dispatch(
                                        updateQuantity({
                                            id: item.id,
                                            quantity: cartItem.quantity + 1,
                                        })
                                    )
                                }
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
