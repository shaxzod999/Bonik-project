import { useEffect, useState } from "react";
import Success from "../assets/images/Без названия.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Nabar";

const calculateTotalPrice = (item, counts) => {
  return item.price * counts;
};

const Card = () => {
  const cardItem = JSON.parse(localStorage.getItem("card"));
  const [card, setCard] = useState(cardItem);
  const [counts, setCounts] = useState(card?.map((item, index) => item.count));
  const [totalPrices, setTotalPrices] = useState(
    card?.map((item, index) => calculateTotalPrice(item, counts[index]))
  );
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const increament = (index) => {
    const newCount = [...counts];
    newCount[index]++;
    setCounts(newCount);
    upgradeTotalPrice(index, newCount[index]);
    upgradeLocalStorage(index, newCount[index]);
  };

  const upgradeTotalPrice = (index, count) => {
    const newTotalPrice = [...totalPrices];
    newTotalPrice[index] = calculateTotalPrice(card[index], count);
    setTotalPrices(newTotalPrice);
  };

  const decreament = (index) => {
    const newCount = [...counts];
    if (newCount[index] > 1) {
      newCount[index]--;
      setCounts(newCount);
      upgradeLocalStorage(index, newCount[index]);
    } else {
      const newCard = [...card];
      newCard.splice(index, 1);
      setCard(newCard);
      window.location.reload();
    }
  };

  const upgradeLocalStorage = (index, item) => {
    const upgradeCard = [...card];
    upgradeCard[index].count = item;
    setCard(upgradeCard);
  };

  const order = () => {
    localStorage.removeItem("card");
    setStatus(true);
    setTimeout(() => {
      navigate("/");
      setStatus(false);
    }, 2000);
  };

  return (
    <div
      className="container"
      style={{
        marginBottom: "350px",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          borderRadius: "25px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
        }}
      >
        <h3>
          Total Price : {totalPrices?.reduce((acc, price) => acc + price, 0)}$
        </h3>
        {JSON.parse(localStorage.getItem("card"))?.length > 0 ? (
          <button onClick={order} className="btn1">
            order
          </button>
        ) : (
          ""
        )}
      </div>
      {status ? (
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={Success}
            alt=""
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <div style={{ width: "100%", height: "100px" }}>
              {card?.map((item, index) => (
                <div
                  style={{
                    height: "150px",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginBottom: "30px",
                    borderRadius: "25px",
                    gap: "70px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="img">
                    <img
                      style={{ width: "100px", height: "auto" }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <td style={{ fontSize: "19px", fontWeight: "bold" }}>
                      {item.title}
                    </td>
                    <td style={{ color: "rgb(233, 69, 96)" }}>
                      {calculateTotalPrice(item, counts[index])} $
                    </td>
                  </div>
                  <td style={{ fontSize: "19px", fontWeight: "bold" }}>
                    {item.count}
                  </td>
                  <td class="btn-group" role="group" aria-label="Basic example">
                    <button
                      onClick={() => decreament(index)}
                      className="btn-Card1"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increament(index)}
                      className="btn-Card2"
                    >
                      +
                    </button>
                  </td>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
