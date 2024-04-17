import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'

import {
  MobileIconsContainer,
  Icon,
  DeskIconsContainer,
} from './styledComponents'
import Context from '../../context/Context'

const navList = [
  {
    id: 'HOME',
    name: 'Home',
    icon: <AiFillHome />,
    href: '/',
  },
  {
    id: 'TRENDING',
    name: 'Trending',
    icon: <ImFire />,
    href: '/trending',
  },
]

const NavBar = () => (
  <Context.Consumer>
    {value => {
      const {activeRoute, changeActiveRoute} = value
      console.log(activeRoute)
      return (
        <>
          <MobileIconsContainer>
            <Link onClick={() => changeActiveRoute('HOME')} to="/">
              <Icon>
                <AiFillHome color={activeRoute === 'HOME' ? 'red' : null} />
              </Icon>
            </Link>
            <Link onClick={() => changeActiveRoute('TRENDING')} to="/trending">
              <Icon>
                <ImFire color={activeRoute === 'TRENDING' ? 'red' : null} />
              </Icon>
            </Link>
            <Link onClick={() => changeActiveRoute('TRENDING')} to="/trending">
              <Icon>
                <ImFire color={activeRoute === 'TRENDING' ? 'red' : null} />
              </Icon>
            </Link>
            <Link onClick={() => changeActiveRoute('TRENDING')} to="/trending">
              <Icon>
                <ImFire color={activeRoute === 'TRENDING' ? 'red' : null} />
              </Icon>
            </Link>
          </MobileIconsContainer>
          <DeskIconsContainer>
            <Link onClick={() => changeActiveRoute('HOME')} to="/">
              <Icon>
                <AiFillHome color={activeRoute === 'HOME' ? 'red' : null} />
              </Icon>
            </Link>
            <Link onClick={() => changeActiveRoute('TRENDING')} to="/trending">
              <Icon>
                <ImFire color={activeRoute === 'TRENDING' ? 'red' : null} />
              </Icon>
            </Link>
          </DeskIconsContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default NavBar
