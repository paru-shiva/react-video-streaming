import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SidebarComponent from '../SidebarComponent'
import {
  GlobalStyles,
  SavedVideosComponent,
  SavedVideosContainer,
  SavedVideosSection,
  NoVideos,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import ThumbnailItem from '../ThumbnailItem'

const SavedVideos = () => {
  const displayData = savedVideos => {
    const savedVids = savedVideos
    const disVids = vids => (
      <ul type="none">
        {vids.map(eachItem => (
          <ThumbnailItem key={eachItem.id} data={eachItem} />
        ))}
      </ul>
    )

    if (savedVids.length === 0) {
      return (
        <NoVideos>
          <img
            className="noVidsImg"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </NoVideos>
      )
    }
    return disVids(savedVideos)
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <SavedVideosComponent isDark={isDark} data-testid="savedVideos">
            <GlobalStyles />
            <Header />
            <SavedVideosContext.Consumer>
              {data => {
                const {savedVideos} = data

                return (
                  <SavedVideosContainer isDark={isDark}>
                    <SidebarComponent />
                    <SavedVideosSection>
                      {savedVideos.length === 0 ? null : (
                        <div className="header">
                          <HiFire className="headerIcon" />
                          <h1>Saved Videos</h1>
                        </div>
                      )}
                      {displayData(savedVideos)}
                    </SavedVideosSection>
                  </SavedVideosContainer>
                )
              }}
            </SavedVideosContext.Consumer>
          </SavedVideosComponent>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
