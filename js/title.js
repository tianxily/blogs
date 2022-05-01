function currentPage() {
    var hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
          'mozHidden' in document ? 'mozHidden' :
            null
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function () {
        if (!document[hiddenProperty]) {
            $('title').html('(⁄ ⁄•⁄ω⁄•⁄ ⁄)还是让你看到啦！');
            setTimeout(function(){
                $('title').html(title);
            },3000);
        } else {
            $('title').html('(〃＞皿＜)你看不到我看不到我！');
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
}
currentPage();