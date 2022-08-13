import React, { useState } from 'react'


function ImagePopup() {

  return (
    <section className="popup popup_big-picture">
        <div className="popup__box-picture">
          <button aria-label="Закрыть"  type="button" className="popup__button-cross"></button>
          <img src="#" alt="" className="popup__picture" />
          <p className="popup__text-picture"></p>
        </div>
      </section>
      );
}

export default ImagePopup;