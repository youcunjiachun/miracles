function Start(obj) {
    this.obj=obj;
    this.spans=this.obj.getElementsByTagName("span");
    this.spans[0].onclick=function () {
        this.init()
    }.bind(this)
}
Start.prototype.init=function () {
    this.obj.style.display="none"
};
var start=document.getElementById("start");
new Start(start);
// ---------------------------?
(function () {
    function Random() {}
    Random.prototype.getRandom=function (max,min) {
        return Math.random()*(max-min)+min
    }
    window.Random=new Random;
})();
//  获取随机数方法
//  飞机开始初始化
var map=document.getElementById("play");
(function(){
function Plane(width,height,map){
    this.map=map;
    this.width=width||66;
    this.height=height||82;
    this.x=500;
    this.y=30;
    this.element=document.createElement("div")
    this.init(map);
}
Plane.prototype.init=function(map){
    this.div=this.element;
    this.div.style.width=this.width+"px";
    this.div.style.height=this.height+"px"
    this.div.style.position="absolute";
    this.div.style.backgroundImage="url('images/myplane.gif')"
    this.map.onmousemove=function(ev){
        this.move(ev)
    }.bind(this)
}
Plane.prototype.move=function(ev){
    var ev=ev||window.event;
    this.x=ev.clientX-this.map.offsetLeft-this.div.offsetWidth/2;
    this.y=ev.clientY-this.map.offsetTop-this.div.offsetHeight/2;
    this.div.style.left=this.x+"px";
    this.div.style.top=this.y+"px"
    this.map.appendChild(this.div);
    // console.log(this.div)
}
window.Plane=Plane
})();
var plane=new Plane(66,82,map);
// 飞机完成
// 敌方飞机开始向下移动 
(function(){
    var arr=[]
function Enemy(map){
    this.map=map;
    this.enemy=[
        {id:1,src:"url('images/enemy1.png')",width:34,height:24},
        {id:2,src:"url('images/enemy2.png')",width:110,height:164},
        {id:3,src:"url('images/enemy3.png')",width:46,height:60},
    ]
    this.out=this.enemy[Math.floor(Random.getRandom(0,3))]
    this.width=this.out.width
    this.height=this.out.height
    this.x=Random.getRandom(0,this.map.offsetWidth-this.out.width);
    this.y=0;
    this.element=document.createElement("div")
    this.init(map);
}
Enemy.prototype.init=function(map){
    this.div=this.element;
    this.div.style.width=this.width+"px";
    this.div.style.height=this.height+"px"
    this.div.style.position="absolute";
    this.div.style.backgroundImage=this.out.src;
    map.appendChild(this.div);
    arr.push(this.div)
    this.move()
};
Enemy.prototype.move=function(){
    this.timer=setInterval(
        function(){
            this.y=this.div.offsetTop;
            this.y+=3
            this.div.style.left=this.x+"px"
            this.div.style.top=this.y+"px"
            if(this.y>this.map.offsetHeight){
                clearInterval(this.timer);
                this.dele()
            }
        }.bind(this),16.6
    )
}
Enemy.prototype.dele=function(){
    for(var i=0;i<arr.length-1;i++){
        arr[i].remove()
        arr.splice(i,1)
        console.log(arr)
    }
}
window.Enemy=Enemy
})();
setInterval(function(){
    new Enemy(map)
},2000);
(function(){
    function Bullet(map,width,height){
        this.map=map;
        this.width=width||6;
        this.height=height||14;
        this.element=[
            {x:0,y:0},
            {x:0,y:0},
            {x:0,y:0}
        ]
        this.map.onmouseover=function(ev){
            this.init(ev)
        }.bind(this)
    };
    Bullet.prototype.init=function(ev){
        this.nx=ev.clientX-this.map.offsetLeft;
        this.ny=ev.clientY-this.map.offsetTop;
        this.div=document.createElement("div")
        for(var i=0;i<this.element.length;i++){
            this.span=document.createElement("span");
            this.span.style.width=this.width+"px";
            this.span.style.height=this.height+"px";
            this.span.style.backgroundImage="url('images/bullet.png')"
            this.span.style.display="inline-block"
            this.div.appendChild(this.span)
        }
        this.map.appendChild(this.div);
        this.div.style.width=this.width*4+"px";
        this.div.style.height=this.height+"px"
        this.div.style.position="absolute";
        this.move()
    }
    Bullet.prototype.move=function(){
        var current=0;
        this.timer=setInterval(function(){
            current+=10;
            this.div.style.top=this.ny-current+"px";
            this.div.style.left=this.nx+"px"
            if(current==parseInt(this.map.offsetHeight)){
                clearInterval(this.timer)
            }
        }.bind(this),300)
    }
    window.Bullet=Bullet
})();
new Bullet(map,6,14)