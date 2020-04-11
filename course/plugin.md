# 插件开发

## 开发步骤

1. 新建一个maven项目
```xml
<parent>
    <groupId>org.spiderflow</groupId>
    <artifactId>spider-flow</artifactId>
    <version>最新版本号</version>
</parent>
```

2. 引入spider-flow-api
```xml
<dependency>
    <groupId>org.spiderflow</groupId>
    <artifactId>spider-flow-api</artifactId>
    <scope>provided</scope>
</dependency>
```
3. 开始编写代码开发插件

4. 在spider-flow-web中引入刚写的插件

5. 功能测试


## 节点(图形)扩展

1. 编写Java类，实现ShapeExecutor

```java
@Component
public class RedisExecutor implements ShapeExecutor{
	
	@Override
	public String supportShape() {
		return "redis";
	}
	
	@Override
	public Shape shape() {
		Shape shape = new Shape();
		//web界面上显示的图标
		shape.setImage("data:image/png;base64,iVBORw0KG.......");
		//拖放至容器里时默认的节点名称
		shape.setLabel("Redis");
		//模板文件名
		shape.setName("redis");
		//鼠标移动至图标上显示的名称
		shape.setTitle("Redis");
		return shape;
	}

	@Override
	public void execute(SpiderNode node, SpiderContext context, Map<String, Object> variables) {
		//该图形具体实现的逻辑
	}

}
```

2. 编写Html模板，放至src/main/resources/static/resources/templates/中，模板语法遵循layui的laytpl语法

```html
<div class="layui-tab layui-tab-fixed layui-tab-brief">
  <ul class="layui-tab-title">
    <li class="layui-this">基本配置</li>
  </ul>
  <div class="layui-tab-content editor-form-node">
    <div class="layui-tab-item layui-show">
    	<form class="layui-form">
    		<div class="layui-form-item">
    			<label class="layui-form-label">节点名称</label>
    			<div class="layui-input-block">
    				<input type="text" name="value" placeholder="请输入节点名称" value="{{=d.value}}" autocomplete="off" class="layui-input">
    			</div>
    		</div>
    		<div class="layui-form-item">
    			<label class="layui-form-label">host</label>
    			<div class="layui-input-block">
    				<input type="text" name="host" placeholder="请输入redis host" autocomplete="off" class="layui-input input-default" value="{{=d.data.object.host}}">
    			</div>
    		</div>
    		<div class="layui-form-item">
    			<div class="layui-input-block">
    				<button class="layui-btn btn-redis-datasource-test" type="button">测试连接</button>
    			</div>
    		</div>
    	</form>
    </div>
  </div>
</div>
<script>
	//点击测试连接
	$('.layui-form').on('click','.btn-redis-datasource-test',function(){
		var $form = $('.layui-form');
		var host = $form.find('input[name=host]').val();
		
	});
</script>
```

3. 插件功能测试

## 工具类

1. 编写Java类，实现FunctionExecutor
```java
@Component
public class StringFunctionExecutor implements FunctionExecutor{
	
	@Override
	public String getFunctionPrefix() {
		return "string";	//方法前缀,调用本类的方法时均以${string.xxx()}方法调用
	}

	/**
	*	方法必须是public static 修饰,参数可有可无
	*	以截取字符串为例,该方法编写如下,最终调用时使用${string.substring('hello',3)}调用
	*/
	public static String substring(String content, int beginIndex) {
		return content != null ? content.substring(beginIndex) : null;
	}
}
```


2. 插件功能测试

## 类型扩展(类型增强)

1. 编写Java类，实现FunctionExtension
```java
@Component
public class StringFunctionExtension implements FunctionExtension{
	
	@Override
	public Class<?> support() {
		return String.class;	//扩展String类的方法
	}

	/**
	*	方法必须是public static 修饰,参数至少有一个,且第一个参数必须为support方法返回的类型
	*	以将字符串转为int为例,该方法编写如下,最终调用时使用${strVar.toInt()}调用
	*	该方法第一个参数会自动被传入,所以调用时无需传入
	*/
    @Comment("字符串转int")
	@Example("${strVar.toInt()}")
	public static Integer toInt(String str){
		return NumberUtils.toInt(str);
	}
	
	/**
	*	方法必须是public static 修饰,参数至少有一个,且第一个参数必须为support方法返回的类型
	*	以将字符串转为int为例,该方法编写如下,最终调用时使用${strVar.toInt(2)}调用
	*	该方法第一个参数会自动被传入,所以调用时无需传入
	*/
    @Comment("字符串转int")
	@Example("${strVar.toInt(0)}")
	public static Integer toInt(String str,Integer defaultValue){
		return NumberUtils.toInt(str,defaultValue);
	}
}
```

2. 插件功能测试