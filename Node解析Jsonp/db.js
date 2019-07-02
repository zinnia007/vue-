var mssql = require('mssql')

var db = {}

const config = {
    user:'sa',
    password:'123456789',
    server:'localhost',
    port:1434,
    database:'db'
}
//查询student表中的相关信息
db.queryData = function (sql,callback){
    mssql.connect(config).then(function(){
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
// db.insertData = function(callback){
//     mssql.connect(config).then(()=>{
//        new mssql.Request().query(' insert into [student] values (\'1004\',\'zinnia\')').then((res)=>{
//            console.log(res)
//            callback(null,res)
//            return;
//        }).catch(err=>{
//            callback(err,null)
//        })
//     }).catch(err=>{
//         callback(err,null)
//     })   
// }
module.exports =db