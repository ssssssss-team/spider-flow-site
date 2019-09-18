# org.spiderflow.io.SpiderResponse

## element

::: tip 

返回值类型：Element

:::


- 将对象转为Element

  ```javascript
  ${resp.element()}
  ```
  
## xpath

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  xpath |  xpath表达式  | 否 |

::: tip 

返回值类型：Element/String

:::


- 根据xpath获取内容或Element对象

  ```javascript
  ${resp.xpath('//a/@href')}
  ```
 
## xpaths

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  xpath |  xpath表达式  | 否 |

::: tip 

返回值类型：List<Element/String>

:::


- 根据xpath获取内容或Element对象

  ```javascript
  ${resp.xpaths('//a/@href')}
  ```
  
