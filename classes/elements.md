# org.jsoup.select.Elements

## xpath

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
|  xpath |  xpath表达式  | 否 |

::: tip 

返回值类型：Element/String

:::

- 根据xpath获取内容或Element对象

  ```javascript
  ${elementsVar.xpath('//a/@href')}
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
  ${elementsVar.xpaths('//a/@href')}
  ```

## regx

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| pattern |  正则表达式  | 否 |
|  groups  |     捕获组序号int或List\<Integer>(多个)      |    是    |

::: tip 

返回值类型：String/List\<List\<String>

:::


- 根据正则表达式提取字符串

  ```javascript
  ${elementsVar.regx('<title>(.*?)</title>')}
  ```
 
## regxs

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| pattern |  正则表达式  | 否 |
|  groups  |     捕获组序号int或List\<Integer>(多个)      |    是    |

::: tip 

返回值类型：List\<String>/List\<List\<String>>

:::


- 根据正则表达式提取字符串

  ```javascript
  ${elementsVar.regxs('<h2>(.*?)</h2>')}
  ```

## selector

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| cssQuery |  css选择器  | 否 |
::: tip 

返回值类型：Element

:::


- 根据css选择器查找dom

```javascript
${elementsVar.selector('div a.selected')}
```
## selectors

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| cssQuery |  css选择器  | 否 |
::: tip 
返回值类型：Elements
:::


- 根据css选择器查找dom

```javascript
${elementsVar.selectors('div a.selected')}
```
  
## attr

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| attrName |  属性名  | 否 |
::: tip 
返回值类型：String
:::


- 获取第一个节点的属性值

```javascript
${elementsVar.attr('src')}
```

## attrs

| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| attrName |  属性名  | 否 |
::: tip 
返回值类型：List\<String>
:::


- 获取所有节点的属性值

```javascript
${elementsVar.attrs('src')}
```
  
## text

::: tip 
返回值类型：String
:::

- 获取第一个节点的Text

```javascript
${elementsVar.text()}
```

## texts

::: tip 
返回值类型：List\<String>
:::

- 获取所有节点节点的Text

```javascript
${elementsVar.texts()}
```

## html
::: tip 
返回值类型：String
:::


- 获取第一个节点的html
```javascript
${elementsVar.html()}
```

## htmls
::: tip 
返回值类型：List\<String>
:::


- 获取所有节点的html
```javascript
${elementsVar.htmls()}
```