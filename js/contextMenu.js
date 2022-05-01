$('body').contextMenu({
    width: 120,
    itemHeight: 40,// 菜单项height
    bgColor: "#fff",// 背景颜色
    color: "#777",// 字体颜色
    fontSize: 12,// 字体大小
    hoverBgColor: "#99CC66",// hover背景颜色
    menu: [
        {// 菜单项
            text: "<i class='fa fa-home'></i>首页",
            callback: function () {
                NProgress.start();
                setTimeout(function() { NProgress.done();location.href = '/'; }, 1000);
            }
        },
        {
            text: "<i class='fa fa-copy'></i>复制所选文字",
            callback: function () {
                let select = window.getSelection ? window.getSelection() : document.selection.createRange().text;
                console.log(select)
                if (select.anchorOffset === select.focusOffset) {
                    cocoMessage.warning("没还没选择文字哦...", 2000);
                } else {
                    document.execCommand("Copy")
                }
            }
        }, {
            text: "<i class='fa fa-arrow-right'></i>页面前进",
            callback: function () {
                NProgress.start();
                setTimeout(function() { NProgress.done();history.go(1); }, 1000);
            }
        }, {
            text: "<i class='fa fa-arrow-left'></i>页面后退",
            callback: function () {
                NProgress.start();
                setTimeout(function() { NProgress.done();history.go(-1); }, 1000);
            }
        }, {
            text: "<i class='fa fa-refresh'></i>刷新页面",
            callback: function () {
                NProgress.start();
                setTimeout(function() { NProgress.done();location.reload(); }, 1000);
            }
        }
    ]
})


    //复制回调
document.body.oncopy = function () {
    cocoMessage.success("复制成功，若要转载请务必说明出处并保留原文链接", 2000);
}