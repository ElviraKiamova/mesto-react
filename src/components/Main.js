import React, {
  useState,
  useEffect
} from 'react';
import api from '../utils/Api';
import Card from '../components/Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main(props) {
  const {
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

 
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.toggleLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  } 

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
      `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    ); 
    api.deleteCard();
  } 

  const searchCardsApiResults = () => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    searchCardsApiResults();
  }, []);



  return (
    <main className = "content">
      <section className = "profile page__profile">
        <button 
          style = {{backgroundImage: `url(${currentUser.avatar})`}}
          onClick = {onEditAvatar}
          aria-label = "Править"
          type = "button"
          className = "profile__button-avatar">
          {props.title}
        </button> 
        <div className = "profile__info" >
          <h1 className = "profile__title" >
            {currentUser.name}
          </h1>
          <button 
            onClick = {onEditProfile}
            aria-label = "Редактировать"
            type = "button"
            className = "profile__button-pen">
          </button>
          <p className = "profile__subtitle" >
            {currentUser.about}
          </p>
        </div>
        <button 
          onClick = {onAddPlace} 
          aria-label = "Добавить" 
          type = "button" 
          className = "profile__button-cross">
        </button> 
      </section> 
    
      <section className = "elements page__elements"> 
       {cards.length && cards.map(
         (data) => (
           <Card 
             card = {data} 
              key = {data._id} 
              name = {data.name} 
              link = {data.link} 
              onCardClick = {onCardClick}
              onCardLike = {handleCardLike}
              onCardDelete = {handleCardDelete}
              />
          )
        )
      } 
      </section>
    </main>
  );
}

export default Main;