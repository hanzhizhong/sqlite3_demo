/**
 * sqlite3数据库的的封装
 */

 const fs=require('fs')
 const Sqlite=require('sqlite3').verbose();

 class DB{
    constructor(name){
        this.db=new Sqlite.Database(name);
        if(!fs.existsSync(name)){
            fs.openSync(name,'w')
        }
    }

    //创建表结构
    createTable(sql){
        this.db.serialize(()=>{
            this.db.run(sql,(err)=>{
                if(err){
                    console.log(`create table failure: ${err}`)
                    return 
                }
                console.log('create table success')
            })
        })
    }

    //插入数据 多条或者一条数据
    insertData(sql,datas){
        this.db.serialize(()=>{
            let statement=this.db.prepare(sql)
            try{
                for(let i=0;i<datas.length;i++){
                    statement.run(datas[i])
                }
                //statement.run(datas)
            }catch(err){
                console.log(`insert data failure: ${err}`)
            }
            statement.finalize()
        })
    }

    //更新数据
    updateData(sql){
        this.db.run(sql,(err)=>{
            if(err){
                console.log(`update data failure:${err}`)
                return 
            }
            console.log('update success')
        })
    }

    //查询数据一条
    getOneData(sql,callback){
        this.db.get(sql,(err,data)=>{
            if(err){
                console.log(`get data failure:${err}`)
                return 
            }
            callback && callback(data)
        })
    } 

    //查询所有的数据
    getAllData(sql,callback){
        this.db.all(sql,(err,datas)=>{
            if(err){
                console.log(`get all data failure:${err}`)
                return 
            }
            callback && callback(datas)
        })
    }

    //删除数据
    delDataByCondition(sql){
        this.db.run(sql,(err)=>{
            if(err){
                console.log(`delete data failure:${err}`)
                return 
            }
            console.log('delete success')
        })
    }

    //关闭数据库
    closeDatabase(sql){
        this.db.run(sql,(err)=>{
            if(err){
                console.log(`close database failure:${err}`)
                return 
            }
            console.log('close database success')
        })
    }
 }


 //DB('test.db')
 module.exports=DB;