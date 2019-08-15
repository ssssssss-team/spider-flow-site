# 安装部署

### 准备环境
```
JDK >= 1.8 (推荐1.8)
Mysql >= 5.0
Maven >= 3.0 下载地址：(http://maven.apache.org/download.cgi)
```
### 运行项目
1.  前往码云下载页面(https://gitee.com/jmxd/spider-flow)下载解压到工作目录
2.  设置Eclipse仓库，菜单Window->Preferences->Maven->User Settings->User Settings 后边的Browse,然后导入自己的Maven目录的conf目录下的settings.xml文件，然后点Apply,在点OK
3.  导入到Eclipse,菜单file->Import,然后选择Maven->Existing Maven Projects,点击Next>按钮，选择工作目录，然后点击Finish按钮，即可导入成功
4.  打开并运行org.spiderflow.SpiderApplication.java
5.  打开浏览器，输入(http://localhost:8088/)