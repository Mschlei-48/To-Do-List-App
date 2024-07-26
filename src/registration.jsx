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
    const [emailIcon,setEmailIcon]=useState(faEnvelope)
    const [passIcon,setPassIcon]=useState(faLock)

    const addUser = async () => {
      const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if(passWord!=="" && passWord===confirmPassword && email_pattern.test(useName)==true){
        try {
          await axios.post('http://localhost:3001/register', {
            "username":useName,
            "password":passWord
          });
          alert('User added successfully');
          navigate('/');
        } catch (error) {
          alert('Error registering user:' + error.message); // Use error.message for better feedback
        }
      }
      else if(email_pattern.test(useName)===false){
        alert("Enter valid username")
      }
      else if(passWord===''){
        alert("Invalid password, please enter a valid password")
      }
      else if(passWord!==confirmPassword){
        alert("The passwords do not match");
      }
      
      };

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
                <button type='submit' id='register-submit-button' onClick={addUser}>Register</button>
            <br></br>
            <br></br>
            <button id='login-button' onClick={() => navigate('/')}>Already a user? Click here to login</button>
    </div>
    )
}
export default Register;