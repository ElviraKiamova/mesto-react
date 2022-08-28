import React from "react";
// import { useParams } from "react-router-dom";

function ImagePopup({ card, name, isOpen, onClose }) {

  


  return (
    <section
      className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="popup__box-picture"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Закрыть"
          type="button"
          className="popup__button-cross"
          onClick={onClose}
        ></button>
        <img
          src={`${card?.link || "#"}`}
          alt={`${card?.name ?? " "}`}
          className="popup__picture"
        />
        <p className="popup__text-picture">{`${card?.name ?? " "}`}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
