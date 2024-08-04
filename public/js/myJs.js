(function () {

    // window.onkeydown = window.οnkeyup = window.οnkeypress = () => {

    //     //禁用F12

    //     if (window.event && window.event.keyCode == 123) {

    //         return false;

    //         //禁用ctrl+shift+i,

    //     } else if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {

    //         return false;

    //         //屏蔽Shift+F10

    //     } else if (window.event.shiftKey && window.event.keyCode == 121) {

    //         return false;

    //     }

    // };
    //屏蔽鼠标右键
    // window.oncontextmenu = function (event) {

    //     event.preventDefault();

    //     return false;

    // }
    // 检查页面是否打开控制台
    // var threshold = 160;

    // setInterval(function () {

    //     if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {

    //         //打开控制台就刷新页面；
    //         if (window.location.href.indexOf('/lost404') > -1) {
    //             console.log(window.location.href)
    //             window.location.reload()
    //         } else {
    //             console.log(window.location.href)
    //             var url = window.location.href
    //             window.location.href = url.split('#')[0] + "#/lost404"
    //         }
    //     }

    // }, 1 * 1000)
})()