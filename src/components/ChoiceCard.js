import React from 'react'

function ChoiceCard (props) {
    return (
      <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
        <h1>{props.title}</h1>
        <h2>{props.name}</h2>
        <img src={props.imgURL}/>
        <h3>{props.winner ? 'WINNER' : 'LOSER'}</h3>
      </div>
    )
}

export default ChoiceCard
