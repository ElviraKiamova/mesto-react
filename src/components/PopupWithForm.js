import React from 'react';



 function PopupWithForm(props) {
  const {title, name, id, onClose, children, isOpen} = props;



  return(
    <section 
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
          <button onClick={onClose} aria-label="Закрыть" type="button" className="popup__button-cross"></button>
        </div>
      </section>
  );
 }

  export default PopupWithForm;


