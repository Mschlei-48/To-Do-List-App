import {useState} from 'react'
import './login-style.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


function Login(props){
    const navigate=useNavigate()
    const [userName,setUserName]=useState('')
    const [passWord,setPassWord]=useState('')
    const [usernames,setUsernames]=useState([])
    const [passwords,setPasswords]=useState([])
    const NewPage=(()=>{
        navigate('register')
    })
    
    // Get the email of the recently logged in person
    const handleEmail = () => {
        props.updateEmail(userName); // Update the message in parent component
      };
    
    const [emailIcon,setEmailIcon]=useState(faEnvelope)
    const [passIcon,setPassIcon]=useState(faLock)
    // Database code(Get user details and checkif the entered information matches the one in the database, if it does then log the person in)
    // https://codedamn.com/news/reactjs/axios-network-requests
    const getUsers=async ()=>{
    const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
    if(email_pattern.test(userName)===true){ 
        try{
            const response=await axios.get('http://localhost:3001/users') 
             
            if(response.data.find((record)=>record.username===userName && record.password===passWord)){
                navigate('home');
            }
            else if(response.data.find((record)=>record.username===userName && record.password!==passWord)){
                alert("Incorrect password,please enter correct password")
            }
            else if(response.data.find((record)=>record.username!==userName)){
                alert("User does not exist, please register below")
            }
                      
        }
        catch(error){
            alert(error.message,"Failed to retrive users")
        }
    }
    else{
        alert("Invalid email. Please enter valid email address")
    }
     
    };

    return(
        <div className='main-content'>
                <FontAwesomeIcon icon={emailIcon} id='email-icon'/>
                <input placeholder="    Email address" className="login-input" type='email' onChange={(event)=>{setUserName(event.target.value);setEmailIcon()}}></input>
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={passIcon} id='password-icon'/>
                <input placeholder="    Password" className="login-input" type='password' onChange={(event)=>{setPassWord(event.target.value);setPassIcon()}}></input>
                <br></br>
                <br></br>
                <button id='submit-button' onClick={()=>{getUsers();handleEmail()}}>Login</button>
            <br></br>
            <br></br>
            <button id='register-button' onClick={NewPage}>Not a user? Click here to register</button>
    </div>
    )
}
export default Login;