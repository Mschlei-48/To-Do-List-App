import {useState} from 'react'
import './register-style.css'
import { useNavigate } from 'react-router-dom'

function Register(props){
    const [useName,setUseName]=useState('')
    const [passWord,setPassWord]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const navigate=useNavigate()

    const add=(()=>{
        props.add(useName,passWord)
    })
    
    const ConfPassword=((pass1,pass2)=>{
        if(pass1===pass2){
            add()
            navigate('/')
        }
        else{
            alert("The passwords do not match")
        }
    })
    const handlePassword=(()=>{
        ConfPassword(passWord,confirmPassword)
    })
    const NewPage=(()=>{
        navigate('/')
    })
   
    return(
        <div className='main-content'>
                <input placeholder="Username" className="register-input" type='email' onChange={(event)=>setUseName(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Password" className="register-input" type='password' onChange={(event)=>setPassWord(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Confirm Password" className="register-input" type='password' onChange={(event)=>setConfirmPassword(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' onClick={handlePassword}>Register</button>
            <br></br>
            <br></br>
            <button id='login-button' onClick={NewPage}>Already a user? Click here to login</button>
    </div>
    )
}
export default Register;