import React, { useState } from "react";
import { Col, Row } from "antd";
import { PlayCircleOutlined, CloseOutlined } from "@ant-design/icons";

function MenuSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openVideo = () => setIsModalOpen(true);
    const closeVideo = () => setIsModalOpen(false);
    return (
        <div className="w-full flex justify-center items-center bg-gray-100 py-5 px-32">
            <Row 
                gutter={[50, 50]} 
                align="middle"
                justify="center"
                className="max-w-8xl mx-auto"
            >
                <Col xs={24} md={12}>
                    <div className="text-left">
                        <h2 className="text-5xl font-bold text-gray-900 mb-5">
                            Tiệc tại gia chất nhà hàng
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-2xl mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                        </p>

                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div
                        className="relative px-10 py-20 rounded-lg overflow-hidden  cursor-pointer"
                        onClick={openVideo}
                    >
                        <img
                            src="https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-sang-trong-15.JPG"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                            <PlayCircleOutlined 
                                style={{ fontSize: "64px", color: "#ef4444" }} // red-500
                                className=" drop-shadow-lg hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                </Col>
            </Row>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <div className="relative w-full max-w-4xl aspect-video pointer-events-auto">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/0JXAWxh6PoY?autoplay=1"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute -top-4 -right-4 text-white text-xl bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 transition"
                            onClick={closeVideo}
                        >
                            <CloseOutlined />
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default MenuSection;