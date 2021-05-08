import { Link, Route, Switch } from 'react-router-dom';
import { Counter } from '../counter';
import './App.css';


function App() {
  return (
    <>
      <nav>
        <Link to='/'>Root</Link>
        <Link to='/counter'>Counter</Link>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/counter">
            <Counter number={5}/>
          </Route>
          <Route exact path="/">
            Hello World
          </Route>
          <Route>
            404 not found
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
