# oss

## 引入oss插件
1. 首先到码云下载插件[点击下载](https://gitee.com/jmxd/spider-flow-oss)到本地并导入到工作空间或安装到maven库
2. 在spider-flow/spider-flow-web/pom.xml中引入插件
```xml
<!-- 引入oss插件 -->
<dependency>
	<groupId>org.spiderflow</groupId>
	<artifactId>spider-flow-oss</artifactId>
	<version>${spider-flow.version}</version>
</depend