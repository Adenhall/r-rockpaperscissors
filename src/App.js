import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js';
import { choices, getRoundResult } from "./utils";
import ChoiceButtons from './components/ChoiceButtons.js';

function App() {
  const [showPopUp, setShowPopUp] = useState(true)
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [prompt, setGamePrompt] = useState("Start!");
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const onPlayerChoose = (item) => {
    setPlayerChoice(choices[item]);
    let [result, compChoice] = getRoundResult(item);
    setGamePrompt(result)
    setComputerChoice(choices[compChoice])
    if (result === "Winner! Yay") {
      setPreviousWinner("You");
    } else if (result === "Loser! Haha") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
    gameHistory.push(result)
    setGameHistory(gameHistory)
  }


  function IntroMenu() {
    return (
        <div className="dark-bg">
           <div className="pop-up">
               <div className="modal-content">
                  <h1>Welcome to a friendly game of ROCK SCISSORS PAPERS</h1>
                  <button className="play-button" onClick={() => setShowPopUp(false)}>Let's Play!</button>
               </div>
           </div>
         </div>
    )
  }

  return (
    <div className="App">
      {showPopUp ? <IntroMenu/> : null}
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="You" name={playerChoice.name} previousWinner={previousWinner} imgURL={playerChoice && playerChoice.imgURL} />
            <h1>{prompt}</h1>
            <ChoiceButtons onPlayerChoose={onPlayerChoose}/>
            <ChoiceCard title="Computer" name={computerChoice.name}  previousWinner={previousWinner} imgURL={computerChoice && computerChoice.imgURL} />
          </div>
        </div>
      </div>
      <div className="col-md-4 themed-grid-col">
        <h3>History</h3>
        <ul>
          {gameHistory.map(result => {
            return <li>{result}</li>;
          })}
        </ul>
      </div>
    </div>

  )
}

export default App;
