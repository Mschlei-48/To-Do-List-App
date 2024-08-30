const express = require('express');
const cors = require('cors');
// const expressJson = require('express').json; // Use express.json() for middleware
const db = require('better-sqlite3')('database.db');
const app=express()
app.use(cors());
app.use(express.json()); // Add middleware for JSON parsing

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS USERS (
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      taskTitle TEXT UNIQUE,
      taskPriority TEXT,
      taskDescription TEXT
    );
  `;
  db.prepare(sql).run();
};

createTable();



app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const sql = `
    INSERT INTO USERS (username, password)
    VALUES (?, ?)
  `;

  try {
    const info = db.prepare(sql).run(username, password);
    res.status(201).json({ id: info.lastInsertRowid,message:"User registered sucessfully" });
  } catch (error) {
    res.status(500).json({ error: 'User already exists or other database error' });
  }
});


// GET Request to get all users
app.get('/users',(req,res)=>{
  try{
    const rows=db.prepare("SELECT * FROM USERS").all();
    res.json(rows);
  }
    catch(error) {
      console.log(error);
      res.status(500).json({error:"Failed to retrieve users"});
    }
  });


  // Get a user by their username
  app.get('/users/username',(req,res)=>{
    const {username}=req.query; //Note taht when you say req.body, it means the id will be taken from the body of the request, but when you say body.params it means the id will be taken from the params of the request
    try{
      const row=db.prepare("SELECT * FROM USERS WHERE username=?").get(username);
      if(row) {
        res.json(row);
      }
      else{
        res.status(404).json({error:"User not found"});
      }
    }
    catch(error){
      console.error(error);
      res.status(500).json({error:"Failed to retrieve user"});
    }
  });

  // Update a user by their username
  // app.put("/users/update-credentials",(req,res)=>{
  //   // const {id}=req.params;
  //   const {username, password}=req.body
  //   try{
  //     const update_stmt=db.prepare("UPDATE  usersData SET username=?,password=? WHERE id=?");
  //     const info=update_stmt.run(username,password,id);
  //     if(info.changes>0){
  //       res.json({message:"Update successfully!"})
  //     }
  //     else{
  //       res.status(404).json({error:"User not found"});
  //     }
  //   }
  //   catch(error){
  //     console.error(error);
  //     res.status(500).json({error:"Failed to update user"});
  //   }
  // });

  // Update the tasks by username
  app.put("/users/update-tasks",(req,res)=>{
    // const {id}=req.params;
    const {taskTitle, TaskPriority,taskDescription,username}=req.body
    try{
      const update_stmt=db.prepare("UPDATE  USERS SET taskTitle=?, TaskPriority=?,taskDescription=? WHERE username=?");
      const info=update_stmt.run(taskTitle, TaskPriority,taskDescription,username);
      if(info.changes>0){
        res.json({message:"Updated Tasks successfully!"})
      }
      else{
        res.status(404).json({error:"User not found"});
      }
    }
    catch(error){
      console.error(error);
      res.status(500).json({error:"Failed to update user"});
    }
  });

  // Deelete user by their username
  app.delete("/users/del",(req,res)=>{
    const {username}=req.query
    try{
      const delete_stmt=db.prepare("DELETE FROM USERS WHERE username=?");
      const info=delete_stmt.run(username);
      if(info.changes>0){
        res.json({message:"User deleted successfully!"});
      }
      else{
        res.status(404).json({error:"User not found"})
      }
    }
    catch(error){
      console.error(error);
      res.status(500).json({error:"Failed to delete user"})
    }
  })
  
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

