import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .fireIcon{
    width: 50px;
    height: 50px;
    color: red;
    margin: 0px 20px;
  }

  .channelPara{
    margin: 5px;
  }

  .profileImg{
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .hRule{
    width: 100%;
  }

  .interactions{
    display: flex;
    align-items: center;
    margin: 5px;
  }

  .saveButton{
    color: ${props => (props.saved ? '#2563eb' : '#64748b')};
    background-color: transparent;
    border: none;
    outline: none;
  }

  .likeButton{

  }

  .dislikeButton{

  }

  .title{
    margin: 5px 0px;
  }
  .interactions{
    display: flex;
    justify-content: space-between;
  }
  .viewsAndTime{
    display: flex;
  }
  .likesAndDislikes{
    display: flex;
  }
`
export const VideoDetailsComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 50px;
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`
export const NameAndSubcribers = styled.div``

export const LikeButton = styled.button`
  color: ${props => (props.buttonLikedState === true ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  outline: none;
`

export const DislikeButton = styled.button`
  color: ${props =>
    props.buttonDislikedState === true ? '#2563eb' : '#64748b'};
  background-color: transparent;
  border: none;
  outline: none;

`
