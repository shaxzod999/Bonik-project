import "../App.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const token = localStorage.getItem("token");

  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    axios.get("https://bonik-project.onrender.com/products").then((res) => {
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

  const filteredUsers = users.filter(
    (country) =>
      country.title && country.title.toLowerCase().includes(value.toLowerCase())
  );

  const [searchVisible, setSearchVisible] = useState(true);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="App1">
      <div className="cintainer-big1">
        <div className="Navbar">
          <div className="mobileMenuOpen">
            <Link className="logo" to={"/"}>
              <img
                src="https://bonik-react.vercel.app/assets/images/logo.svg"
                alt=""
              />
            </Link>
            <div
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>

          <div className={`container11 ${mobileMenuOpen ? "open" : ""}`}>
            <Link className="logo-2" to={"/"}>
              <img
                src="https://bonik-react.vercel.app/assets/images/logo.svg"
                alt=""
              />
            </Link>
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
                    to="/laptops"
                    onClick={() => setShowDropdown(false)}
                  >
                    <p>Ноутбуки</p>
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

            <div className="inp d2">
              <input
                onClick={handleSearchClick}
                onChange={(event) => setValue(event.target.value)}
                type="text"
                placeholder="Tavarlarni izlash"
              />
            </div>

            <div className="menu-links">
              {token !== "admin" && (
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
              )}
              <Link to="/login">
                <button className="btn3">
                  <i className="fa-solid fa-user"></i>
                </button>
              </Link>
              {token === "admin" && (
                <Link to="/add-product">
                  <button className="btn33">Add</button>
                </Link>
              )}
            </div>

            <div className="inp d1">
              <input
                onClick={handleSearchClick}
                onChange={(event) => setValue(event.target.value)}
                type="text"
                placeholder="Tavarlarni izlash"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="App-t">
        <div className="cintainer-big">
          <div className="Navbar">
            <div className="container11">
              <img
                src="https://bonik-react.vercel.app/assets/images/logo.svg"
                alt=""
              />
              <div className="inp">
                <input
                  onClick={handleSearchClick}
                  onChange={(event) => setValue(event.target.value)}
                  type="text"
                  placeholder="Tavarlarni izlash"
                />
              </div>
            </div>
            <div className="navbar-container">
              <Link style={{ textDecoration: "none" }} to={"/card"}>
                <button
                  style={{
                    display: "flex",
                    backgroundColor: "#fff",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    color: "#333",
                  }}
                >
                  <i class="fa-solid fa-house"></i> Home
                </button>
              </Link>
              <div className="dropdown-container">
                <button onClick={handleDropdownClick}>
                  <i class="fa-solid fa-bars"></i> Category
                </button>
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
              {token ? (
                <button onClick={logout} className="btn3">
                  <i className="fa-solid fa-user-slash"></i>
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn3">
                    <i className="fa-solid fa-user"></i>
                  </button>
                </Link>
              )}

              {token === "admin" ? (
                <Link to={"/add-product"}>
                  <button className="btn33">Add</button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Navbar;
