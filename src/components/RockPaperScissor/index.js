import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  RulesView,
  PopUpView,
  PopUpImage,
  RulesButton,
} from './styledComponents'
import ScoreCard from '../ScoreCard'
import GameResult from '../GameResult'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {
    show: true,
    array: [choicesList[0], choicesList[1]],
    score: 0,
    gameResult: 'YOU WON',
  }

  restartGame = () => {
    this.setState({show: true})
  }

  getResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachChoice => eachChoice.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore += 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      show: false,
      array: [choice1[0], choice2],
      gameResult: result,
      score: newScore,
    })
  }

  render() {
    const {show, array, gameResult, score} = this.state

    return (
      <GameContainer>
        <ScoreCard score={score} />
        <GameResult
          choicesList={choicesList}
          text={gameResult}
          isShow={show}
          array={array}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
        <RulesView>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <PopUpView>
                <RulesButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </RulesButton>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </GameContainer>
    )
  }
}
export default RockPaperScissor
