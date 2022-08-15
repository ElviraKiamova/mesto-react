
import React from 'react'

function Card(card) {

  const [heart, setHeart] = React.useState(0);
  const handleHeartClick = () => {
      setHeart(heart + 1)
  };

  function handleClick() {
    card.onCardClick(card);
  }  


  return (
      <article className="element" data-id="">
          <button 
            type="button" 
            className="element__delete-button" 
          ></button>
          <img className="element__image" alt={card.name} src={card.link} onClick={handleClick} />
          <div src="#" className="element__block">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__container-heart">
              <button 
                type="button" 
                className="element__heart-button"
                onClick={handleHeartClick}
              >
              </button>
              <p className="element__counter">
                {heart}
              </p>
            </div>
          </div>
        </article>        
  );
}

export default Card;