const { path } = require('@vuepress/shared-utils')
module.exports = {
    name : 'Stat',
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ],
    globalUIComponents : 'Stat'
}