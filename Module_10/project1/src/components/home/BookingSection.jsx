import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePicker, InputNumber, Button } from "antd";
import dayjs from "dayjs";

function BookingSection() {
  const formik = useFormik({
    initialValues: {
      date: null,
      tables: 1,
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Vui lòng chọn ngày đặt"),
      tables: Yup.number()
        .min(1, "Ít nhất 1 bàn")
        .max(100, "Tối đa 100 bàn")
        .required("Vui lòng nhập số bàn"),
    }),
    onSubmit: (values) => {
      console.log("Đặt tiệc với:", values);
    },
  });

  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg")',
      }}
    >
      <div className="relative py-20 px-4 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <form
          onSubmit={formik.handleSubmit}
          className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Intro */}
          <div className="md:w-1/3 text-left">
            <h2 className="text-4xl font-bold mb-2 text-white">ĐẶT TIỆC Ở ĐÂY</h2>
            <p className="text-xl leading-relaxed text-white">
              Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên đơn giản và dễ dàng hơn bao giờ hết
            </p>
          </div>

          {/* Inputs */}
          <div className="md:w-1/3 w-full flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Ngày */}
              <div className="flex flex-col items-center justify-center text-center">
                <p className="uppercase text-white font-bold text-xl mb-1">CHỌN NGÀY ĐẶT</p>
                <DatePicker
                  onChange={(date) => formik.setFieldValue("date", date ? date.toDate() : null)}
                  value={formik.values.date ? dayjs(formik.values.date) : null}
                  format="DD/MM"
                  allowClear={false}
                  bordered={false}
                  suffixIcon={<span className="text-white text-xl">▼</span>}
                  className="!bg-transparent !text-white !border-0 border-b-2 border-white !text-center !font-bold text-2xl w-[90px] px-0 h-[42px] flex items-center justify-center"
                  popupClassName="!bg-white"
                  placeholder="dd/mm"
                />
                {formik.touched.date && formik.errors.date && (
                  <div className="text-red-400 text-xl mt-1">{formik.errors.date}</div>
                )}
              </div>

              {/* Số bàn */}
              <div className="flex flex-col items-center justify-center text-center relative">
                <p className="uppercase text-white font-bold text-xl mb-1">Số bàn tiệc</p>

                <div className="relative inline-flex items-center justify-center h-[42px]">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={formik.values.tables}
                    onChange={(e) =>
                      formik.setFieldValue("tables", parseInt(e.target.value))
                    }
                    className="text-white text-2xl font-bold text-center w-[70px] pr-6 bg-transparent border-0"
                  />

                  {/* Spinner buttons */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center h-full text-white">
                    <button
                      type="button"
                      onClick={() =>
                        formik.setFieldValue(
                          "tables",
                          Math.min((formik.values.tables || 0) + 1, 100)
                        )
                      }
                      className="hover:text-gray-300 p-0 leading-none"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        formik.setFieldValue(
                          "tables",
                          Math.max((formik.values.tables || 0) - 1, 0)
                        )
                      }
                      className="hover:text-gray-300 p-0 leading-none"
                    >
                      ▼
                    </button>
                  </div>
                </div>

                {formik.touched.tables && formik.errors.tables && (
                  <div className="text-red-400 text-xs mt-1">{formik.errors.tables}</div>
                )}
              </div>
            </div>


          {/* Buttons */}
          <div className="md:w-1/3 flex flex-col items-end gap-3">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 font-semibold rounded"
            >
             <p className="text-xl font-bold"> ĐẶT TIỆC NGAY</p>
            </Button>
            <Button
              type="default"
              className="bg-white text-orange-500 border-orange-500 hover:bg-orange-600 hover:text-white"
            >
              <p className="text-xl font-bold">XEM THỰC ĐƠN</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingSection;
