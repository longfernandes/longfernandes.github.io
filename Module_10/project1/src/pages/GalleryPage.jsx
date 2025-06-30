import React, { useRef } from "react";
import { Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

function GalleryScrollFinal() {
  const scrollRef = useRef();

  const eventMedia = [
    { type: "image", src: "/images/event1.jpg", alt: "Tiệc 1" },
    { type: "video", src: "https://www.youtube.com/embed/3dcli9i_pvA", title: "Video 1" },
    { type: "image", src: "/images/event3.jpg", alt: "Tiệc 3" },
    { type: "image", src: "/images/event4.jpg", alt: "Tiệc 4" },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">
      <Title level={3} className="text-center uppercase mb-6">Tiệc sự kiện đã tổ chức</Title>


      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-orange-500 hover:text-white"
      >
        <LeftOutlined />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-orange-500 hover:text-white"
      >
        <RightOutlined />
      </button>

   
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 py-2 hide-scrollbar"
      >
        {eventMedia.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[250px] bg-white rounded shadow overflow-hidden relative flex-shrink-0"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <iframe
                  src={item.src}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                    ▶
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryScrollFinal;
