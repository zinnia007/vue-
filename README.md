## 关于MVC与MVVM
![image](E:/MVC%E4%B8%8EMVVM.png)
## vue的几个指令
* **v-cloak** </br>
  使用v-cloak能够解决插值表达式{{msg}}闪烁问题 </br>
  当网速慢的时候，vue.js没有加载完成，页面会显示{{msg}},加载完成以后才会显示msg的值。解决如下:
```
//style
[v-cloak]{
    display:none;
}
//html
<p v-cloak>{{msg}}</p>
```
* **v-text** </br>
```
<p v-text="msg"><p>//把msg的值渲染出来
```
<br/>
<font color="blue">
<strong>【 <strong>v-text** 与 **插值表达式{{}}** 的区别：】</strong>
    <ul>
        <li>默认v-text没有闪烁问题</li>
        <li>v-text会覆盖元素中原本的内容，但是插值表达式智慧替换自己的占位符，不会把整个元素中的内容清空</li>
    </ul>

</font>

* **v-html**  </br>
  可以解析html标签,v-text和{{ }}都不可以 <br/>
  ```
  //html
  <p v-html="msg2"></p>
  //data
  msg2:<h1>123<h1>
  ```
* **v-bind** 简写 :要绑定的属性 <br/>
  提供用于绑定属性的指令 <br/>
  v-bind后面的代码会当作一个javascript代码来执行,可写合法的js表达式 <br/>
  ```
  //html
  <input type="button" value="按钮" :title="myTitle + '123'"></input> //title:按钮123
  //data
  myTitle:'按钮'
  ```
* **v-on** <br/>
  用来绑定事件 <br/>
  简写@
---
### 五个事件修饰符
- **.stop**  ：阻止冒泡行为
- **.prevent** :组织默认事件，比如a的href
- **.self** :只有自身才能触发此事件，比如由冒泡触发的就会阻止
- **.capture** :捕获冒泡事件，在触发冒泡事件的时候，是由外到内的触发
- **.once** :设置事件只是触发一次 ，例如@click.prevent.once仅第一次点击事件会阻止默认事件的发生，prevent和once的顺序无所谓
 ---
### v-model 数据双向绑定
 - v-bind只能实现数据的单项绑定，从M绑定到V,无法实现数据的双向绑定
 - v-model剋实现表单元素和Model中数据的双向绑定，但是v-model只能实现运用在表单元素中<br/>
 input(text,,radio,address,email...) textarea select checkBox
```
    <input type='text' v-model="msg">
```
 这里有一个实现简单计算器的demo

---
### vue中的样式
- 直接传递一个数组，class需要使用v-bind进行绑定
- 在绑定数组的时候，可以使用三元表达式
- 在数组的使用中，用对象来代替三元表达式，可以提高代码的而可读性
- 在为class使用v-bind绑定对象的时候，对象的属性是类名（可带引号，可不带引号），属性的值是一个标识符（这个类是否可用）
```
<style>
        #app{
            display: flex;
        }
        .size{
            width: 100px;
            height: 100px;
            margin: 10px;
        }
        .bgcolor{
            background-color:cyan;
        }
        .display{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <div id="app">
        <!-- 第一钟方式，数组的方式 -->
       <div :class="['size','bgcolor','display']">
           你好！用数组的方式来绑定css
       </div>
       <!-- 第二种方式，在数组中使用三元表达式 -->
       <div :class="['size','bgcolor',flag?'display':'']">
           在数组中使用三元表达式
       </div>
       <!-- 第三种方式,用对象来代替三元表达式 -->
       <div :class="['size', 'bgcolor' , {'display':flag}]">
           用对象代替三元表达式
       </div>
       <!-- 第四种方式,直接是用对象为元素绑定class,对象可以直接抽离为一个对象的变量  -->
       <div :class="{size:true, bgcolor:true, display:true}">
            直接是用对象为元素绑定class
       </div>
    </div>
    <script>
        var vm=new Vue ({
            el: '#app',
            data: {
               flag: true
            },
            methods: {

            }
        })
    </script>
```
--- 
### 内联样式Style
- 直接通过：style绑定属性对象
```
<div :style="{width:'100px',height:'100px','background-color':'#bcbcbc'}">内联样式</div>
//带-需要加单引号
```
- 将对象抽离为一个对象变量，通过变量进行调用
```
//data
 style1:{'width':'100px','height':'100px', 'background-color':'#bcbcbc'}
//html
<div :style="style1">内联样式</div>
```
- 想要调用多个对象变量，用数组绑定
```
//data
 style1: {width:'100px',height:'100px','background-color':'#bcbcbc'},
 style2: {margin:'10px'}
//html
<div :style="[style1,style2]">内联样式</div>
```
---
### 关于v-for
- 普通数组的遍历
- 遍历对象数组
- 遍历对象
- 迭代数字


```
<body>
    <div id="app">
        <!-- 普通数组的遍历 -->
      <div>
        <h1>普通数组的遍历</h1>
        <p v-for="item in list">{{item}}</p>
        <p v-for="(item,index) in list ">索引：{{index}}--值：{{item}}</p>
      </div>
      <!-- 遍历对象数组 -->
      <div>
          <h1>遍历对象数组</h1>
          <p v-for="item in list1">{{item.name}}---{{item.age}}</p>
          <p v-for="(item,index) in list1">{{item.name}}---{{item.age}}---{{index}}</p>
      </div>
      <!-- 遍历对象 -->
      <div>
          <h1>遍历对象</h1>
          <p v-for="(key,val) in list2">{{key}}--{{val}}</p>
          <p v-for="(key,val,index) in list2">{{key}}--{{val}}---{{index}}</p>
      </div>
      <!-- 迭代数字 -->
      <div>
          <h1>迭代数字(数字迭代是从1 开始的)</h1>
          <p v-for="index in 10">这是第{{index}}次循环</p>
      </div>
    </div>
    
    <script>
        var vm=new Vue ({
            el: '#app',
            data: {
                //普通数组
                list: [1,2,3,4,5,6],
                //对象数组
                list1:[
                    {name:'zll',age:10},
                    {name:'zjj',age:11},
                    {name:'zss',age:12}
                ],
                //遍历对象
                list2:{
                    name:'zll',
                    sex:'f',
                    age:11
                }
            },  
            methods: {
            }
        })
    </scr
```

**2.2.0版本里，当在组件使用中使用v-for时，key现在时必须的<br/>**
**当vue中使用v-for正在更新已经渲染过的元素序列时，它默认用“就地复用”策略，如果数据项的顺序被改变，vue不是移动DOM元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素**<br/><br/>
[点击：关于key的链接](https://www.jianshu.com/p/4bd5e745ce95)
<br/><br/>
**注意**<br/>
- v-for循环的时候，key属性只能使用number/string
- key在使用的时候，必须使用v-bind属性绑定的形式，指定key的值
<br/><br/>
我们来将一个例子：

```
<body>
    <div id="app">
      <label >count:</label><input type="text" v-model="count">
      <label >name:</label><input type="text" v-model="name">
      <input type="button" value="添加" @click="add">
      <div v-for="item in list" >
          <input type="checkbox">{{item.count}}---{{item.name}}
      </div>
    </div>
    
    <script>
        var vm=new Vue ({
            el: '#app',
            data: {
                count:'',
                name:'',
               list:[
                   {count:1001,name:'aaa'},
                   {count:1002,name:'bbb'},
                   {count:1003,name:'ccc'},
                   {count:1004,name:'ddd'},
                   {count:1005,name:'eee'}
               ]
            },  
            methods: {
                add () {
                    let p={
                        count:this.count,
                        name:this.name
                    }
                    this.list.unshift(p)
                }
            }
        })
    </script>
```
---
### v-show与v-if
- **v-if** 每次都会清除或者创建元素<br/>
   有较高的切换性能<br/>
   适用于元素切换不频繁
- **v-show**每次不会重新创建和删除元素，它只是切换display:none样式<br/>
   有较高的初始渲染消耗<br/>
   适用于元素涉及到频繁的切换
---
### vue过滤器
定义vue过滤器来给一些文本进行格式化  “|” {{msg | msgFormat}}
```
  <div id="app">
    <!--调用，后面可以跟参数 mgsFormat(data1,data2)-->
    <!--也可以定义多个过滤器{{msg | mgsFormat |test }} 调用mgsFormat时，msg为参数，
    调用test时，msgFormat返回值为参数-->
        <p>{{msg | mgsFormat}}</p>
    </div>
    <script>
        // 定义一个过滤器
        //msgFormat--过滤器的名字
        //data--参数，也就是p标签的msg，也可以有多个参数，直接跟在data后面就可以，调用 的时候带参数mgsFormat(data1,data2)
        Vue.filter('mgsFormat',function(data){
            return data.replace(/哈哈/g,'啦啦')
        })
        var vm=new Vue ({
            el: '#app',
            data: {
              msg:'哈哈，这是一个filter过滤器，哈哈'
            }
        })
```

#### 全局过滤器
```
Vue.filter('msgFormat',function(data){
    
})
```
#### 私有过滤器
```
var vm=new Vue({
    el:"#app",
    data:{},
    method:{},
    //定义私有过滤器，过滤器有两个私有条件【过滤器名称和处理函数】
    filters:{
        //msgFormat:过滤器名称
        //data:格式化的字符串，后面可跟其他参数
        msgFormat:function(data){
            
        }
    }
})
```
**在过滤器调用的时候，如果私有过滤器和全局过滤器名称重复，则采用就近原则，有限调用私有过滤器**
<br/>
#### 两个es6的字符串的补足函数
- padStart(length,val)在字符串的前边补<br/>
```
var date=new Date()
let month=(date.getMonth()+1).toString().padStart(2,'0')
//获取月份的时候，不足两位的时候，在前边补0
```
- padEnd(length,val)在字符串的后面补足


---
### 自定义按键修饰符

- 通过Vue.config.keyCodes.名称=按键值 来自定义按键修饰符的别名
- 调用 @keyup.名称='函数名'进行调用
<br/>
[点击查看Vue官网对于按键修饰符与按键码的介绍](https://cn.vuejs.org/v2/guide/events.html#按键修饰符)
<br/>
[点击查看JS里面的键盘对应码](https://www.cnblogs.com/wuhua1/p/6686237.html)
```
//调用
<input type='text' @keyup.f2='add'></input>
//定义
Vue.config.keyCodes.f2=113
```
---
### 自定义全局指令
```
//在品牌列表案例中，我们为其中的搜索input框添加一个facus状态
//定义一个自定义指令focus，使网页打开便可获取到焦点
        //使用Vue.directive(参数1，参数2)定义全局指令 v-focus
        //参数1：指令的而名称，在定义的时候，指令的名称前面不需要加v-前缀
        //参数2：是一个对象，这个对象身上，有一些指令相关的函数，
        //这些函数可以在特定的阶段，执行相关的操作，像是生命周期一样
        //在调用给的时候，需要加v-前缀
        Vue.directive('focus',{
            bind:function(el){
                //每当指令绑定到元素上的时候，会立即执行bind函数，只执行一次
                //【注意】
                    //在每个函数中，第一个参数永远是el，表示被绑定了指令的那个元素，这个el参数，是一个原生的js对象
                    //在元素刚绑定指令的时候，还没有插入到DOM中去，这个时候，调用focus方法没有作用
                    //input在渲染完成插入到dom之后，才能够获取到焦点
            },
            inserted:function(el){
                //inserted表示元素插入到DOM中的时候，会执行inserted函数【触发一次】
                console.log("zll")
                el.focus()
            },
            update:function(el){
                //当VNode更新的时候，会执行updated,可能会触发多次
            }
        })


```
---
### 生命周期钩子
---
### vue-resource实现get,post, jsonp请求,还有axios
