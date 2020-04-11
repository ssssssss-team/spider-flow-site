# list

## length

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  List  | 要获取长度的List |    否    |

::: tip 

返回值类型：int

:::


- 获取List的长度

  ```javascript
  ${list.length(listVar)}
  ```

## split

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  List  |   要分割的List   |    否    |
|  len   | 每个子List的长度 |    否    |

::: tip 

返回值类型：List\<List>

:::


- 将List分割成10个一组

  ```javascript
  ${list.split(listVar,10)}
  ```

## subList

|  参数名   |     描述     | 可否为空 |
| :-------: | :----------: | :------: |
|   List    | 要截取的List |    否    |
| fromIndex |   起始位置   |    否    |
| endIndex  |   结束位置   |    否    |

::: tip 

返回值类型：List

:::


- 截取List

  ```javascript
  ${list.subList(listVar,2,5)}
  ```
  
 ## filterStr
 
 |  参数名   |     描述     | 可否为空 |
 | :-------: | :----------: | :------: |
 |   List\<String>    | 要过滤的List |    否    |
 | pattern |  正则表达式  |    否    |
 
 ::: tip 
 
 返回值类型：List\<String>
 
 :::
 
 
 - 根据正则表达式过滤字符串list元素
 
   ```javascript
   ${list.filterStr(listVar,pattern)}
   ```