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

function App() {

  const [records,setRecords]=useState([]);
  const [path,setPath]=useState("/")

  const add=((username,password)=>{
    setRecords([...records,{username,password}])    
  })
  // console.log(records.map((record)=>{record.username,record.password}))
  // const [Path,setPath]=useState('')
  // const handlePath=((path)=>{
  //   setPath(path);
  // })
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register add={add} records={records}/>}/>
          <Route path='home' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
