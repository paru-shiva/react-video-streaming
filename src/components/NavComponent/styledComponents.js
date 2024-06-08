import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .menuIcon{
    height: 20px;
    width: 20px;
  }
  .selectedNavItem{
    color: #ff0000;
  }
  .link{
    text-decoration: none;
    color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  }
  .navItem{
    display: flex;
    align-items: center;
  }
`

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 5px 5px 8px 5px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`

export const NavitemText = styled.p`
  margin: 5px 10px;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
`
