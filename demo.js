const DB=require('./utils')

let dbFile='test.db'
let tableName="user"
let db=new DB(dbFile)

db.createTable(`create table ${tableName} (id integer, username varchar, password varchar)`)

//let arr=[[1,'han','123456'],[2,'han','123456'],[3,'han','123456'],[4,'han','123456']]
/* let arr=[{$id:1,$username:'han',$password:'123456'},{$id:2,$username:'han',$password:'123456'},{$id:3,$username:'han',$password:'123456'},{$id:4,$username:'han',$password:'123456'}] */

/* let insertSql="insert into "+tableName+"(id,username,password) values($id,$username,$password)"
db.insertData(insertSql,arr) */

/* let arr=[[1,'han','123456'],[2,'han','123456'],[3,'han','123456'],[4,'han','123456']]
let insertSql=`insert into ${tableName}(id,username,password) values (?,?,?)`
db.insertData(insertSql,arr) */

db.delDataByCondition(`delete from ${tableName} where id=4`)

db.getAllData(`select * from ${tableName}`,handleData)

function handleData(data){
    console.log('sssss',data) 
}