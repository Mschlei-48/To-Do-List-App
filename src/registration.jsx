import {useState} from 'react'
import './register-style.css'
import { useNavigate } from 'react-router-dom'

function Register(props){
    const [useName,setUseName]=useState('')
    const [passWord,setPassWord]=useState('')
    const navigate=useNavigate()

    const add=(()=>{
        props.add(useName,passWord)
    })
    
    const NewPage=(()=>{
        navigate('/')
    })
   
    return(
        <div className='main-content'>
        <div className="register-content">
            <h2 id="user-register-heading">User Registration</h2>
                <input placeholder="Username" className="input" type='email' onChange={(event)=>setUseName(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Password" className="input" type='password' onChange={(event)=>setPassWord(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' onClick={add}>Register</button>
            <br></br>
            <br></br>
            <button id='login-button' onClick={NewPage}>Already a user? Click here to login</button>
        </div>
    </div>
    )
}
export default Register;