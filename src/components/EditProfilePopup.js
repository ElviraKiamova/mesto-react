
import React, {useState} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function EditProfilePopup(props) {
  
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const currentUser = React.useContext(CurrentUserContext);

   function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }


  return ( 
    <PopupWithForm
            onSubmit = {handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
          >
            <input 
              value={name} 
              onChange={handleChangeName}
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
              value={description} 
              onChange={handleChangeDescription}
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