import React from 'react';

function PopupWithForm(props) {
  const {
    title,
    name,
    id,
    onClose,
    children,
    isOpen,
    buttonText,
    onSubmit,
  } = props;





  return (
    <section 
      className = {`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className = "popup__container" >
        <form 
          onSubmit= {onSubmit}
          id = {id}
          name = {name}
          className = "popup__form">
            <h2 className = "popup__title"> {title}</h2>
              {children}
            <button 
              aria-label = "Сохранить"
              className = "popup__button-save" >
                {buttonText}
            </button>
        </form>
        <button 
          onClick = {onClose}
          aria-label = "Закрыть"
          type = "button"
          className = "popup__button-cross"
          >
        </button> 
      </div>
    </section>
  );
}

export default PopupWithForm;