import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'

import Header from '../Header'
import ThumbnailItem from '../ThumbnailItem'
import SidebarComponent from '../SidebarComponent'
import {
  GlobalStyles,
  HomeComponent,
  HomeContainer,
  HomeSection,
  Banner,
  BannerContent,
  GetItNow,
  CloseBannerBtn,
  Search,
  MainBody,
  SearchSection,
  SearchButton,
  FailedView,
  DisplayVideos,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Home extends Component {
  state = {
    searchInput: '',
    fetchStatus: 'initial',
    gallary: [],
    showBanner: true,
  }

  fetchVideoGallary = async () => {
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    this.setState({fetchStatus: 'fetching'})

    const response = await fetch(url, options)

    if (response.ok === false) {
      this.setState({fetchStatus: 'failed'})
    } else {
      const data = (await response.json()).videos

      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({fetchStatus: 'fetched', gallary: formattedData})
    }
  }

  componentDidMount = () => {
    this.fetchVideoGallary()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  displayBanner = () => (
    <Banner data-testid="banner">
      <BannerContent>
        <img
          alt="nxt watch logo"
          className="bannerLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <GetItNow>GET IT NOW</GetItNow>
      </BannerContent>
      <CloseBannerBtn
        data-testid="close"
        onClick={this.closeBanner}
        type="button"
      >
        <IoMdClose />
      </CloseBannerBtn>
    </Banner>
  )

  renderFailedView = theme => {
    const isDark = theme
    const imageUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailedView>
        <img alt="failure view" className="failedImage" src={imageUrl} />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>

        <button type="button" onClick={this.fetchVideoGallary}>
          Retry
        </button>
      </FailedView>
    )
  }

  displayVideos = () => {
    const {gallary} = this.state
    return gallary.length === 0 ? (
      <FailedView>
        <img
          className="failedImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <h1>No Search results found.</h1>
        <p>Try different key words or remove search filter</p>

        <button type="button" onClick={this.fetchVideoGallary}>
          Retry
        </button>
      </FailedView>
    ) : (
      <DisplayVideos type="none">
        {gallary.map(eachItem => (
          <ThumbnailItem key={eachItem.id} data={eachItem} />
        ))}
      </DisplayVideos>
    )
  }

  displayResult = theme => {
    const {fetchStatus} = this.state

    switch (fetchStatus) {
      case 'fetching':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case 'fetched':
        return this.displayVideos(theme)
      case 'failed':
        return this.renderFailedView(theme)
      default:
        return null
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchClick = () => {
    this.fetchVideoGallary()
  }

  render() {
    const {showBanner, searchInput} = this.state

    return (
      <HomeComponent>
        <GlobalStyles />
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <HomeContainer isDark={isDark}>
                <SidebarComponent />
                <HomeSection data-testid="home" isDark={isDark}>
                  {showBanner ? this.displayBanner() : null}
                  <MainBody>
                    <SearchSection>
                      <Search
                        placeholder="Search"
                        type="search"
                        onChange={this.onSearchInput}
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onSearchClick}
                      >
                        <FiSearch />
                      </SearchButton>
                    </SearchSection>
                    {this.displayResult(isDark)}
                  </MainBody>
                </HomeSection>
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </HomeComponent>
    )
  }
}

export default Home
