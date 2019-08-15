# 函数说明

#### 内置方法
- selector
- selectors
- xpath
- xpaths
- regx
- regxs
- jsonpath

#### selector/selectors
| 参数一 | 参数二 | 参数三 | 参数四 |
| ------ | ------ | ------ | ------ |
|  html  |  css选择器 | text/attr/outerhtml  |  attrName |
- 获取a标签
```javascript
${selectors(resp.html,'a')}
```
- 获取a标签的text
```javascript
${selectors(resp.html,'a','text')}
```
- 获取a标签的outerhtml
```javascript
${selectors(resp.html,'a','outerhtml')}
```
- 获取a标签的href
```javascript
${selectors(resp.html,'a','attr','href')}
```

> selector返回的是String，selectors返回的是ListString

#### xpath/xpaths

| 参数一 | 参数二 |
| ------ | ------ |
| html   | xpath  |

- 获取a标签
```javascript
${xpaths(resp.html,'//a')}
```
- 获取a标签的href属性
```javascript
${xpaths(resp.html,'//a/@href')}
```

> xpath返回的是String，xpaths返回的是ListString

#### jsonpath

| 参数一 | 参数二 |
| ------ | ------ |
| object | jsonpath |

- 获取 **{"code" : 1}** 中code的值
```javascript
${jsonpath(resp.json,'$.code')}
```

#### regx/regxs

| 参数一 | 参数二 |
| ------ | ------ |
| String   | regx  |

- 获取页面标题
```javascript
${regxs(resp.html,'<title>(.*?)</title>')}
```
> regx返回的是String，regxs返回的是List<String>
