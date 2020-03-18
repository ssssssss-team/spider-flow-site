# 开发指南

1. 新建一个maven项目
```xml
<parent>
    <groupId>org.spiderflow</groupId>
    <artifactId>spider-flow</artifactId>
    <version>0.4.1</version>
</parent>
```

2. 引入spider-flow-api
```xml
<dependency>
    <groupId>org.spiderflow</groupId>
    <artifactId>spider-flow-api</artifactId>
    <scope>provided</scope>
</dependency>
```
3. 开始编写代码开发插件

4. 在spider-flow-web中引入刚写的插件

5. 功能测试