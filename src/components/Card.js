import React from "react";

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }
  return(
    <article className="place">
      <button className="place__trash-button" type="button"></button>
      <img className="place__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      <div className="place__info">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like-info">
          <button className="place__like-button" type="button"></button>
          <p className="place__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card