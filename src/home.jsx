import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './home-styles.css';


function Home(props){
    const [TaskTitle,setTaskTitle]=useState('')
    const [TaskDesc,setTaskDesc]=useState('')
    const [TaskPriority,setTaskPriority]=useState('')
    const addTasks=(()=>{
        props.AddTasks(TaskTitle,TaskDesc,TaskPriority)
    })
    const handlePriority=((priority)=>{
        if(priority==="High"){
            return "red"
        }
        else if(priority==="Medium"){
            return "yellow"
        }
        else{
            return "green"
        }    
    })

    return(
        <div className='home-main-content'>
            <button type='submit' onClick={addTasks}>Save Task</button>
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
                                   {props.tasks.map((task)=>(
                                   <tr>
                                       <td>{task.taskTitle}</td>
                                       <td>{task.taskDesc}</td>
                                       <td><p style={{backgroundColor:handlePriority(TaskPriority)}}>{task.taskPriority}</p></td>
                                   </tr>
                                    ))}
                               </table>     
            </div>
        </div>

    )
}
export default Home;