import React from 'react';
// import Card from ........;

function Main(props) {
  const {onEditAvatar, onEditProfile, onAddPlace} = props;

  return (
    <main className="content">

        <section className="profile page__profile">
          <button 
            onClick={onEditAvatar} 
            aria-label="Править" 
            type="button" 
            className="profile__button-avatar">
          {props.title}
          </button>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button 
              onClick={onEditProfile} 
              aria-label="Редактировать"
              type="button" 
              className="profile__button-pen">
            </button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button 
            onClick={onAddPlace} 
            aria-label="Добавить"
            type="button" 
            className="profile__button-cross">
          </button>
        </section>

        <section className="elements page__elements">
        </section>

      </main>
  );
}

export default Main;
