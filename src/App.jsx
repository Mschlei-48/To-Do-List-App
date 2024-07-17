import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.jsx'
import Layout from './Layout.jsx';
import Register from "./registration.jsx"
import Home from './home.jsx'
import { useNavigate } from 'react-router-dom';

function App() {

  const [records,setRecords]=useState([]);

  //   const NewPage=((path)=>{
  //     const navigate=useNavigate()
  //     navigate(path)
  // })


  const add=((username,password)=>{
    setRecords([...records,{username,password}])    
  })

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='home' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
