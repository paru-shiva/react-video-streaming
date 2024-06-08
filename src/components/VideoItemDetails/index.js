import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'
import LikeDislikeContext from '../../context/LikeDislikeContext'
import {
  VideoDetailsComponent,
  VideoDetailsContainer,
  GlobalStyles,
  VideoDetails,
  ChannelInfo,
  NameAndSubcribers,
  LikeButton,
  DislikeButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import SidebarComponent from '../SidebarComponent'

const {formatDistanceToNow} = require('date-fns')

class VideoItemDetails extends Component {
  state = {
    fetchStatus: 'initial',
    videoData: {},
    saved: false,
  }

  onSaveClick = modifyVideos => {
    const afterSaveClick = () => {
      const {videoData} = this.state
      modifyVideos(videoData)
    }
    this.setState(prevState => ({saved: !prevState.saved}), afterSaveClick)
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    this.setState({fetchStatus: 'fetching'})
    const response = await fetch(url, options)
    if (response.ok === false) {
      this.setState({fetchStatus: 'failed'})
    } else if (response.ok === true) {
      const videoDetails = [(await response.json()).video_details]

      const formattedDatainList = videoDetails.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
          subscriberCount: eachItem.channel.subscriber_count,
        },
        description: eachItem.description,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        videoUrl: eachItem.video_url,
        viewCount: eachItem.view_count,
      }))
      const formattedData = formattedDatainList[0]
      this.setState({fetchStatus: 'fetched', videoData: formattedData})
    }
  }

  displayVideoDetails = (theme, modifyVideos, status) => {
    const isDark = theme

    const {videoData} = this.state
    const {channel, description, publishedAt, title, videoUrl, viewCount, id} =
      videoData
    const {name, profileImageUrl, subscriberCount} = channel

    const vidSavedStyle = status === 'Saved' ? true : false

    const onSaveBtnClick = () => {
      this.onSaveClick(modifyVideos)
    }

    return (
      <LikeDislikeContext.Consumer>
        {val => {
          const {modifyLiked, modifyDisliked, likedIds, dislikedIds} = val
          console.log(likedIds, dislikedIds)
          const onLikeClk = () => {
            modifyLiked(id)
          }
          const onDislikeClk = () => {
            modifyDisliked(id)
          }
          const liked = likedIds.includes(id)
          const disliked = dislikedIds.includes(id)

          return (
            <VideoDetails>
              <GlobalStyles
                buttonLikedState={liked}
                buttonDislikedState={disliked}
                saved={vidSavedStyle}
                isDark={isDark}
              />
              <ReactPlayer width="100%" height="80%" url={videoUrl} />
              <p>{title}</p>
              <div className="interactions">
                <div className="viewsAndTime">
                  <p>{viewCount}&nbsp;</p>
                  <p> {publishedAt}</p>
                </div>
                <div className="likesAndDislikes">
                  <LikeButton
                    onClick={onLikeClk}
                    type="button"
                    buttonLikedState={liked}
                  >
                    <div className="interactions">
                      <BiLike />
                      <p>Like</p>
                    </div>
                  </LikeButton>

                  <DislikeButton
                    onClick={onDislikeClk}
                    type="button"
                    buttonDislikedState={disliked}
                  >
                    <div className="interactions">
                      <BiDislike />
                      <p>Dislike</p>
                    </div>
                  </DislikeButton>
                  <button
                    onClick={onSaveBtnClick}
                    className="saveButton"
                    type="button"
                  >
                    <div className="interactions">
                      <CgPlayListAdd />
                      <p>{status}</p>
                    </div>
                  </button>
                </div>
              </div>
              <hr className="hRule" />
              <ChannelInfo>
                <img
                  className="profileImg"
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <NameAndSubcribers>
                  <p className="channelPara">{name}</p>
                  <p className="channelPara">{`${subscriberCount} subscribers`}</p>
                </NameAndSubcribers>
              </ChannelInfo>
              <p>{description}</p>
            </VideoDetails>
          )
        }}
      </LikeDislikeContext.Consumer>
    )
  }

  displayData = (theme, modifyVideos, status) => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case 'failed':
        return <FailureView action={this.getVideoDetails} />
      case 'fetching':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case 'fetched':
        return this.displayVideoDetails(theme, modifyVideos, status)
      default:
        return null
    }
  }

  componentDidMount = () => {
    this.getVideoDetails()
  }

  render() {
    const {videoData} = this.state

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideos, modifyVideos} = value

          const videoSaved = savedVideos.find(
            eachItem => videoData.id === eachItem.id,
          )

          const videoIncludedStatus =
            videoSaved === undefined ? 'Save' : 'Saved'

          return (
            <VideoDetailsComponent>
              <GlobalStyles />
              <Header />
              <ThemeContext.Consumer>
                {val => {
                  const {isDark} = val

                  return (
                    <VideoDetailsContainer
                      data-testid="videoItemDetails"
                      isDark={isDark}
                    >
                      <SidebarComponent />
                      {this.displayData(
                        isDark,
                        modifyVideos,
                        videoIncludedStatus,
                      )}
                    </VideoDetailsContainer>
                  )
                }}
              </ThemeContext.Consumer>
            </VideoDetailsComponent>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideoItemDetails
