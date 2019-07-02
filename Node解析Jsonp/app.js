const http = require('http')
const urlModule = require('url')
const fs = require('fs')
const querystring = require('querystring')
var db = require('./db');

//引入express
// const express = require('express')
// const app = express()

// app.get('/',(req,res) => {
//     res.send('hello word')
// })

// app.listen(3000,() =>{
//     console.log('port 3000')
// })

////===================================================================
//这是原生js实现的
// //创建一个http服务器
http.createServer((req,res) =>{
    console.log(req.url,req.method)
    //简单粗暴解决二跨域问题，允许所有的域进行访问
    res.writeHead(200,{
        'Content-Type': 'text/plain',
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Headers': 'Content-Type,Access-Token'
    });
    //获取url,以及前台传进来的参数
    const {pathname:url,query} = urlModule.parse(req.url,true)
    if(url === "/getscript"){
        //拼接一个返回的字符串
        let backString = `${query.callback}()`
        res.end(backString)
    }else if(url === '/getData'){
        let data = queryData()
        console.log(data)
        res.end(data)
    }else if(url === '/add' && req.method.toLocaleLowerCase() === 'post'){
        // savefile("123")
            console.log("add123")
            var body = '';
            //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
            req.on('data', function (data) {               
                body += data;
            });

            req.on('end', function () {
                console.log(body)
                savefile('1')
                res.end(body)   
            })
    }else{
        res.end('404')
    }
}).listen(3000,()=>{
    console.log('server listen at http://127.0.0.1:3000')
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