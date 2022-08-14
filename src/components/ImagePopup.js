

function ImagePopup(props) {

  return (
    <section className={`popup popup_${props.name} ${props.card.isOpen ? "popup_opened" : ''}`}>
        <div className="popup__box-picture">
          <button 
            aria-label="Закрыть"  
            type="button" 
            className="popup__button-cross"
            onClick={() => { props.onClose() }}
          ></button>
          <img src={`${props.card.card.link}`} alt="" className="popup__picture" />
          <p className="popup__text-picture"></p>
        </div>
      </section>
      );
}

export default ImagePopup;