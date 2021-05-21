import { Link, Route, Switch } from 'react-router-dom';
import { Counter } from '../counter';
import {  } from '../todo'
import './App.sass';


function App() {
  return (
    <>
      <nav className='nav'>
        <Link className='nav_item' to='/'>Root</Link>
        <Link className='nav_item' to='/counter'>Counter</Link>
        <Link className='nav_item' to='/todo'>todo</Link>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/counter">
            <Counter number={5}/>
          </Route>
          <Route exact path="/todo">
            Hello World
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
