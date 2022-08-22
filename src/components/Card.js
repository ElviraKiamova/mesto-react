import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {

//   const currentUser = React.useContext(CurrentUserContext);

//   const isOwn = props.card.owner._id === currentUser._id;
//   const cardDeleteButtonClassName = (
//   `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
// ); 
  
//   const isLiked = props.card.likes.some(i => i._id === currentUser._id);
//   const cardLikeButtonClassName = `...`; 


  const [heart, setHeart] = React.useState(0);
  const handleHeartClick = () => {
    setHeart(heart + 1)
  };

  function handleClick() {
    props.onCardClick(props.card);
  }


  return (
    <article className = "element" data-id = "">
      <button type = "button" className = "element__delete-button" ></button> 
      <img 
        className = "element__image" 
        alt = {props.card.name} 
        src = {props.card.link} 
        onClick = {handleClick}/> 
      <div className = "element__block">
        <h2 className = "element__title">{props.card.name}</h2>
        <div className = "element__container-heart">
          <button 
            type = "button" 
            className = "element__heart-button" 
            onClick = {handleHeartClick}>
          </button> 
        </div>
        <p className = "element__counter">{heart}</p>
      </div>
    </article>
  );
}

export default Card;