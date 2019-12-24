# ocr

## 引入ocr插件
1. 首先到码云下载插件[点击下载](https://gitee.com/jmxd/spider-flow-ocr)到本地并导入到工作空间或安装到maven库
2. 在spider-flow/spider-flow-web/pom.xml中引入插件

#### 使用方法
在 spider-flow-web pom.xml引用  

```
<dependency>
 	<groupId>org.spiderflow</groupId>
 	<artifactId>spider-flow-ocr</artifactId>
 	<version>${spider-flow.version}</version>
</dependency>
```


#### 使用操作
 **例子在example文件夹**   

先配置一下信息  
![输入图片说明](https://images.gitee.com/uploads/images/2019/1216/095925_6eef6ca0_1253940.png "settings.png")

识别效果  
![输入图片说明](https://images.gitee.com/uploads/images/2019/1216/095944_31269262_1253940.png "ocr_test.png")
