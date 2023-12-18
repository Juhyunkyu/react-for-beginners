import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
function App() {
  return (
    <Router>
      <Switch>
        {/* <Router basename={'http://Juhyunky.github.io/my-app'}></Router> */}
        <Router path="/hello">
          <h2>hello</h2>
        </Router>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
