module.exports = {
	title: 'spider-flow',
	description: '一个无需写代码的爬虫平台',
	head: [
		["link", {rel: "icon", href: `/favicon.ico`}],
		["script", { "crossorigin": "anonymous", async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9417757127794923" }],
		["script", { async: true, src: "https://cdn.wwads.cn/js/makemoney.js" }]
	],
	themeConfig: {
		docsRepo : 'ssssssss-team/spider-flow-site',
		docsDir : 'spider-flow-docs',
		editLinks : true,
		editLinkText: "在 GitHub 上编辑此页",
		lastUpdated: "上次更新",
		nav : [{
			text : '演示站点',
			link : 'http://demo.spiderflow.org/'
		},{
			text : '源码',
			items : [{
				text : 'Gitee',
				link : 'https://gitee.com/ssssssss-team/spider-flow'
			},{
				text : 'Github',
				link : 'https://github.com/ssssssss-team/spider-flow'
			}]
		},{
			text : '更新日志',
			link : '/changelog'
		},{
			text : '其它开源',
			items : [{
				text : 'magic-api(Gitee)',
				link : 'https://gitee.com/ssssssss-team/magic-api'
			},{
				text : 'magic-api(Github)',
				link : 'https://github.com/ssssssss-team/magic-api'
			},{
				text : 'magic-api-spring-boot-starter(Gitee)',
				link : 'https://gitee.com/ssssssss-team/magic-api-spring-boot-starter'
			},{
				text : 'magic-api-spring-boot-starter(Github)',
				link : 'https://github.com/ssssssss-team/magic-api-spring-boot-starter'
			}]
		},{
			text : '加入QQ群',
			link : 'https://shang.qq.com/wpa/qunwpa?idkey=10faa4cf9743e0aa379a72f2ad12a9e576c81462742143c8f3391b52e8c3ed8d'
		}],
		sidebar:[{
			title : '使用教程',
			collapsable: false,
			children: ['intro','install','course/quick-start','course/expression','course/variable','course/advanced','course/plugin','course/faq']
		},{
			title: '函数说明',
			collapsable: false,
			children: ['function/extra','function/base64','function/date','function/file','function/json','function/list','function/random','function/string','function/url']
		},{
			title: '类型扩展',
			collapsable: false,
			children: ['classes/explain','classes/spiderresponse','classes/string','classes/date','classes/object','classes/list','classes/map','classes/element','classes/elements','classes/array']
		},{
			title: '插件',
			collapsable: false,
			children: ['plugins/selenium','plugins/redis','plugins/mongodb','plugins/oss','plugins/ocr','plugins/proxypool']
		}]
    },
	plugins : [require('./plugins/stat')]
}