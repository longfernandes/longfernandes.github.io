import React from "react";
function AboutSection2() {
    return (
        <div className="relative w-full h-[400px] text-white overflow-hidden mb-5">
            <img 
                src="https://intern-project-chi.vercel.app/static/media/img-party5.a964fe30a1fcc520099b.PNG" 
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 " 
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 "></div>
            
            <div className="relative z-20 flex flex-col items-start justify-center h-full lg:px-30 md:px-15">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 leading-snug text-justify">
                    TIỆC TẠI GIA<br /> CHẤT NHÀ HÀNG
                </h2>

                <div className="grid grid-cols-4 gap-4 w-full text-center max-w-9xl text-justify">
                    <div>
                        <p className="text-4xl font-bold">
                            80<span className="text-orange-400 align-top text-2xl">+</span>
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-winder">Món ăn đa dạng 1</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">
                        6<span className="text-orange-400 align-top text-2xl">+</span>
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-wider">Set menu tiêu chuẩn</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">
                        15<span className="text-orange-400 align-top text-2xl">+</span>
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-wider">Năm kinh nghiệm</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">
                        100<span className="text-orange-400 align-top text-2xl">+</span>
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-wider">Nhân viên chuyên nghiệp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection2;