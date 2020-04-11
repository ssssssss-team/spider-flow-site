# 抽取函数

## selector

| 参数名 |           描述           | 可否为空 |
| :----: | :----------------------: | :------: |
|  html  |   html内容如resp.html    |    否    |
|  css   |        css选择器         |    否    |
|  类型  |   text/attr/outerhtml    |    是    |
| 属性名 | 当类型为attr时，填写此项 |    是    |

::: tip 

返回值类型：String 

:::

采用css选择器方法抽取一条数据


- 获取第一个a标签的html

  ```javascript
  ${extract.selector(resp.html,'a')}
  ```

- 获取第一个a标签的text(文本)

  ```javascript
  ${extract.selector(resp.html,'a','text')}
  ```

- 获取第一个a标签的outerhtml

  ```javascript
  ${extract.selector(resp.html,'a','outerhtml')}
  ```

- 获取第一个a标签的href属性

  ```javascript
  ${extract.selector(resp.html,'a','attr','href')}
  ```

## selectors

| 参数名 |           描述           | 可否为空 |
| :----: | :----------------------: | :------: |
|  html  |   html内容如resp.html    |    否    |
|  css   |        css选择器         |    否    |
|  类型  |   text/attr/outerhtml    |    是    |
| 属性名 | 当类型为attr时，填写此项 |    是    |

::: tip 

返回值类型：List\<String>

:::

采用css选择器方法抽取一组数据

- 获取所有a标签的html

  ```javascript
  ${extract.selectors(resp.html,'a')}
  ```

- 获取所有a标签的text(文本)

  ```javascript
  ${extract.selectors(resp.html,'a','text')}
  ```

- 获取所有a标签的outerhtml

  ```javascript
  ${extract.selectors(resp.html,'a','outerhtml')}
  ```

- 获取所有a标签的href属性

  ```javascript
  ${extract.selectors(resp.html,'a','attr','href')}
  ```

## xpath
| 参数名 |        描述         | 可否为空 |
| :----: | :-----------------: | :------: |
|  html  | html内容如resp.html |    否    |
| xpath  |     xpath表达式     |    否    |

::: tip 

返回值类型：String

:::

采用xpath方法抽取一条数据

- 获取第一个a标签的html

  ```javascript
  ${extract.xpath(resp.html,'//a')}
  ```

  

- 获取第一个a标签的href属性

  ```javascript
  ${extract.xpath(resp.html,'//a/@href')}
  ```

  

## xpaths
| 参数名 |        描述         | 可否为空 |
| :----: | :-----------------: | :------: |
|  html  | html内容如resp.html |    否    |
| xpath  |     xpath表达式     |    否    |

::: tip 

返回值类型：List\<String>

:::

采用xpath方法抽取一组数据

- 获取所有a标签

  ```javascript
  ${extract.xpaths(resp.html,'//a')}
  ```

  

- 获取所有a标签的href属性

  ```javascript
  ${extract.xpaths(resp.html,'//a/@href')}
  ```
## regx

| 参数名 |        描述         | 可否为空 |
| :----: | :-----------------: | :------: |
| string | 字符串，如resp.html |    否    |
|  regx  |     正则表达式      |    否    |
|  groups  |     捕获组序号int或List\<Integer>(多个)      |    是    |

::: tip 

返回值类型：String/List\<String>

:::

采用正则方法抽取一条数据

- 获取网页title

  ```javascript
  ${extract.regx(resp.html,'<title>(.*?)</title>')}
  ```

## regxs
| 参数名 |        描述         | 可否为空 |
| :----: | :-----------------: | :------: |
| string | 字符串，如resp.html |    否    |
|  regx  |     正则表达式      |    否    |
|  groups  |     捕获组序号int或List\<Integer>(多个)      |    是    |

::: tip 

返回值类型：List\<String>/List\<List\<String>

:::

采用正则方法抽取一组数据

- 获取所有h2标签内容

  ```javascript
  ${extract.regxs(resp.html,'<h2>(.*?)</h2>')}
  ```

## jsonpath

|  参数名  |      描述      | 可否为空 |
| :------: | :------------: | :------: |
|  object  |    json对象    |    否    |
| jsonpath | jsonpath表达式 |    否    |

::: tip 

返回值类型：Object

:::

根据jsonpath抽取数据

- 获取json根节点下的code属性

  ```javascript
  ${extract.jsonpath(resp.json,'$.code')}
  ```