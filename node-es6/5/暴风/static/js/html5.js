/**
 * Created by Administrator on 2019/4/8.
 */

//  函数自执行 闭包  作用域链
(function( doc ){
    var eles = 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress'

    var eleS = eles.split(' ')

    for(var i=0;i<eleS.length;i++){
        doc.createElement(eleS[i])
    }
})( document );

//  document
//  documents





