import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';


function App() {
// const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState("");
// const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState("");
// const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState("");


// получаем информацию о пользователе
  // api.getUserInfo()
  // .then(res => {
  //     console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })

  const closeAllPopups = () => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
  };


  const handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector(".popup_new-avatar");
    // setIsEditAvatarPopupOpen("popup_opened");
    popupAvatar.classList.add("popup_opened");
  };


 const handleEditProfileClick = () => {
    const popupProfile = document.querySelector(".profile-popup");
    popupProfile.classList.add("popup_opened");
  };


 const handleAddPlaceClick = () => {
    const popupCard = document.querySelector(".popup_open-card");
    popupCard.classList.add("popup_opened");
    // api.createCardApi();
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
         <PopupWithForm 
           onClose={closeAllPopups}
         />
        <Footer />
        <PopupWithForm title={""} name={""} id={""}/>
      </div>
    </div>
  );
}

export default App;
