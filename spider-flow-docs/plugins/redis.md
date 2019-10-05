# redis

## 引入Redis插件
1. 首先到码云下载插件[点击下载](https://gitee.com/jmxd/spider-flow-redis)到本地并导入到工作空间或安装到maven库
2. 在spider-flow/spider-flow-web/pom.xml中引入插件
```xml
<!-- 引入redis插件 -->
<dependency>
	<groupId>org.spiderflow</groupId>
	<artifactId>spider-flow-redis</artifactId>
	<version>0.0.1</version>
</dependency>
```
## 定义Redis数据源
- host：redis host/ip
- alias(别名)：特别重要，后续使用时都会使用到别名
- port：redis端口号
- 密码：redis密码，没有不填即可
- 数据库索引，默认为0
- 最大连接数，默认为8
- 最大空闲连接数，默认为8
- 最小空闲连接数，默认为0

## 开始使用
::: tip 
可以在所有支持表达式的地方使用
:::

``` javascript
//其中xxxx时之前配置的别名
//调用redis set命令
${redis.xxxx.set('key','value')}
```
``` javascript
//调用redis get命令
${redis.xxxx.get('key')}
```
``` javascript
//调用redis setex命令
${redis.xxxx.setex('key',10,value)}
```
