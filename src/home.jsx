import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './home-styles.css';
import axios from 'axios'


function Home(props){
    const [TaskTitle,setTaskTitle]=useState('')
    const [TaskDesc,setTaskDesc]=useState('')
    const [TaskPriority,setTaskPriority]=useState('')

    const email=props.email;
    const [tasks,setTasks]=useState([]);
    //update the tasks
    const updateTask=async ()=>{
        try{
            // const task={"taskTitle":TaskTitle, "TaskPriority":TaskPriority,"taskDescription":TaskDesc,"username":{email}}
            const response=await axios.put('http://localhost:3001/users/update-tasks',{
                "taskTitle":TaskTitle, 
                "TaskPriority":TaskPriority,
                "taskDescription":TaskDesc,
                "username":email
            });
            alert('Task added successfully');
        }
        catch(error){
            console.error("Error making input request:",error);
        }
    };

    return(
        <div className='home-main-content'>
            <button type='submit' onClick={updateTask}>Save Task</button>
            <br></br>
            <br></br>
            <input placeholder='Add Task Title' onChange={(event)=>setTaskTitle(event.target.value)}></input>
            <br></br>
            <br></br>
            <button  type='submit' onClick={()=>setTaskPriority('Low')}>Low</button>
            <button type='submit' onClick={()=>setTaskPriority('Medium')}>Medium</button>
            <button type='submit' onClick={()=>setTaskPriority('High')}>High</button>
            <p>Selcted priority:{TaskPriority}</p>
            <br></br>
            <br></br>
            <textarea placeholder='Enter  Task Description' onChange={(event)=>setTaskDesc(event.target.value)}></textarea>
            <div className='table-div'>
                <h1>Your Tasks</h1>
                                   <table>
                                   <tr>
                                       <th>Task Title</th>
                                       <th>Task Description</th>
                                       <th>Task Priority</th>
                                </tr>
                                   {/* {props.tasks.map((task)=>(
                                   <tr>
                                       <td>{task.taskTitle}</td>
                                       <td>{task.taskDesc}</td>
                                       <td><p style={{backgroundColor:handlePriority(TaskPriority)}}>{task.taskPriority}</p></td>
                                   </tr>
                                    ))} */}
                               </table>     
            </div>
        </div>

    )
}
export default Home;