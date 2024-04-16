import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {NavContainer, WebsiteLogo, ThemeButton} from './styledComponents'
import Context from '../../context/Context'

const Headers = props => {
  console.log('L')

  const onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('./login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {theme, changeTheme} = value

        console.log(theme)

        return (
          <NavContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <ThemeButton onClick={onLogOut} type="button">
              d
            </ThemeButton>
          </NavContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Headers)
