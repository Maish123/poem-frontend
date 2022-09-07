import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import Authors from './components/Authors';
import AddPoem from './components/AddPoem';
import ContactUs from './components/ContactUs';
import { Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/categories"><Categories/></Route>
        <Route exact path="/authors"><Authors/></Route>
        <Route exact path="/addpoem"><AddPoem/></Route>
        <Route exact path="/contactus"><ContactUs/></Route>
      </Switch>
    </div>
  )
}

export default App;
