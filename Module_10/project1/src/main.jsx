import React from 'react';
import ReactDOM from 'react-dom/client';  // Sử dụng đúng import cho React 18
import { Provider } from 'react-redux';
import store from './redux/store'; // Import store
import App from './App';
import './index.css';

// Tạo root với createRoot thay cho render
const root = ReactDOM.createRoot(document.getElementById('root'));  // Tạo root mới
root.render(
  <Provider store={store}> {/* Đảm bảo store được bọc ứng dụng */}
    <App />
  </Provider>
);
