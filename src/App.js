import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Context from './context/Context'
import './App.css'

// Replace your code here

class App extends Component {
  state = {theme: false}

  changeTheme = () => this.setState(prevState => ({theme: !prevState.theme}))

  render() {
    const {theme} = this.state
    return (
      <Context.Provider value={{theme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
