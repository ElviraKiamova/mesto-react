import React, { useState } from 'react'
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App(props) {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState("");
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState("");
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState("");



  const handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector(".popup_new-avatar");
    popupAvatar.classList.add("popup_opened");
  };


 const handleEditProfileClick = () => {
    const popupProfile = document.querySelector(".profile-popup");
    popupProfile.classList.add("popup_opened");
  };


 const handleAddPlaceClick = () => {
    const popupCard = document.querySelector(".popup_open-card");
    popupCard.classList.add("popup_opened");
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
        />
         <PopupWithForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
