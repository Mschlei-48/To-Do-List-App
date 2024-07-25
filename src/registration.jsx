import {useState,useEffect} from 'react'
import axios from 'axios'
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

    const addUser = async () => {
        try {
          await axios.post('http://localhost:3001/register', {
            "username":useName,
            "password":passWord,
          });
          alert('User added successfully');
          navigate('/');
        } catch (error) {
          alert('Error registering user:' + error.message); // Use error.message for better feedback
        }
      };


    return(
        <div className='register-main-content'>
            {/* <FontAwesomeIcon icon={emailIcon} id='reg-email-icon'/> */}
                <input className="register-input" type='email' placeholder="    Email address" onChange={(event)=>{setUseName(event.target.value)}}></input>
                <br></br>
                <br></br>
                {/* <FontAwesomeIcon icon={passIcon} id='reg-password-icon'/> */}
                <input placeholder="    Password" className="register-input" type='password' onChange={(event)=>{setPassWord(event.target.value)}}></input>
                <br></br>
                <br></br>
                {/* <FontAwesomeIcon icon={passIcon} id='reg-password-icon2'/> */}
                <input placeholder="    Confirm Password" className="register-input" type='password'></input>
                <br></br>
                <br></br>
                <button type='submit' id='register-submit-button' onClick={addUser}>Register</button>
            <br></br>
            <br></br>
            <button id='login-button' onClick={() => navigate('/login')}>Already a user? Click here to login</button>
    </div>
    )
}
export default Register;