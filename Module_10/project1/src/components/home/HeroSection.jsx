import React from "react";
import { Carousel } from "antd";

function HeroSection() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }
    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center drop-shadow-md">
                    <h1 className="text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h1>
                    <h2 className="text-4xl font-bold mt-2">KHI ĐẶT SET MENU SUM VẦY</h2>
                    <p className="mt-3">Áp dụng cho tiệc tại Hà Nội, từ 15/5 - 20/11/2025</p>
                    <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded">
                     XEM CHI TIẾT ƯU ĐÃI
                    </button>
                </div>
                

            </div>
        <Carousel afterChange={onChange} autoplay >
          
          <div>
            <h3 className="w-full h-250 text-white leading-[300px] text-center bg-[#364d79] text-3xl font-semibold ">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
              <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" className="w-full h-250 object-cover z-0" />
            </h3>
          </div>
          <div>
            <h3 className="w-full h-250 text-white leading-[300px] text-center bg-[#364d79] text-3xl font-semibold">
              <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" className="w-full h-250" />
            </h3>
          </div>
          <div>
            <h3 className="w-full h-250 text-white leading-[300px] text-center bg-[#364d79] text-3xl font-semibold">
              <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" className="w-full h-250" />
            </h3>
          </div>
          
        </Carousel>
      </div>
    );
};

export default HeroSection;