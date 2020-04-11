# 更新日志

## [v0.4.3] 2020.04.02
- 新增页面在线调试功能
- 新增insertofPk 插入返回自增主键值
- 新增sql输出select为sqlRowSet流
- 新增线程提交策略配置(随机、顺序、子优先、父优先，默认随机)
- 新增传递变量设置
- 新增流转选项(异常流转、非异常流转、无论异常都流转)
- 新增线条颜色设置(异常红色,非异常绿色,其它可自定义)
- 修复ex变量不会自动清除的BUG
- 修复下拉框显示不全的BUG
- 修复表单类型为form-data时参数错乱的BUG
- 修复自定义函数返回数组、日期类型不对的问题
- 优化编辑页改为在新tab页打开
- 优化界面样式，缩小字体大小等,减少遮挡区域

## [v0.4.2] 2020.03.22
- 新增版本更新检测
- 新增流程检测,保证流程可正常运行
- 修复撤销时js报错的BUG
- 修复任务执行顺序不正确的问题
- 优化文档
### Selenium插件
- 新增切换至iframe的方法
- 修复遍历WebElements时无法使用selector/xpath等函数的问题


## [v0.4.1] 2020.03.18
- 新增ForkJoin执行器(用于等待之前的节点结束)
- 新增日志下载功能 [#I1BQ35](https://gitee.com/jmxd/spider-flow/issues/I1BQ35)
- 新增docker部署
- 移除LoopJoin执行器,用ForkJoin代替
- 修复输出csv文件没有表头的问题
- 修复最大线程数为1时爬虫不执行的问题
- 修复strVar.xpath方法无法获取内容的问题
- 修复修复节点形成递归时判断其是否结束的BUG
- 修复前端日志打印不完整的BUG
- 优化sidebar,取消滚动条，改为自适应 [#I1BQ5I](https://gitee.com/jmxd/spider-flow/issues/I1BQ5I)

## [v0.4.0] 2020.03.16
- 新增自定义函数功能
- 新增输出节点支持输出至数据库或csv文件
- 新增获取元素节点和上级元素方法elementVar.subling()、elementVar.parent()、elementVar.parents()、elementsVar.parents()
- 修复日志文件内容为空的问题 [#I1AXQK](https://gitee.com/jmxd/spider-flow/issues/I1AXQK)
- 修复输出时可能出现的ArrayIndexOutOfBoundsException异常
- 优化界面显示,并将右侧属性配置移到底部
- 优化file函数,将下载调整为file.download(path,url)和file.download(path,urls)
- 优化程序逻辑,将递归执行改为非递归执行

## [v0.3.2] 2019.12.26
- 修复前端日志不输出的BUG
- 修复前端日志滚动条不显示的问题
- 修复输出全部参数的未选中也输出的BUG
- 修复Cookie批量设置的BUG
- 修复任务未执行，查询日志失败的问题
- 优化插件描述
- 优化任务日志拆分文件
- 优化重启服务后，重置任务下一次执行时间
- 优化测试窗口可最大最小化
### Selenium插件
- 新增loadCookies方法，获取最新Cookies
- 新增默认resp变量可以改名(防止冲突)
- 调整默认不选无头模式，默认启用JS

## [v0.3.1] 2019.12.23
- 新增Header、Cookies批量设置
- 新增变量、参数、输出、函数、header、cookie拖动调整执行顺序
- 新增插件功能描述及功能区显示
- 新增map.toList、list.sort、object.sleep函数
- 修复listVar.join中list.length为1时返回异常
- 修复下次执行时间计算不正确的问题
- 修复右键粘贴时保存不成功的BUG
- 修复Cookie值不能使用表达式的BUG
- 优化日志，修改其实现方式
- 优化xpath解析方式，修复原解析xpath异常错误
- 优化favicon替换掉默认的图标
### Selenium插件重构
- 支持Chrome、Firefox驱动
- 支持Cookie自动管理
- 支持驱动参数配置
- 支持模拟鼠标移动，点击，双击，释放等事件
- 支持HTTP代理


## [v0.3.0] 2019.12.09
- 新增Cookie自动管理功能
- 新增resp.links()、resp.images()、resp.title函数
- 新增url批量下载，不用先爬取再下载
- 新增string.lastIndexOf、thread.sleep()、list.filterStr函数
- 新增多函数执行方法
- 新增任务状态、任务执行记录
- 修复爬虫名称有空格时，tab页打不开的BUG
- 修复爬虫名称在编辑时未能获取到名称的BUG
- 优化对返回结果resp.json、resp.html进行缓存
- 优化请求延迟时间对第一次执行也生效


## [v0.2.1] 2019.11.17
- 新增selectOne方法，执行后返回Map对象
- 新增selectInt方法，执行后返回int
- 修复表达式在xxx${expr}格式中，expr为null时整个表达式返回null的问题
- 修复延迟计算不准确的问题
- 优化表达式null.方法/属性，以及map[null]、array[null]直接返回null
- 优化日志显示方式,提升性能
- 优化全局变量支持表达式语法
- 优化SQL支持表达式语法

## [v0.2.0] 2019.11.03
- 新增全局变量功能
- 新增爬虫搜索功能
- 新增List打乱函数
- 新增内置demo（爬取开源中国动弹）
- 修复等待节点在双重循环中表现与预期不一致的BUG
- 修复某些Header无法设置的问题
- 修复循环次数可能不对的BUG
- 优化表格输出样式与高亮显示
- 优化表格输出tab页签名

## [v0.1.0] 2019.10.30
- v0.1.0 正式发布