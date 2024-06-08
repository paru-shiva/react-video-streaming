import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .failedImage{
    width: 50%;
  }
`

export const FailedView = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
