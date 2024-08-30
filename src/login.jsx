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
        <div className='main-content' style={{border:"2px solid black",width:"600px",marginLeft:"370px",paddingBottom:"75px"}}>
            <img src="./src/assets/logo.png" style={{width:"150px",height:"150px",marginLeft:"197px",borderRadius:"50%",marginTop:"15px"}}/>
        <h1 style={{marginLeft:"200px"}}>Login</h1>
                <FontAwesomeIcon icon={emailIcon} id='email-icon'/>
                <input placeholder="        Email address" className="input" type='email' onChange={(event)=>{setUserName(event.target.value);setEmailIcon()}}></input>
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={passIcon} id='password-icon'/>
                <input placeholder="        Password" className="input" type='password' onChange={(event)=>{setPassWord(event.target.value);setPassIcon()}}></input>
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

// {tasks.length > 0 ? (
//     // Display editable tasks if edit is false
//     edit === false ? (
//       tasks.map((task) => (
//         <tr key={task.id}>
//           <td>{task.taskTitle}</td>
//           <td>{task.taskDescription}</td>
//           <td>{handlePriority(task.taskPriority)}</td>
//           {/* Button to toggle edit mode */}
//       <td><button onClick={() => setEdit(true)}>Edit Task</button></td>
//           <td><button>Delete Task</button></td>
//         </tr>
//       ))
//     ) : (
//           tasks.map((task)=>{
//               <tr>
//                         <td><input value={tasks.taskTitle}/></td>
//                         <td><input value={tasks.taskDescription}/></td>
//                         <td><input value={tasks.taskPriority}/></td>
//                         <td><button onClick={() => setEdit(false)}>Save Task</button></td>
//               </tr>
//           })
      
//     )
//   ) : (
//     // Display "No data to display" if tasks are empty
//     <h4>No data to display</h4>
//   )}