import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  )
}

export default App;
