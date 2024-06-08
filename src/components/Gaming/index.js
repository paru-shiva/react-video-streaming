import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Header from '../Header'
import SidebarComponent from '../SidebarComponent'
import FailureView from '../FailureView'

import {
  GlobalStyles,
  GamingComponent,
  GamingContainer,
  GamingSection,
  Banner,
  GamingDiv,
  GamingItem,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Gaming extends Component {
  state = {fetchStatus: 'initial', GamingVideos: []}

  getGamingVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }
    this.setState({fetchStatus: 'fetching'})
    const response = await fetch(url, options)
    if (response.ok === false) {
      this.setState({fetchStatus: 'failed'})
    } else if (response.ok === true) {
      const fetchedData = (await response.json()).videos
      const formattedData = fetchedData.map(eachItem => ({
        id: eachItem.id,
        viewCount: eachItem.view_count,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
      }))
      this.setState({fetchStatus: 'fetched', GamingVideos: formattedData})
    }
  }

  componentDidMount = () => {
    this.getGamingVideos()
  }

  displayData = () => {
    const {fetchStatus, GamingVideos} = this.state

    switch (fetchStatus) {
      case 'fetching':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case 'fetched':
        return (
          <GamingSection>
            <Banner>
              <HiFire className="fireIcon" />
              <h1>Gaming</h1>
            </Banner>
            <GamingDiv type="none">
              {GamingVideos.map(eachItem => {
                const address = `/videos/${eachItem.id}`
                return (
                  <li key={eachItem.id}>
                    <Link to={address}>
                      <GamingItem>
                        <img
                          alt="video thumbnail"
                          src={eachItem.thumbnailUrl}
                        />
                        <p className="title">{eachItem.title}</p>
                        <p className="title">{`${eachItem.viewCount} Watching Worldwide`}</p>
                      </GamingItem>
                    </Link>
                  </li>
                )
              })}
            </GamingDiv>
          </GamingSection>
        )
      case 'failed':
        return <FailureView action={this.getGamingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <GamingComponent>
        <GlobalStyles />
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <GamingContainer data-testid="gaming" isDark={isDark}>
                <SidebarComponent />
                {this.displayData(isDark)}
              </GamingContainer>
            )
          }}
        </ThemeContext.Consumer>
      </GamingComponent>
    )
  }
}

export default Gaming
