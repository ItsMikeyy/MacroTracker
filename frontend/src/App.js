import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Nutrient from "./pages/Nutrition"
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Items from './pages/Items';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/nutrition/add" element = {<Nutrient />} />
          <Route path="/nutrition" element = {<Items />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} /> 
        </Routes>
    </>

  );
}

export default App;
