import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .flexRowAlignCenter{
    display: flex;
    align-items: center;
  }
`

export const LoginComponent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  background-color: ${props => (props.isDark === true ? '#181818' : '#f9f9f9')};
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 350px;
  padding: 50px 30px;
  background-color: ${props => (props.isDark === true ? 'black' : '#f9f9f9')};
  border-radius: 8px;
`

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  color: #ffffff;
`

export const TextInput = styled.input`
  align-self: stretch;
  height: 35px;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid lightgray;
  outline: none;
  margin-bottom: 12px;
`

export const InputLabel = styled.label`
  font-weight: bold;
  font-size: 10px;
  color: ${props => (props.color === undefined ? 'gray' : 'red')};
  margin 5px 0px;
`
export const ErrPara = styled.p`
  font-weight: bold;
  font-size: 10px;
  color: ${props => (props.color === undefined ? 'gray' : 'red')};
  margin 5px 0px;
`

export const SubmitButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  height: 35px;
  border: none;
  margin-top: 14px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
`
