/**
 * Created by Administrator on 2019/3/22.
 */
function getStyle(elem,attr) { //标签：elem  ，样式：attribute
    if(elem.currentStyle){
        return elem.currentStyle[attr];
    }else {
        return getComputedStyle(elem)[attr];
    }
}

//运动函数

function move(elem,attr,speed,target) { //运动元素elem，运动属性attr，步长speed，目标值target
    //当前值      目标值
    //0           1000
    //1000         0
    speed = parseInt(getStyle(elem,attr)) < target ? speed : -speed;

    clearInterval(elem.timer);
    elem.timer = setInterval(function () {
        //2.往右移动 在当前基础上+10
        var left = parseInt(getStyle(elem,attr))+speed;

        //3.停止定时器  1000
        if((left >= target && speed > 0 ) || (left <= target && speed < 0)){//往前用的判断
            left = target;
            clearInterval(elem.timer);
        }

        /*   if(left <= target && speed < 0){   //往回用的判断
         left = target;
         clearInterval(timer);
         }*/

        //1.div移动
        elem.style[attr] = left+"px";
    },30);
}


//事件绑定封装
function on(elem,type,fun) {//标签elem,事件类型type，事件处理函数fun
    if(elem.addEventListener){
        elem.addEventListener(type,fun);
    }else {
        elem.attachEvent("on"+type,fun);
    }
}


function bufferMove(elem,attrJson,sp,fun) { //elem，attr，sp，target
    clearInterval(elem.timer);

    var sp = sp || 10

    elem.timer = setInterval(function () {
        var tag = true; //假设 都到达了目标点
        for(var attr in attrJson){
            //在当前的基础上+值
            if(attr == "opacity"){
                var cur = parseInt(getStyle(elem,attr)*100);//491
            }else {
                var cur = parseInt(getStyle(elem,attr));//491
            }
            var speed = (attrJson[attr]-cur)/sp; //0.9
            //有小数取整
            //-0.9  下 ，0-9 上
            speed = speed>0?speed = Math.ceil(speed):speed = Math.floor(speed);
            if(cur != attrJson[attr]){
                tag = false;
            }
            if(attr == "opacity"){
                elem.style[attr] = (cur+speed)/100;//491.9
                elem.style.filter = 'alpha(opacity ='+ (cur+speed) +' )'
            }else {
                elem.style[attr] = cur+speed + "px";//491.9
            }
        }

        if(tag == true){
            clearInterval(elem.timer);
            fun&&fun(); //可选的
        }
    },30);
}



//1.封装存储cookie的函数
function setCookie(key,value,day) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+day);
    document.cookie = key+"="+value+";expires="+oDate;
}


//2.封装获取cookie的函数
function getCookie(key){
    //2.1 获取cookie
    var cookie = document.cookie;
   // console.log(cookie); //id=007; userName=javascript; passWord=vascript

    //2.2 将字符串转换为json形式
    var json = {};
    var cookies = cookie.split("; ");
    //console.log(cookies); //["id=007", "userName=javascript", "passWord=vascript"]


    //2.3 循环将每一组数据添加到json中
    for(var i = 0;i<cookies.length;i++){
        var arr = cookies[i].split("=");
        //console.log(arr); // ["id", "007"]
        json[arr[0]] = arr[1];
    }

    return json[key];
}

//3.删除cookie
function removeCookie(key) {
    setCookie(key,1,-1);
}


function ajax(url,method,success,data) {

    /*
    *  var success = function (data) {
             console.log( data )
             }
    * */

    //1.创建请求对象
    var ajax = new XMLHttpRequest();


    if(method == "GET"){
        //2.建立连接
        url = data ? url+"?"+data:url;
        ajax.open("GET",url,true);

        //3.发送请求
        ajax.send();
    }else {
        ajax.open("POST",url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send(data);
    }


    //4.监听请求结果
    ajax.onreadystatechange = function () {
        if(ajax.readyState ==4){
            if( ajax.status == 200 ){
                success(ajax.responseText);
            }

        }
    }
}




//  把json字符串转换成对象
function strToJson( str ) {

    if( typeof JSON == 'undefined' ){

        return eval( '('+str+')' )

    }else{

        return JSON.parse( str )

    }

}
