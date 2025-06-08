
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ menuItems, activeItem, cartCount, name }) => {
  return (
    <header className="header">
      {/* Left - Navigation */}
      <nav className="nav-left">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={item.label === activeItem ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
        <button className="order-button">Đặt tiệc ngay</button>
      </nav>

      {/* Right - Search and Icons */}
      <div className="nav-right">
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm món ăn" />
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line>
          </svg>
        </div>
        <div className="icon-container" title="Tài khoản">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
            <circle cx="12" cy="8" r="4" strokeWidth="2"></circle>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" strokeWidth="2"></path>
          </svg>
        </div>
        {name && (
          <p>{name}</p>
        )}
        <div className="icon-container cart-icon" title="Giỏ hàng">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.81h12.72a1 1 0 0 0 .98-.79L23 6H6" strokeWidth="2"></path>
          </svg>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
};

// ✅ PropTypes định nghĩa
Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeItem: PropTypes.string.isRequired,
  cartCount: PropTypes.number,
  name: PropTypes.string,
};

// ✅ Giá trị mặc định
Header.defaultProps = {
  cartCount: 0,
};

export default Header;


