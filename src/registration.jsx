import {useState} from 'react'
import './register-style.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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
    const [emailIcon,setEmailIcon]=useState(faEnvelope)
    const [passIcon,setPassIcon]=useState(faLock)
    return(
        <div className='register-main-content'>
            <FontAwesomeIcon icon={emailIcon} id='reg-email-icon'/>
                <input className="register-input" type='email' placeholder="    Email address" onChange={(event)=>{setUseName(event.target.value);setEmailIcon('')}}></input>
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={passIcon} id='reg-password-icon'/>
                <input placeholder="    Password" className="register-input" type='password' onChange={(event)=>{setPassWord(event.target.value);setPassIcon('')}}></input>
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={passIcon} id='reg-password-icon2'/>
                <input placeholder="    Confirm Password" className="register-input" type='password' onChange={(event)=>{setConfirmPassword(event.target.value);setPassIcon('')}}></input>
                <br></br>
                <br></br>
                <button type='submit' onClick={handlePassword} id='register-submit-button'>Register</button>
            <br></br>
            <br></br>
            <button id='login-button' onClick={NewPage}>Already a user? Click here to login</button>
    </div>
    )
}
export default Register;