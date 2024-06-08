import {
  Sidebar,
  SocialButtons,
  SocialIcon,
  ContactUsSection,
  InfoPara,
} from './styledComponents'
import NavComponent from '../NavComponent'

const SidebarComponent = () => (
  <Sidebar>
    <NavComponent />
    <ContactUsSection>
      <p>CONTACT US</p>
      <SocialButtons>
        <SocialIcon
          alt="facebook logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
        />
        <SocialIcon
          alt="twitter logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
        />
        <SocialIcon
          alt="linked in logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
        />
      </SocialButtons>
      <InfoPara>Enjoy! Now to see your channels and recommendations!</InfoPara>
    </ContactUsSection>
  </Sidebar>
)

export default SidebarComponent
