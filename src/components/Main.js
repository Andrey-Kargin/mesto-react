import Card from './Card'
import api from '../utils/api.js'
import React, {useEffect, useState} from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, updateAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((profileInfo) => {
        setUserName(profileInfo.name)
        setUserDescription(profileInfo.about)
        updateAvatar(profileInfo.avatar)
    })
        .catch((err) => console.log(err))

    api.getInitialCards().then((cardsData) => {
      setCards(cardsData.map((data) => ({
            cardId: data._id,
            name: data.name,
            link: data.link,
            likes: data.likes
        })))
    })
        .catch((err) => console.log(err))
}, []);

    return(
<main className="content">  
    <section aria-label="Профиль" className="profile">
      <div className="profile__avatar-wrapper">
        <img src={userAvatar} alt='Аватар'className="profile__avatar" />
        <button className="profile__avatar-edit" onClick={() => {onEditAvatar(true)}}></button>
      </div>
      <div className="profile__info">
        <div className="profile__info-box">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Изменить Профиль" onClick={() => {onEditProfile(true)}}></button>
        </div>
        <p className="profile__caption">{userDescription}</p>
      </div>
      <button className="profile__add-button" type="button" onClick={() => {onAddPlace(true)}}></button>
    </section>
    <section className="places" aria-label="Фотокарточки">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={onCardClick}
          />
        ))}
    </section>
  </main>
    )
}

export default Main