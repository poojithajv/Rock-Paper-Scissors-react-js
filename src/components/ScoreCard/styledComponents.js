import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 80%;
  border: 2px solid #ffffff;
  background-color: transparent;
  margin-top: 10px;
`
export const ScoreCardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreCardName = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreCardBoard = styled(ScoreCardNameContainer)`
  background-color: white;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreCardHeading = styled.p`
  color: #223a5f;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreCardResult = styled.p`
  color: #223a5f;
  font-size: 45px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
