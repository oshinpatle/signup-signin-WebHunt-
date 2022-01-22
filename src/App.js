import './App.css';
<<<<<<< HEAD
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
=======

function App() {
	return (
		<div className='App'>
			<h1>Web hunt 2022</h1>
		</div>
	);
>>>>>>> 9959cb8a7d1607d4ea5f4b8f396be23ca52de1af
}

export default App;
