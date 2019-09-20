# 图形扩展

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