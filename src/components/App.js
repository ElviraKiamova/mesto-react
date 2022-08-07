import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';


function App() {
  // const [cards, setCards] = useState([]);

  // api.createCardApi();

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

          {/* {cards.map((x) => (
            <Card />
          ))} */}

        <Footer />
        <PopupWithForm />
      </div>
    </div>
  );
}

export default App;
