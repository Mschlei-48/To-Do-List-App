import {useState} from 'react'
import './login-style.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


function Login(props){
    const navigate=useNavigate()
    const [userName,setUserName]=useState('')
    const [passWord,setPassWord]=useState('')
    const NewPage=(()=>{
        navigate('register')
    })

    const findUserDetails=((username,password)=>{
        
        const UserRecord=props.records.find((record)=>record.username===username)
        if(UserRecord){
            if(UserRecord.password===password){
                navigate('home')
            }
            else{
                alert('Incorrect Password')
            }
        }
        else{
            alert('User does not exist,please sign up')
        }
      })
    const handleLogin=(()=>{
        findUserDetails(userName,passWord)
    })
    // const email_icon=<FontAwesomeIcon icon="fa-solid fa-envelope" />
    const [emailIcon,setEmailIcon]=useState(faEnvelope)
    const [passIcon,setPassIcon]=useState(faLock)
    return(
        <div className='main-content'>
                <FontAwesomeIcon icon={emailIcon} id='email-icon'/>
                <input placeholder="    Email address" className="login-input" type='email' onChange={(event)=>{setUserName(event.target.value);setEmailIcon('')}}></input>
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={passIcon} id='password-icon'/>
                <input placeholder="    Password" className="login-input" type='password' onChange={(event)=>{setPassWord(event.target.value);setPassIcon('')}}></input>
                <br></br>
                <br></br>
                <button type='submit' id='submit-button' onClick={handleLogin}>Login</button>
            <br></br>
            <br></br>
            <button id='register-button' onClick={NewPage}>Not a user? Click here to register</button>
    </div>
    )
}
export default Login;