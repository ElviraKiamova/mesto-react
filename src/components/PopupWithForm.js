import React from 'react';

 function PopupWithForm(props) {
  const {title, name, id, onClose, children, isOpen} = props;

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


  return(
    <section onClick={onClose} 
      className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <form 
            id = {id} 
            name={name} 
            className="popup__form" 
            noValidate
          >
            <h2 className="popup__title">{title}</h2>
            {children}
            <button aria-label="Сохранить" type="submit" className="popup__button-save">Сохранить</button>
          </form>
          <button 
            onClick={onClose} 
            aria-label="Закрыть" 
            type="button" 
            className="popup__button-cross"
          ></button>
        </div>
      </section>
  );
 }

  export default PopupWithForm;


