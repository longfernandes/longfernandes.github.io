import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from './components/Footer';

const menuItems = [{
  label: 'Trang chủ',
  href: '#'
}, 
{
 label: 'Thực đơn',
 href:'#' 
},
{
  label: 'Về chúng tôi',
  href:'#',
},
{
  label: 'Tin tức',
  href: '#'
}]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    guests: '',
    date: '',
    eventType: '',
    package: true,
  });
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Họ tên không hợp lệ';
    if (!/^(\+?\d{9,11})$/.test(formData.phone)) newErrors.phone = 'Số điện thoại không hợp lệ';
    if (!formData.guests || parseInt(formData.guests) <= 0) newErrors.guests = 'Số lượng không hợp lệ';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Thông tin đã được gửi thành công!');
    setUsername(formData.name);
    setSubmitSuccess(true) 
      // Reset lại form
      setFormData({
        name: '',
        phone: '',
        address: '',
        guests: '',
        date: '',
        eventType: '',
        package: true, // giá trị checkbox mặc định
      });
    }
  };


  return (
    <div className="body-bg">
      {submitSuccess ? (

        <Header name={username} menuItems={menuItems} activeItem='Trang chủ' cartCount={10}  />
      ) : (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Liên Hệ Đặt Tiệc</h2>
            <p className="form-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label>Họ và tên</label>
                <input
                  type='text'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='form-input'
                  placeholder="Nhập họ và tên"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label>Số lượng khách</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  className='form-input'
                  onChange={handleChange}
                />
                {errors.guests && <p className="error">{errors.guests}</p>}
              </div>

              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type='text'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label>Ngày tổ chức sự kiện</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Địa chỉ</label>
                <input
                  type='text'
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ"
                />
              </div>

              <div className="form-group">
                <label>Loại sự kiện</label>
                <input
                  type='text'
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Nhập loại sự kiện"
                />
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="package"
                    checked={formData.package}
                    onChange={handleChange}
                  />
                  Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)
                </label>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn">GỬI THÔNG TIN</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}



export default App;
