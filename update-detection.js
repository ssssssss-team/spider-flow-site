if("undefined" != typeof SPIDER_FLOW_VERSION){
    if(SPIDER_FLOW_VERSION < '0.5.0'){
        layui.layer.open({
            title : '版本更新',
            content : '新版本v0.5.0已发布',
            btn : ['前去看看','忽略'],
            yes : function(index){
                layui.layer.close(index);
                window.open('https://www.spiderflow.org/changelog.html');
            }
        })
    }
}
var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500724302");
    mta.setAttribute("cid", "500724303");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();