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
import './login-style.css'
import { useNavigate } from 'react-router-dom';
// import {enablePromise,openDatabase,} from 'react-native-sqlite-storage'

function App() {

  // const [records,setRecords]=useState([]);
  // const [tasks,setTasks]=useState([])

  // const AddTasks=((taskTitle,taskDesc,taskPriority)=>{
  //   setTasks([...tasks,{taskTitle,taskDesc,taskPriority}])
  // })
  // const add=((username,password)=>{
  //   setRecords([...records,{username,password}])    
  // })

  //console.log(records)
  
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
