/**
 * Created by Administrator on 2019/4/9.
 */

window.onload = function(){

    //首页banner图切换
    ;(function () {
        //第一步：找元素
        var bannerContainer = document.getElementById('main_banner')//banner容器
        var bigContainer = bannerContainer.getElementsByTagName('a')[0]//大图容器
        var bigImg = bigContainer.getElementsByTagName('img')[0]//大图
        var btnNext = bannerContainer.getElementsByTagName('span')[1]//下一张
        var btnPrev = bannerContainer.getElementsByTagName('span')[0]//上一张
        var dotsContainer = bannerContainer.getElementsByTagName('div')[0]//小图容器
        var aDots = dotsContainer.getElementsByTagName('a')

        //    第2步:初始化

        var num = 0//默认显示第几个索引变量  必须加var，不加var就是全局变量 ，会污染外面的num
        aDots[num].className = 'active'

        //第3步，加事件
        var len = aDots.length//图片的长度
        //小图加事件
        for (var i = 0; i < len; i++) {
            aDots[i].onmouseover = function () {

                num = this.getAttribute('index')

                //console.log( 1 )
                changeImg()
            }
        }

        //左右按钮加事件
        btnNext.onclick = function () {
            autoPlay()
        }

        btnPrev.onclick = function () {
            num--
            if (num < 0) {
                num = len - 1
            }
            changeImg()
        }

        function changeImg() {
            for (var i = 0; i < len; i++) {
                aDots[i].className = ''
            }
            aDots[num].className = 'active'
            var smallImg = aDots[num].getElementsByTagName('img')[0]//小图对象
            //console.log(smallImg)
            var src = smallImg.src//小图的路径，根据它去拼接大图的路径地址

            var srcArr = src.split('/')
            var smallImagName = srcArr[srcArr.length - 1]//拿到小 图地址 最后一项的名称

            var smallImgArr = smallImagName.split('_')
            var bigImgName = 'banner_' + smallImgArr[smallImgArr.length - 1]//大图的具体名称
            var bigImgSrc = './static/images/' + bigImgName //大图的地址
            //console.log(bigImgSrc)
            bigImg.src = bigImgSrc //为大图对象赋值src属性
            bigImg.style.opacity = 0;
            bufferMove(bigImg, {opacity: 100})
        }

        //autplay 和下一张的逻辑是一样的
        function autoPlay(){
            num++
            if (num == len) {
                num = 0
            }
            changeImg()
        }
        //开启定时器
        var timer = setInterval(autoPlay,3000)
        bannerContainer.onmouseenter = function () {
            clearInterval( timer )
        }
        bannerContainer.onmouseleave = function () {
            timer = setInterval(autoPlay,3000)
        }
    })()

    //VIP特权
    ;(function () {
        var vipContainer = document.getElementById('vip_container')//外层的容器
        var btnNext = vipContainer.getElementsByTagName('span')[1]//下一张按钮
        var btnPrev = vipContainer.getElementsByTagName('span')[0]//上一张按钮
        var vContainer = vipContainer.getElementsByTagName('div')[0]// .vip_slider
//    console.log(vContainer)
        var sliderContainer = vContainer.getElementsByTagName('ul')[0]//li的容器
        var aLi = sliderContainer.getElementsByTagName('li')//选择每一项
        var len = aLi.length
        var  itemWidth = parseInt(getStyle( aLi[0],'width' )) + parseInt(getStyle( aLi[0],'marginRight' ))
//    console.log( itemWidth )
        var containerWidth = itemWidth * len //容器整体宽度
//    console.log(containerWidth);
        sliderContainer.style.width = containerWidth + 'px'

        var w = itemWidth*5//一屏的宽度 滚动5个
        var n = containerWidth/w;//最多滚动n屏
        // console.log( n )
        /*
         * //        itemWidth*
         0 : left-> 0
         1 : left-> -1075   1*(itemWidth*5)
         2 : left-> -2150
         */
        var num = 0//展示第几屏的索引
        btnNext.onclick = function () {
            num++
            // 1
            if( num >= n - 1 ){
                num = n - 1
            }
            var l = -(w * num)
            //sliderContainer.style.left = l + 'px'
            bufferMove( sliderContainer,{left:l} )
        }
        btnPrev.onclick = function () {
            num--
            // 1
            if( num < 0 ){
                num = 0
            }
            var l = -(w * num)
            //sliderContainer.style.left = l + 'px'
            bufferMove( sliderContainer,{left:l} )
        }
    })()

}


