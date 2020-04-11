# url

## encode

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
|   url   |    要编码的url     |    否    |
| charset | 编码格式,默认UTF-8 |    是    |

::: tip 

返回值类型：String

:::


- 编码`https://www.baidu.com`

  ```javascript
  ${url.encode('https://www.baidu.com')}
  ```

## decode

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
|   url   |    要解码的url     |    否    |
| charset | 编码格式,默认UTF-8 |    是    |

::: tip 

返回值类型：String

:::


- 解码`https%3A%2F%2Fwww.baidu.com`

  ```javascript
  ${url.decode('https%3A%2F%2Fwww.baidu.com')}
  ```

## parameter

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
|   url   |    要获取的URL     |    否    |
| key | 要获取的参数名 |    否    |

::: tip 

返回值类型：String

:::


- 获取`http://www.baidu.com/s?wd=spider-flow` 中的参数`wd`

  ```javascript
  ${url.parameter('http://www.baidu.com/s?wd=spider-flow','wd')}
  ```
## parameterMap

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
|   url   |    要获取的URL     |    否    |

::: tip 

返回值类型：Map<String,String>

:::


- 获取`http://www.baidu.com/s?wd=spider-flow&abbr=sf` 中的所有参数

  ```javascript
  ${url.parameterMap('http://www.baidu.com/s?wd=spider-flow&abbr=sf')}
  ```