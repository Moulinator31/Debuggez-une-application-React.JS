import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";



import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  
  const nextCard = () => {
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1 < byDateDesc?.length ? prevIndex + 1 : 0));
    }, 5000);
  };
  
  useEffect(() => {
    nextCard();
  },);
  return ( 
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.date}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{(new Date(event.date)).toLocaleString("default", { month: "long"})}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination"> 
              {byDateDesc.map((_, radioIdx) => (
                <input
                // Modification "key" pour quelle corresponde à la slide en cours
                  key={_.date}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  readOnly
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
