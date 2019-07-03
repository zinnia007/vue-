var mssql = require('mssql')

var db = {}

const config = {
    user:'sa',
    password:'123456789',
    server:'localhost',
    port:1434,
    database:'db'
}
conn = mssql.connect(config)
//查询student表中的相关信息
db.queryData = function (sql,callback){
     conn.then(function(){
        new mssql.Request().query(sql).then(function(recordset){
            callback(null,recordset.recordset)
            return;
        }).catch(err=>{
            console.log(err);
            callback(err,null)
        });
    }).catch(err=>{
        callback(err,null)
        console.log(err)
    })
    
}
module.exports =db