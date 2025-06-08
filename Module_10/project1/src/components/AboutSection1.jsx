import React from "react";

function AboutSection1() {

    return (
       <div className="p-15 px-30">
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3 space-y-6">
                    <h2 className="text-4xl font-bold leading-snug">
                        SỰ LỰA CHỌN ẨM <br /> THỰC SỐ 1
                    </h2>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-4 rounded">
                        XEM HÌNH ẢNH TIỆC
                    </button>
                </div>

                
                <div className="w-full md:w-2/3 md:space-y-8 lg:space-y-9 h-290">
                    <div className="aspect-w-16 aspect-h-14 bg-black md:h-80 lg:h-200">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/VIDEO_ID" // Thay VIDEO_ID bằng ID thực
                            title="Ẩm thực số 1"
                            allowFullScreen
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:text-lg lg:text-lg text-justify">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit.                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. Nulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. Nulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection1;