import React from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js';

const choices = {
  rock:"https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return (
    <div className="App">
      <ChoiceCard title="Adenhall" winner={false} imgUrl={choices.rock}/>
      <ChoiceCard title = "Computer" winner ={true} imgUrl = {choices.paper}/>
    </div>
  )
}

export default App;
