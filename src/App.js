import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Login from './components/Login'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'
import ThemeContext from './context/ThemeContext'
import SavedVideosContext from './context/SavedVideosContext'
import LikeDislikeContext from './context/LikeDislikeContext'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideos: [], likedIds: [], dislikedIds: []}

  updateTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  modifyLiked = id => {
    const {likedIds, dislikedIds} = this.state
    if (likedIds.includes(id)) {
      const modfiedLikedIds = likedIds.filter(eachId => eachId !== id)
      this.setState({likedIds: modfiedLikedIds})
    } else {
      this.setState({likedIds: [...likedIds, id]})
    }
    const modifiedDisliked = dislikedIds.filter(eachId => eachId !== id)
    this.setState({dislikedIds: modifiedDisliked})
  }

  modifyDisliked = id => {
    const {dislikedIds, likedIds} = this.state
    if (dislikedIds.includes(id)) {
      const modifiedDislikedIds = dislikedIds.filter(eachId => eachId !== id)
      this.setState({dislikedIds: modifiedDislikedIds})
    } else {
      this.setState({dislikedIds: [...dislikedIds, id]})
    }
    const modifiedLiked = likedIds.filter(eachId => eachId !== id)
    this.setState({likedIds: modifiedLiked})
  }

  modifyVideos = obj => {
    const {savedVideos} = this.state
    const resultObj = savedVideos.find(eachObj => eachObj.id === obj.id)
    if (resultObj === undefined) {
      savedVideos.push(obj)
      this.setState({savedVideos})
    } else {
      const updatedVideos = savedVideos.filter(eachObj => eachObj.id !== obj.id)
      this.setState({savedVideos: updatedVideos})
    }
  }

  render() {
    const {isDark, savedVideos, likedIds, dislikedIds} = this.state
    return (
      <div id="popup-root">
        <LikeDislikeContext.Provider
          value={{
            likedIds,
            dislikedIds,
            modifyLiked: this.modifyLiked,
            modifyDisliked: this.modifyDisliked,
          }}
        >
          <ThemeContext.Provider
            value={{isDark, updateTheme: this.updateTheme}}
          >
            <SavedVideosContext.Provider
              value={{savedVideos, modifyVideos: this.modifyVideos}}
            >
              <div className="appComponent">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/" component={Home} />
                  <ProtectedRoute exact path="/trending" component={Trending} />
                  <ProtectedRoute exact path="/gaming" component={Gaming} />
                  <ProtectedRoute
                    exact
                    path="/videos/:id"
                    component={VideoItemDetails}
                  />
                  <ProtectedRoute
                    exact
                    path="/saved-videos"
                    component={SavedVideos}
                  />
                  <Route exact path="/not-found" component={NotFound} />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </SavedVideosContext.Provider>
          </ThemeContext.Provider>
        </LikeDislikeContext.Provider>
      </div>
    )
  }
}

export default App
