import React from 'react';


 function PopupWithForm(props) {
  // const {title, name} = props;
  return(
    <>
    <section className="popup profile-popup">
        <div className="popup__container">
          <form id = "form-profile" name="formProfileName" className="popup__form popup__form_profile" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input id = "input-name" type="text" name="input-name" className="popup__input-form" placeholder="Введите ваше имя" minLength="2" maxLength = "40" required/>
            <span id="error-input-name" className="error-message"></span>
            <input id = "input-about" type="text" name="input-about" className="popup__input-form" placeholder="Введите вашу работу" minLength="2" maxLength = "200" required/>
            <span id="error-input-about" className="error-message"></span>
            <button aria-label="Сохранить" type="submit" className="popup__button-save popup__button-save_profile">Сохранить</button>
          </form>
          <button aria-label="Закрыть" type="button" className="popup__button-cross"></button>
        </div>
      </section>

      <section className="popup popup_open-card">
        <div className="popup__container">
          <form id = "form-card" name="formCardName" className="popup__form popup__form_save" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <input id = "input-card" type="text" name="input-name" className="popup__input-form popup__input-form_position" placeholder="Название" minLength="2" maxLength = "30" required/>
            <span id="error-input-card" className="error-message"></span>
            <input id = "input-link" type="url" name="input-about" className="popup__input-form popup__input-form_link" placeholder="Ссылка на картинку" required/>
            <span id="error-input-link" className="error-message"></span>
            <button aria-label="Создать" type="submit" className="popup__button-save popup__button-save_create">Создать</button>
          </form>
          <button aria-label="Закрыть" type="button" className="popup__button-cross"></button>
        </div>
      </section>

      <section className="popup popup_card-delete">
        <div className="popup__container">
          <form id = "form-card-delete" name="formCardNameDelete" className="popup__form popup__form_delete-card" noValidate>
            <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
            <button aria-label="Подтвердить" type="submit" className="popup__button-save popup__button-delete-card">Да</button>
          </form>
          <button aria-label="Закрыть" type="button" className="popup__button-cross"></button>
        </div>
      </section>

      <section className="popup popup_new-avatar">
        <div className="popup__container">
          <form id = "form-card-avatar" name="formNewAvatar" className="popup__form popup__form_avatar" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input id = "input-avatar" type="url" name="input-avatar" className="popup__input-form popup__input-form_link" placeholder="Ссылка на аватар" required/>
            <span id="error-input-avatar" className="error-message"></span>
            <button aria-label="Подтвердить" type="submit" className="popup__button-save popup__button-save_conservation">Сохранить</button>
          </form>
          <button aria-label="Закрыть" type="button" className="popup__button-cross"></button>
        </div>
      </section>
    
  </>
  );
 }



  export default PopupWithForm;



//   import React from 'react';

//  function PopupWithForm(props) {
//   const {title, name, id, children, isOpen} = props;
//   return(
//     <section className={`popup popup_type_${name}`}>
//         <div className="popup__container">
//           <form 
//             id = {id} 
//             name={name} 
//             className="popup__form" 
//             noValidate
//           >
//             <h2 className="popup__title">{title}</h2>
//             <input 
//               id = "input-name" 
//               type="text" 
//               name="input-name" 
//               className="popup__input-form" 
//               value="" 
//               placeholder="" 
//               minLength="2" 
//               maxLength = "40" 
//               required
//             />
//             <span id="error-input-name" className="error-message"></span>
//             <input 
//               id = "input-about" 
//               type="text" 
//               name="input-about" 
//               className="popup__input-form" 
//               value="" 
//               placeholder="" 
//               minLength="2" 
//               maxLength = "200" 
//               required
//             />
//             <span id="error-input-about" className="error-message"></span>
//             <button aria-label="Сохранить" type="submit" className="popup__button-save">Сохранить</button>
//           </form>
//           <button aria-label="Закрыть" type="button" className="popup__button-cross"></button>
//         </div>
//       </section>
//   );
//  }

//   export default PopupWithForm;