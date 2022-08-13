import React from 'react';


function Card({name, link}) {


  const handleCardClick = () => {
  
  };


  return (
    <article className="element" data-id="">
        <button type="button" className="element__delete-button"></button>
        <img className="element__image" alt="" src={link} onClick={handleCardClick} />
        <div src="#" className="element__block">
          <h2 className="element__title">{name}</h2>
          <div className="element__container-heart">
            <button type="button" className="element__heart-button"></button>
            <p className="element__counter">{}</p>
          </div>
        </div>
      </article>
  );
}

export default Card;