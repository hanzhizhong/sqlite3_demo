const fs=require('fs')

/* fs.access('test.txt',(err)=>{
    console.log(err)
}) */

/* fs.access('text.txt',fs.constants.F_OK,(err)=>{
    console.log(err)
}) */

/* fs.open('text.txt','r',(err,fd)=>{
    console.log(err)
    console.log(fd)
}) */
/* fs.readFile('text.txt',(err,data)=>{
    console.log(err)
    console.log(data)
}) */
/* fs.writeFile('text.txt','hello',(err)=>{
    console.log(err)
}) */
//console.log(fs.accessSync('text.txt'))
//let ret=fs.statSync('text.txt')
//let result=fs.existsSync('text.txt')
//console.log(result)

const sqlite3=require('sqlite3')
let db;
db=new sqlite3.Database('hello.db')

if(!fs.existsSync('hello.db')){
    fs.openSync('hello.db','w')
}



/* db.run(`create table student (id integer primary key,name varchar,password varchar)`,(err)=>{
    if(err){
        console.log('create failure',err)
        return 
    }
    console.log('create success')
}) */

/* db.run(`insert into student values (3,'han','1234')`,(err)=>{
    if(err){
        console.log('insert fail',err)
        return 
    }
    console.log('insert success')
})

db.run(`update student set name='admin' where id=4`,(err)=>{
    if(err){
        console.log('update err',err)
        return 
    }
    console.log('update success')  
})

db.run(`delete from student where id=1`,(err)=>{
    if(err){
        console.log('delete err',err)
        return 
    }
    console.log('delete success')

}) */



/* db.all(`select * from student`,(err,data)=>{
    if(err){
        console.log('select err',err)
        return 
    } 
    console.log(data) 
}) 

db.run('drop table student',(err)=>{
    if(err){
        console.log('drop err',err)
        return  
    }
    console.log('drop table success')
}) */
db.run(``)

db.close((err)=>{
    if(err){
        console.log(err)
    }
}) 
  


