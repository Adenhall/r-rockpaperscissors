import React from 'react'

const ChoiceCard = (props) => {
  console.log("Props:", props);
    return (
      <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
        <h1>{props.title}</h1>
        <img src={props.imgUrl}/>
        <h1>{props.winner ? 'Yayyyy' : 'Hahaha good luck next time'}</h1>
      </div>
    )
  }

export default ChoiceCard
