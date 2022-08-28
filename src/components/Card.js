import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ name, link, card, onCardClick, onCardLike, onCardDelete }) {
  const [heart, setHeart] = React.useState();

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `...`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      <button
        onClick={handleDeleteClick}
        type="button"
        className="element__delete-button"
      ></button>
      <img
        className="element__image"
        alt={name}
        src={link}
        onClick={handleClick}
      />
      <div className="element__block">
        <h2 className="element__title">{name}</h2>
        <div className="element__container-heart">
          <button
            type="button"
            className="element__heart-button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__counter">{heart}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
