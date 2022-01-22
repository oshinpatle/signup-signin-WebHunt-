import './App.css';
import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> 
      </Route>
      <Route path="/signin" element={<Signin/>}> 
      </Route>
      <Route path="/signup" element={<Signup/>}>    
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
