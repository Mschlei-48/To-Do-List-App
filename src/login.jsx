import {useState} from 'react'
import './login-style.css'
import { useNavigate } from 'react-router-dom';


function Login(props){

    // const [path,setPath]=useState('')
    const navigate=useNavigate()
    const NewPage=(()=>{
        navigate('register')
    })
    return(
        <div className='main-content'>
        <div className="login-content">
            <h2 id="user-login-heading">User Login</h2>
            <form id='form'>
                <input placeholder="Username" className="input" type='email'></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Password" className="input" type='password'></input>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit'>Login</button>
            </form>
            <br></br>
            <button id='register-button' onClick={NewPage}>Not a user? Click here to register</button>
        </div>
    </div>
    )
}
export default Login;