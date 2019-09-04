# IP代理池插件

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