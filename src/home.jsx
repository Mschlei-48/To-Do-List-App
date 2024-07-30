import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './home-styles.css';
import axios from 'axios'
import {useEffect} from 'react'


function Home(props){

    // Automatically run the getTasks function when the page opens
    useEffect(()=>{
        // const ignore=false;
        getTasks();
        
    },[]);

    const [TaskTitle,setTaskTitle]=useState('')
    const [TaskDesc,setTaskDesc]=useState('')
    const [TaskPriority,setTaskPriority]=useState('')
    const [edit,setEdit]=useState(false);
    const email=props.email;
    console.log("Email:",email);
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
            // alert('Task added successfully');
            tasks.pop()
            setTasks(...tasks,[{"taskTitle":TaskTitle,"TaskPriority":TaskPriority,"taskDescription":TaskDesc}])
        }
        catch(error){
            console.error("Error making input request:",error);
        }
    };

    const getTasks = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/users/username?username=${props.email}`); // Use template literal for clarity
          setTasks([...tasks,response.data])
        } catch (error) {
          console.error(error, "Could not get user");
        }
      };
      
    const handlePriority=((priority)=>{
        if(priority=="High"){
           return <p style={{backgroundColor:"red"}}>High</p>
        }
        else if(priority==="Medium"){
           return <p style={{backgroundColor:"yellow"}}>Medium</p>
        }
        else if(priority=="Low"){
            return <p style={{backgroundColor:"green"}}>Low</p>
        }
    })
console.log(tasks)
    return (
        <div className='home-main-content'>
          <button type='submit' onClick={() => { updateTask(); getTasks()}}>Save Task</button>
          <br />
          <br />
          <input placeholder='Add Task Title' onChange={(event) => setTaskTitle(event.target.value)} />
          <br />
          <br />
          <button type='submit' onClick={() => setTaskPriority('Low')}>Low</button>
          <button type='submit' onClick={() => setTaskPriority('Medium')}>Medium</button>
          <button type='submit' onClick={() => setTaskPriority('High')}>High</button>
          <p>Selected priority: {TaskPriority}</p>
          <br/>
          <br/>
          <textarea placeholder='Enter Task Description' onChange={(event) => setTaskDesc(event.target.value)} />
          <div className='table-div'>
            <h1>Your Tasks</h1>
            {tasks.length > 0 && email !== "" & tasks[0].taskTitle!==undefined ? (
                edit === false ? (
                <table>
                    <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Task Priority</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                        <td>{task.taskTitle}</td>
                        <td>{task.taskDescription}</td>
                        <td>{handlePriority(task.taskPriority)}</td>
                        <td><button onClick={() => setEdit(true)}>Edit Task</button></td>
                        <td><button onClick={()=>{setTaskTitle(null);setTaskDesc(null);setTaskPriority(null);updateTask();tasks.pop()}}>Delete Task</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : (
                
                <table>
                    <thead>
                    <tr>
                    <th>Task Title</th>
                    <th>Task Description</th>
                    <th>Task Priority</th>
                    <th>Save Changes</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input onChange={(event)=>setTaskTitle(event.target.value)}></input></td>
                        <td><input onChange={(event)=>setTaskDesc(event.target.value)}></input></td>
                        <td><input onChange={(event)=>handlePriority(event.target.value)}></input></td>
                        <td><button onClick={() => {setEdit(false);updateTask();tasks.pop();getTasks()}}>Save Task</button></td>
                        </tr> 
                    </tbody>
                </table>
                
                )
            ) : (
                <h3>No data to display</h3>
            )}
            </div>

        </div>
      );
}
export default Home;




