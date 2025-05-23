import { useEffect, useState } from "react";
import Navbar from "./Nabar";
import { Link } from "react-router-dom";

const Favourite = () => {
  const cardItem2 = JSON.parse(localStorage.getItem("card2"));
  const [card2, setCard2] = useState(cardItem2);
  const [counts2, setCounts2] = useState(
    card2?.map((item, index) => item.count2)
  );

  useEffect(() => {
    localStorage.setItem("card2", JSON.stringify(card2));
  }, [card2]);

  const decreament = (index) => {
    const newCount = [...counts2];
    if (newCount[index] > 2) {
      newCount[index]--;
      setCounts2(newCount);
      upgradeLocalStorage(index, newCount[index]);
    } else {
      const newCard = [...card2];
      newCard.splice(index, 1);
      setCard2(newCard);
    }
  };

  const upgradeLocalStorage = (index, item) => {
    const upgradeCard = [...card2];
    upgradeCard[index].count2 = item;
    setCard2(upgradeCard);
  };

  return (
    <div className="App">
      <Navbar />
      <h2 className="h2-1">Избранное </h2>
      {
        <div className="Card">
          <div className="container1">
            {card2.map((item, index) => (
              <div className="map">
                <Link to={`/product/${item.id}`}>
                  <div className="card-content">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                    <p className="cost">{item.price}₽</p>
                  </div>
                </Link>
                <button onClick={() => decreament(index)} className="btn1">
                  <i class="fa-solid fa-cart-shopping"></i>удалить
                </button>
                <button onClick={() => addcard2(item)} className="heart2-btn">
                  <i class="fa-solid fa-heart heart2"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Favourite;
