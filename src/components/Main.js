import React, { useState, useEffect } from 'react'
import api from '../utils/Api';
;
// import Card from ........;

function Main(props) {
  const {onEditAvatar, onEditProfile, onAddPlace} = props;

  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();


 
  const searchCardsApiResults = () => {
    api.getInitialCards()
    .then(res => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
    
const searchUserApiResults = () => {
  api.getUserInfo()
  .then(res => {
    setUserAvatar(res.avatar);
    setUserName(res.name);
    setUserDescription(res.about);
  })
  .catch((err) => {
    console.log(err);
  });
};

  useEffect(() => {
    searchCardsApiResults();
  }, []);

   useEffect(() => {
    searchUserApiResults();
  }, [userName, userDescription, userAvatar]);


  return (
    <main className="content">

        <section className="profile page__profile">
          <button
            style={{ backgroundImage: `url(${userAvatar})` }} 
            onClick={onEditAvatar} 
            aria-label="Править" 
            type="button" 
            className="profile__button-avatar">
          {props.title}
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button 
              onClick={onEditProfile} 
              aria-label="Редактировать"
              type="button" 
              className="profile__button-pen">
            </button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button 
            onClick={onAddPlace} 
            aria-label="Добавить"
            type="button" 
            className="profile__button-cross">
          </button>
        </section>

        <section className="elements page__elements">
          {cards.map((item, i) => (
      <article key={item.id} className="element" data-id="">
        <button type="button" className="element__delete-button"></button>
        <img className="element__image" alt="" src={item.link}/>
        <div src="#" className="element__block">
          <h2 className="element__title">{item.name}</h2>
          <div className="element__container-heart">
            <button type="button" className="element__heart-button"></button>
            <p className="element__counter">{}</p>
          </div>
        </div>
      </article>))}
        </section>

      </main>
  );
}

export default Main;
