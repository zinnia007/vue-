var db = require('./db');

db.queryData((err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
});
db.insertData((err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})
