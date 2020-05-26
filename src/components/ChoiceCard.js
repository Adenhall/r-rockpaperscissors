import React from 'react'

function ChoiceCard (props) {
  const DEFAULT_IMG =
  "https://i.dlpng.com/static/png/4140116-areyoureday-letter-ready-ripple-png-image-and-clipart-for-ready-png-650_650_preview.webp";
  const won = props.title === props.previousWinner;
 let className = "tie";
 const hasPreviousGame =
   props.previousWinner === "Computer" || props.previousWinner === "You";
 if (hasPreviousGame) {
   className = won ? "winner" : "loser";
 }

 let prompt;
 if (won) {
   prompt = "Won";
   className = won ? "winner" : "loser";
 } else if (props.previousWinner === "Tie") {
   prompt = "Tie";
 } else if (props.previousWinner === null) {
   prompt = "Start";
 } else {
   prompt = "Lose";
 }

 return (
   <div className={`choice-card ${className}`}>
     <h1>{props.title}</h1>
     <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
     <h3>{prompt}</h3>
   </div>
 )
}

export default ChoiceCard
