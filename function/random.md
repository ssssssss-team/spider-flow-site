# random

## randomInt

| 参数名 |  描述  | 可否为空 |
| :----: | :----: | :------: |
|  min   | 最小值 |    否    |
|  max   | 最大值 |    否    |

::: tip 

返回值类型：int

:::


- 随机返回1-10之间的数字,包括1不包括10

  ```javascript
  ${random.randomInt(1,10)}
  ```

## randomDouble
| 参数名 |  描述  | 可否为空 |
| :----: | :----: | :------: |
|  min   | 最小值 |    否    |
|  max   | 最大值 |    否    |

::: tip 

返回值类型：double

:::


- 随机返回1-10之间的数字,包括1不包括10

  ```javascript
  ${random.randomDouble(1,10)}
  ```

## randomLong
| 参数名 |  描述  | 可否为空 |
| :----: | :----: | :------: |
|  min   | 最小值 |    否    |
|  max   | 最大值 |    否    |

::: tip 

返回值类型：long

:::


- 随机返回1-10之间的数字,包括1不包括10

  ```javascript
  ${random.randomLong(1,10)}
  ```

## string

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
| chars  | 字符串范围 |    否    |
| length |  随机个数  |    否    |

::: tip 

返回值类型：String

:::


- 随机返回`abcdefgh`中的字符串,如`adf`

  ```javascript
  ${random.string('abcdefgh',3)}
  ```
