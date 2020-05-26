import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js';

const choices = {
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



function App() {
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [prompt, setGamePrompt] = useState("Start!");
  const [winnerStatus, setWinnerStatus] = useState('');
  const onPlayerChoose = (item) => {
    setPlayerChoice(choices[item]);
    let [result, compChoice] = getRoundResult(item);
    setGamePrompt(result)
    setComputerChoice(choices[compChoice])
    console.log(!winnerStatus)
  }

  const randomChoice = () => {
    let choiceNames = Object.keys(choices);
    let index = Math.floor(Math.random()*3);
    let choiceName = choiceNames[index];
    return choices[choiceName]
  }

  const getRoundResult = (userChoice) => {
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

    if (result == "Winner! Yay") {setWinnerStatus(true)}
    else {setWinnerStatus(false)}

    return [result, compChoice];
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="Adenhall" name={playerChoice.name} imgURL={playerChoice.imgURL} winner={winnerStatus}/>
            <h1>{prompt}</h1>
              <div className="container">
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("rock")}
                >
                  Rock
                </button>
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("paper")}
                >
                  Paper
                </button>
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => onPlayerChoose("scissors")}
                >
                  Scissors
                </button>
              </div>
            <ChoiceCard title="Computer" name={computerChoice.name} imgURL={computerChoice.imgURL} winner={!winnerStatus}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;
