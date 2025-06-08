import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'


function LoginPage() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            guests: '',
            date: '',
            eventType: '',
            fullService: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Họ tên không hợp lệ'),
            phone: Yup.string().matches(/^\d{10,11}$/, 'Số điện thoại không hợp lệ').required('Số điện thoại không hợp lệ'),
            address: Yup.string().required('Địa chỉ không hợp lệ'),
            guests: Yup.number().positive('Số lượng không hợp lệ').required('Số lượng không hợp lệ'),
            date: Yup.date().required('Vui lòng chọn ngày'),
            eventType: Yup.string().required('Loại sự kiện không hợp lệ')
        }),
        onSubmit: (values) => {
            console.log('Booking Info: ', values);
            alert('Thông tin đã được gửi thành công')
            navigate("/");
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
            <form onSubmit={formik.handleSubmit} className="bg-white p-10 shadow-lg w-full max-w-4xl grid grid-cols-1 ms:grid-cols-2 gap-6">
                <h2 className="text-2xl col-span-2 text-center font-bold">Liên Hệ Đặt Tiệc</h2>
                <p className="col-span-2 text-center text-sm text-gray-600">
                    fdfdbfkdsjbksjdvbjfrufnjkdfnvfdskjvn
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                    <label className="block font-semibold">Họ và tên</label>
                    <input 
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="w-full border-b focus:outline-none"
                        placeholder="Nhập họ và tên" 
                    />
                    {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
                </div>

                <div className="md:col-span-1">
                    <label className="block font-semibold">Số lượng khách</label>
                    <input
                        type="number"
                        name="guests"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.guests}
                        className="w-full border-b focus:outline-none"
                        placeholder="0"
                    />
                    {formik.touched.guests && formik.errors.guests && <p className="text-red-600 text-sm">{formik.errors.guests}</p>}
                </div>

                <div className="md:col-span-1">
                    <label className="block font-semibold">Số điện thoại</label>
                    <input
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="w-full border-b focus:outline-none"
                        placeholder="Số điện thoại"
                    />
                    {formik.touched.phone && formik.errors.phone && <p className="text-red-600 text-sm">{formik.errors.phone}</p>}
                </div>

                <div className="md:col-span-1">
                    <label className="block font-semibold">Ngày tổ chức sự kiện</label>
                    <input
                        type="date"
                        name="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        className="w-full border-b focus:outline-none"
                    />
                </div>

                <div className="md:col-span-1">
                    <label className="block font-semibold">Địa chỉ</label>
                    <input
                        type="text"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        className="w-full border-b focus:outline-none"
                        placeholder="Nhập địa chỉ"
                    />
                    {formik.touched.address && formik.errors.address && <p className="text-red-500 text-sm">{formik.errors.address}</p>}
                </div>

                <div className="md:col-span-1">
                    <label className="block font-semibold">Loại sự kiện</label>
                    <input
                        type="text"
                        name="eventType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.eventType}
                        className="w-full border-b focus:outline-none"
                        placeholder="Nhập loại sự kiện"
                    />
                </div>

                <div className="col-span-2 flex items-center">
                    <input
                        type="checkbox"
                        name="fullService"
                        onChange={formik.handleChange}
                        checked={formik.values.fullService}
                        className="mr-2 accent-orange-600"
                    />
                    <label>Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)</label>
                </div>

                <div className="col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-6 py-2 hover:bg-orange-700 shadow-md"
                    >
                        GỬI THÔNG TIN
                     </button>
                </div>
                </div>
            </form>

        </div>
    );

};

export default LoginPage;