# json

## parse

|   参数名   |    描述    | 可否为空 |
| :--------: | :--------: | :------: |
| jsonstring | json字符串 |    否    |

::: tip 

返回值类型：Object

:::


- 将json字符串转为json对象

  ```javascript
  ${json.parse(resp.html)}
  ```

## stringify

| 参数名 |          描述          | 可否为空 |
| :----: | :--------------------: | :------: |
| object | 要转为json字符串的对象 |    否    |

::: tip 

返回值类型：String

:::


- 将对象转为json字符串

  ```javascript
  ${json.stringify(resp.cookies)}
  ```