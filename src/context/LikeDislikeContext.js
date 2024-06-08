import React from 'react'

const LikeDislikeContext = React.createContext({
  likedIds: [],
  dislikedIds: [],
  modifyLiked: () => {},
  modifyDisliked: () => {},
})

export default LikeDislikeContext
