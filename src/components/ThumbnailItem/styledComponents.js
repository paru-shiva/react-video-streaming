import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .thumbnailImage{
    width: 100%
  }

  .thumbnailData{
    display: flex;
  }

  .views{
    margin: 0px 8px 0px 0px;
  }

  .publishedAt{
    margin: 0px;
  }

  .profileImage{
    width: 50px;
    height: 50px;
    margin: 6px;
  }

  .thumbnailTitle{
    margin: 0px;
  }

  .viewsAndTime{
    display: flex;
  }

  .nameOfThumbnail{
    margin: 6px 0px;
  }

`

export const Thumbnail = styled.div`
  width: 280px;
  margin: 10px;
`
