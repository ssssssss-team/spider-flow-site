module.exports = {
	   title: 'spider-flow',
       description: 'Just playing around',
       themeConfig: {
	   displayAllHeaders: true,
	   activeHeaderLinks: false,
	   sidebar:[
		{
        
        collapsable: false,
        children: [
          '/','安装部署','快速入门','document'
        ]
      },{
        title: '图形说明',
        collapsable: false,
        children: [
          'img/抓取页面','img/定义变量','img/输出','img/DB数据源','img/执行SQL','img/子线程','img/redis缓存','img/mongodb数据库','img/oss'
        ]
      },{
        title: '函数说明',
        collapsable: false,
        children: [
          'fun/Base64','fun/Date','fun/File','fun/Json','fun/List','fun/Random','fun/String','fun/Url'
        ]
      }]  
    },
}