const db=require('better-sqlite3')('database.db')

const createTable=()=>{
    const sql=`
    CREATE TABLE RegisterData
    (
        username TEXT NOT NULL PRIMARY KEY,
        password TEXT NOT NULL
    );
    `
    db.prepare(sql).run()
}

createTable()
const insertTable=(username,password)=>{
    const sql=`
    INSERT INTO RegisterData (username,password)
    VALUES (?,?)
    `
    db.prepare(sql).run(username,password)
}
// insertTable('Mishis Task','Medium','Must meet with my teammates')
module.exports={createTable,insertTable};