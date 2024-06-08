import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  modifyVideos: () => {},
})

export default SavedVideosContext
