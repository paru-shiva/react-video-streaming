import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .fireIcon{
    width: 50px;
    height: 50px;
    color: red;
    margin: 0px 20px;
  }
`
export const TrendingComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingSection = styled.div`
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

export const TrendingVideos = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
