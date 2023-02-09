import React from 'react'

export const Footter = () => {
  return (
    <div className="footer_section layout_padding">
      {/* footer section start */}
      {/* <div className="container">
        <div className="footer_logo">
          <a href="index.html">
            <img src="images/logo-chu-dai.png" />
          </a>
        </div>
        <div className="contact_section_2">
          <div className="row">
            <div className="col-sm-4">
              <h3 className="address_text">Thông tin liên hệ</h3>
              <div className="address_bt">
                <ul>

                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span className="padding_left10">
                        Điện thoại : 0988 938 861
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span className="padding_left10">
                        Email : hotro@gutrend.vn
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <span className="padding_left10">
                        Địa chỉ : Tòa nhà Sông Đà - Mễ trì - Từ liêm - HN
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer_logo_1">
                <a href="index.html">
                  <img src="images/logo-chu-dai.png" />
                </a>
              </div>
              <p className="dummy_text">
                GuTrend tự hào là thương hiệu Việt, Trao gửi những Giá trị thật Hạnh phúc đích thực đến tận tay khách hàng.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="main">
                <h3 className="address_text">Best Products</h3>
                <p className="ipsum_text">
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="social_icon">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.1874498590591!2d105.78143021582132!3d21.01768022413907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab30540137%3A0x35ac90387f094f93!2zVMOyYSBuaMOgIFPDtG5nIMSQw6A!5e0!3m2!1svi!2s!4v1675916827832!5m2!1svi!2s"
                width={300}
                height={200}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

      </div> */}
      {/* footer section end */}



      <div style={{ position: "relative" }}>
        <footer className="text-center text-lg-start bg-light text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Kết nối với nhà Gu trên các mạng xã hội:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                {/* <i class="fab fa-twitter"></i> */}
                <i className="fa-brands fa-tiktok" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fa-brands fa-shopify" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    {/* <i class="fas fa-gem me-3"></i>Company name */}
                    <img
                      style={{ height: 130 }}
                      src="/image/logo-gutrend-vuong-no.png"
                      alt=""
                    />
                  </h6>
                  <p>
                    Tự hào là thương hiệu Việt, Trao gửi những Giá trị thật Hạnh phúc
                    đích thực đến tận tay khách hàng.
                  </p>
                </div>
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Truy cập nhanh</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Trang chủ
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Bộ sưu tập
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Tin tức thời trang
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Tuyển dụng
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Nàng hỏi - Gu Đáp</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Hướng dẫn đặt hàng
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Hướng dẫn chọn size
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Chính sách khác hàng thân thiết
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Bảo hành và đổi sản phẩm
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                  <p>
                    <i className="fas fa-home me-3" /> Mễ Trì, Nam Từ Liêm, Hà Nội
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    hotro@gutrend.vn
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> 0988 938 861
                  </p>
                  <p>
                    <i className="fas fa-print me-3" /> 0399 363 868
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              Gutrend.vn
            </a>
          </div>
          {/* Copyright */}
          {/* Footer */}
        </footer>
      </div>

    </div>

  )
}
