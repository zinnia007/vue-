var db = require('./db')
const http =require('http')
const urlModule =require('url')

http.createServer((req,res) => {
    let {pathname:url,query} = urlModule.parse(req.url,true)
    res.writeHead(200,{
        'Content-Type': 'text/plain',
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Headers': 'Content-Type,Access-Token'
    });
    if(url === '/getData'){
        let sql = 'select * from brand'
        db.queryData(sql,(err,data) => {
            if(err){
                res.end(err)
            }else{
                res.end(JSON.stringify(data))
            }
        })
    }else if(url === '/add' &&req.method.toLocaleLowerCase() === 'post'){
        var body = '';
        //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
        req.on('data', function (data) {               
            body += data;
        });
        req.on('end', function () {
            let data = JSON.parse(body)
            let sql = `insert into brand values (${data.id},'${data.name}','${data.date}')` 
            db.queryData(sql,(err,data)=>{
                if(err){
                    res.end(err)
                }
            })
            res.end("success")
        })
    }else if(url === '/delete'){
        let sql = `delete from brand where id = ${query.id}`
        db.queryData(sql,(err,data) => {
            if(err){
               res.end(err)
            }else{
                res.end("delete success")
            }
        })
    }else{
        //必须要有返回
        res.end('404')
    }

}).listen(3000, () =>{
    console.log('port 3000')
})