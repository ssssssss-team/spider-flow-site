# date

## format

|  参数名   |                描述                 | 可否为空 |
| :-------: | :---------------------------------: | :------: |
| date/long |  要格式化的时间，date类型或时间戳   |    否    |
|  pattern  | 格式化格式，默认yyyy-MM-dd HH:mm:ss |    是    |

::: tip 

返回值类型：String 

:::

格式化时间


- 获取当前时间的yyyy-MM-dd格式

  ```javascript
  ${date.format(date.now(),'yyyy-MM-dd')}
  ```


## parse
|  参数名  |           描述           | 可否为空 |
| :------: | :----------------------: | :------: |
|  string  | 要转换的时间，String类型 |    否    |
| patterns |    日期格式,可写多个     |    否    |

| 参数名 | 描述 | 可否为空 |
| :----: | :--: | :------: |
|  long  |      |    否    |

::: tip 

返回值类型：Date

:::

日期转换


- 获取当前时间的yyyy-MM-dd格式

  ```javascript
  ${date.parse('2008-08-08','yyyy-MM-dd')}
  ```

- 根据时间戳转成Date类型

  ```javascript
  ${date.parse(1218124800000)}
  ```

## now

获取当前时间

::: tip 

返回值类型：Date

:::

- 获取当前时间

  ```javascript
  ${date.now()}
  ```

## addYears

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期年份加减操作


- 获取一年后的时间

  ```javascript
  ${date.addYears(date.now(),1)}
  ```

## addMonths

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期月份加减操作


- 获取一个月后的时间

  ```javascript
  ${date.addMonths(date.now(),1)}
  ```

## addDays

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期天数加减操作


- 获取一天后的时间

  ```javascript
  ${date.addDays(date.now(),1)}
  ```

## addHours

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期小时加减操作


- 获取一小时后的时间

  ```javascript
  ${date.addHours(date.now(),1)}
  ```

## addMinutes

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期分钟加减操作


- 获取一分后的时间

  ```javascript
  ${date.addMinutes(date.now(),1)}
  ```

## addSeconds

| 参数名 |    描述    | 可否为空 |
| :----: | :--------: | :------: |
|  date  | 被加的时间 |    否    |
| amount | 要加的时间 |    是    |

::: tip 

返回值类型：Date

:::

日期秒数加减操作


- 获取一秒后的时间

  ```javascript
  ${date.addSeconds(date.now(),1)}
  ```