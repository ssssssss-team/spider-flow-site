# IP代理池插件

## 引入IP代理池插件
1. 首先到码云下载插件[点击下载](https://gitee.com/jmxd/spider-flow-proxypool)到本地并导入到工作空间或安装到maven库
2. 在spider-flow/spider-flow-web/pom.xml中引入插件
```xml
<!-- 引入proxypool插件 -->
<dependency>
	<groupId>org.spiderflow</groupId>
	<artifactId>spider-flow-proxypool</artifactId>
	<version>${spider-flow.version}</version>
</dependency>
```

### 方法

### proxypool.add

|       参数名       |       描述       | 可否为空 |
| :----------------: | :--------------: | :------: |
|     ip(String)     |      ip地址      |    否    |
|   port(Integer)    |      端口号      |    否    |
|    type(String)    | 类型(http,https) |    否    |
| anonymous(boolean) |    是否是高匿    |    否    |

### proxypool.http

- 随机获取一个http代理

|       参数名       |       描述       | 可否为空 |
| :----------------: | :--------------: | :------: |
| anonymous(boolean) | 是否获取高匿代理 |    是    |

::: tip 

返回值类型：String ip:port

:::

### proxypool.https

- 随机获取一个https代理

|       参数名       |       描述       | 可否为空 |
| :----------------: | :--------------: | :------: |
| anonymous(boolean) | 是否获取高匿代理 |    是    |

::: tip 

返回值类型：String ip:port

:::