import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .fireIcon{
    width: 50px;
    height: 50px;
    color: red;
    margin: 0px 20px;
  }
  .title{
    margin: 5px 0px;
  }
`
export const GamingComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingSection = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  max-height: 89vh;
  overflow: auto;
  width: 100%;
`
export const Banner = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

export const GamingDiv = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
`

export const GamingItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin 15px;
`
