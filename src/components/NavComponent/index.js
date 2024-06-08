import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {Navbar, GlobalStyles, NavitemText, NavItem} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NavComponent = props => {
  const {match} = props
  const {path} = match

  const navbarDetails = [
    {displayText: 'Home', path: '/'},
    {displayText: 'Trending', path: '/trending'},
    {displayText: 'Gaming', path: '/gaming'},
    {displayText: 'Saved videos', path: '/saved-videos'},
  ]

  const renderNavItem = (route, selectedPath) => {
    const iconStyle =
      route === selectedPath ? 'menuIcon selectedNavItem' : 'menuIcon'
    const textStyle = route === selectedPath

    switch (route) {
      case '/':
        return (
          <li className="navItem" key="Home">
            <AiFillHome className={iconStyle} />
            <Link className="link" to="/">
              <NavItem selected={textStyle}>
                <NavitemText selected={textStyle}>Home</NavitemText>
              </NavItem>
            </Link>
          </li>
        )

      case '/trending':
        return (
          <li className="navItem" key="Trending">
            <HiFire className={iconStyle} />
            <Link className="link" to="/trending">
              <NavItem selected={textStyle} key="Trending">
                <NavitemText selected={textStyle}>Trending</NavitemText>
              </NavItem>
            </Link>
          </li>
        )

      case '/gaming':
        return (
          <li className="navItem" key="Gaming">
            <SiYoutubegaming className={iconStyle} />
            <Link className="link" to="/gaming">
              <NavItem selected={textStyle} key="Gaming">
                <NavitemText selected={textStyle}>Gaming</NavitemText>
              </NavItem>
            </Link>
          </li>
        )

      case '/saved-videos':
        return (
          <li className="navItem" key="Saved videos">
            <CgPlayListAdd className={iconStyle} />
            <Link className="link" to="/saved-videos">
              <NavItem selected={textStyle} key="Saved videos">
                <NavitemText selected={textStyle}>Saved videos</NavitemText>
              </NavItem>
            </Link>
          </li>
        )
      default:
        return null
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Navbar type="none" isDark={isDark}>
            <GlobalStyles isDark={isDark} />
            {navbarDetails.map(eachItem => renderNavItem(eachItem.path, path))}
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(NavComponent)
