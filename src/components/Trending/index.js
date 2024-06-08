import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import SidebarComponent from '../SidebarComponent'
import FailureView from '../FailureView'
import ThumbnailItem from '../ThumbnailItem'
import {
  GlobalStyles,
  TrendingComponent,
  TrendingContainer,
  TrendingSection,
  Banner,
  TrendingVideos,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Trending extends Component {
  state = {fetchStatus: 'initial', trendingVideos: []}

  getTrendingVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({fetchStatus: 'fetched', trendingVideos: formattedData})
    }
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  displayData = () => {
    const {fetchStatus, trendingVideos} = this.state

    switch (fetchStatus) {
      case 'fetching':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case 'fetched':
        return (
          <TrendingSection>
            <Banner>
              <HiFire className="fireIcon" />
              <h1>Trending</h1>
            </Banner>
            <TrendingVideos type="none">
              {trendingVideos.map(eachItem => (
                <ThumbnailItem key={eachItem.id} data={eachItem} />
              ))}
            </TrendingVideos>
          </TrendingSection>
        )
      case 'failed':
        return <FailureView action={this.getTrendingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingComponent>
        <GlobalStyles />
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <TrendingContainer data-testid="trending" isDark={isDark}>
                <SidebarComponent />
                {this.displayData(isDark)}
              </TrendingContainer>
            )
          }}
        </ThemeContext.Consumer>
      </TrendingComponent>
    )
  }
}

export default Trending
