import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Popular from './components/Popular';
import Authors from './components/Authors';
import AddPoem from './components/AddPoem';
import Poems from './components/Poems';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const[poems, setPoems] = useState([]) //state for the poem data

  useEffect(()=>{
    fetch("http://localhost:3000/information")
    .then((resp)=>resp.json())
    .then((respObj)=>{
      console.log(respObj)
      setPoems(respObj)
    })
  },[])

  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/popular"><Popular/></Route>
        <Route exact path="/authors"><Authors poemItems={poems}/></Route>
        <Route exact path="/addpoem"><AddPoem/></Route>
        <Route exact path="/contactus"><Poems poemItems ={poems}/></Route>
      </Switch>
    </div>
  )
}

export default App;
