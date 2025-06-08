import React from "react";
import { Card } from "antd";

function ContactSection() {
    return (
        <div className="grid grid-cols-3 grid-rows-5 gap-[30px] py-10 px-30 h-200 text-white">
        {/* div1 */}
        <div className="col-start-1 row-span-3 row-start-1">
            <div className="h-full bg-gray-800 text-white px-1 py-5 flex flex-col justify-center items-center rounded-lg ">            
                <div className="">
                    <h2 className="text-4xl text-center font-semibold mb-8">DỊCH VỤ</h2>
                    <div className="grid grid-cols-2 gap-10 font-bold text-center text-xl">
                        <span>TIỆC TẠI GIA</span>
                        <span>TIỆC CƯỚI HỎI</span>
                        <span>TIỆC BUFFET</span>
                        <span>TIỆC SỰ KIỆN</span>
                        <span className="col-span-2">TIỆC TEA BREAK</span>
                    </div>
                </div>
            </div>
        </div>
  
        {/* div3 */}
        <div className="col-start-2 row-span-5 row-start-1">
        <Card 
            className="h-full p-0 overflow-hidden relative group"
            cover={
                <img
                src="https://danangbest.com/uploads/news/nha-hang-ngon-o-hoi-an-1.webp"
                alt="Set Menu"
                className="h-200 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            }
            bordered={false}

        >  

        <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 text-white flex flex-col items-center justify-start p-4">
            <h2 className="text-4xl font-semibold mb-2">SET MENU</h2>
            <a href="#" className="underline hover:text-yellow-500">Xem chi tiết</a>
        </div>
        </Card>
        </div>
  
        {/* div4 */}
        <div className="col-start-3 row-span-5 row-start-1">
            <Card 
                className=" h-full p-0 overflow-hidden relative group"
                cover={
                   <img
                     src="https://1phutsaigon.vn/wp-content/uploads/2024/10/yen-sushi-7.jpg"
                     alt="Menu Tự Chọn"
                     className="h-200 object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                }
                bordered={false}
            >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 text-white flex flex-col items-center justify-start p-4">
            <h2 className="text-4xl text-center font-semibold mb-2">MENU TỰ CHỌN</h2>
            <a href="#" className="underline hover:text-yellow-300">Xem chi tiết</a>
        </div>
        </Card>
    </div>
  
        {/* div5 */}
        <div className="col-start-1 row-span-2 row-start-4 flex items-center justify-center">
            <div></div>
            <div className="bg-[#D1AC89] w-full flex flex-col items-center justify-center h-full text-white p-6 text-center shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">LIÊN HỆ</h2>
            <p className="text-lg mb-2"><span className="font-bold">Address:</span> longdinho709@gmail.com</p>
            <p className="text-lg"><span className="font-bold">Hotline:</span> 0919319071</p>
            </div>
            <div></div>
        </div>
        </div>
    );
};

export default ContactSection;