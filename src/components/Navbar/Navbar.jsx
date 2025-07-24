import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal, Button, Form, Tab, Nav, Dropdown } from "react-bootstrap";
import "boxicons";
import logoImg from "../../assets/images/resize_image_686fe7da13ce4.png";

const Navbar = () => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchContainerRef = useRef(null);
  const [showCart, setShowCart] = useState(false);

  // بيانات الاقتراحات
  const suggestionsData = [
    "أكياس ورقية",
    "علب تغليف",
    "أكياس قماش",
    "أكياس بلاستيك",
    "ملصقات لاصقة",
    "أشرطة تغليف",
    "أكواب ورقية",
    "أدوات تعبئة",
  ];

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        setShowSearchPopup(false);
        setShowLoginModal(false);
        setShowSuggestions(false);
      }
    };
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (showLoginModal) {
      body.classList.add("dimmed-bg");
    } else {
      body.classList.remove("dimmed-bg");
    }
  }, [showLoginModal]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = suggestionsData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setSearchSuggestions(filtered);
    setShowSuggestions(query.length > 0);
    setIsSearchExpanded(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // تنفيذ البحث هنا
    console.log("بحث عن:", suggestion);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowSearchPopup(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const LoginRegisterModal = () => (
    <Modal
      show={showLoginModal}
      onHide={() => setShowLoginModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>تسجيل الدخول / إنشاء حساب</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tab.Container defaultActiveKey="login">
          <Nav variant="tabs" className="mb-3 justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="login">تسجيل الدخول</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="register">إنشاء حساب</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="login">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control type="password" placeholder="••••••••" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  تسجيل الدخول
                </Button>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="register">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>الاسم الكامل</Form.Label>
                  <Form.Control type="text" placeholder="الاسم الكامل" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control type="password" placeholder="••••••••" />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">
                  إنشاء الحساب
                </Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );

  const [show, setShow] = useState(false);

  const handleToggle = (isOpen) => setShow(isOpen);

  const handleClose = () => setShow(false);

  return (
    <>
      {/* Search Popup */}
      {showSearchPopup && (
        <div
          className="search-popup is-visible"
          onClick={(e) => {
            const isOutside = !e.target.closest(".search-popup-container");
            const isCloseIcon =
              e.target.classList.contains("search-popup-close") ||
              e.target.closest(".search-popup-close");

            if (isOutside || isCloseIcon) {
              setShowSearchPopup(false);
            }
          }}
        >
          <div className="search-popup-container">
            <form role="search" method="get" className="search-form" action="">
              <input
                type="search"
                id="search-popup"
                className="search-field"
                placeholder="اكتب هنا "
                name="s"
                autoFocus
              />
              <button type="submit" className="search-submit">
                <i className="bx bx-search"></i>
              </button>
            </form>

            <h5 className="cat-list-title">تصفح الفئات</h5>
            <ul className="cat-list">
              <li className="cat-list-item">
                <a href="#" title="رومانسي">
                  أكياس
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="إثارة">
                  تغليف
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="خيال علمي">
                  تعبئة
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="طبخ">
                  اكسسوارات
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="صحة">
                  علب
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="نمط الحياة">
                  ملصقات
                </a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="خيال">
                  أكواب
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Login/Register Modal */}
      {showLoginModal && <LoginRegisterModal />}

      <header id="header" className="site-header sticky-top">
        <div className="top-info border-bottom d-none d-md-block">
          <div className="container-fluid top-nav">
            <div className="row g-0" data-aos="fade-down" data-offset="100">
              <div className="col-md-4">
                <p className="fs-6 my-2 text-center">
                  هل تحتاج إلى مساعدة؟ اتصل بنا <a href="#">000000</a>
                </p>
              </div>
              <div className="col-md-4 border-start border-end">
                <p className="fs-6 my-2 text-center">
                  خصم الصيف 60%!{" "}
                  <a className="text-decoration-underline" href="index.html">
                    تسوق الآن
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <p className="fs-6 my-2 text-center">
                  توصيل خلال 2-3 أيام عمل وإرجاع مجاني (تجربه)
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav id="header-nav" className="navbar navbar-expand-lg py-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logoImg} className="logo" alt="Logo" />
            </a>

            <button
              className="navbar-toggler d-flex d-lg-none order-3 p-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bx bx-menu" style={{ fontSize: "24px" }}></i>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="bdNavbar"
              aria-labelledby="bdNavbarOffcanvasLabel"
            >
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="/">
                  <img src={logoImg} className="logo" alt="Logo" />
                </a>
                <button
                  type="button"
                  className="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div className="offcanvas-body" data-aos="fade-down">
                <ul
                  id="navbar"
                  className="navbar-nav text-uppercase justify-content-start justify-content-lg-start align-items-start align-items-lg-center flex-grow-1"
                >
                  <li className="nav-item">
                    <a className="nav-link me-3 active" href="#">
                      الصفحة الرئيسية
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-3" href="#one">
                      ما نزل مؤخرأ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-3" href="#categories">
                      الأقسام
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-3" href="#best-selling">
                      الأكثر طلباً
                    </a>
                  </li>
                  <Dropdown as="li" className="nav-item">
                    <Dropdown.Toggle
                      as="a"
                      className="nav-link me-3"
                      href="#best-selling-items"
                    >
                      المستلزمات
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="animate slide border">
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات الأكياس
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات تغليف الملابس
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات التغليف
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات الشحن
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات الاطعمه والمشروبات
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات الأعياد وحفلات الميلاد
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات العطور
                      </Dropdown.Item>
                      <Dropdown.Item href="index.html" className="fw-light">
                        مستلزمات الأكسسوارات
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <li className="nav-item">
                    <a className="nav-link me-3" href="#contact-2">
                      تواصل معنا
                    </a>
                  </li>
                </ul>

                {/* شريط البحث الرئيسي */}
                <div className="d-flex align-items-center">
                  <div
                    className="search-container"
                    ref={searchContainerRef}
                    style={{
                      maxWidth: isSearchExpanded ? "500px" : "500px",
                      // overflow: "hidden",
                      transition: "max-width 0.9s",
                      flexGrow: 1,
                    }}
                  >
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control search-input"
                        placeholder="ابحث عن المنتجات..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{
                          padding: "12px 50px 12px 20px",
                          borderRadius: "30px",
                          border: "2px solid #f1f0f6",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                          width: "100%",
                        }}
                      />
                      <button
                        className="btn btn-primary position-absolute"
                        style={{
                          right: "0px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                      >
                        <i
                          className="bx bx-search"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </button>

                      {showSuggestions && (
                        <div
                          className="suggestions-dropdown position-absolute w-100 bg-white mt-1"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            zIndex: 1000,
                            maxHeight: "300px",
                            overflowY: "auto",
                          }}
                        >
                          {searchSuggestions.length > 0 ? (
                            searchSuggestions.map((item, index) => (
                              <div
                                key={index}
                                className="suggestion-item p-3 border-bottom"
                                style={{
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                }}
                                onClick={() => handleSuggestionClick(item)}
                              >
                                <i className="bx bx-search-alt-2 ms-2"></i>
                                {item}
                              </div>
                            ))
                          ) : (
                            <div
                              className="suggestion-item p-3  text-center"
                              style={{ cursor: "default" }}
                            >
                              <i className="me-2"></i> لا توجد نتائج
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="user-items d-flex">
                  <ul className="d-flex justify-content-end align-items-center list-unstyled mb-0 fs-5">
                    <li className="search-item pe-2"></li>

                    <Dropdown
                      as="li"
                      className="wishlist-dropdown pe-3"
                      show={show}
                      onToggle={(isOpen) => setShow(isOpen)}
                    >
                      <Dropdown.Toggle
                        as="a"
                        className="dropdown-toggle ps-3"
                        onClick={() => setShow(!show)}
                        id="wishlistDropdownToggle"
                      >
                        <i className="bx bx-heart"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="animate slide dropdown-menu-end dropdown-menu-lg-end p-3 mt-5"
                        onClick={() => setShow(false)} // ✅ يغلق القائمة عند أي ضغطة داخلية
                      >
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                          <span>قائمة رغباتك</span>
                          <span className="badge rounded-pill">2</span>
                        </h4>
                        <ul className="list-group mb-3">
                          <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                            <div>
                              <h5>
                                <a href="index.html">اكياس ورقيه</a>
                              </h5>
                              <small>سعر مخفض خاص.</small>
                              <a
                                href="#"
                                className="d-block fw-medium text-capitalize mt-2"
                              >
                                إضافة إلى السلة
                              </a>
                            </div>
                            <span>2000ر.س</span>
                          </li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                            <div>
                              <h5>
                                <a href="index.html">اكياس ورقيه</a>
                              </h5>
                              <small>مثالي للأشخاص المستنيرين.</small>
                              <a
                                href="#"
                                className="d-block fw-medium text-capitalize mt-2"
                              >
                                إضافة إلى السلة
                              </a>
                            </div>
                            <span>400ر.س</span>
                          </li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span className="text-capitalize">
                              <b>الإجمالي (ريال سعودي)</b>
                            </span>
                            <strong>1470ر.س</strong>
                          </li>
                        </ul>
                        <div className="d-flex flex-wrap justify-content-center">
                          <Link
                            to="/WishListSection"
                            className="w-100 btn btn-dark mb-1"
                            onClick={() => setShow(false)} // أيضاً هنا
                          >
                            عرض قائمة رغباتك
                          </Link>
                          <Link
                            to="/"
                            className="w-100 btn btn-primary"
                            onClick={() => setShow(false)} // أيضاً هنا
                          >
                            الذهاب إلى الدفع
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown
                      as="li"
                      className="cart-dropdown ms-3"
                      show={showCart}
                      onToggle={(isOpen) => setShowCart(isOpen)}
                    >
                      <Dropdown.Toggle
                        as="a"
                        className="dropdown-toggle"
                        id="cartDropdownToggle"
                        onClick={() => setShowCart(!showCart)}
                      >
                        <i className="bx bx-cart"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="animate slide dropdown-menu-end dropdown-menu-lg-end p-3 mt-5"
                        onClick={() => setShowCart(false)} // ✅ يغلق عند الضغط على أي عنصر
                      >
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                          <span>سلة التسوق الخاصة بك</span>
                          <span className="badge rounded-pill">2</span>
                        </h4>
                        <ul className="list-group mb-3">
                          <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                            <div>
                              <h5>
                                <a href="index.html">اكياس ورقيه</a>
                              </h5>
                              <small>جودة عالية بسعر جيد.</small>
                            </div>
                            <span>870ر.س</span>
                          </li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                            <div>
                              <h5>
                                <a href="index.html">اكياس ورقيه</a>
                              </h5>
                              <small>اكياس ورقيه.</small>
                            </div>
                            <span>600ر.س</span>
                          </li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span className="text-capitalize">
                              <b>الإجمالي (ريال سعودي)</b>
                            </span>
                            <strong>1470ر.س</strong>
                          </li>
                        </ul>
                        <div className="d-flex flex-wrap justify-content-center">
                          <Link
                            to="/ShoppingCartSection"
                            className="w-100 btn btn-dark mb-1"
                            onClick={() => setShowCart(false)} // ✅ يغلق عند الضغط
                          >
                            عرض السلة
                          </Link>
                          <Link
                            to="/"
                            className="w-100 btn btn-primary"
                            onClick={() => setShowCart(false)} // ✅ يغلق عند الضغط
                          >
                            الذهاب إلى الدفع
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    <li className="pe-1 logn">
                      <a href="#" onClick={handleLoginClick}>
                        <span className="">
                          تسجيل حساب<i className="bx bx-user me-1"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <li className="d-block d-lg-none">
          <div
            className="position-relative mx-auto"
            style={{ maxWidth: "100%" }}
          >
            <input
              type="text"
              className="form-control search-input"
              placeholder="ابحث هنا..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                padding: "12px 50px 12px 20px",
                borderRadius: "30px",
                border: "2px solid #f1f0f6",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                width: "100%",
              }}
            />
            <button
              className="btn btn-primary position-absolute"
              style={{
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            >
              <i className="bx bx-search" style={{ fontSize: "20px" }}></i>
            </button>
          </div>
        </li>
      </header>

      <style jsx>{`
        .search-container {
          position: relative;
          margin: 0 0px;
        }

        .search-input {
          width: 100%;
          border-radius: 30px;
          background: #f0ffff97;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .search-input:focus {
          outline: none;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(64, 124, 124, 0.2);
        }

        .suggestions-dropdown {
          position: absolute;
          width: 100%;
          background: white;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .suggestion-item {
          padding: 10px 15px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .suggestion-item:hover {
          background-color: #f1f0f6;
          color: #407c7c;
        }

        li::marker {
          content: none;
        }

        /* تعديلات للجوال */
        @media (max-width: 768px) {
          .search-container {
            order: 3;
            width: 100%;
            margin: 15px 0;
            padding: 0 15px;
          }

          .search-input {
            padding: 10px 45px 10px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
