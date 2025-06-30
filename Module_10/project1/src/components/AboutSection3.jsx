import React from "react";
import { Row, Col, Typography } from "antd";
import {
  HomeOutlined,
  GiftOutlined,
  CoffeeOutlined,
  HeartOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function AboutSection3() {
  const services = [
    {
      icon: <HomeOutlined className="text-orange-500 text-3xl" />,
      title: "Tiệc tại gia",
      description:
        "Tiết kiệm thời gian cho bữa tiệc ấm cúng, dành trọn khoảnh khắc sum vầy bên người thân yêu – Bạn chỉ cần lựa chọn thực đơn yêu thích, Tiệc tại gia sẽ mang trải nghiệm trọn vẹn đến với gia đình.",
    },
    {
      icon: <GiftOutlined className="text-orange-500 text-3xl" />,
      title: "Tiệc buffet",
      description:
        "Tiệc buffet với nhiều lựa chọn thực đơn đa dạng dành cho các sự kiện lớn nhỏ, từ các hoạt động mở và có nhiều thời gian như gala dinner đến liên hoan nội bộ hay tiệc gia đình.",
    },
    {
      icon: <CoffeeOutlined className="text-orange-500 text-3xl" />,
      title: "Tiệc tea break",
      description:
        "Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,... giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.",
    },
    {
      icon: <HeartOutlined className="text-orange-500 text-3xl" />,
      title: "Tiệc cưới hỏi",
      description:
        "Sự kiện đặc biệt, không thể thiếu đội ngũ tận tâm. Với thực đơn phong phú từ truyền thống tới hiện đại, cùng đội ngũ phục vụ chuyên nghiệp, Tiệc tại gia sẽ đồng hành cùng bạn và gia đình trong ngày vui một cách trọn vẹn nhất.",
    },
    {
      icon: <CalendarOutlined className="text-orange-500 text-3xl" />,
      title: "Tiệc sự kiện",
      description:
        "Tiệc tại gia sẽ giúp bạn lo chu toàn các sự kiện lớn cho công ty, hội thảo cần sự chỉn chu từ khâu chuẩn bị tới quy trình phục vụ chuyên nghiệp, đảm bảo hài lòng mọi khách hàng tham dự.",
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mb-5 py-16">
      <Title
        level={2}
        className="text-center uppercase text-3xl font-bold mb-15"
      >
        Dịch vụ cung cấp
      </Title>
      <Row gutter={[32, 32]}>
        {services.map(function (service, index) {
          return (
            <Col key={index} xs={24} md={12}>
              <div className="flex items-start mt-10 gap-4">
                <div className="text-orange-500 text-xl">{service.icon}</div>
                <div>
                  <h3 className="text-base text-xl font-semibold uppercase mb-1">
                    {service.title}
                  </h3>
                  <Paragraph className="text-gray-600 mb-0">
                    {service.description}
                  </Paragraph>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default AboutSection3;
