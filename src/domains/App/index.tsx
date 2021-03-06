import { Link, Route, Switch } from 'react-router-dom';
import { Counter } from '../counter';
import { Todo } from '../todo';
import { Task } from "../task";
import { AddTask } from "../task/add";
import './App.sass';
import { EditTask } from '../task/edit';

// const TestComp: FC<{}> = () => {
//   const params = useParams();
//   console.log(params);
  
//   return (<>task</>)
// }

function App() {
  return (
    <>
      <nav className='nav'>
        <Link className='nav_item' to='/'>Root</Link>
        <Link className='nav_item' to='/counter'>Counter</Link>
        <Link className='nav_item' to='/todo'>todo</Link>
        <Link className='nav_item' to='/task'>task</Link>
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
            <Task />
          </Route>
          <Route exact path="/task/create">
            <AddTask />
          </Route>
          <Route exact path="/task/:id">
            <EditTask />
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

