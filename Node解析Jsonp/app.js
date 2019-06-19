const http = require('http')
const urlModule = require('url')
const fs = require('fs')
const querystring = require('querystring')

//创建一个http服务器
const server = http.createServer()


//监听http服务器的request请求
server.on('request',(req,res) =>{
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
        console.log(req)
        fs.readFile('data.txt','utf-8',(err,data) => {
            if(err){
                res.end("加载数据出错")
            }else{
                res.end(data)
            }
        })
    }else if(url === '/add'){
            var body = '';
            //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
            req.on('data', function (data) {
                body += data;
            });

            req.on('end', function () {
                var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
                // res.write(JSON.stringify(myBody));
                // fs.writeFile('data.txt',JSON.stringify(myBody),(err)=>{
                //     if(err){
                //         console.log(err)
                //     }else{
                //         console.log("ok")
                //     }
                // })
                console.log(myBody)
                res.end(JSON.stringify(myBody));
            })
    }else{
        res.end('404')
    }
})
server.listen(3000,()=>{
    console.log('server listen at http://127.0.0.1:3000')
})