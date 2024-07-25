import {useState} from 'react'
import './login-style.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


function Login(props){
    // const navigate=useNavigate()
    const [userName,setUserName]=useState('')
    const [passWord,setPassWord]=useState('')
    // const NewPage=(()=>{
    //     navigate('register')
    // })

    // const findUserDetails=((username,password)=>{
        
    //     const UserRecord=props.records.find((record)=>record.username===username)
    //     if(UserRecord){
    //         if(UserRecord.password===password){
    //             navigate('home')
    //         }
    //         else{
    //             alert('Incorrect Password')
    //         }
    //     }
    //     else{
    //         alert('User does not exist,please sign up')
    //     }
    //   })
    // const handleLogin=(()=>{
    //     findUserDetails(userName,passWord)
    // })
    // const email_icon=<FontAwesomeIcon icon="fa-solid fa-envelope" />
    // const [emailIcon,setEmailIcon]=useState(faEnvelope)
    // const [passIcon,setPassIcon]=useState(faLock)

    // Database code
    // const handleDatabaseConnection=async (e) =>{
    //     e.preventDefault();
    //     try{
    //     const response=await fetch ('http://localhost:5173/',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify({ username: userName, password: passWord })
    //     });
    //     console.log("We fetched successfully")
    //     if(!response.ok){
    //         console.log("We did not get a response")
    //         const errorData=await response.json();
    //         throw new Error(errorData.message || "something went wrong")
    //     }
    //     else{
    //         console.log("We got a response")
    //         console.log("This is the response:",response)
    //         const data=await response.json();
    //         console.log('Raw response:', response.text()); // Log the raw response body
    //         console.log('Parsed JSON:', data);
    //         console.log(data);
    //         alert(data.message);
    //     }
    

    // } catch(error){
    //     console.log("We tried to fetch but got an error")
    //     console.log("Error:",error);
    //     alert(error)
    // }
    // };

    return(
        <div className='main-content'>
                {/* <FontAwesomeIcon icon={emailIcon} id='email-icon'/> */}
                <input placeholder="    Email address" className="login-input" type='email' onChange={(event)=>setUserName(event.target.value)}></input>
                <br></br>
                <br></br>
                {/* <FontAwesomeIcon icon={passIcon} id='password-icon'/> */}
                <input placeholder="    Password" className="login-input" type='password' onChange={(event)=>{setPassWord(event.target.value)}}></input>
                <br></br>
                <br></br>
                <button id='submit-button' onClick={handleDatabaseConnection}>Login</button>
            <br></br>
            <br></br>
            <button id='register-button'>Not a user? Click here to register</button>
    </div>
    )
}
export default Login;