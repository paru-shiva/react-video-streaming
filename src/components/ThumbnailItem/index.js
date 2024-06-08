import {Link} from 'react-router-dom'
import {Thumbnail, GlobalStyles} from './styledComponents'

const {formatDistanceToNow} = require('date-fns')

const ThumbnailItem = props => {
  const {data} = props

  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = data
  const {name, profileImageUrl} = channel

  const theDate = new Date(publishedAt)

  const time = `${formatDistanceToNow(theDate)} ago`

  const url = `/videos/${id}`

  return (
    <li>
      <Link to={url}>
        <Thumbnail>
          <GlobalStyles />
          <img
            className="thumbnailImage"
            alt="video thumbnail"
            src={thumbnailUrl}
          />
          <div className="thumbnailData">
            <img
              alt="channel logo"
              className="profileImage"
              src={profileImageUrl}
            />
            <div>
              <p className="thumbnailTitle">{title}</p>
              <p className="nameOfThumbnail">{name}</p>
              <div className="viewsAndTime">
                <p className="views">{viewCount}</p>
                <p className="publishedAt">{publishedAt}</p>
              </div>
            </div>
          </div>
        </Thumbnail>
      </Link>
    </li>
  )
}

export default ThumbnailItem
