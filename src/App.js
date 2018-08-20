import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent';
import Users from './Users'

class App extends React.Component {
  render() {
    return (
      <div>
        <SmartComponent />
        <Router>
          <div>
            <div>
              <Link to={'/users'} > USERS</Link >
              <Link to={'/hello'} > Hello</Link >
              <Link to={'/world'} > World</Link >
            </div>
            <Route path={'/users'} component={Users} />
            <Route path={'/'} exact component={Hello} />
            <Route path={'/hello'} component={Hello} />
            <Route path={'/world'} component={World} />

          </div>
        </Router>
      </div>
    )
  }
}
const Hello = function () {
  return (<p>Hello</p>)
}


const World = props => (
  <p>World</p>
)

export default App;
