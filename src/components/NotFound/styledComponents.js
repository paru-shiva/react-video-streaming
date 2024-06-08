import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .notfoundImage{
    width: 50vw;
  }
`
export const NotFoundComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
`
export const NotFoundContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 89vh;
  overflow: auto;
`
