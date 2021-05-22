import { FC } from "react"
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { Counter } from '../counter';
import { Todo } from '../todo'
import './App.sass';

const TestComp: FC<{}> = () => {
  const params = useParams();
  console.log(params);
  
  return (<>task</>)
}

function App() {
  return (
    <>
      <nav className='nav'>
        <Link className='nav_item' to='/'>Root</Link>
        <Link className='nav_item' to='/counter'>Counter</Link>
        <Link className='nav_item' to='/todo'>todo</Link>
        <Link className='nav_item' to='/task'>watch task</Link>
        <Link className='nav_item' to='/task/create'>create task</Link>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/counter">
            <Counter number={5}/>
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/task">
            Hello World
          </Route>
          <Route exact path="/task/create">
            Hello World
          </Route>
          <Route exact path="/task/:id">
            <TestComp/>
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

