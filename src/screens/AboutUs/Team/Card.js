import React from 'react'

function Card(props) {
  const {cardData} = props;
  return (
    <div className='card'>
      <div className='imageContainer'>
        <img src={cardData.picture} alt={cardData.name}/>
      </div>
      <div className='cardInfo'>
        <div className='name'>{cardData.name}</div>
        <div className='job'>{cardData.job}</div>
        <div className='mail'>{cardData.mail}</div>
        <div className='phone'>{cardData.phone}</div>
      </div>
    </div>
  )
}

export {Card}