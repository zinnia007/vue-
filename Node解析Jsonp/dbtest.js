var db = require('./db');
const http= require('http')

http.createServer((req,res) =>{
    url =req.url
    if(url == '/getData'){
        this.queryData()
    }
})

function queryData(){
    let sql = 'select * from brand'
    db.queryData(sql,(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }
    });
}

http.listen(3000,()=>{
    console.log('server listen at http://127.0.0.1:3000')
})



// db.insertData((err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })
