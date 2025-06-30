import React from "react";

function AboutSection4() {
    const values = [
        {
            title: "THỰC PHẨM AN TOÀN CHẤT LƯỢNG NHÀ HÀNG",
            image: "https://assets.tronhouse.vn/59185068-4c44-404a-a5b6-493d1d50d13d/origin/chup-anh-mon-an-4.jpeg",
        },
        {
            title: "DỊCH VỤ CHU ĐÁO CHĂM SÓC TẬN TÂM",
            image: "https://www.cukcuk.vn/wp-content/uploads/2022/10/Table-Service-nha-hang.jpg",
        },
        {
            title: "ĐỒNG HÀNH TRONG MỌI LỰA CHỌN ẨM THỰC",
            image: "https://dongphucphuquy.com/storage/products/dong-phuc-nha-hang/pq32/dong-phuc-nha-hang-pq32.jpg",
        },
    ];

    return (
        <div className="max-w-8xl mx-auto md:px-4 lg:px-23 md:py-16 lg:py-25">
            <h2 className="text-3xl font-bold uppercase text-center">
                Tôn chỉ phục vụ
            </h2>
            <p className="text-center text-gray-500 mt-2 mb-10 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta ante dui, nec condimentum diam auctor nec.
                Integer auctor turpis odio, eu lacinia lorem ultricies at.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map(function (item, index) {
                    return (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-sm shadow-md"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full lg:h-150 md:h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 px-4 py-3">
                                <p className="text-white text-lg font-bold text-center uppercase">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AboutSection4;
