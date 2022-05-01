$(document).ready(function(){
    $('.logo').click(function(){
        window.location.replace('/');
    });
    $('.menubtn').click(function(){
        $(".mheader ul").animate({
            height:'toggle'
        });
    });
});
function readpassage(id){
    $.getJSON('/json/'+id+'.json',function(data){
        $('.load').css('display','none');
        $.each(data, function(i, item) {
            $('.article-list').append(
                '<div class="article-item">' +
                    '<div class="article-title"><div class="article-tags"><a href="'+item.tagsurl+'" style="color:#fff;">'+item.tags+'</a></div><a href="'+item.paurl+'">'+item.title+'</a></div>' +
                    '<div class="article-content">'+item.content+'</div>' +
                    '<div class="article-info">' +
                        '<i class="fa fa-user-o">'+item.author+'</i>' +
                        '<i class="iconfont icon-clock1">'+item.time+'</i>' + 
                    '</div>' +
                '</div>'
            );
            console.log('获取【'+item.title+'】文章成功！');
        });
    });
}