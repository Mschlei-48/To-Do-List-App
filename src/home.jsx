import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './home-styles.css';
import axios from 'axios'
import {useEffect} from 'react'


function Home(props){
    useEffect(()=>{
        getTasks();
    });

    const [TaskTitle,setTaskTitle]=useState(undefined)
    const [TaskDesc,setTaskDesc]=useState(undefined)
    const [TaskPriority,setTaskPriority]=useState(undefined)
    const [edit,setEdit]=useState(false);
    const [toggle,setToggle]=useState("")
    const email=props.email;
    const navigate=useNavigate()
    console.log("Email:",email);
    
    const [tasks,setTasks]=useState([])
    
    // Update tasks
    const updateTasks=async ()=>{
        try{
            const response=await axios.put("http://localhost:3001/users/update-tasks",{
                "taskTitle":TaskTitle, 
                "TaskPriority":TaskPriority,
                "taskDescription":TaskDesc,
                "username":email
            })
            alert("Updated TaskSuccessfully")
        }
        catch(error){
            console.error("Error is:",error)
        }
    };
    //Add the tasks
    const AddTask=async ()=>{
        try{
            const response=await axios.post('http://localhost:3001/users/post-tasks',{
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

    // Get Tasks
    const getTasks = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/users/username?username=${props.email}`); // Use template literal for clarity
        // setTasks({"taskTitle":response.data.taskTitle,"taskDescription":response.data.taskDescription,"taskPriority":response.data.taskPriority})
        console.log("Fetched:",response.data)
        setTasks(response.data)
        console.log("Tasks:",tasks)
        // alert("Task are fetched successfully")
        } catch (error) {
          console.error(error, "Could not get user");
        }
      };

    //   Delete Tasks
    const deleteTasks=async(task)=>{
        try{
            const response=await axios.delete(`http://localhost:3001/users/del?username=${email}&taskTitle=${task}`)
            alert("Deleted task successfully")
        }
        catch(error){
            console.error("Error is:",error)
        }
    }
      
    //   Handle Priority
      const handlePriority = (priority) => {
        if(priority === "High"){
            return "red"
        }
        else if(priority === "Medium"){
            return "yellow"
        }
        else if(priority==="Low"){
            return "green"
        }
        
      };


    //   Handle Content
      const handleContent=(()=>{
        if(tasks.length===1 || tasks.length===0){
            return(
                <h1>No data to display</h1>
            )
        }
        else if(tasks.length>1){
            return(

                edit === false ? (
                    <>
                <table className="table1">
                    <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Task Priority</th>
                    </tr>
                    </thead>
                    {tasks.slice(1).map((task)=>(
                            <tbody>
                            <tr>
                                <td>{task.taskTitle}</td>
                                <td>{task.taskDescription}</td>
                                <td style={{ backgroundColor: handlePriority(tasks.taskPriority) }}>{tasks.taskPriority}</td>
                                <td><button onClick={() => setEdit(true)}>Edit Task</button></td>
                                <td><button onClick={()=>{deleteTasks(task.taskTitle)}}>Delete Task</button></td>
                            </tr>
                        </tbody>
                    ))}
                     </table>

                </> 
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
                        <td><input onChange={(event)=>setTaskPriority(event.target.value)}></input></td>
                        <td><button onClick={() => {setEdit(false);updateTasks()}}>Save Task</button></td>
                        <td><button onClick={()=>setEdit(false)}>Cancel</button></td>
                        </tr> 
                    </tbody>
                </table>
                
                )
            )
        }
      })
      
      const showTasks=(()=>{
        
      })
console.log(tasks)
    return (
        <div className="home-main-content">

            <button onClick={()=>navigate("/")} id="logout-button">Logout</button>
            <br></br>
            <img src="./src/assets/logo.png" style={{width:"210px",height:"210px",marginLeft:"540px",borderRadius:"50%",marginTop:"15px"}}/>
            <button onClick={()=>setToggle("form")}>Form</button>
            <button onClick={()=>setToggle("table")}>Table</button>
            <button onClick={()=>setToggle("both")}>Both</button>
            {/* {toggle==="form"?():()} */}
        <div className='home-form-content'>
            
            <h1 style={{marginLeft:"320px"}}>Enter Task</h1>   
          <br/>
          <br/>
          <input style={{marginLeft:"95px",width:"310px",height:"50px",borderRadius:"20px",border:"1.5px solid orange"}} placeholder='Add Task Title' onChange={(event) => setTaskTitle(event.target.value)} />
          <label for="priority" style={{marginLeft:"95px",fontWeight:"bold",fontSize:"20px"}}>Priority of Task: </label>
          <select name="priority" className="priorities" onChange={(event)=>setTaskPriority(event.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <br/>
          <textarea style={{marginLeft:"95px",marginTop:"75px",width:"310px",height:"50px",borderRadius:"15px",border:"1.5px solid orange"}} placeholder='Enter Task Description' onChange={(event) => setTaskDesc(event.target.value)} />
            <br></br>
          <button id="submit" onClick={()=>AddTask()}>Save Task</button>
          </div>
          <div className='table-div'>
            <h1>Your Tasks</h1>
            
            {handleContent()}
                
            </div>

        </div>

      );
}
export default Home;




