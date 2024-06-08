import styled, {createGlobalStyle} from 'styled-components'

export const HeaderComponent = styled.div`
  .menuButton {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export const GlobalStyle = createGlobalStyle`
  .themeIconStyle{
    height: 30px;
    width: 30px;
  }
  .sunIcon{
    color: white;
  }
  .websiteLogo{
    height: 100%
  }
  .menuIconStyle{
    height: 20px;
    width: 20px;
    margin: 10px;
    color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
    padding-bottom: 2px;
  }
  .logoutIconStyle{
    height: 20px;
    width: 20px;
    margin: 10px;
    color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  }
`

export const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media (max-width: 767px) {
    display: none;
  }
`

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`
export const ChangeThemeButton = styled.button`
  border: none;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  outline: none;
`
export const ProfileImg = styled.img`
  height: 80%;
  margin: 5px 20px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  border-radius: 4px;
  margin-left: 13px;
  padding: 4px 15px;
  border: 2px solid;
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-5px;
  text-align: center;
  background-color:  ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: auto;
`
export const CloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ConfirmLogout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ConfirmPara = styled.p``

export const LogoutButtons = styled.div`
  display: flex;
  justify-content: center;
`
export const CancelButton = styled.button`
  margin: 8px;
  border: 1px solid #64748b;
  border-radius: 4px;
  color: #64748b;
  padding: 5px 15px;
  background-color: transparent;
`

export const ConfirmButton = styled.button`
  margin: 8px;
  border-radius: 4px;
  color: #f9f9f9;
  padding: 5px 15px;
  background-color: #3b82f6;
  border: none;
`
