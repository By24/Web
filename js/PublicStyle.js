// $(function () {
//     $('.nav a').click(function () {
//         $(this).addClass('active').siblings('a').removeClass('active')
//     })

// })

(function () {
    // style()
    autoSize()
    header()

})();
function style() {
    var uaTest = /Android|webOS|Windows Phone|iPhone|ucweb|ucbrowser|iPod|iPad|BlackBerry/i.test(navigator.userAgent
        .toLowerCase());
    var touchTest = 'ontouchend' in document;
    if (uaTest && touchTest) {
        window.location.href = '/phoneIndex.html';
        return
    } else if (!uaTest && !touchTest) {
        window.location.href = './index.html';
        return
    }
}
function header() {
    pos = 0;
    ticking = false;
    var header = document.getElementById("header1");
    window.addEventListener("scroll", function (e) {
        pos = window.scrollY;
        if (pos > 100 && !ticking) {
            header.className = 'myClass';
            ticking = true;
        }
        if (pos < 100 && ticking) {
            header.className = 'myClass1';
            ticking = false;
        }
    });
}
function autoSize() {
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 15 + 'px';
}
// $('#monye').on('click', function () {
//     layer.open({
//         type: 2,
//         title: '游娱充值中心',
//         maxmin: false,
//         shadeClose: false,
//         area: ['800px', '540px'],
//         content: 'Recharge.html'
//     });
// });

