import Header from '../Header'
import SidebarComponent from '../SidebarComponent'
import {
  GlobalStyles,
  NotFoundComponent,
  NotFoundContainer,
  NotFoundSection,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <NotFoundComponent>
    <GlobalStyles />
    <Header />
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const notfoundImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <NotFoundContainer isDark={isDark}>
            <SidebarComponent />
            <NotFoundSection>
              <img
                alt="not found"
                className="notfoundImage"
                src={notfoundImage}
              />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found.</p>
            </NotFoundSection>
          </NotFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  </NotFoundComponent>
)

export default NotFound
