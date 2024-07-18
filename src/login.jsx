import {useState} from 'react'
import './login-style.css'
import { useNavigate } from 'react-router-dom';


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

    return(
        <div className='main-content'>
                <input placeholder="Username" className="input" type='email' onChange={(event)=>setUserName(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Password" className="input" type='password' onChange={(event)=>setPassWord(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' onClick={handleLogin}>Login</button>
            <br></br>
            <br></br>
            <button id='register-button' onClick={NewPage}>Not a user? Click here to register</button>
    </div>
    )
}
export default Login;