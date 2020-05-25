import React, {Component} from 'react'

class ChoiceCard extends Component {
  render () {
    return (
      <div className={`choice-card ${this.props.winner ? 'winner' : 'loser'}`}>
        <h1>{this.props.title}</h1>
        <img src={this.props.imgUrl}/>
        <h1>{this.props.winner ? 'Hurray! Good job' : 'Awww better luck next time'}</h1>
      </div>

    )
  }
}

export default ChoiceCard
