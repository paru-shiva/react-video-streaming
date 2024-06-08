import {IoMdMoon, IoIosClose} from 'react-icons/io'
import {WiDaySunny} from 'react-icons/wi'
import {FiMenu} from 'react-icons/fi'
import {HiOutlineLogout} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import NavComponent from '../NavComponent'

import {
  HeaderComponent,
  DesktopHeader,
  HeaderRight,
  ChangeThemeButton,
  GlobalStyle,
  ProfileImg,
  LogoutButton,
  MobileHeader,
  MobileLogoutButton,
  MobileNav,
  CloseBtn,
  ConfirmLogout,
  ConfirmPara,
  LogoutButtons,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const logoutClick = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, updateTheme} = value
        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const themeIcon = isDark ? (
          <WiDaySunny className="themeIconStyle sunIcon" />
        ) : (
          <IoMdMoon className="themeIconStyle" />
        )

        return (
          <HeaderComponent>
            <GlobalStyle isDark={isDark} />
            <DesktopHeader isDark={isDark}>
              <Link to="/" className="websiteLogo">
                <img className="websiteLogo" alt="website logo" src={logoUrl} />
              </Link>
              <HeaderRight>
                <ChangeThemeButton
                  data-testid="theme"
                  isDark={isDark}
                  onClick={updateTheme}
                >
                  {themeIcon}
                </ChangeThemeButton>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={<LogoutButton isDark={isDark}>Logout</LogoutButton>}
                  className="popup-content"
                >
                  {close => (
                    <MobileNav>
                      <CloseBtn>
                        <a className="close" onClick={close}>
                          <IoIosClose />
                        </a>
                      </CloseBtn>
                      <ConfirmLogout>
                        <ConfirmPara>
                          Are you sure, you want to logout?
                        </ConfirmPara>
                        <LogoutButtons>
                          <a className="close" onClick={close}>
                            <CancelButton>Cancel</CancelButton>
                          </a>
                          <ConfirmButton onClick={logoutClick}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtons>
                      </ConfirmLogout>
                    </MobileNav>
                  )}
                </Popup>
              </HeaderRight>
            </DesktopHeader>

            <MobileHeader isDark={isDark}>
              <Link to="/" className="websiteLogo">
                <img className="websiteLogo" alt="website logo" src={logoUrl} />
              </Link>
              <HeaderRight>
                <ChangeThemeButton isDark={isDark} onClick={updateTheme}>
                  {themeIcon}
                </ChangeThemeButton>

                <Popup
                  modal
                  trigger={
                    <button className="menuButton">
                      <FiMenu className="menuIconStyle" />
                    </button>
                  }
                  className="popup-content"
                >
                  {close => (
                    <MobileNav>
                      <CloseBtn>
                        <a className="close" onClick={close}>
                          <IoIosClose />
                        </a>
                      </CloseBtn>
                      <NavComponent />
                    </MobileNav>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <MobileLogoutButton>
                      <HiOutlineLogout className="logoutIconStyle" />
                    </MobileLogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <MobileNav>
                      <CloseBtn>
                        <a className="close" onClick={close}>
                          <IoIosClose />
                        </a>
                      </CloseBtn>
                      <ConfirmLogout>
                        <ConfirmPara>
                          Are you sure, you want to logout?
                        </ConfirmPara>
                        <LogoutButtons>
                          <a className="close" onClick={close}>
                            <CancelButton>Cancel</CancelButton>
                          </a>
                          <ConfirmButton onClick={logoutClick}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtons>
                      </ConfirmLogout>
                    </MobileNav>
                  )}
                </Popup>
              </HeaderRight>
            </MobileHeader>
          </HeaderComponent>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
