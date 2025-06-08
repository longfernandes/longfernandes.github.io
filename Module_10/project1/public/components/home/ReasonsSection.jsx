import React from "react";




function ReasonsSection() {
    return (
    <section className="w-full py-16 px-50 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">
        Vì sao lựa chọn chúng tôi?
      </h2>

      <div className="grid grid-cols-4 gap-4 px-2 max-w-9xl mx-auto">
        <div className="text-center">
          <div className="w-full h-80 overflow-hidden rounded mb-4">
            <img
              src="https://cafefcdn.com/203337114487263232/2023/10/9/photo-2-16968229913352071168613-1696834335428-16968343355281316764174.jpg"
              alt="SỰ LỰA CHỌN ẨM THỰC SỐ 1"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl uppercase mb-1">SỰ LỰA CHỌN ẨM THỰC SỐ 1</h3>
          <p className="text-lg text-gray-700">
            Thuộc Golden Gate Group – 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc
          </p>
        </div>

        <div className="text-center">
          <div className="w-full h-80 overflow-hidden rounded mb-4">
            <img
              src="https://duhoc.thanhgiang.com.vn/sites/default/files/am-thuc-han-quoc.jpg"
              alt="THỰC PHẨM AN TOÀN"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl uppercase mb-1">THỰC PHẨM AN TOÀN</h3>
          <p className="text-lg text-gray-700">
            Đảm bảo an toàn vệ sinh thực phẩm từ nguồn cung cấp đến khâu chế biến
          </p>
        </div>

        <div className="text-center">
          <div className="w-full h-80 overflow-hidden rounded mb-4">
            <img
              src="https://nhn.1cdn.vn/thumbs/720x480/2023/10/23/hh.jpg"
              alt="THỰC ĐƠN ĐA DẠNG"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl uppercase mb-1">THỰC ĐƠN ĐA DẠNG</h3>
          <p className="text-lg text-gray-700">
            Menu phong phú, kết hợp tinh hoa ẩm thực Á – Âu, đa dạng lựa chọn
          </p>
        </div>

        <div className="text-center">
          <div className="w-full h-80 overflow-hidden rounded mb-4">
            <img
              src="https://www.cet.edu.vn/wp-content/uploads/2018/09/nhan-vien-tiep-thuc.jpg"
              alt="PHỤC VỤ CHUYÊN NGHIỆP"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl uppercase mb-1">PHỤC VỤ CHUYÊN NGHIỆP</h3>
          <p className="text-lg text-gray-700">
            Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi
          </p>
        </div>
      </div>
    </section>
    );
};

export default ReasonsSection;