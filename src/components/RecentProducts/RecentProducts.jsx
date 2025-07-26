import React from "react";
import { Link } from "react-router-dom"; // استيراد Link للانتقال بين المسارات
import '../../assets/css/style.css';
import img1 from '../../assets/images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW.webp';
import img2 from '../../assets/images/yCBpE03GZbIojSNmgUPtLQqeyhsJZlMGlVadqQ0O.jpg';
import img3 from '../../assets/images/RQkLcoyAoCByPWP5wFnJD5tMLV463ZqPh1UqftSC.webp';
import img4 from '../../assets/images/eCP43NJELbYkzuYC2hzi2sL9iUu6TjCZbAX8hQJe.webp';

export default function RecentProducts() {
  return (
    <div className="container py-5 one" id="one" data-aos="fade-down">
      <div className="row" data-aos="fade-down">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>ما نزل مؤخرًا</h2>
          <div className="title-underline mx-auto" data-aos="fade-down"></div>
        </div>

        {/* Product Card 1 */}
        <div className="col-md-3 col-sm-6 mb-4 z-0 ">
          <div className="product-card">
            <span className="badge-new">جديد</span>
            <div className="img-container">
              {/* استخدام Link للانتقال إلى مسار /productPage */}
              <Link to="/productPage">
                <img
                  src={img1}
                  alt="Orange Bag"
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
              <div className="hover-icons">
                <a href="#" className="icon-btn" title="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </a>
                <a href="#" className="icon-btn" title="Quick View">
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <h5 className="product-title">
                كرتون بوكس شحن ( ابيض - 1 كرتون)
              </h5>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>
                  <i className="far fa-star"></i>
                </span>
                <span style={{ fontSize: "0.8em", color: "#777" }}>(42)</span>
              </div>
              <div className="price">89.99ر.س</div>
              <button className="btn btn-primary add-to-cart-btn">
                <i className="fas fa-shopping-cart"></i>إضافة للسلة{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="col-md-3 col-sm-6 mb-4 z-0 ">
          <div className="product-card">
            <span className="badge-sale">تخفيض</span>
            <div className="img-container">
              <Link to="/productPage">
                {" "}
                {/* استخدام Link هنا أيضًا */}
                <img
                  src={img2}
                  alt="Grey Hoodie"
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
              <div className="hover-icons">
                <a href="#" className="icon-btn" title="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </a>
                <a href="#" className="icon-btn" title="Quick View">
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <h5 className="product-title">
                كرتون بوكس شحن ( ابيض - 1 كرتون)
              </h5>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span style={{ fontSize: "0.8em", color: "#777" }}>(28)</span>
              </div>
              <div className="price">
                64.99ر.س <span className="old-price">79.99ر.س</span>
              </div>
              <button className="btn btn-primary add-to-cart-btn">
                <i className="fas fa-shopping-cart"></i>إضافة للسلة{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="col-md-3 col-sm-6 mb-4 z-0 ">
          <div className="product-card">
            <div className="img-container">
              <Link to="/productPage">
                {" "}
                {/* استخدام Link هنا أيضًا */}
                <img
                  src={img3}
                  alt="Denim Jacket"
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
              <div className="hover-icons">
                <a href="#" className="icon-btn" title="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </a>
                <a href="#" className="icon-btn" title="Quick View">
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <h5 className="product-title">
                كرتون بوكس شحن ( ابيض - 1 كرتون)
              </h5>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span style={{ fontSize: "0.8em", color: "#777" }}>(56)</span>
              </div>
              <div className="price">119.00ر.س</div>
              <button className="btn btn-primary add-to-cart-btn">
                <i className="fas fa-shopping-cart"></i>إضافة للسلة{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="col-md-3 col-sm-6 mb-4 z-0 ">
          <div className="product-card">
            <div className="img-container">
              <Link to="/productPage">
                {" "}
                {/* استخدام Link هنا أيضًا */}
                <img
                  src={img4}
                  alt="White Sneakers"
                />
              </Link>
              <div className="sold-out-overlay">Sold Out</div>
              <div className="hover-icons">
                <a href="#" className="icon-btn" title="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </a>
                <a href="#" className="icon-btn" title="Quick View">
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <h5 className="product-title">
                كرتون بوكس شحن ( ابيض - 1 كرتون)
              </h5>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </span>
                <span style={{ fontSize: "0.8em", color: "#777" }}>(15)</span>
              </div>
              <div className="price">75.50ر.س</div>
              <button className="btn btn-secondary add-to-cart-btn" disabled>
                <i className="fas fa-times-circle"></i>نفذت الكمية
              </button>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <Link to="/FullRecentProductsPage">
          <div
            className="text-center mt-4 mb-5"
            onClick={() => window.scrollTo(0, 0)}
            data-aos="fade-up"
          >
            {/* هنا يمكنك تحديد ما إذا كان هذا الزر سينتقل إلى صفحة أخرى معرّفة بالراوتر أو لا يزال يعتمد على مسار تقليدي */}
            <button className="btn btn-primary load-more-btn">
              <span className="btn-text">عرض المزيد</span>
              <i className="fas fa-arrow-right arrow-icon"></i>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
