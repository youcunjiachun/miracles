
    var arr=[];
    function f1() {
        console.log("我是f1")
    }
    function f2() {
        console.log("我是f2")
    }
    arr.push(f1,f2);
    arr.forEach(value=>{
        value()
    })