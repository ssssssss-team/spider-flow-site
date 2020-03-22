# 快速入门

## 认识各个节点
### 开始节点 ![开始节点](/images/course/shape-start.png "shape-start.png")
- 仅仅是爬虫的起点,所有流程图必须有该节点。

### 爬取节点 ![开始爬取](/images/course/shape-request.png "shape-request.png")
该节点用于请求HTTP/HTTPS页面或接口

- 请求方法：GET、POST、PUT、DELETE等方法
- <font color="blue">URL</font>: 请求地址
- <font color="blue">延迟时间</font>：单位是毫秒，意思是爬取之前延迟一段时间在执行抓取
- <font color="blue">超时时间</font>：网络请求的超时时间，单位也是毫秒
- <font color="blue">代理</font>：请求时设置的代理，格式为`host:port` 如 `192.168.1.26:8888`
- 编码格式：用来设置页面的编码格式默认为UTF-8，当解析出现乱码时，可以修改此值
- 跟随重定向：默认是跟随30x重定向，当不需要此功能时，可以取消勾选
- TLS证书验证：此项默认是勾选的，当出现证书一类的异常可以取消勾选此项尝试
- 自动管理Cookie：请求时自动设置Cookie（自己手动设置的与之前请求的Cookie都会设置进去）
- 参数：用来设置GET、POST等方法的参数设置
    - <font color="blue">参数名</font>：参数key值
    - <font color="blue">参数值</font>：参数value值
    - 参数描述：仅仅用来描述该项参数（相当于备注/注释）无实际意义
- Cookie：用来设置请求Cookie
    - <font color="blue">Cookie名</font>：Cookie key值
    - <font color="blue">Cookie值</font>：Cookie value值
    - 描述：仅仅用来描述该项Cookie（相当于备注/注释）无实际意义
- Header：用来设置请求头
    - <font color="blue">Header名</font>：Header key值
    - <font color="blue">Header值</font>：Header value值
    - 描述：仅仅用来描述该项Header（相当于备注/注释）无实际意义
- Body：请求类型（默认是none）
- form-data（Body项设置为form-data）
    - <font color="blue">参数名</font>：请求<font color="blue">参数名</font>
    - <font color="blue">参数值</font>：请求<font color="blue">参数值</font>
    - 参数类型：text/file
    - <font color="blue">文件名</font>：上传二进制数据时需要填的文件名
- raw（Body项设置为raw）
    - Content-Type：text/plain,application/json
    - <font color="blue">内容</font>：请求体内容（String类型）
::: tip 
此图形会返回一个HttpResponse对象，以`resp`存入变量中
:::

### 定义变量 ![定义变量](/images/course/shape-var.png "shape-var.png")
该节点用于定义变量之后，可以与表达式配套使用，实现动态设置各项参数(如动态请求分页地址)

- <font color="blue">变量名</font>：变量的名字，当变量名重复时，会覆盖前一个变量
- <font color="blue">变量值</font>：变量的值，可以是常量，可以是表达式

### 输出节点 ![输出节点](/images/course/shape-output.png "shape-output.png")
该节点主要用于调试,测试时会把输出打印到页面中，另外也可以用来自动保存到数据库或文件

- 输出到数据库：勾选时需要填写数据源、表名称，且`<font color="blue">输出项</font>`要与列名对应
- 输出到CSV文件：勾选时需要填写CSV<font color="blue">文件路径</font>，`<font color="blue">输出项</font>`会作为表头
- 输出全部参数：一般用来调试，可以输出所有变量到界面上
- <font color="blue">输出项</font>：输出项的名字
- <font color="blue">输出值</font>：输出的值，可以是常量，可以是表达式

### 循环节点 ![循环节点](/images/course/shape-loop.png "shape-loop.png")
- <font color="blue">循环次数</font>：当此项有值时，后续节点（包括本节点）会循环执行
- 循环变量：当循环时，会产生下标（从0开始）以该值存入变量中，与``for(int i =0; i < array.length;i++)``中的i意义相同
::: tip 
使用循环时需注意当有多个循环时会形成嵌套循环，必要时应与`等待结束`节点配套使用
:::

### 等待结束 ![等待结束](/images/course/shape-forkjoin.png "shape-forkjoin.png")
该节点会等待到该节点之前所有节点执行完毕时才会执行下一级节点。

### 执行SQL ![执行SQL](/images/course/shape-sql.png "shape-sql.png")
主要用于与数据库交互（查询/修改/插入/删除等等）

- 数据源：需要选择配置好的数据源
- 语句类型：select/selectInt/selectOne/insert/update/delete
- <font color="blue">SQL</font>： 要执行SQL语句，需要动态注入的参数用`##`包裹起来如：`#${item[index].id}#`
::: tip 
该节点执行完毕时会产生`rs`变量，selectInt/insert/update/delete会返回`int`类型,select会返回`List<Map<String,Object>>`,selectOne返回`Map<String,Object>`
:::


### 子流程 ![子流程](/images/course/shape-process.png "shape-process.png")
主要用于调用其他流程

- 子流程：选择要调用的流程即可

### 执行函数 ![执行函数](/images/course/shape-function.png "shape-function.png")
主要用于调用一些关联性不大，无需返回值的函数，如下载文件，保存文件等

- <font color="blue">执行函数</font>：要执行函数的表达式

### 连接线 ![连接线](/images/course/shape-arrow.png "shape-arrow.png")
用来流转至下一个节点

- <font color="blue">流转条件</font>：当表达式返回`true`时将流向下一个节点，否则不流转,不填时默认流转

### 通用参数
- 节点名称：用来显示节点名称，可以用来区分各个节点用途
- <font color="blue">循环次数</font>：当此项有值时，后续节点（包括本节点）会循环执行
- 循环变量：当循环时，会产生下标（从0开始）以该值存入变量中，与``for(int i =0; i < array.length;i++)``中的i意义相同
::: tip 
所有蓝色字体均支持表达式`${}`语法
:::

## 变量的作用域
变量（包括循环变量）一经定义就会**向下一直传递**（包括本节点）直至整个流程结束，当中间出现重复定义时，会**覆盖**原来的变量值

## 流程的执行过程
简单一句话概括就是**流程会按照箭头的方向一直流转下去**，**个别节点会打断流转（箭头）或重复流转（循环）**。
下面举几个例子来说明一下。
- ### 流程实例一
![流程实例一](/images/course/process-1.png "process-1.png")

很容易就能看出流程执行过程是：A->B->C->D，但由于A节点是循环，假设A节点循环次数是3，那么此时执行过程会变成A,A,A->B,B,B->C,C,C->D,D,D（**3个A一起执行,但是顺序不固定，每执行完一个就会直接流向下一个节点，而不是等3个A都结束**），当D,D,D都执行完毕时，由于没有流向下一个节点，此时整个流程结束。

由于B,C,D节点中也可以设置循环，假设C节点也设置了循环，其循环次数是2次，那么此时整个流程的执行过程是A,A,A->B,B,B->C,C,C,C,C,C->D,D,D,D,D,D(即形成了**嵌套循环**)
- ### 流程实例二
![流程实例二](/images/course/process-2.png "process-2.png")

- 先说运行顺序：A->B->(C->F),(D->E)->G->H
    - 先执行A节点
    - A节点执行完毕时，执行B节点
    - B节点执行完毕时，同时执行C、D节点
    - C节点执行完毕时，执行F节点
    - D节点执行完毕时，执行E节点
    - E、F节点都执行完毕时，执行G节点（G节点是等待结束节点，所以这里会等E、F都结束，否则无论E、F哪个节点执行完毕，都会执行G节点）
    - G节点执行完毕时，执行H节点
    - H节点执行完毕时，流程结束
    
由于C节点是循环节点，假设C节点循环次数是3次，则上方从C节点开始则变成C,C,C->F,F,F->G->H

- ### 流程实例三
![流程实例三](/images/course/process-3.png "process-3.png")

- 运行顺序：A->B->A,C->B->C
    - 先执行A节点
    - A节点执行时，执行B节点
    - B节点执行完毕时，执行A、C节点
    - 共计执行2次A，2次B，2次C。

这里会形成**递归**，即A<->B，但是形成这种情况时，往往都需要**加条件进行限制**，即上图中的`页数 < 3`