import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import Authors from './components/Authors';
import AddPoem from './components/AddPoem';
import Poems from './components/Poems';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const[poems, setPoems] = useState([]) //state for the poem data

  useEffect(()=>{
    fetch("https://inshorts.deta.dev/news?category=science")
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
        <Route exact path="/categories"><Categories/></Route>
        <Route exact path="/authors"><Authors/></Route>
        <Route exact path="/addpoem"><AddPoem/></Route>
        <Route exact path="/contactus"><Poems poemItems ={poems}/></Route>
      </Switch>
    </div>
  )
}

export default App;
