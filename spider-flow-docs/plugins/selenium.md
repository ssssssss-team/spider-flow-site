# selenium

::: warning

目前selenium并不完善,如有问题请提issues或加群提问

:::

## 配置

- 页面加载超时时间,单位为毫秒
- 元素获取超时时间,单位为毫秒
- 驱动选择(暂未实现)
- Javascript 启用/禁用,启用之后js才会被执行
- URL:起始地址

## 方法

### attribute

|            参数名            |       描述       | 可否为空 |
| :--------------------------: | :--------------: | :------: |
| WebElement/List\<WebElement> | 要获取属性的对象 |    否    |
|        attributeName         |  要获取的属性名  |    否    |

::: tip 

返回值类型：String/List\<String>

:::


- 获取所有a标签的href

  ```javascript
  ${selenium.attribute(By.tagName('a'),'href')}
  ```

### html

|            参数名            |       描述       | 可否为空 |
| :--------------------------: | :--------------: | :------: |
| WebElement/List\<WebElement> | 要获取属性的对象 |    否    |

::: tip 

返回值类型：String/List\<String>

:::

- 获取所有a标签的html

  ```javascript
  ${selenium.html(By.tagName('a')}
  ```

### text

|            参数名            |       描述       | 可否为空 |
| :--------------------------: | :--------------: | :------: |
| WebElement/List\<WebElement> | 要获取属性的对象 |    否    |

::: tip 

返回值类型：String/List\<String>

:::

- 获取所有a标签的text

  ```javascript
  ${selenium.html(By.tagName('a')}
  ```

### elements

| 参数名 |  描述  | 可否为空 |
| :----: | :----: | :------: |
|   By   | 选择器 |    否    |

::: tip 

返回值类型：List\<WebElement>

:::

- 获取所有a标签

  ```javascript
  ${selenium.elements(By.tagName('a')}
  ```

### element

| 参数名 |  描述  | 可否为空 |
| :----: | :----: | :------: |
|   By   | 选择器 |    否    |

- 获取第一个a标签

  ```javascript
  ${selenium.element(By.tagName('a')}
  ```

### WebElement

需要注意的是,在获得WebElement方法之后，可以执行selenium提供的方法，如点击，输入值等

- 输入用户名

  ```javascript
  ${selenium.element(By.name('username').sendKeys('admin')}
  ```

- 点击登录按钮

  ```javascript
  ${selenium.element(By.id('submit').click()}
  ```

### By

#### By.xpath

根据xpath查找元素

#### By.css

根据css选择器查找元素

#### By.className

根据className查找元素

#### By.id

根据ID查找元素

#### By.tagName

根据标签名查找元素

#### By.name

根据name查找元素