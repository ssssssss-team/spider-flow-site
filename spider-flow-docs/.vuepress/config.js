module.exports = {
	title: 'spider-flow',
	description: '一个无需写代码的爬虫平台',
	head: [["link", {rel: "icon", href: `/favicon.ico`}]],
	themeConfig: {
		docsRepo : 'javamxd/spider-flow-site',
		docsDir : 'spider-flow-docs',
		editLinks : true,
		editLinkText: "在 GitHub 上编辑此页",
		lastUpdated: "上次更新",
		nav : [{
			text : '演示站点',
			link : 'http://39.105.125.219:8088/'
		},{
			text : '源码',
			link : 'https://gitee.com/jmxd/spider-flow'
		},{
			text : '更新日志',
			link : '/changelog'
		},{
			text : '加入QQ群',
			link : 'https://shang.qq.com/wpa/qunwpa?idkey=10faa4cf9743e0aa379a72f2ad12a9e576c81462742143c8f3391b52e8c3ed8d'
		}],
		sidebar:[{
			title : '快速入门',
			collapsable: false,
			children: ['intro','install','expression']
		},{
			title: '图形说明',
			collapsable: false,
			children: ['shape/request','shape/variable','shape/loop','shape/loopjoin','shape/output','shape/executesql','shape/process','shape/function','shape/arrow']
		},{
			title: '函数说明',
			collapsable: false,
			children: ['function/extra','function/base64','function/date','function/file','function/json','function/list','function/random','function/string','function/url']
		},{
			title: '其它说明',
			collapsable: false,
			children: ['others/variable','others/faq']
		},{
			title: '类型扩展',
			collapsable: false,
			children: ['classes/explain','classes/spiderresponse','classes/string','classes/date','classes/object','classes/list','classes/element','classes/elements','classes/array']
		},{
			title: '插件开发',
			collapsable: false,
			children: ['development/plugin','development/shape','development/utils','development/extension']
		},{
			title: '插件',
			collapsable: false,
			children: ['plugins/selenium','plugins/redis','plugins/mongodb','plugins/oss','plugins/ocr','plugins/proxypool']
		}]
    }
}