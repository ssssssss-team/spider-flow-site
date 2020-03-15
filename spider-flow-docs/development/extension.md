# 类型扩展(类型增强)


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