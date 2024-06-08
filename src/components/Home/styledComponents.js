import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .bannerLogo{
    height: 40px;
    width: 180px;
  }
  .failedImage{
    width: 230px;
    height: 200px;
    margin-top: 20px;
  }
`
export const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 89vh;
  width: 80vw;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media (max-width: 767px) {
    width: 100vw;
  }
`
export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const BannerContent = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: black;
`

export const GetItNow = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  width: 100px;
  height: 30px;
  margin-top: 20px;
`

export const CloseBannerBtn = styled.button`
  background-color: white;
  border: none;
  align-self: flex-start;
  padding: 10px;
`
export const Search = styled.input`
  width: 450px;
  height: 30px;
  align-self: flex-start;
  padding: 0px 5px;
  outline: none;
`

export const MainBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px;
  align-self: flex-start;
`

export const SearchSection = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`

export const SearchButton = styled.button`
  background-color: #ebebeb;
  border: 1px solid gray;
  height: 30px;
  padding: 4px 20px 0px 18px;
`

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
export const DisplayVideos = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
