import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../../../public/images/'
function Header2() {
    return (
        <header className="t-header">
            <div className="container-header">
                <div className="t-header_top t-header_topBackground">
                    <div className="t-phone-hotlineLeft">
                        <a
                            className="t-header_contactLeft"
                            href="tel:+084399363868"
                            rel="noreferrer"
                        >
                            <img
                                src="images/path-227.png"
                                width="16x "
                                alt="Hot line 0399363868"
                            />
                            <p style={{ color: "rgb(226, 224, 224)", margin: 0 }}>
                                Hotline <span className="out_text_mobile"> đặt hàng </span>
                                0399363868
                            </p>
                        </a>
                    </div>
                    <div className="t-header_contactRight">
                        <div className="t-header_contactRight_element t-header_contactRight_element-desktop">
                            <a href="/page/order_route.html">
                                <button type="button" className="t-header_contactRight_btn">
                                    <i
                                        className="fa-sharp fa-solid fa-magnifying-glass-location"
                                        style={{ width: 20, height: 20, color: "rgb(206, 204, 204)" }}
                                    />
                                    --Tra cứu tình trạng đơn hàng
                                </button>
                            </a>
                        </div>
                        <div className="t-header_contactRight_element t-header_contactRight_element-desktop">
                            <a href="">
                                <button type="button" className="t-header_contactRight_btn">
                                    <i
                                        className="fa-sharp fa-solid fa-map-location-dot"
                                        style={{ width: 18, height: 18, color: "rgb(211, 209, 209)" }}
                                    />
                                    -- Hệ thống Showroom
                                </button>
                            </a>
                        </div>
                        <div className="t-header_contactRight_element ">
                            <div className="t-headerSearch">
                                <form className="header-search-input" noValidate="">
                                    <input
                                        className="header-search-input-value"
                                        style={{
                                            color: "#fff",
                                            padding: "0 3px 0 1.125rem",
                                            height: "2.375rem",
                                            fontFamily: "sans-serif"
                                        }}
                                        placeholder="Tìm kiếm sản phẩm"
                                    />
                                    <button type="submit">
                                        <i
                                            className="fa-sharp fa-solid fa-magnifying-glass"
                                            style={{ width: 13, height: 15 }}
                                        />
                                    </button>
                                </form>
                                {/* Phần Menu mobile */}
                                <nav role="navigation">
                                    <div id="menuToggle">
                                        <input type="checkbox" />
                                        <span />
                                        <span />
                                        <span />
                                        <ul id="menu">
                                            <li>
                                                <a href="#">HÀNG MỚI VỀ</a>
                                                <hr />
                                            </li>
                                            <li>
                                                <a href="/page/product.html">THỜI TRANG</a>
                                                <a>
                                                    <i
                                                        className="fa-solid fa-plus add_fashion_mobile"
                                                        id="add_element_fashion_mobile"
                                                    />
                                                    <hr />
                                                </a>
                                                {/* <a><i class="fa-solid fa-minus add_fashion_mobile"
                                                  id="sub_menu_fashion_mobile"></i></a> */}
                                                <ul className="fashion_element_mobile">
                                                    <li>
                                                        <a href="">Váy Đầm</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Áo Sơ Mi</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Quần Âu</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a style={{ color: "red" }} href="">
                                                    <b>SELL OFF</b>
                                                </a>
                                                <hr />
                                            </li>
                                            <li>
                                                <a href="">BỘ SƯU TẬP</a>
                                                <hr />
                                            </li>
                                            <li>
                                                <a href="">Tin Tức</a>
                                                <hr />
                                            </li>
                                            <li>
                                                <a href="">Về GuTrend</a>
                                                <hr />
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* Phần Menu mobile */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*                     Phần menu mobile                      */}
            <div className="t-header_bottom">
                <div className="t-header_logo-left">
                    <NavLink to="/">
                        <img className="logo-gutrend" src="images/logo-chu-dai.png" alt="" />
                    </NavLink>
                </div>
                <div className="t-header_bottom_nav">
                    <ul className="nav_pc">
                        <li>
                            <NavLink to="/HangMoiVe">HÀNG MỚI VỀ</NavLink>
                        </li>
                        <li className='showlistProducts'>
                            <NavLink to="/Products">MỸ PHẨM</NavLink>
                            <ul className="subnav">
                                <li>
                                    <NavLink to="/">SON</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">PHẤN</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">KEM DƯỠNG</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">TẨY TRANG</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">ĐỒ TRANG ĐIỂM</NavLink>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a style={{ color: "red" }} href="#">
                                <b>SELL OFF</b>
                            </a>
                        </li>
                        <li>
                            <a href="#">BỘ SƯU TẬP</a>
                        </li>
                        <li>
                            <a href="#">Tin Tức</a>
                        </li>
                        <li>
                            <a href="#">Về GuTrend</a>
                        </li>
                    </ul>
                </div>
                <div className="t-header_botom-right">
                    <div id="user_selector_profile">
                        <div>
                            <div className="user_selector-content">
                                <a href="./page/profile.html">
                                    <p>Thông tin của tôi</p>
                                </a>
                                <a href="">
                                    <p>Đơn hàng của tôi</p>
                                </a>
                                <a href="">
                                    <p>Tin nhắn của tôi</p>
                                </a>
                                <a href="">
                                    <p>Phiếu giảm giá của tôi</p>
                                </a>
                                <a href="">
                                    <p>Điểm thưởng của tôi</p>
                                </a>
                                <a href="">
                                    <p>Đã xem gần đây</p>
                                </a>
                                <a href="">
                                    <p>Cần trợ giúp</p>
                                </a>
                                <p>
                                    <a href="#">
                                        Đăng xuất
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="t-header_botom-right">
                        <div className="t-header_actions">
                            <p style={{ marginBottom: 0 }}>
                                <span id="user_member" />
                            </p>
                            <div className="icon_header_user" >
                                <a style={{ zIndex: 0 }} href="/page/login.html">
                                    <img className="icon_header" src="images/user.png" alt="" />
                                </a>
                            </div>
                            <a href="">
                                <img className="icon_header" src="images/icon-heart-w.png" alt="" />
                            </a>
                            <a href="/page/gio-hang.html">
                                <img
                                    className="icon_header"
                                    src="images/shopping-cart.png"
                                    alt=""
                                />
                            </a>
                            <p className='count_cart'>
                                <span id="cartHearder" className="quantity_oder">
                                    {" "}2
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header2;