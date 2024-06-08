import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .header{
    display: flex;
    align-items: center;
  }
  .headerIcon{
    height: 40px;
    width: 40px;
    color: red;
  }
  .noVidsImg{
    width: 50%;
  }
`
export const SavedVideosComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedVideosContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const SavedVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 89vh;
  overflow: auto;
  width: 100%;
  align-items: center;
`

export const NoVideos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
