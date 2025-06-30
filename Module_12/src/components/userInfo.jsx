import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userActions";

const UserInfo = () => {
    const { loading, user, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {loading && <p>Đang tải...</p>}
            {user && (
                <div>
                    <h3>Thông tin người dùng</h3>
                    <p>Tên: {user.name}</p>
                    <p>Tuổi: {user.age}</p>
                </div>
            )}
            {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
        </div>
    );
};

export default UserInfo;
