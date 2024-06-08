import {GlobalStyles, FailedView} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {action} = props
  const renderFailedView = theme => {
    const isDark = theme
    const imageUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailedView>
        <GlobalStyles />
        <img alt="failure view" className="failedImage" src={imageUrl} />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>

        <button onClick={action} type="button">
          Retry
        </button>
      </FailedView>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return renderFailedView(isDark)
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
