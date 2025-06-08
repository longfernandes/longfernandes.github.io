import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="relative bg-cover bg-center text-white text-sm " style={{ backgroundImage: "url('https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-sang-trong-15.JPG')" }}>
           <div className="absolute inset-0 bg-opacity-60 z-0"></div>
            <div className="max-w-8xl mx-auto px-4 md:px-20 py-10 z-10 relative">
                <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
                {/* Về chúng tôi */}
                <div className="flex-1 text-ms">
                    <h3 className="font-semibold text-2xl mb-3">Về chúng tôi</h3>
                    <p className="mb-3 text-lg">Số điện thoại: 095.366.4722</p>
                    <p className="mb-3 text-lg">Địa chỉ: số 33 Nhân Chính, Trung Hoà, Cầu Giấy, Hà Nội</p>
                </div>

                {/* Phương thức thanh toán */}
                <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-5">Phương thức thanh toán</h3>
                    <div className="flex gap-2 mb-4">
                        {Array(4).fill(0).map((_, idx) => (
                        <img
                        key={`top-${idx}`}
                        src="https://vudigital.co/wp-content/uploads/2022/12/logo-mastercard-da-thay-doi-nhu-the-nao-trong-hon-50-nam-2.webp"
                        alt="MasterCard"
                        className="w-12 sm:w-10 md:w-20 lg:w-10 xl:w-30 h-auto  transition-transform duration-200 hover:scale-105"
                        />
                    ))}
                    </div>
                    {/* Hàng dưới: 3 ảnh */}
                    <div className="flex gap-2">
                    {Array(3).fill(0).map((_, idx) => (
                        <img
                        key={`bottom-${idx}`}
                        src="https://vudigital.co/wp-content/uploads/2022/12/logo-mastercard-da-thay-doi-nhu-the-nao-trong-hon-50-nam-2.webp"
                        alt="MasterCard"
                        className="w-12 sm:w-10 md:w-20 lg:w-10 xl:w-30 transition-transform duration-200 hover:scale-105"
                        />
                    ))}
                    </div>
                </div>

                {/* Truyền thông xã hội */}
                <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3">Truyền thông xã hội</h3>
                    <ul className="flex flex-col items-start gap-2">
                    <li>
                    <a href="" className="flex items-center gap-2 mb-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="Facebook"
                            className="w-5 h-5 hover:scale-110 transition"
                        />
                            <span className="text-lg">Facebook</span>                        
                    </a>    
                    </li>
                    <li>
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                            alt="YouTube"
                            className="w-5 h-5 hover:scale-110 transition"
                        />
                            <span className="text-lg">Youtube</span>                        

                    </a>
                    </li>
                    </ul>
                </div>

                {/* Hỗ trợ khách hàng */}
                <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-2">Hỗ trợ khách hàng</h3>
                    <p className="text-lg mb-3"> <strong>Liên hệ:</strong> Hotline: 036.555.1123</p>
                    <p className="text-lg ml-[70px] mb-3">Email: happy.@gmail.com</p>
                    <p className="text-lg"> <strong>Địa chỉ:</strong> Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
                </div>
                </div>
            </div>

            {/* Đường kẻ kéo dài toàn trang */}
            <div className="border-t border-white/30 w-full"></div>

            {/* Bottom line */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-20 py-5 max-w-8xl mx-auto text-xs gap-4">
                <div>
                    <p className="text-white text-2xl mb-5">Công ty TNHH Minh Trí</p>
                    <p className="text-white text-xl">số CND/DN/ cấp ngày 2/1/2020</p>
                </div>

                <div className="w-1/5 text-left self-start">
                    <div className="flex flex-col items-start mb-7">
                        <img
                        src="https://zaria.vn/wp-content/uploads/2021/04/bo-cong-thuong.png"
                        alt="Bộ Công Thương"
                        className="w-[120px] md:w-[140px] lg:w-[160px] self-start h-auto"
                        />
                        <span className="text-lg md:text-base lg:text-lg ml-[15px] -mt-10">© Thông báo</span>
                    </div>
                </div>
            </div>
    </footer>
    );
};

export default Footer;