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

