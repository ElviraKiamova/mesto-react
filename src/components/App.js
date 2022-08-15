import React, { useState } from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);


const handleCardClick = (card) => {
  setSelectedCard(card);
  };


const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

const handleEditProfileClick = () => {
   setIsEditProfilePopupOpen(true);
  };

const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

const closeAllPopups = () => {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard(false);
  };



  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
           isOpen={isEditProfilePopupOpen}
           onClose={closeAllPopups}
           name="profile"
           title="Редактировать профиль"
         >
          <input 
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

         <PopupWithForm 
           isOpen={isAddPlacePopupOpen}
           onClose={closeAllPopups}
           name="open-card"
           title="Новое место"
         >
          <input 
          id = "input-card" 
          type="text" 
          name="input-name" 
          className="popup__input-form popup__input-form_position" 
          placeholder="Название" 
          minLength="2" 
          maxLength = "30" 
          required/>
          <span id="error-input-card" className="error-message"></span>
          <input 
            id = "input-link" 
            type="url" 
            name="input-about" 
            className="popup__input-form popup__input-form_link" 
            placeholder="Ссылка на картинку" 
            required/>
          <span id="error-input-link" className="error-message"></span>
         </PopupWithForm>

         <PopupWithForm 
           isOpen={isEditAvatarPopupOpen}
           onClose={closeAllPopups}
           name="new-avatar"
           title="Обновить аватар"
         >
          <input 
            id = "input-avatar" 
            type="url" 
            name="input-avatar" 
            className="popup__input-form popup__input-form_link" 
            placeholder="Ссылка на аватар" 
            required/>
          <span id="error-input-avatar" className="error-message"></span>
         </PopupWithForm>

         <PopupWithForm 
          // isOpen={isEditDeletePopupOpen}
           onClose={closeAllPopups}
           name="card-delete"
           title="Вы уверены?"
         />


        <ImagePopup
           isOpen={selectedCard}
           onClose={closeAllPopups}
           name="box-picture"
           card={selectedCard}
         />

      </div>
    </div>
  );
  
}

export default App;

