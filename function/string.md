# string

## substring

|   参数名   |     描述     | 可否为空 |
| :--------: | :----------: | :------: |
|  content   | 被截取的内容 |    否    |
| beginIndex |   起始位置   |    否    |
|  endIndex  |   结束位置   |    是    |

::: tip 

返回值类型：String

:::

截取字符串


- 从`unhappy`中提取`happy`

  ```javascript
  ${string.substring('unhappy',2)}
  ```
- 从`smiles`中提取`mile`

  ```javascript
  ${string.substring('smiles',1,5)}
  ```
## lower

| 参数名  |       描述       | 可否为空 |
| :-----: | :--------------: | :------: |
| content | 要转小写的字符串 |    否    |

::: tip 

返回值类型：String

:::

字符串转小写


- 把`hello`变成小写`hello`

  ```javascript
  ${string.lower('HELLO')}
  ```

## upper

| 参数名  |       描述       | 可否为空 |
| :-----: | :--------------: | :------: |
| content | 要转大写的字符串 |    否    |

::: tip 

返回值类型：String

:::

字符串转大写


- 把`hello`变成大写`HELLO`

  ```javascript
  ${string.upper('hello')}
  ```

## indexOf

|  参数名   |      描述      | 可否为空 |
| :-------: | :------------: | :------: |
|  content  | 被查找的字符串 |    否    |
|    str    | 要查找的字符串 |    否    |
| fromIndex |    起始位置    |    是    |

::: tip 

返回值类型：int

:::

获取字符串在被查找字符串中的位置


- 找`world`在`hello world`中的位置

  ```javascript
  ${string.indexOf('hello world','world')}
  ```

## replace

| 参数名  |      描述      | 可否为空 |
| :-----: | :------------: | :------: |
| content | 被替换的字符串 |    否    |
| source  | 要替换的字符串 |    否    |
| target  |   目标字符串   |    否    |

::: tip 

返回值类型：String

:::

替换字符串


- 把`Hello,World!`替换成`Hello,SpiderFlow!`

  ```javascript
  ${string.replace('Hello,World','World','SpiderFlow')}
  ```

## replaceAll

| 参数名  |      描述      | 可否为空 |
| :-----: | :------------: | :------: |
| content | 被替换的字符串 |    否    |
|  regx   |   正则表达式   |    否    |
| target  |   替换字符串   |    否    |

::: tip 

返回值类型：String

:::

正则替换字符串


- 把`h1e2l3l4o5`替换成`hello`

  ```javascript
  ${string.replaceAll('h1e2l3l4o5','\\d+','')}
  ```

## replaceFirst

| 参数名  |      描述      | 可否为空 |
| :-----: | :------------: | :------: |
| content | 被替换的字符串 |    否    |
|  regx   |   正则表达式   |    否    |
| target  |   替换字符串   |    否    |

::: tip 

返回值类型：String

:::

正则替换第一个字符串


- 把`h1e2l3l4o5`替换成`he2l3l4o5`

  ```javascript
  ${string.replaceFirst('h1e2l3l4o5','\\d+','')}
  ```

## length

| 参数名  |        描述        | 可否为空 |
| :-----: | :----------------: | :------: |
| content | 要获取长度的字符串 |    否    |

::: tip 

返回值类型：int

:::

获取字符串的长度


- 获取`hello`的长度

  ```javascript
  ${string.length('hello')}
  ```

## trim

| 参数名  |          描述          | 可否为空 |
| :-----: | :--------------------: | :------: |
| content | 要去除前后空格的字符串 |    否    |

::: tip 

返回值类型：String

:::

去除前后空格

## split

| 参数名  |      描述      | 可否为空 |
| :-----: | :------------: | :------: |
| content | 被替换的字符串 |    否    |
|  regx   |   正则表达式   |    否    |

::: tip 

返回值类型：String

:::

正则分割字符串


- 把`h1e2l3l4o5`替换成`['h','e','l','l','o']`

  ```javascript
  ${string.split('h1e2l3l4o5','\\d+')}
  ```

## bytes

| 参数名  |      描述      | 可否为空 |
| :-----: | :------------: | :------: |
| content | 被替换的字符串 |    否    |
| charset |    编码格式    |    是    |

::: tip 

返回值类型：byte[]

:::

获取字符串的字节数组


- 获取字符串`hello`的字节数组

  ```javascript
  ${string.bytes('hello')}
  ```

## newString

| 参数名  |   描述   | 可否为空 |
| :-----: | :------: | :------: |
| byte[]  | 字节数组 |    否    |
| charset | 编码格式 |    否    |

::: tip 

返回值类型：String

:::


- 把字节数组转为String

  ```javascript
  ${string.newString(resp.bytes)}
  ```

## equals

| 参数名 |  描述   | 可否为空 |
| :----: | :-----: | :------: |
|  str1  | 字符串1 |    否    |
|  str2  | 字符串2 |    否    |

::: tip 

返回值类型：String

:::


- 判断两个字符串是否相同

  ```javascript
  ${string.equals(resp.html,'hello,world')}
  ```

## uuid

::: tip 

返回值类型：String

:::


- 获取一个UUID字符串

  ```javascript
  ${string.uuid()}
  ```

## uuids

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  size  | 要获取uuid的数量 |    否    |

::: tip 

返回值类型：List\<String>

:::


- 获取10个uuid

  ```javascript
  ${string.uuids(10)}
  ```