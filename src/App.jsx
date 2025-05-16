import "./App.css";
import Iphone from "./assets/images/bonik-main.webp";
import Airpodspromax from "./assets/images/Без названия.jpeg";
import Keyboards from "./assets/images/Без названия (1).jpeg";
import Mice from "./assets/images/1500x1500_Z51_Theta_13.webp";
import Macbook from "./assets/images/bb3ce2c80a9671c7fcc7d1d12b08e50cd5df7cea20acd803d1ce10c24aff10a9_png_1220x_crop_center.webp";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("card")) || []
  );
  const [cards2, setCards2] = useState([]);
  const [notification, setNotification] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:3001/products").then((res) => {
      setUsers(res.data);
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const addcard = (item) => {
    const upgradeData = [...cards, { ...item, count: 1 }];
    console.log(upgradeData);
    localStorage.setItem("card", JSON.stringify(upgradeData));
    setCards(upgradeData);
  };

  const addcard2 = (item2) => {
    const upgradeData2 = [...cards2, { ...item2, count: 1 }];
    console.log(upgradeData2);
    localStorage.setItem("card2", JSON.stringify(upgradeData2));
    setCards2(upgradeData2);
  };

  const [value, setValue] = useState("");

  const filteredUsers = users.filter((country) =>
    country.title.toLowerCase().includes(value.toLowerCase())
  );

  const [searchVisible, setSearchVisible] = useState(true);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="App">
      <div className="container-big1">
        <div className="Navbar">
          <div className="container11">
            <Link to={"/"}>
              <img
                src="https://bonik-react.vercel.app/assets/images/logo.svg"
                alt=""
              />
            </Link>
            {/* <div className="dropdown-container">
              <button onClick={handleDropdownClick}>
                Каталог товаров <i class="fa-solid fa-caret-down"></i>
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="/Laptops">
                    <p>Ноутбуки</p>
                  </a>
                  <Link to={"/"}>
                    <p>Мониторы</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Мышки</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Клавиатуры</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Видеокарты</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Процессоры</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Микрофоны</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Наушники</p>
                  </Link>
                  <Link to={"/"}>
                    <p>Телефоны</p>
                  </Link>
                </div>
              )}
            </div> */}
            <div className="dropdown-container" ref={dropdownRef}>
              <button onClick={handleDropdownClick}>
                Каталог товаров <i className="fa-solid fa-caret-down"></i>
              </button>

              {showDropdown && (
                <div
                  className="dropdown-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    className="Link"
                    to={`/laptops`}
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Ноутбуки</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/monitors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Мониторы</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/mice"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Мышки</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/keyboards"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Клавиатуры</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/video-cards"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Видеокарты</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/processors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Процессоры</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/microphones"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Микрофоны</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/headphones"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Наушники</p>
                  </Link>
                  <Link
                    className="Link"
                    to="/phones"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p style={{ color: "#000" }}>Телефоны</p>
                  </Link>
                </div>
              )}
            </div>
            <div className="inp">
              <input
                onClick={handleSearchClick}
                onChange={(event) => setValue(event.target.value)}
                type="text"
                placeholder="Tavarlarni izlash"
              />
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              {token !== "admin" ? (
                <>
                  <Link
                    className="cards"
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/card"}
                  >
                    <div className="i1">
                      <i class="fa-solid fa-cart-shopping"></i>корзина
                    </div>
                    <div
                      className={
                        JSON.parse(localStorage.getItem("card"))?.length > 0
                          ? "notification"
                          : ""
                      }
                    >
                      {JSON.parse(localStorage.getItem("card"))?.length
                        ? JSON.parse(localStorage.getItem("card"))?.length
                        : ""}
                    </div>
                  </Link>
                  <Link
                    className="cards2"
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/favourite"}
                  >
                    <div>
                      <div className="i2" style={{ marginTop: "7px" }}>
                        <i
                          class={
                            JSON.parse(localStorage.getItem("card2"))?.length >
                            0
                              ? "fa-solid fa-heart "
                              : "fa-regular fa-heart "
                          }
                        ></i>
                        Избранное
                        <div
                          className={
                            JSON.parse(localStorage.getItem("card2"))?.length >
                            0
                              ? "notification"
                              : ""
                          }
                        >
                          {JSON.parse(localStorage.getItem("card2"))?.length
                            ? JSON.parse(localStorage.getItem("card2"))?.length
                            : ""}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )}
              {/* {token ? (
                <button onClick={logout} className="btn3">
                  <i className="fa-solid fa-user-slash"></i>
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn3">
                    <i className="fa-solid fa-user"></i>
                  </button>
                </Link>
              )} */}
              <Link to={"/login"}>
                <button className="btn3">
                  <i className="fa-solid fa-user"></i>
                </button>
              </Link>
            </div>

            {token === "admin" ? (
              <Link to={"/add-product"}>
                <button className="btn33">Add</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        {searchVisible && (
          <div className="container5555">
            <div className="Section-swiper">
              <swiper-container
                className="mySwiper"
                pagination="true"
                pagination-dynamic-bullets="true"
                navigation="false"
              >
                <swiper-slide>
                  <div>
                    <h4 style={{ fontSize: "45px" }}>Коллекция стиля жизни</h4>
                    <h1 style={{ fontSize: "65px" }}>Мужчины</h1>
                    <h4>
                      СКИДКИ ДО{" "}
                      <span
                        style={{ fontSize: "24px", color: "rgb(233, 69, 96)" }}
                      >
                        -30%
                      </span>
                    </h4>
                    <p>Бесплатная доставка при заказе от $99.00</p>
                    <button
                      className="btn22"
                      style={{
                        fontSize: "17px",
                        width: "138px",
                        height: "40px",
                      }}
                    >
                      Купить сейчас
                    </button>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <h4 style={{ fontSize: "45px" }}>Коллекция стиля жизни</h4>
                    <h1 style={{ fontSize: "65px" }}>Женщины</h1>
                    <h4>
                      СКИДКИ ДО{" "}
                      <span
                        style={{ fontSize: "24px", color: "rgb(233, 69, 96)" }}
                      >
                        -30%
                      </span>
                    </h4>
                    <p>Бесплатная доставка при заказе от $99.00</p>
                    <button
                      className="btn22"
                      style={{
                        fontSize: "17px",
                        width: "138px",
                        height: "40px",
                      }}
                    >
                      Купить сейчас
                    </button>
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <div className="container12">
              {/* <div className="slider middle">
                <div className="slides">
                  <input type="radio" name="r" id="r1" checked />
                  <input type="radio" name="r" id="r2" />

                  <div
                    className="slide s1"
                    style={{
                      color: "rgb(43, 52, 69)",
                      backgroundImage:
                        'url("https://bonik-react.vercel.app/assets/images/banners/banner-15.jpg")',
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className="slide"
                    style={{
                      color: "rgb(43, 52, 69)",
                      backgroundImage:
                        'url("https://bonik-react.vercel.app/assets/images/banners/banner-25.jpg")',
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="navigation">
                  <label htmlFor="r1" className="bar"></label>
                  <label htmlFor="r2" className="bar"></label>
                </div>
              </div> */}
              {/* <div>
                <div
                  style={{
                    color: "rgb(43, 52, 69)",
                    marginTop: "90px",
                    paddingTop: "40px",
                    paddingLeft: "20px",
                    width: "285px",
                    height: "230px",
                    backgroundColor: "#000",
                    marginLeft: "870px",
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      'url("https://bonik-react.vercel.app/assets/images/banners/banner-17.jpg")',
                  }}
                >
                  <p>NEW ARRIVALS</p>
                  <h4>
                    SUMMER <br />
                    SALE 20% OFF <br />{" "}
                    <span style={{ fontSize: "15px" }}>Shop Now</span>
                  </h4>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    color: "rgb(43, 52, 69)",
                    paddingTop: "40px",
                    paddingLeft: "20px",
                    width: "285px",
                    height: "230px",
                    backgroundColor: "#000",
                    marginLeft: "870px",
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      'url("https://bonik-react.vercel.app/assets/images/banners/banner-16.jpg")',
                  }}
                >
                  <p>GAMING 4K</p>
                  <h4>
                    DESKTOPS &<br />
                    LAPTOPS <br />{" "}
                    <span style={{ fontSize: "15px" }}>Shop Now</span>
                  </h4>
                </div>
              </div> */}
            </div>
          </div>
        )}

        {searchVisible && (
          <div className="section2">
            <div className="section2-cards">
              <div className="section2-card">
                <div className="section2-img">
                  <img src={Macbook} alt="" />
                </div>
                <Link to={"/laptops"}>
                  <button className="section2-btn">
                    <h5>Ноутбуки</h5>
                  </button>
                </Link>
              </div>
              <div className="section2-card">
                <div className="section2-img">
                  <img src={Mice} alt="" />
                </div>
                <Link to={"/mice"}>
                  <button className="section2-btn">
                    <h5>Мышки</h5>
                  </button>
                </Link>
              </div>
              <div className="section2-card">
                <div className="section2-img">
                  <img src={Keyboards} alt="" />
                </div>
                <Link to={"/keyboards"}>
                  <button className="section2-btn">
                    <h5>Клавиатуры</h5>
                  </button>
                </Link>
              </div>
              <div className="section2-card">
                <div className="section2-img">
                  <img src={Airpodspromax} alt="" />
                </div>
                <Link to={"/headphones"}>
                  <button className="section2-btn">
                    <h5>Наушники</h5>
                  </button>
                </Link>
              </div>
              <div className="section2-card">
                <div className="section2-img">
                  <img src={Iphone} alt="" />
                </div>
                <Link to={"/phones"}>
                  <button className="section2-btn">
                    <h5>Телефоны</h5>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="Card">
          <div className="container1">
            {filteredUsers.map((item, index) => (
              <div key={index} className="map">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
                <span>{item.description}</span>
                <p className="cost">${item.price}</p>
                {localStorage.getItem("token") || token === "admin" ? (
                  ""
                ) : (
                  ""
                )}
                {localStorage.getItem("token") || token === "admin" ? (
                  <button
                    onClick={() => addcard2(item)}
                    disabled={
                      cards2.some((cardItem2) => cardItem2.id == item.id)
                        ? true
                        : false
                    }
                    className={`${
                      cards2.some((cardItem2) => cardItem2.id == item.id)
                        ? "heart2-btn"
                        : "heart2-btn"
                    }`}
                  >
                    <i
                      class={`${
                        cards2.some((cardItem2) => cardItem2.id == item.id)
                          ? "fa-solid fa-heart heart2"
                          : "fa-regular fa-heart heart2"
                      }`}
                    ></i>
                  </button>
                ) : (
                  ""
                )}
                {/* "fa-regular fa-heart heart2" */}
              </div>
            ))}
          </div>
        </div>

        <footer className="footer">
          <div className="container-footer">
            <ul>
              <li>
                <img
                  src="https://bonik-react.vercel.app/assets/images/logo.svg"
                  alt=""
                />
              </li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Auctor libero id et, in gravida. Sit diam duis mauris <br />{" "}
                nulla cursus. Erat et lectus vel ut sollicitudin elit at <br />{" "}
                amet.
              </p>
              <div className="google-play app-store">
                <div class="sc-19ecb654-0 sc-f2642c76-0 fWfugU dGfhAS">
                  <a href="/" target="_blank" rel="noreferrer noopener">
                    <div
                      color="white"
                      display="flex"
                      cursor="pointer"
                      class="sc-19ecb654-0 iA-dmUE"
                    >
                      <div
                        variant="medium"
                        defaultcolor="auto"
                        class="sc-8b9ddfad-0 fXCcBh"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="injected-svg"
                            data-src="/assets/images/icons/play-store.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <g clip-path="url(#clip0-201)">
                              <path
                                d="M17.9236 8.23227C15.1356 6.67287 10.6607 4.16885 3.71978 0.282486C3.25183 -0.0265614 2.71342 -0.0670615 2.24823 0.090392L14.1569 11.999L17.9236 8.23227Z"
                                fill="#32BBFF"
                              ></path>
                              <path
                                d="M2.24824 0.090332C2.16105 0.119863 2.07621 0.155488 1.99507 0.19852C1.48137 0.476395 1.10388 1.0111 1.10388 1.68737V22.3105C1.10388 22.9868 1.48132 23.5215 1.99507 23.7993C2.07607 23.8423 2.16087 23.8781 2.24796 23.9078L14.1568 11.999L2.24824 0.090332Z"
                                fill="#32BBFF"
                              ></path>
                              <path
                                d="M14.1569 11.999L2.24799 23.9079C2.71331 24.0665 3.25172 24.0291 3.71982 23.7155C10.451 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8512 15.8121 17.9272 15.7694L14.1569 11.999Z"
                                fill="#32BBFF"
                              ></path>
                              <path
                                d="M1.10388 11.999V22.3106C1.10388 22.9869 1.48132 23.5216 1.99507 23.7994C2.07607 23.8424 2.16087 23.8782 2.24796 23.9079L14.1568 11.999H1.10388Z"
                                fill="#2C9FD9"
                              ></path>
                              <path
                                d="M3.71978 0.282559C3.16407 -0.0843794 2.50876 -0.0739263 1.99506 0.198699L13.9761 12.1798L17.9235 8.23234C15.1356 6.67295 10.6607 4.16893 3.71978 0.282559Z"
                                fill="#29CC5E"
                              ></path>
                              <path
                                d="M13.9762 11.8184L1.99506 23.7994C2.50881 24.072 3.16407 24.0877 3.71978 23.7155C10.4509 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8511 15.8121 17.9271 15.7694L13.9762 11.8184Z"
                                fill="#D93F21"
                              ></path>
                              <path
                                d="M22.8961 11.9989C22.8961 11.4275 22.6078 10.8509 22.0363 10.5311C22.0363 10.5311 20.9676 9.93479 17.6919 8.10254L13.7955 11.9989L17.6957 15.8992C20.9355 14.0801 22.0363 13.4667 22.0363 13.4667C22.6078 13.147 22.8961 12.5703 22.8961 11.9989Z"
                                fill="#FFD500"
                              ></path>
                              <path
                                d="M22.0363 13.4669C22.6078 13.1471 22.8961 12.5704 22.8961 11.999H13.7955L17.6957 15.8993C20.9355 14.0802 22.0363 13.4669 22.0363 13.4669Z"
                                fill="#FFAA00"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0-201">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="sc-19ecb654-0 bCMETd">
                        <div
                          font-size="8px"
                          font-weight="600"
                          class="sc-db80def1-0 cKnyZZ"
                        >
                          Get it on
                        </div>
                        <div
                          font-size="14px"
                          font-weight="900"
                          class="sc-db80def1-0 eDKxmX"
                        >
                          Google Play
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" target="_blank" rel="noreferrer noopener">
                    <div
                      color="white"
                      display="flex"
                      cursor="pointer"
                      class="sc-19ecb654-0 iA-dmUE"
                    >
                      <div
                        variant="medium"
                        defaultcolor="auto"
                        class="sc-8b9ddfad-0 fXCcBh"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="injected-svg"
                            data-src="/assets/images/icons/app-store.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <path
                              d="M19.0781 24H4.92188C2.20795 24 0 21.792 0 19.0781V4.92188C0 2.20795 2.20795 0 4.92188 0H19.0781C21.792 0 24 2.20795 24 4.92188V19.0781C24 21.792 21.792 24 19.0781 24Z"
                              fill="#00C3FF"
                            ></path>
                            <path
                              d="M19.0781 0H12V24H19.0781C21.792 24 24 21.792 24 19.0781V4.92188C24 2.20795 21.792 0 19.0781 0Z"
                              fill="#00AAF0"
                            ></path>
                            <path
                              d="M7.38978 18.4929C7.17299 18.8684 6.77825 19.0785 6.37292 19.0786C6.17422 19.0786 5.97303 19.0281 5.78895 18.9218C5.22936 18.5988 5.03694 17.8807 5.36 17.3211L5.59049 16.9219H8.29681L7.38978 18.4929Z"
                              fill="white"
                            ></path>
                            <path
                              d="M5.17969 15.984C4.53352 15.984 4.00781 15.4583 4.00781 14.8122C4.00781 14.166 4.53352 13.6403 5.17969 13.6403H7.48491L10.6468 8.1637L9.78989 6.67945C9.46683 6.11985 9.6592 5.40173 10.2188 5.07862H10.2188C10.7784 4.75556 11.4966 4.94803 11.8196 5.50757L12 5.81999L12.1804 5.50762C12.5036 4.94798 13.2217 4.7556 13.7812 5.07867C14.0522 5.23518 14.2462 5.48788 14.3272 5.79023C14.4082 6.09257 14.3666 6.40842 14.2101 6.67949L10.1912 13.6403H12.7262L14.0794 15.984H5.17969Z"
                              fill="white"
                            ></path>
                            <path
                              d="M18.8203 15.9844H17.8682L18.6399 17.3211C18.963 17.8806 18.7706 18.5988 18.2111 18.9219C18.0304 19.0261 17.83 19.0794 17.6269 19.0794C17.5251 19.0794 17.4228 19.066 17.3217 19.039C17.0194 18.9579 16.7667 18.764 16.6101 18.4929L12.5412 11.4453L13.8943 9.10156L16.5151 13.6407H18.8203C19.4665 13.6407 19.9922 14.1664 19.9922 14.8126C19.9922 15.4587 19.4665 15.9844 18.8203 15.9844Z"
                              fill="#F2F2F2"
                            ></path>
                            <path
                              d="M12 13.6406V15.9844H14.0794L12.7262 13.6406H12Z"
                              fill="#F2F2F2"
                            ></path>
                            <path
                              d="M14.3272 5.7907C14.2461 5.48836 14.0522 5.23561 13.7812 5.07914C13.2217 4.75608 12.5035 4.9484 12.1804 5.50809L12 5.82047V10.508L14.2101 6.67996C14.3666 6.40889 14.4082 6.09309 14.3272 5.7907Z"
                              fill="#F2F2F2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="sc-19ecb654-0 bCMETd">
                        <div
                          font-size="8px"
                          font-weight="600"
                          class="sc-db80def1-0 cKnyZZ"
                        >
                          Download on the
                        </div>
                        <div
                          font-size="14px"
                          font-weight="900"
                          class="sc-db80def1-0 eDKxmX"
                        >
                          App Store
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li>Customer Care</li>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>
                70 Washington Square South, New York, <br /> NY 10012, United
                States
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
              <li></li>
            </ul>
          </div>
        </footer>
      </div>

      {/* <div className="App-t">
              <div className="cintainer-big">
              <div className="Navbar">
                  <div className="container11">
                      <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
                      <div className="inp">
                      <input onClick={handleSearchClick} onChange={(event) => setValue(event.target.value)} type="text"  placeholder="Tavarlarni izlash" />
                      </div>
                  </div>
                  <div className="navbar-container">
                  
                  
                  
                  {   
                      token !== "admin"?
                      <>
                      <Link style={{textDecoration:"none"}} to={'/'}>
                      <div style={{display:"flex",backgroundColor:"#fff",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none", color:"#333"}}>
                          <i class="fa-solid fa-house"></i> Home
                      </div>
                      </Link>
                      <div className="dropdown-container">
                        <button onClick={handleDropdownClick}><i class="fa-solid fa-bars"></i> Category</button>
                        {showDropdown && (
                          <div className="dropdown-content">
                            <p>Смартфоны и гаджеты</p>
                            <p>Ноутбуки и компьютеры</p>
                            <p>ТВ и проекторы</p>
                            <p>Аудиотехника</p>
                            <p>Техника для кухни</p>
                            <p>Техника для дома</p>
                            <p>Красота и здоровье</p>
                          </div>
                        )}
                      </div>
                      <Link className="cards" style={{textDecoration:"none", color:"black"}} to={'/card'}>
                          <div className="i1">
                              <i class="fa-solid fa-cart-shopping"></i>корзина
                          </div>
                          <div className={JSON.parse(localStorage.getItem('card'))?.length>0?"notification":""}>{JSON.parse(localStorage.getItem('card'))?.length?JSON.parse(localStorage.getItem('card'))?.length:""}</div>
                      </Link>
                      <Link className="cards2"style={{textDecoration:"none", color:"black"}} to={'/favourite'}>
                          <div >
                          <div className="i2" style={{marginTop:"7px"}}>
                              <i class={JSON.parse(localStorage.getItem('card2'))?.length>0?"fa-solid fa-heart ":"fa-regular fa-heart "} ></i>Избранное
                              <div className={JSON.parse(localStorage.getItem('card2'))?.length>0?"notification":""}>{JSON.parse(localStorage.getItem('card2'))?.length?JSON.parse(localStorage.getItem('card2'))?.length:""}</div>
                          </div>
                          </div>
                      </Link>
                      </>:""
                  }
                  {
                    token ? (
                        <button onClick={logout} className="btn3">
                        <i className="fa-solid fa-user-slash"></i>
                      </button>
                    ) : (
                      <Link to={'/login'}>
                        <button className="btn3">
                          <i className="fa-solid fa-user"></i>
                        </button>
                      </Link>
                    )
                  }
              
                  {
                      token === "admin" ? <Link to={'/add-product'}><button className="btn33">Add</button></Link> : ""
                  } 
                  </div>
              
              </div>
              {searchVisible &&(
              
              
                  
          <div className="container5555">
              <div className="container12">
                  <div className="slider middle" style={{display:"none"}} >
                      <div className="slides">
                          <input type="radio" name="r" id="r1" checked/>
                          <input type="radio" name="r" id="r2" />
              
                          <div className="slide s1" style={{color:"rgb(43, 52, 69)"}}>
                              <h4 style={{fontSize:"35px"}}>Lifestyle collection</h4>
                              <h1 style={{fontSize:"55px"}}>Men</h1>
                              <h4>SALE UP TO <span style={{fontSize:"14px",color:"rgb(233, 69, 96)"}}>30% OFF</span></h4>
                              <p>Get Free Shipping on orders over $99.00</p>
                              <button className="btn22" style={{fontSize:"17px",width:"118px",height:"40px"}}>shop Now</button>
                          </div>
                          <div className="slide" style={{color:"rgb(43, 52, 69)"}}>
                              <h4 style={{fontSize:"35px"}}>Lifestyle collection</h4>
                              <h1 style={{fontSize:"55px"}}>Women</h1>
                              <h4>SALE UP TO <span style={{fontSize:"14px",color:"rgb(233, 69, 96)"}}>30% OFF</span></h4>
                              <p>Get Free Shipping on orders over $99.00</p>
                              <button className="btn22" style={{fontSize:"17px",width:"118px",height:"40px"}}>shop Now</button>
                          </div>
                      </div>
                      <div className="navigation">
                          <label htmlFor="r1" className="bar"></label>
                          <label htmlFor="r2" className="bar"></label>
                      </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                      <div style={{color:"rgb(43, 52, 69)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" ,width:"285px",height:"230px",backgroundColor:"#000",marginLeft:"570px",backgroundSize:"100% 100%",backgroundImage:'url("https://bonik-react.vercel.app/assets/images/banners/banner-17.jpg")'}}>
                          <p>NEW ARRIVALS</p>
                          <h4>SUMMER <br />
                          SALE 20% OFF <br /> <span style={{fontSize:"15px"}}>Shop Now</span></h4>
                      </div>
                      <div style={{color:"rgb(43, 52, 69)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" ,width:"285px",height:"230px",backgroundColor:"#000",backgroundSize:"100% 100%",backgroundImage:'url("https://bonik-react.vercel.app/assets/images/banners/banner-16.jpg")'}}>
                          <p>GAMING 4K</p>
                          <h4>DESKTOPS &<br />
                          LAPTOPS <br /> <span style={{fontSize:"15px"}}>Shop Now</span></h4>
                      </div>
                  </div>
              </div>
          </div>
          )}


          {searchVisible &&(
          <div className="section2">
              <div className="section2-cards">
                  <div className="section2-card">
                      <div className="section2-img">
                          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-3.jpg&w=1920&q=75" alt="" />
                      </div>
                      <button className="section2-btn">Gaming</button>
                  </div>
                  <div className="section2-card">
                      <div className="section2-img">
                          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-2.jpg&w=1920&q=75" alt="" />
                      </div>
                      <button className="section2-btn">Sports</button>
                  </div>
              </div>
              <div className="section2-cards">
                  <div className="section2-card">
                      <div className="section2-img">
                          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-5.jpg&w=1920&q=75" alt="" />
                      </div>
                      <button className="section2-btn">Fashion</button>
                  </div>
                  <div className="section2-card">
                      <div className="section2-img">
                          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-4.jpg&w=1920&q=75" alt="" />
                      </div>
                      <button className="section2-btn">Furniture</button>
                  </div>
              </div>
          </div>
          )}
          
          

          <div className="Card">
              <div className='container1'>
                  {filteredUsers.map((item,index)=>(
                  <div key={index} className='map'>
                      <img src={item.img} alt="" />   
                      <p>{item.title}</p>
                      <span>{item.description}</span>
                      <p className='cost'>{item.price}</p>
                      {
                          localStorage.getItem('token')|| token === "admin"?
                          <button onClick={()=>addcard(item)} 
                          disabled={cards.some(cardItem => cardItem.id == item.id)?true:false}
                          className={`${cards.some(cardItem => cardItem.id == item.id)?"btn2":"btn1"}`}>
                          <i class="fa-solid fa-cart-shopping"></i>
                          {`${cards.some(cardItem => cardItem.id == item.id)?"добовлено":"в карзину"}`}
                          </button> : ""
                      }
                      {   
                          localStorage.getItem('token')|| token === "admin"?
                          <button onClick={()=>addcard2(item)}
                          disabled={cards2.some(cardItem2 => cardItem2.id == item.id)?true:false}
                          className={`${cards2.some(cardItem2 => cardItem2.id == item.id)?"heart2-btn":"heart2-btn"}`}>
                          <i class="fa-regular fa-heart heart2"></i>
                          </button> : ""
                      }
                  </div>
              ))}
              </div>
          </div> 

          <footer>
              <div className="container-footer">
              <ul style={{display:"flex",flexDirection:"column",gap:"30px",alignItems:"start",justifyContent:" space-between"}}>
              <ul>
                  <li><img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" /></li>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing  elit. Auctor <br /> libero id et, in gravida. Sit diam duis <br /> mauris nulla cursus. Erat et lectus<br /> vel ut sollicitudin elit at amet.</p>
                  <div className="google-play app-store">
                  <div class="sc-19ecb654-0 sc-f2642c76-0 fWfugU dGfhAS"><a href="/" target="_blank" rel="noreferrer noopener"><div color="white" display="flex" cursor="pointer" class="sc-19ecb654-0 iA-dmUE"><div variant="medium" defaultcolor="auto" class="sc-8b9ddfad-0 fXCcBh"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/play-store.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0-201)">
                      <path d="M17.9236 8.23227C15.1356 6.67287 10.6607 4.16885 3.71978 0.282486C3.25183 -0.0265614 2.71342 -0.0670615 2.24823 0.090392L14.1569 11.999L17.9236 8.23227Z" fill="#32BBFF"></path>
                      <path d="M2.24824 0.090332C2.16105 0.119863 2.07621 0.155488 1.99507 0.19852C1.48137 0.476395 1.10388 1.0111 1.10388 1.68737V22.3105C1.10388 22.9868 1.48132 23.5215 1.99507 23.7993C2.07607 23.8423 2.16087 23.8781 2.24796 23.9078L14.1568 11.999L2.24824 0.090332Z" fill="#32BBFF"></path>
                      <path d="M14.1569 11.999L2.24799 23.9079C2.71331 24.0665 3.25172 24.0291 3.71982 23.7155C10.451 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8512 15.8121 17.9272 15.7694L14.1569 11.999Z" fill="#32BBFF"></path>
                      <path d="M1.10388 11.999V22.3106C1.10388 22.9869 1.48132 23.5216 1.99507 23.7994C2.07607 23.8424 2.16087 23.8782 2.24796 23.9079L14.1568 11.999H1.10388Z" fill="#2C9FD9"></path>
                      <path d="M3.71978 0.282559C3.16407 -0.0843794 2.50876 -0.0739263 1.99506 0.198699L13.9761 12.1798L17.9235 8.23234C15.1356 6.67295 10.6607 4.16893 3.71978 0.282559Z" fill="#29CC5E"></path>
                      <path d="M13.9762 11.8184L1.99506 23.7994C2.50881 24.072 3.16407 24.0877 3.71978 23.7155C10.4509 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8511 15.8121 17.9271 15.7694L13.9762 11.8184Z" fill="#D93F21"></path>
                      <path d="M22.8961 11.9989C22.8961 11.4275 22.6078 10.8509 22.0363 10.5311C22.0363 10.5311 20.9676 9.93479 17.6919 8.10254L13.7955 11.9989L17.6957 15.8992C20.9355 14.0801 22.0363 13.4667 22.0363 13.4667C22.6078 13.147 22.8961 12.5703 22.8961 11.9989Z" fill="#FFD500"></path>
                      <path d="M22.0363 13.4669C22.6078 13.1471 22.8961 12.5704 22.8961 11.999H13.7955L17.6957 15.8993C20.9355 14.0802 22.0363 13.4669 22.0363 13.4669Z" fill="#FFAA00"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0-201">
                      <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                      </defs>
                      </svg></div></div><div class="sc-19ecb654-0 bCMETd"><div font-size="8px" font-weight="600" class="sc-db80def1-0 cKnyZZ">Get it on</div><div font-size="14px" font-weight="900" class="sc-db80def1-0 eDKxmX">Google Play</div></div></div></a><a href="/" target="_blank" rel="noreferrer noopener"><div color="white" display="flex" cursor="pointer" class="sc-19ecb654-0 iA-dmUE"><div variant="medium" defaultcolor="auto" class="sc-8b9ddfad-0 fXCcBh"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/app-store.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <path d="M19.0781 24H4.92188C2.20795 24 0 21.792 0 19.0781V4.92188C0 2.20795 2.20795 0 4.92188 0H19.0781C21.792 0 24 2.20795 24 4.92188V19.0781C24 21.792 21.792 24 19.0781 24Z" fill="#00C3FF"></path>
                      <path d="M19.0781 0H12V24H19.0781C21.792 24 24 21.792 24 19.0781V4.92188C24 2.20795 21.792 0 19.0781 0Z" fill="#00AAF0"></path>
                      <path d="M7.38978 18.4929C7.17299 18.8684 6.77825 19.0785 6.37292 19.0786C6.17422 19.0786 5.97303 19.0281 5.78895 18.9218C5.22936 18.5988 5.03694 17.8807 5.36 17.3211L5.59049 16.9219H8.29681L7.38978 18.4929Z" fill="white"></path>
                      <path d="M5.17969 15.984C4.53352 15.984 4.00781 15.4583 4.00781 14.8122C4.00781 14.166 4.53352 13.6403 5.17969 13.6403H7.48491L10.6468 8.1637L9.78989 6.67945C9.46683 6.11985 9.6592 5.40173 10.2188 5.07862H10.2188C10.7784 4.75556 11.4966 4.94803 11.8196 5.50757L12 5.81999L12.1804 5.50762C12.5036 4.94798 13.2217 4.7556 13.7812 5.07867C14.0522 5.23518 14.2462 5.48788 14.3272 5.79023C14.4082 6.09257 14.3666 6.40842 14.2101 6.67949L10.1912 13.6403H12.7262L14.0794 15.984H5.17969Z" fill="white"></path>
                      <path d="M18.8203 15.9844H17.8682L18.6399 17.3211C18.963 17.8806 18.7706 18.5988 18.2111 18.9219C18.0304 19.0261 17.83 19.0794 17.6269 19.0794C17.5251 19.0794 17.4228 19.066 17.3217 19.039C17.0194 18.9579 16.7667 18.764 16.6101 18.4929L12.5412 11.4453L13.8943 9.10156L16.5151 13.6407H18.8203C19.4665 13.6407 19.9922 14.1664 19.9922 14.8126C19.9922 15.4587 19.4665 15.9844 18.8203 15.9844Z" fill="#F2F2F2"></path>
                      <path d="M12 13.6406V15.9844H14.0794L12.7262 13.6406H12Z" fill="#F2F2F2"></path>
                      <path d="M14.3272 5.7907C14.2461 5.48836 14.0522 5.23561 13.7812 5.07914C13.2217 4.75608 12.5035 4.9484 12.1804 5.50809L12 5.82047V10.508L14.2101 6.67996C14.3666 6.40889 14.4082 6.09309 14.3272 5.7907Z" fill="#F2F2F2"></path></svg></div></div><div class="sc-19ecb654-0 bCMETd"><div font-size="8px" font-weight="600" class="sc-db80def1-0 cKnyZZ">Download on the</div><div font-size="14px" font-weight="900" class="sc-db80def1-0 eDKxmX">App Store</div></div></div></a></div>
                  </div>
              </ul>
              <ul>
                  <li>Customer Care</li>
                  <li>Help Center</li>
                  <li>How to Buy</li>
                  <li>Track Your Order</li>
                  <li>Corporate & Bulk Purchasing</li>
                  <li>Returns & Refunds</li>
              </ul>
              </ul>
              <ul style={{display:"flex",flexDirection:"column",gap:"30px",alignItems:"start",justifyContent:" space-between"}}>
              <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Our Stores</li>
                  <li>Our Cares</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
              </ul>
              <ul style={{marginTop:"180px"}}>
                  <li>Contact Us</li>
                  <li>70 Washington Square South, New York, <br /> NY 10012, United States</li>
                  <li>Email: uilib.help@gmail.com</li>
                  <li>Phone: +1 1123 456 780</li>
                  <li></li>
              </ul>
              </ul>
              </div>
          </footer>
          
          </div> */}
    </div>
  );
}

export default App;
