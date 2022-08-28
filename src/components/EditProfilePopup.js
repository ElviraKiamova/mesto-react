
import React, { useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function EditProfilePopup({ onUpdateUser, isOpen, onClose, buttonText }) {
  
  const [inputs, setInputs] = useState({ name: "", about: "" });
  const currentUser = React.useContext(CurrentUserContext);

   function handleSubmit(e) {
    onUpdateUser(inputs);
  } 

  React.useEffect(() => {
    if(currentUser.name&&currentUser.about) {
      setInputs({
        name: currentUser.name,
        about: currentUser.about,
      });
    }
  }, [currentUser]); 

  function handleChange(e) {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  }


  return ( 
    <PopupWithForm
            onSubmit = {handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
            name="profile"
            title="Редактировать профиль"
            buttonText={buttonText}
          >
            <input 
              value={inputs.name} 
              onChange={handleChange}
              id = "input-name" 
              type="text" 
              name="input-name" 
              className="popup__input-form" 
              placeholder="Введите ваше имя" 
              minLength="2" 
              maxLength = "40" 
              required/>
            <span id="error-input-name" className="error-message"></span>
            <input 
              value={inputs.about} 
              onChange={handleChange}
              id = "input-about" 
              type="text" 
              name="input-about" 
              className="popup__input-form" 
              placeholder="Введите вашу работу" 
              minLength="2" 
              maxLength = "200" 
              required/>
            <span id="error-input-about" className="error-message"></span>
          </PopupWithForm>
  );
}

export default EditProfilePopup;