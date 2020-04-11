# base64

## encode

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| bytes  | 要加密的字节数组 |    否    |

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
| string  |  要加密的字节数组  |    否    |
| charset | 编码格式,默认UTF-8 |    是    |

::: tip 

返回值类型：String 

:::

根据字节数组或字符串进行base64加密，返回String


- 根据访问结果进行base64加密

  ```javascript
  ${base64.encode(resp.html)}
  ```
  ```javascript
  ${base64.encode(resp.bytes)}
  ```

## encodeBytes

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| bytes  | 要加密的字节数组 |    否    |

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
| string  |  要加密的字节数组  |    否    |
| charset | 编码格式,默认UTF-8 |    是    |

::: tip 

返回值类型：byte[]

:::

- 根据字节数组或字符串进行base64加密，返回byte[]

 ```javascript
  ${base64.encodeBytes(resp.html)}
 ```
  ```javascript
  ${base64.encodeBytes(resp.bytes)}
  ```

## decode

|    参数名    |           描述           | 可否为空 |
| :----------: | :----------------------: | :------: |
| bytes/string | 要解密的字节数组或字符串 |    否    |

::: tip 

返回值类型：byte[]

:::

根据字节数组或字符串进行base64解密，返回byte[]


- 根据访问结果进行base64解密

  ```javascript
  ${base64.decode(resp.html)}
  ```
  ```javascript
  ${base64.decode(resp.bytes)}
  ```

## decodeString

| 参数名 |      描述      | 可否为空 |
| :----: | :------------: | :------: |
| string | 要解密的字符串 |    否    |

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
|  bytes  |  要解密的字节数组  |    否    |
| charset | 编码格式,默认UTF-8 |    是    |

::: tip 

返回值类型：String 

:::

根据字节数组或字符串进行base64解密，返回String


- 根据访问结果进行base64解密

  ```javascript
  ${base64.decodeString(resp.html)}
  ```
  ```javascript
  ${base64.decodeString(resp.bytes)}
  ```