import React from "react";
import { Steps } from 'antd'
import { BookOutlined, FileTextOutlined, UserOutlined, WalletOutlined } from "@ant-design/icons";


const steps = [
  {
    icon: <BookOutlined className="text-3xl text-black" />,
    number: 1,
    title: "TÌM HIỂU THÔNG TIN",
    desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
  },
  {
    icon: <FileTextOutlined className="text-3xl text-black" />,
    number: 2,
    title: "LIÊN HỆ TƯ VẤN",
    desc: "Nhân viên liên hệ trong 2 tiếng để nhận thông tin",
  },
  {
    icon: <UserOutlined className="text-3xl text-black" />,
    number: 3,
    title: "KÝ KẾT HỢP ĐỒNG",
    desc: "Khách hàng ký hợp đồng đặt tiệc",
  },
  {
    icon: <WalletOutlined className="text-3xl text-black" />,
    number: 4,
    title: "PHỤC VỤ TIỆC",
    desc: "Nhân viên phục vụ tại địa điểm yêu cầu",
  },
  {
    icon: <BookOutlined className="text-3xl text-black" />,
    number: 5,
    title: "THANH TOÁN",
    desc: "Khách hàng thanh toán sau khi kết thúc tiệc",
  },
    ];

  const DotSeparator = () => (
    <div className="flex flex-col justify-center items-center mx-2 ">
      <div className="flex space-x-1 space-y-16">
        {[...Array(5)].map((_,i)  => (
        <span key={i} className="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
      ))}
      </div>
    </div>
  );



function ServiceSection() {
    
    return (
      <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">5 BƯỚC ĐỂ ĐẶT TIỆC</h2>
      <div className="flex flex-nowrap justify-center gap-y-10 max-w-7xl px-4 gap-x-4 mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
          <div key={index} className="w-40 flex flex-col items-center space-y-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
                {step.number}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase text-gray-900">
                {step.title}
              </h3>
              <p className="text-xs text-gray-700 mt-1">{step.desc}</p>
            </div>
          </div>
          {index < steps.length -1 && (
            <DotSeparator />
          )}
          </React.Fragment>
        ))}
        
      </div>
    </div>
    );
};


export default ServiceSection;