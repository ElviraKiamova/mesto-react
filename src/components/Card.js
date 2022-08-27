import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {

  const [heart, setHeart] = React.useState();

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
); 
  
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `...`; 


  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className = "element" data-id = "">
      <button onClick = {handleDeleteClick} type = "button" className = "element__delete-button" ></button> 
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
            onClick = {handleLikeClick}
            >
          </button> 
          <p className = "element__counter">{heart}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;