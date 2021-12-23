(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{373:function(t,v,_){"use strict";_.r(v);var s=_(22),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"快速入门"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),_("h2",{attrs:{id:"认识各个节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#认识各个节点"}},[t._v("#")]),t._v(" 认识各个节点")]),t._v(" "),_("h3",{attrs:{id:"开始节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开始节点"}},[t._v("#")]),t._v(" 开始节点 "),_("img",{attrs:{src:"/images/course/shape-start.png",alt:"开始节点",title:"shape-start.png"}})]),t._v(" "),_("ul",[_("li",[t._v("仅仅是爬虫的起点,所有流程图必须有该节点。")])]),t._v(" "),_("h3",{attrs:{id:"爬取节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#爬取节点"}},[t._v("#")]),t._v(" 爬取节点 "),_("img",{attrs:{src:"/images/course/shape-request.png",alt:"开始爬取",title:"shape-request.png"}})]),t._v(" "),_("p",[t._v("该节点用于请求HTTP/HTTPS页面或接口")]),t._v(" "),_("ul",[_("li",[t._v("请求方法：GET、POST、PUT、DELETE等方法")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("URL")]),t._v(": 请求地址")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("延迟时间")]),t._v("：单位是毫秒，意思是爬取之前延迟一段时间在执行抓取")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("超时时间")]),t._v("：网络请求的超时时间，单位也是毫秒")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("代理")]),t._v("：请求时设置的代理，格式为"),_("code",[t._v("host:port")]),t._v(" 如 "),_("code",[t._v("192.168.1.26:8888")])],1),t._v(" "),_("li",[t._v("编码格式：用来设置页面的编码格式默认为UTF-8，当解析出现乱码时，可以修改此值")]),t._v(" "),_("li",[t._v("跟随重定向：默认是跟随30x重定向，当不需要此功能时，可以取消勾选")]),t._v(" "),_("li",[t._v("TLS证书验证：此项默认是勾选的，当出现证书一类的异常可以取消勾选此项尝试")]),t._v(" "),_("li",[t._v("自动管理Cookie：请求时自动设置Cookie（自己手动设置的与之前请求的Cookie都会设置进去）")]),t._v(" "),_("li",[t._v("自动去重：勾选时会对url进行去重处理,如果重复则跳过。")]),t._v(" "),_("li",[t._v("重试次数：当请求发生异常或状态码不为200时会进行重试")]),t._v(" "),_("li",[t._v("重试间隔：重试期间的间隔时间(单位为毫秒)")]),t._v(" "),_("li",[t._v("参数：用来设置GET、POST等方法的参数设置\n"),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("参数名")]),t._v("：参数key值")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("参数值")]),t._v("：参数value值")],1),t._v(" "),_("li",[t._v("参数描述：仅仅用来描述该项参数（相当于备注/注释）无实际意义")])])]),t._v(" "),_("li",[t._v("Cookie：用来设置请求Cookie\n"),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("Cookie名")]),t._v("：Cookie key值")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("Cookie值")]),t._v("：Cookie value值")],1),t._v(" "),_("li",[t._v("描述：仅仅用来描述该项Cookie（相当于备注/注释）无实际意义")])])]),t._v(" "),_("li",[t._v("Header：用来设置请求头\n"),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("Header名")]),t._v("：Header key值")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("Header值")]),t._v("：Header value值")],1),t._v(" "),_("li",[t._v("描述：仅仅用来描述该项Header（相当于备注/注释）无实际意义")])])]),t._v(" "),_("li",[t._v("Body：请求类型（默认是none）")]),t._v(" "),_("li",[t._v("form-data（Body项设置为form-data）\n"),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("参数名")]),t._v("：请求"),_("font",{attrs:{color:"blue"}},[t._v("参数名")])],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("参数值")]),t._v("：请求"),_("font",{attrs:{color:"blue"}},[t._v("参数值")])],1),t._v(" "),_("li",[t._v("参数类型：text/file")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("文件名")]),t._v("：上传二进制数据时需要填的文件名")],1)])]),t._v(" "),_("li",[t._v("raw（Body项设置为raw）\n"),_("ul",[_("li",[t._v("Content-Type：text/plain,application/json")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("内容")]),t._v("：请求体内容（String类型）")],1)])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("此图形会返回一个HttpResponse对象，以"),_("code",[t._v("resp")]),t._v("存入变量中")])]),t._v(" "),_("h3",{attrs:{id:"定义变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[t._v("#")]),t._v(" 定义变量 "),_("img",{attrs:{src:"/images/course/shape-var.png",alt:"定义变量",title:"shape-var.png"}})]),t._v(" "),_("p",[t._v("该节点用于定义变量之后，可以与表达式配套使用，实现动态设置各项参数(如动态请求分页地址)")]),t._v(" "),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("变量名")]),t._v("：变量的名字，当变量名重复时，会覆盖前一个变量")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("变量值")]),t._v("：变量的值，可以是常量，可以是表达式")],1)]),t._v(" "),_("h3",{attrs:{id:"输出节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输出节点"}},[t._v("#")]),t._v(" 输出节点 "),_("img",{attrs:{src:"/images/course/shape-output.png",alt:"输出节点",title:"shape-output.png"}})]),t._v(" "),_("p",[t._v("该节点主要用于调试,测试时会把输出打印到页面中，另外也可以用来自动保存到数据库或文件")]),t._v(" "),_("ul",[_("li",[t._v("输出到数据库：勾选时需要填写数据源、表名称，且"),_("code",[t._v('<font color="blue">输出项</font>')]),t._v("要与列名对应")]),t._v(" "),_("li",[t._v("输出到CSV文件：勾选时需要填写CSV"),_("font",{attrs:{color:"blue"}},[t._v("文件路径")]),t._v("，"),_("code",[t._v('<font color="blue">输出项</font>')]),t._v("会作为表头")],1),t._v(" "),_("li",[t._v("输出全部参数：一般用来调试，可以输出所有变量到界面上")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("输出项")]),t._v("：输出项的名字")],1),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("输出值")]),t._v("：输出的值，可以是常量，可以是表达式")],1)]),t._v(" "),_("h3",{attrs:{id:"循环节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#循环节点"}},[t._v("#")]),t._v(" 循环节点 "),_("img",{attrs:{src:"/images/course/shape-loop.png",alt:"循环节点",title:"shape-loop.png"}})]),t._v(" "),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("次数或集合")]),t._v("：当此项有值(值为集合或数字)时，后续节点（包括本节点）会循环执行")],1),t._v(" "),_("li",[t._v("循环变量：默认为"),_("code",[t._v("item")]),t._v(",与"),_("code",[t._v("for(Object item : collections)")]),t._v(" 中的"),_("code",[t._v("item")]),t._v("意义相同")]),t._v(" "),_("li",[t._v("循环下标：当循环时，会产生下标（从0开始）以该值存入变量中，与"),_("code",[t._v("for(int i =0; i < array.length;i++)")]),t._v("中的"),_("code",[t._v("i")]),t._v("意义相同")]),t._v(" "),_("li",[t._v("开始位置：从该位置开始循环(从0开始)")]),t._v(" "),_("li",[t._v("结束位置：到该位置结束(-1为最后一项,-2为倒数第二项,以此类推)")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("使用循环时需注意当有多个循环时会形成嵌套循环，必要时应与"),_("code",[t._v("等待结束")]),t._v("节点配套使用")])]),t._v(" "),_("h3",{attrs:{id:"等待结束"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#等待结束"}},[t._v("#")]),t._v(" 等待结束 "),_("img",{attrs:{src:"/images/course/shape-forkjoin.png",alt:"等待结束",title:"shape-forkjoin.png"}})]),t._v(" "),_("p",[t._v("该节点会等待到该节点之前所有节点执行完毕时才会执行下一级节点。")]),t._v(" "),_("h3",{attrs:{id:"执行sql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行sql"}},[t._v("#")]),t._v(" 执行SQL "),_("img",{attrs:{src:"/images/course/shape-sql.png",alt:"执行SQL",title:"shape-sql.png"}})]),t._v(" "),_("p",[t._v("主要用于与数据库交互（查询/修改/插入/删除等等）")]),t._v(" "),_("ul",[_("li",[t._v("数据源：需要选择配置好的数据源")]),t._v(" "),_("li",[t._v("语句类型：select/selectInt/selectOne/insert/insertofPk/update/delete")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("SQL")]),t._v("： 要执行SQL语句，需要动态注入的参数用"),_("code",[t._v("##")]),t._v("包裹起来如："),_("code",[t._v("#${item[index].id}#")])],1)]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("该节点执行完毕时会产生"),_("code",[t._v("rs")]),t._v("变量，selectInt/insert/update/delete会返回"),_("code",[t._v("int")]),t._v("类型,select会返回"),_("code",[t._v("List<Map<String,Object>>")]),t._v(",selectOne返回"),_("code",[t._v("Map<String,Object>")]),t._v(",insertofPk返回主键值")])]),t._v(" "),_("h3",{attrs:{id:"注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释 "),_("img",{attrs:{src:"/images/course/shape-comment.png",alt:"注释",title:"shape-comment.png"}})]),t._v(" "),_("p",[t._v("仅仅是注释,毫无其它作用")]),t._v(" "),_("h3",{attrs:{id:"子流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#子流程"}},[t._v("#")]),t._v(" 子流程 "),_("img",{attrs:{src:"/images/course/shape-process.png",alt:"子流程",title:"shape-process.png"}})]),t._v(" "),_("p",[t._v("主要用于调用其他流程")]),t._v(" "),_("ul",[_("li",[t._v("子流程：选择要调用的流程即可")])]),t._v(" "),_("h3",{attrs:{id:"执行函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行函数"}},[t._v("#")]),t._v(" 执行函数 "),_("img",{attrs:{src:"/images/course/shape-function.png",alt:"执行函数",title:"shape-function.png"}})]),t._v(" "),_("p",[t._v("主要用于调用一些关联性不大，无需返回值的函数，如下载文件，保存文件等")]),t._v(" "),_("ul",[_("li",[_("font",{attrs:{color:"blue"}},[t._v("执行函数")]),t._v("：要执行函数的表达式")],1)]),t._v(" "),_("h3",{attrs:{id:"连接线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接线"}},[t._v("#")]),t._v(" 连接线 "),_("img",{attrs:{src:"/images/course/shape-arrow.png",alt:"连接线",title:"shape-arrow.png"}})]),t._v(" "),_("p",[t._v("用来流转至下一个节点")]),t._v(" "),_("ul",[_("li",[t._v("线粗细：用来调整线的粗细")]),t._v(" "),_("li",[t._v("线样式：用来调整线的样式")]),t._v(" "),_("li",[t._v("线颜色：用来调整线的颜色")]),t._v(" "),_("li",[t._v("流转特性：目前可勾选的是传递变量（默认勾选）")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("流转条件")]),t._v("：当表达式返回"),_("code",[t._v("true")]),t._v("时将流向下一个节点，否则不流转,不填时默认流转")],1)]),t._v(" "),_("h3",{attrs:{id:"通用参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用参数"}},[t._v("#")]),t._v(" 通用参数")]),t._v(" "),_("ul",[_("li",[t._v("节点名称：用来显示节点名称，可以用来区分各个节点用途")]),t._v(" "),_("li",[_("font",{attrs:{color:"blue"}},[t._v("循环次数")]),t._v("：当此项有值时，后续节点（包括本节点）会循环执行")],1),t._v(" "),_("li",[t._v("循环变量：当循环时，会产生下标（从0开始）以该值存入变量中，与"),_("code",[t._v("for(int i =0; i < array.length;i++)")]),t._v("中的i意义相同")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("所有蓝色字体均支持表达式"),_("code",[t._v("${}")]),t._v("语法")])]),t._v(" "),_("h2",{attrs:{id:"变量的作用域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#变量的作用域"}},[t._v("#")]),t._v(" 变量的作用域")]),t._v(" "),_("p",[t._v("变量（包括循环变量）一经定义就会"),_("strong",[t._v("向下一直传递")]),t._v("（包括本节点）直至整个流程结束，当中间出现重复定义时，会"),_("strong",[t._v("覆盖")]),t._v("原来的变量值")]),t._v(" "),_("h2",{attrs:{id:"流程的执行过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程的执行过程"}},[t._v("#")]),t._v(" 流程的执行过程")]),t._v(" "),_("p",[t._v("简单一句话概括就是"),_("strong",[t._v("流程会按照箭头的方向一直流转下去")]),t._v("，"),_("strong",[t._v("个别节点会打断流转（箭头）或重复流转（循环）")]),t._v("。\n下面举几个例子来说明一下。")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"流程实例一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程实例一"}},[t._v("#")]),t._v(" 流程实例一")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/course/process-1.png",alt:"流程实例一",title:"process-1.png"}})]),t._v(" "),_("p",[t._v("很容易就能看出流程执行过程是：A->B->C->D，但由于A节点是循环，假设A节点循环次数是3，那么此时执行过程会变成A,A,A->B,B,B->C,C,C->D,D,D（"),_("strong",[t._v("3个A一起执行,但是顺序不固定，每执行完一个就会直接流向下一个节点，而不是等3个A都结束")]),t._v("），当D,D,D都执行完毕时，由于没有流向下一个节点，此时整个流程结束。")]),t._v(" "),_("p",[t._v("由于B,C,D节点中也可以设置循环，假设C节点也设置了循环，其循环次数是2次，那么此时整个流程的执行过程是A,A,A->B,B,B->C,C,C,C,C,C->D,D,D,D,D,D(即形成了"),_("strong",[t._v("嵌套循环")]),t._v(")")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"流程实例二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程实例二"}},[t._v("#")]),t._v(" 流程实例二")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/course/process-2.png",alt:"流程实例二",title:"process-2.png"}})]),t._v(" "),_("ul",[_("li",[t._v("先说运行顺序：A->B->(C->F),(D->E)->G->H\n"),_("ul",[_("li",[t._v("先执行A节点")]),t._v(" "),_("li",[t._v("A节点执行完毕时，执行B节点")]),t._v(" "),_("li",[t._v("B节点执行完毕时，同时执行C、D节点")]),t._v(" "),_("li",[t._v("C节点执行完毕时，执行F节点")]),t._v(" "),_("li",[t._v("D节点执行完毕时，执行E节点")]),t._v(" "),_("li",[t._v("E、F节点都执行完毕时，执行G节点（G节点是等待结束节点，所以这里会等E、F都结束，否则无论E、F哪个节点执行完毕，都会执行G节点）")]),t._v(" "),_("li",[t._v("G节点执行完毕时，执行H节点")]),t._v(" "),_("li",[t._v("H节点执行完毕时，流程结束")])])])]),t._v(" "),_("p",[t._v("由于C节点是循环节点，假设C节点循环次数是3次，则上方从C节点开始则变成C,C,C->F,F,F->G->H")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"流程实例三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程实例三"}},[t._v("#")]),t._v(" 流程实例三")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/course/process-3.png",alt:"流程实例三",title:"process-3.png"}})]),t._v(" "),_("ul",[_("li",[t._v("运行顺序：A->B->A,C->B->C\n"),_("ul",[_("li",[t._v("先执行A节点")]),t._v(" "),_("li",[t._v("A节点执行时，执行B节点")]),t._v(" "),_("li",[t._v("B节点执行完毕时，执行A、C节点")]),t._v(" "),_("li",[t._v("共计执行2次A，2次B，2次C。")])])])]),t._v(" "),_("p",[t._v("这里会形成"),_("strong",[t._v("递归")]),t._v("，即A<->B，但是形成这种情况时，往往都需要"),_("strong",[t._v("加条件进行限制")]),t._v("，即上图中的"),_("code",[t._v("页数 < 3")])])])}),[],!1,null,null,null);v.default=a.exports}}]);