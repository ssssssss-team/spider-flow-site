module.exports = {
	title: 'spider-flow',
	description: 'Just playing around',
	themeConfig: {
		sidebar:[{
			title : '快速入门',
			collapsable: false,
			children: ['install','quick','document']
		},{
			title: '图形说明',
			collapsable: false,
			children: ['shape/variable','shape/output','shape/datasource','shape/executesql','shape/process','shape/function']
		},{
			title: '函数说明',
			collapsable: false,
			children: ['function/base64','function/date','function/file','function/json','function/list','function/random','function/string','function/url']
		},{
			title: '插件',
			collapsable: false,
			children: ['plugins/selenium','plugins/redis','plugins/mongodb','plugins/oss','plugins/ocr']
		}]
    }
}