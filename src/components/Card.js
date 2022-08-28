import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { link, name, _id, owner: {_id: ownerId} } = card;
  const likes = card.likes.map((item) => item._id);

  const isOwn = ownerId === currentUser?._id;
  const isLiked = likes.includes(currentUser?._id);

  function handleLikes() {
    if(likes.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(_id, isLiked);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  
  // const cardLikeButtonClassName = `...`;
  // const cardDeleteButtonClassName = `card__delete-button ${
  //   isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  // }`;

  return (
    <article className="element">
      <button
        onClick={handleDeleteClick}
        type="button"
        className={isOwn ? "element__delete-button" : "element__delete-button_disabled"}
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
            className= {`element__heart-button ${isLiked ? "element__heart-button_dark" : ""}`}
            onClick={handleLikeClick}
          ></button>
          <p
            className={`${handleLikes() ? "element__counter_active" : "element__counter"}`}
          >
            {likes.length}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
