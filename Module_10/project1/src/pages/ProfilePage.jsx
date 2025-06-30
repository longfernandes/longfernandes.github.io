import React, { useEffect, useState } from "react";
import { Modal, Input, Select, Button, message } from "antd";
import useAuth from "../hook/useAuth";

const { Option } = Select;

function ProfilePage() {
  const { token, user } = useAuth();
  const [info, setInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("profileInfo");
    if (saved) setInfo(JSON.parse(saved));
  }, []);

  const openModal = () => {
    if (!token) {
      message.warning("Bạn cần đăng nhập để chỉnh sửa.");
      return;
    }

    if (info) {
      setForm(info);
    }
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.name || !form.phone) {
      message.error("Họ tên và Số điện thoại là bắt buộc.");
      return;
    }

    localStorage.setItem("profileInfo", JSON.stringify(form));
    setInfo(form);
    setIsModalOpen(false);
    message.success("Đã lưu thông tin.");
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Bạn chắc chắn muốn xoá thông tin?",
      onOk: () => {
        localStorage.removeItem("profileInfo");
        setInfo(null);
        message.success("Đã xoá thông tin.");
      },
    });
  };

  return (
    <div className="flex bg-gray-300 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-3xl">
            👤
          </div>
          <p className="mt-2 font-bold">{user?.firstName || "Nguyễn Văn A"}</p>
        </div>
        <ul className="space-y-4 text-sm">
          <li className="text-orange-500 font-medium">🔶 Thông tin cá nhân</li>
          <li className="text-gray-600">⚙️ Cài đặt địa chỉ</li>
          <li className="text-gray-600">🛒 Quản lý đơn hàng</li>
          <li className="text-gray-600">🎁 Mã đã lưu</li>
          <li className="text-gray-600">🚪 Đăng xuất</li>
        </ul>
      </div>

      {/* Info Panel */}
      <div className="flex-1 bg-white p-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Thông tin cá nhân</h2>
          {token && (
            <div className="space-x-2">
              <Button type="primary" onClick={openModal}>
                {info ? "Sửa" : "Thêm"} thông tin
              </Button>
              {info && (
                <Button danger onClick={handleDelete}>
                  Xoá
                </Button>
              )}
            </div>
          )}
        </div>

        {info ? (
          <div className="grid grid-cols-2 gap-6 text-lg">
            <p><strong>Họ tên:</strong> {info.name}</p>
            <p><strong>Giới tính:</strong> {info.gender || "Chưa chọn"}</p>
            <p><strong>Số điện thoại:</strong> {info.phone}</p>
            <p><strong>Email:</strong> {info.email}</p>
            <p><strong>Ngày sinh:</strong> {`${info.day || "--"}/${info.month || "--"}/${info.year || "--"}`}</p>
          </div>
        ) : (
          <p className="text-gray-600">Chưa có thông tin cá nhân.</p>
        )}
      </div>

      {/* Modal Form */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        okText="Lưu thông tin"
        title="Cập nhật thông tin"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Họ tên:</label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập họ tên"
            />
          </div>
          <div>
            <label>Giới tính:</label>
            <Select
              value={form.gender}
              onChange={(value) => handleSelect("gender", value)}
              className="w-full"
              placeholder="Lựa chọn"
            >
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
              <Option value="Khác">Khác</Option>
            </Select>
          </div>
          <div>
            <label>Số điện thoại:</label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div>
            <label>Email:</label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Nhập email nhận ưu đãi"
            />
          </div>
          <div>
            <label>Ngày sinh:</label>
            <Select
              value={form.day}
              onChange={(v) => handleSelect("day", v)}
              placeholder="Ngày"
              className="w-full"
            >
              {[...Array(31).keys()].map((d) => (
                <Option key={d + 1} value={String(d + 1)}>{d + 1}</Option>
              ))}
            </Select>
          </div>
          <div>
            <label>Tháng sinh:</label>
            <Select
              value={form.month}
              onChange={(v) => handleSelect("month", v)}
              placeholder="Tháng"
              className="w-full"
            >
              {[...Array(12).keys()].map((m) => (
                <Option key={m + 1} value={String(m + 1)}>{m + 1}</Option>
              ))}
            </Select>
          </div>
          <div>
            <label>Năm sinh:</label>
            <Select
              value={form.year}
              onChange={(v) => handleSelect("year", v)}
              placeholder="Năm"
              className="w-full"
            >
              {Array.from({ length: 80 }, (_, i) => 2025 - i).map((year) => (
                <Option key={year} value={String(year)}>{year}</Option>
              ))}
            </Select>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProfilePage;
