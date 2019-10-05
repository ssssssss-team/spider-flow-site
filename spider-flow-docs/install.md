# 安装部署

### 准备环境
```
JDK >= 1.8
Mysql >= 5.7
Maven >= 3.0 下载地址：(http://maven.apache.org/download.cgi)
```
### 运行项目
1.  前往码云下载页面(https://gitee.com/jmxd/spider-flow)下载解压到工作目录
2.  设置Eclipse仓库，菜单Window->Preferences->Maven->User Settings->User Settings 后边的Browse,然后导入自己的Maven目录的conf目录下的settings.xml文件，然后点Apply,在点OK
3.  导入到Eclipse,菜单file->Import,然后选择Maven->Existing Maven Projects,点击Next>按钮，选择工作目录，然后点击Finish按钮，即可导入成功
4.	导入数据库,基础表：spider-flow/db/spiderflow.sql
5.  打开并运行org.spiderflow.SpiderApplication.java
6.  打开浏览器，输入(http://localhost:8088/)

### 引入插件
1.  首先把需要的插件下载到本地并导入到工作空间或安装到maven库
2.  在spider-flow/spider-flow-web/pom.xml中引入插件
```xml
<!-- 以引入mongodb插件为例 -->
<dependency>
	<groupId>org.spiderflow</groupId>
	<artifactId>spider-flow-mongodb</artifactId>
	<version>0.0.1</version>
</dependency>
```