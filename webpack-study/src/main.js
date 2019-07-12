//项目的入口文件

//1.导入jquery包
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})