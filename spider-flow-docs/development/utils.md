# 工具类

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