import React from 'react'

function Card(props) {

  const [heart, setHeart] = React.useState(0);
  const handleHeartClick = () => {
    setHeart(heart + 1)
  };

  function handleClick() {
    props.onCardClick(props.card);
  }


  return (
    <article className = "element" data-id = "">
      <button type = "button" className = "element__delete-button" ></button> 
      <img 
        className = "element__image" 
        alt = {props.card.name} 
        src = {props.card.link} 
        onClick = {handleClick}/> 
      <div className = "element__block">
        <h2 className = "element__title">{props.card.name}</h2>
        <div className = "element__container-heart">
          <button 
            type = "button" 
            className = "element__heart-button" 
            onClick = {handleHeartClick}>
          </button> 
        </div>
        <p className = "element__counter">{heart}</p>
      </div>
    </article>
  );
}

export default Card;