import { Route, Switch } from 'react-router-dom';
import Register from "./application/Register";
import Login from "./application/Login";

function App() {
  return (
      <main>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Register" component={Register} />
          </Switch>
      </main>
  )
}

export default App;
