import React, { useState } from 'react';

const ShoppingCartSection = () => {
  const initialItems = [
    {
      id: 1,
      name: "علب عطور زجاجية مع غطاء ذهبي (12 علبة)",
      unitPrice: 47.34,
      quantity: 2,
      image: "../images/60qIw5HjeWOlwHcA16C5pLS7zRGFSH58Pix3mI9h.webp",
      options: ["100 مل تقريبا", "50 مل", "200 مل"],
      selectedOption: "100 مل تقريبا"
    },
    {
      id: 2,
      name: "علب صوصات مع غطاء منفصل بلاستيك لون اسود (100 علبة)",
      unitPrice: 15.75,
      quantity: 1,
      image: "../images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW.webp",
      options: ["2 اونس - 60 مل تقريبا", "4 اونس", "8 اونس"],
      selectedOption: "2 اونس - 60 مل تقريبا"
    }
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleOptionChange = (id, value) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, selectedOption: value }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  return (
    <section id="shopping-cart-section" className="zelcashop-cart-section" dir="rtl">
      <div className="zelcashop-cart-container">
        <div className="zelcashop-cart-header">
          <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="d-flex align-items-center" data-aos="fade-up">سلة التسوق</h2>
              <div className="title-underline mx-auto" data-aos="fade-up"></div>
            </div>
          </div>
          <a href="/" className="zelcashop-back-link" data-aos="fade-up">
            <i className="fas fa-arrow-right"></i> الرئيسية
          </a>
        </div>

        <div className="zelcashop-cart-content">
          <div className="zelcashop-cart-items-wrapper" data-aos="fade-down">
            {cartItems.map((item) => (
              <div key={item.id} className="zelcashop-cart-item" data-unit-price={item.unitPrice}>
                <div className="zelcashop-item-details">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="zelcashop-item-image"
                  />
                  <div className="zelcashop-item-info">
                    <h3 className="zelcashop-item-name">{item.name}</h3>
                    <p className="zelcashop-item-price-unit">{item.unitPrice.toFixed(2)} ر.س</p>
                  </div>
                </div>
                <div className="zelcashop-item-actions">
                  <div className="zelcashop-quantity-control">
                    <button
                      className="zelcashop-quantity-btn zelcashop-decrease-qty"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="zelcashop-item-quantity">{item.quantity}</span>
                    <button
                      className="zelcashop-quantity-btn zelcashop-increase-qty"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="zelcashop-item-total">
                    <p className="zelcashop-item-total-price">
                      {(item.unitPrice * item.quantity).toFixed(2)} ر.س
                    </p>
                  </div>
                  <button
                    className="zelcashop-remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="zelcashop-item-options">
                  <select
                    className="zelcashop-item-option-select"
                    value={item.selectedOption}
                    onChange={(e) => handleOptionChange(item.id, e.target.value)}
                  >
                    {item.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="zelcashop-cart-summary-section" data-aos="fade-up">
            <div className="zelcashop-summary-box">
              <h3>ملخص الطلب</h3>
              <div className="zelcashop-summary-line">
                <span>مجموع المنتجات</span>
                <span className="zelcashop-subtotal-price">{subtotal.toFixed(2)} ر.س</span>
              </div>
              <div className="zelcashop-coupon-section">
                <h4>هل لديك كود خصم؟</h4>
                <div className="zelcashop-coupon-input-group">
                  <input
                    type="text"
                    placeholder="ادخل كود الخصم"
                    className="zelcashop-coupon-input"
                  />
                  <button className="zelcashop-apply-coupon-btn">إضافة</button>
                </div>
              </div>
              <div className="zelcashop-summary-line zelcashop-total-line">
                <span>الإجمالي</span>
                <span className="zelcashop-final-total-price">{subtotal.toFixed(2)} ر.س</span>
              </div>
              <button className="zelcashop-checkout-btn">اتمام الطلب</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartSection;
