# 表达式语法

## 基本用法

本项目中表达式引擎也支持模板的方式，例如动态拼接url

```javascript
https://www.xxx.com/${path}/q?=keyword=${keyword}
```

## 运算符

模板语言支持大多数Java运算符。这些运算符的优先级也与Java中的相同。

## 类型

```javascript
byte ${123b}
short ${123s}
int ${123}
long ${123l}
float ${123f}
double ${123d}
string ${'hello'}
string ${"hello"}
```

同时也支持定义Map和List

``` javascript
${{key : "value"}}
${[1,2,3,4,5]}
${{$key : "value"}}//$key表示动态从变量中获取key值
```

## 一元运算符

您可以通过一元运算`-`符将数字取反，例如`${-234}`。要取反布尔表达式，可以使用`!`运算符，例如`${!true}`。

## 算术运算符

支持常见的算术运算符，例如`${1 + 2 * 3 / 4 % 2}`

## 比较运算符

`${23 < 34}`，`${23 <= 34}`，`${23 > 34}`，`${23 >= 34}`，`${ true != false }`，`${23 == 34}`

比较运算符结果为`boolean`类型

## 逻辑运算符

除了一元运算`!`符，您还可以使用`&&`和`||`。就像Java中一样，运算符也是一种短路运算符。如果`&&`左边计算为`false`，则不会计算右边。如果`||`左侧为true，则不会计算右边

## 三元运算符

三元运算符是`if`语句的简写形式，其工作方式类似于Java中，例如`${true ? "yes" : "no"}`

## 变量

```javascript
${var}
```

通过`${变量名}`调用

## 调用方法

```javascript
${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\d/').toInt()}
```

通过`${变量.方法名(参数1,参数2,....)}`进行调用

## 数组和Map

```javascript
${myArray[2]} ${myArray[indexVar]} ${myMap.get("key")} ${myMap["key"]} ${myMap.get(keyVar)} ${myMap[keyVar]}
```

## 链式调用

与Java中一样，您可以无限嵌套成员，数组元素和映射访问

```javascript
${myObject.aField[12]["key"].someMethod(1, 2).anotherMethod()}
```
```javascript
${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\d/').toInt()}
```
