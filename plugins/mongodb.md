# mongodb

## 引入Mongdob插件
1. 首先到码云下载插件[点击下载](https://gitee.com/ssssssss-team/spider-flow-mongodb)到本地并导入到工作空间或安装到maven库
2. 在spider-flow/spider-flow-web/pom.xml中引入插件
```xml
<!-- 引入mongodb插件 -->
<dependency>
	<groupId>org.spiderflow</groupId>
	<artifactId>spider-flow-mongodb</artifactId>
</dependency>
```
## 定义Mongodb数据源
- host：mongodb host/ip
- alias(别名)：特别重要，后续使用时都会使用到别名
- port：mongodb端口号
- 用户名/密码：mongodb用户名密码，没有不填即可
- 数据库名称，mongodb 数据库名

## 开始使用
::: tip 
可以在所有支持表达式的地方使用
:::

``` javascript
//其中xxxx是之前配置的别名
//插入数据
${mongodb.xxxx.collectionName.insert([{key : value},{key : value}])}
${mongodb.xxxx.collectionName.insert({key : value})}
```
``` javascript
//查找数据
${mongodb.xxxx.collectionName.find({key : value}).skip(2).limit(3).list()}
```
``` javascript
//修改数据
${mongodb.xxxx.collectionName.update({key : oldValue},{key : newValue})}
${mongodb.xxxx.collectionName.updateMany({key : oldValue},{key : newValue})}
```
``` javascript
//查询总数
${mongodb.xxxx.collectionName.count({key : value})}
${mongodb.xxxx.collectionName.count()}
```
``` javascript
//删除数据
${mongodb.xxxx.collectionName.remove({key : value})}
${mongodb.xxxx.collectionName.removeOne({key : value})}
```
