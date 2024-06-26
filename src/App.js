import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Context from './context/Context'
import './App.css'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
// Replace your code here

class App extends Component {
  state = {theme: false, activeRoute: 'HOME'}

  changeTheme = () => this.setState(prevState => ({theme: !prevState.theme}))

  changeActiveRoute = id => this.setState({activeRoute: id})

  render() {
    const {theme, activeRoute} = this.state
    return (
      <Context.Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
          activeRoute,
          changeActiveRoute: this.changeActiveRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
