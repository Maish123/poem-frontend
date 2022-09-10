import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Popular from './components/Popular';
import Authors from './components/Authors';
import AddPoem from './components/ContactUs';
import Poems from './components/Poems';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContactUs from './components/ContactUs';

function App() {

  const[poems, setPoems] = useState([]) //state for the poem data

  useEffect(()=>{
    fetch("http://localhost:9292/poems")
    .then((resp)=>resp.json())
    .then((respObj)=>{
      console.log(respObj)
      setPoems(respObj)
    })
  },[])

  //Make a post request to the server(for new poem)

function addPoemToList(newPoem){
  setPoems([...poems,newPoem])
}

  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/popular"><Popular/></Route>
        <Route exact path="/authors"><Authors/></Route>
        <Route exact path="/contactUs"><ContactUs/></Route>
        <Route exact path="/poems"><Poems poems ={poems} onAddPoem={addPoemToList}/></Route>
      </Switch>
    </div>
  )
}

export default App;
