import React from 'react';

function ImagePopup({card, name, isOpen, onClose}) {

  React.useEffect(() => {
    const closeEsc = (event) => {
    if(event.key === "Escape") {
      onClose();
    }};

    if(isOpen) {
      document.addEventListener("keydown", closeEsc)
    } else {
      document.removeEventListener("keydown", closeEsc)
    }
      

  }, [onClose, isOpen]);

  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ''}`} 
             onClick={onClose} >
        <div className="popup__box-picture">
          <button 
            aria-label="Закрыть"  
            type="button" 
            className="popup__button-cross"
            onClick={onClose}
          ></button>
          <img src={`${card?.link || '#'}`} alt={`${card?.name ?? ' '}`} className="popup__picture" />
          <p className="popup__text-picture">{`${card?.name ?? ' '}`}</p>
        </div>
      </section>
      );
}

export default ImagePopup;