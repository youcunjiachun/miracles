/**
 * Created by Administrator on 2019/4/10.
 */

ajax('./data/qltj_data.json','get', function (data) {
    //var films = JSON.parse( data )
    var films = strToJson( data )
   // console.log( films )
   // console.log( typeof films )

    var str = ''

    var len = films.length

    for( var i=0;i < len;i++ ){
        var film = films[i]

        str +='<div class="film_list">'
        str +='<div class="film_thumb">'
        str +='<a href="'+ film.href +'">'
        str +='<img src="'+ film.imgSrc +'" width="205" height="287" alt=""/>'
        str +='</a>'

        switch( film.pri ){
            case '1':1
                str +='<span class="vip_user bgGreen">VIP特权</span>'
                break;

            case '2':
                str +='<span class="vip_user bgOrange"><del>5元</del>VIP免费</span>'
                break;
        }

        str +='<span class="calri">'+ film.calri +'</span>'
        str +='</div>'
        str +='<div class="film_desc">'
        str +='<a href="'+ film.href +'">'+ film.name +'</a>'
        str +='<p>'+ film.desc +'</p>'
        str +='<span class="score">'+ film.score +'</span>'
        str +='</div>'
        str +='</div>'
    }

    var container = document.getElementById('qltjContainer')
    container.innerHTML = str;
})