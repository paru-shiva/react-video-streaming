import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginComponent,
  LoginForm,
  TextInput,
  GlobalStyles,
  Logo,
  InputLabel,
  SubmitButton,
  ErrPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const initialState = {
  username: '',
  password: '',
  showPassword: false,
  errorMessage: '',
}

class Login extends Component {
  state = initialState

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordClick = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const credentials = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const token = (await response.json()).jwt_token
      Cookies.set('jwt_token', token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorResponse = await response.json()
      const errorMessage = errorResponse.error_msg
      this.setState({...initialState, errorMessage})
    }
  }

  renderLoginForm = () => {
    const {username, password, showPassword, errorMessage} = this.state
    const inputBoxType = showPassword ? 'text' : 'password'
    const errMsg = errorMessage === '' ? '' : `*${errorMessage}`

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginComponent isDark={isDark}>
              <GlobalStyles />
              <LoginForm onSubmit={this.onFormSubmit} isDark={isDark}>
                <Logo alt="website logo" src={logoUrl} />
                <InputLabel htmlFor="username">USERNAME</InputLabel>
                <TextInput
                  onChange={this.onUsernameInput}
                  value={username}
                  id="username"
                  placeholder="Username"
                />
                <InputLabel htmlFor="password">PASSWORD</InputLabel>
                <TextInput
                  onChange={this.onPasswordInput}
                  value={password}
                  type={inputBoxType}
                  id="password"
                  placeholder="Password"
                />
                <div className="flexRowAlignCenter">
                  <input
                    onClick={this.onShowPasswordClick}
                    type="checkbox"
                    id="showpassword"
                  />
                  <InputLabel htmlFor="showpassword">Show Password</InputLabel>
                </div>
                <SubmitButton type="submit">Login</SubmitButton>
                <ErrPara color="red">{errMsg}</ErrPara>
              </LoginForm>
            </LoginComponent>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    return jwtToken === undefined ? this.renderLoginForm() : <Redirect to="/" />
  }
}

export default Login
