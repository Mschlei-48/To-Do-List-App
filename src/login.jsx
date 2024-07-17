import {useState} from 'react'
import './login-style.css'

function Login(){
    // const [path,setPath]=useState('')
    // const Path=(()=>{
    //     props.handlePath(path)
    // })
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
            <button id='register-button'>Not a user? Click here to register</button>
        </div>
    </div>
    )
}
export default Login;