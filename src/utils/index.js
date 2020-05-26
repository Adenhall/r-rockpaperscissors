import React from 'react'

export const choices = {
  rock:{
    name: "rock",
    imgURL:"https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  paper: {
    name: "paper",
    imgURL:"http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  scissors: {
    name:"scissors",
    imgURL:"http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  }
};


export const randomChoice = () => {
  let choiceNames = Object.keys(choices);
  let index = Math.floor(Math.random()*3);
  let choiceName = choiceNames[index];
  return choices[choiceName]
}

export const getRoundResult = (userChoice) => {
  const compChoice = randomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = compChoice === "scissors" ? 'Winner! Yay' : 'Loser! Haha';
  }
  if (userChoice === "paper") {
    result = compChoice === "rock" ? 'Winner! Yay' : 'Loser! Haha';
  }
  if (userChoice === "scissors") {
    result = compChoice === "paper" ? 'Winner! Yay' : 'Loser! Haha';
  }

  if (userChoice === compChoice) {
    result = "It's a TIEEEEE!"
  }

  return [result, compChoice];
}
