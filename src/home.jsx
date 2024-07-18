import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './home-styles.css';


function Home(props){

    const [TaskTitle,setTaskTitle]=useState('')
    const [TaskDesc,setTaskDesc]=useState('')
    const addTasks=(()=>{
        props.AddTasks(TaskTitle,TaskDesc)
    })

    return(
        <div className='main-content'>
            <button type='submit' onClick={addTasks}>Save Task</button>
            <br></br>
            <br></br>
            <input placeholder='Add Task Title' onChange={(event)=>setTaskTitle(event.target.value)}></input>
            <br></br>
            <br></br>
            <textarea placeholder='Enter  Task Description' onChange={(event)=>setTaskDesc(event.target.value)}></textarea>
            <div className='table-div'>
                <h1>Your Tasks</h1>
                {/* props.tasks.map((task=>{ */}
                                   <table>
                                   <tr>
                                       <th>Task Title</th>
                                       <th>Task Description</th>
                                   </tr>
                                   <tr>
                                       <td>task.taskTitle</td>
                                       <td>task.taskDesc</td>
                                   </tr>
                                   
                               </table>     
                {/* }) */}

            </div>
        </div>

    )
}
export default Home;