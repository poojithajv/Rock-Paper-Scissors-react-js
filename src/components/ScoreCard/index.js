import {
  ScoreCardContainer,
  ScoreCardNameContainer,
  ScoreCardName,
  ScoreCardBoard,
  ScoreCardHeading,
  ScoreCardResult,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreCardContainer>
      <ScoreCardNameContainer>
        <ScoreCardName>
          ROCK <br /> PAPER <br /> SCISSORS
        </ScoreCardName>
      </ScoreCardNameContainer>
      <ScoreCardBoard>
        <ScoreCardHeading>Score</ScoreCardHeading>
        <ScoreCardResult>{score}</ScoreCardResult>
      </ScoreCardBoard>
    </ScoreCardContainer>
  )
}
export default ScoreCard
