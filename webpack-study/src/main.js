<<<<<<< HEAD

import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','red');
    $('li:even'.css('backgroundColor','yellow'))
})

=======
//项目的入口文件

//1.导入jquery包
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})
>>>>>>> 81debac1b52307e642a06779bd623673ca8ee56d
