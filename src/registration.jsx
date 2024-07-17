import {useState} from 'react'
import './register-style.css'


function Register(props){
    const [useName,setUseName]=useState('')
    const [passWord,setPassWord]=useState('')
    const add=(()=>{
        props.add(useName,passWord)
    })
   
 
    // const [path,setPath]=useState('')
    // const Path=(()=>{
    //     props.handlePath(path)
    // })
    return(
        <div className='main-content'>
        <div className="register-content">
            <h2 id="user-register-heading">User Registration</h2>
                <input placeholder="Username" className="input" type='email' onChange={(event)=>setUseName(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Password" className="input" type='password' onChange={(event)=>setPassWord(event.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' onClick={add}>Register</button>
            <br></br>
            <br></br>
            <button id='login-button'>Already a user? Click here to login</button>
        </div>
    </div>
    )
}
export default Register;