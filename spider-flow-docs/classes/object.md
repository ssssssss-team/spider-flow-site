# java.lang.Object

## string
::: tip 
返回值类型：String
:::


- 将对象转为String
```javascript
${objVar.string()}
```

## jsonpath
| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| path |  jsonpath  | 否 |

::: tip 
返回值类型：Object
:::


- 根据JSONPath提取数据

```javascript
${objVar.jsonpath('$.code')}
```
