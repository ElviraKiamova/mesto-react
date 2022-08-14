import React from 'react';


function Card({name, link, handleCardClick, handleDeleteClick}) {

  const [heart, setHeart] = React.useState(0);
  const handleHeartClick = () => {
      setHeart(heart + 1)
  };


  return (
    <article className="element" data-id="">
        <button 
          type="button" 
          className="element__delete-button" 
          onClick={handleDeleteClick}></button>
        <img className="element__image" alt="" src={link} onClick={handleCardClick} />
        <div src="#" className="element__block">
          <h2 className="element__title">{name}</h2>
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