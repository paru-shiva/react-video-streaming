import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle``

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`

export const SocialButtons = styled.div`
  display: flex;
`
export const InfoPara = styled.p`
  font-size: 14px;
  margin-top: 12px;
  font-weight: bold;
`
export const Sidebar = styled.div`
  padding: 20px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`
