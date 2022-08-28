import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSelectedCard, setIsSelectedCard] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cards, setCards] = useState([]);



  const searchCardsApiResult = () => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    searchCardsApiResult();
  }, []);


  const searchCardsApiResults = () => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    searchCardsApiResults();
  }, []);

  const handleUpdateUser = () => {
    api
      .editProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      handleUpdateUser();
    }
    setIsSubmitted(false);
  }, [isSubmitted]);

  const isOpen =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard;

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);


  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsSelectedCard(true);
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
    setIsSelectedCard(false);
    setSelectedCard(null);
  };

  function handleCardLike(id, isLiked) {
    api
      .toggleLike(id, isLiked)
      .then((res) => {
        setCards(cards.map((card) => (card._id === res._id ? res : card)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Header />
              <Main
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
              />
              <Footer />
            </Route>

            <Route path="/photos/:_id"></Route>
          </Switch>

          <ImagePopup
            isOpen={isSelectedCard}
            onClose={closeAllPopups}
            name="big-picture"
            card={selectedCard}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}

          />

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="open-card"
            title="Новое место"
            buttonText="Создать"
          >
            <input
              id="input-card"
              type="text"
              name="input-name"
              className="popup__input-form popup__input-form_position"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span id="error-input-card" className="error-message"></span>
            <input
              id="input-link"
              type="url"
              name="input-about"
              className="popup__input-form popup__input-form_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="error-input-link" className="error-message"></span>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="new-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
          >
            <input
              id="input-avatar"
              type="url"
              name="input-avatar"
              className="popup__input-form popup__input-form_link"
              placeholder="Ссылка на аватар"
              required
            />
            <span id="error-input-avatar" className="error-message"></span>
          </PopupWithForm>

          <PopupWithForm
            onClose={closeAllPopups}
            name="card-delete"
            title="Вы уверены?"
            buttonText="Да"
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
