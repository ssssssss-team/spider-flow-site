# 内置变量

## 爬取结果
当爬取节点执行后产生类型为`HttpResponse`的`resp`变量
  | 字段名称   | 字段类型             | 字段描述       |
  | ---------- | -------------------- | -------------- |
  | html       | String               | 页面HTML       |
  | json       | JSONObject/JSONArray | 内容转json结果 |
  | bytes      | byte[]               | 二进制结果     |
  | cookies    | Map<String,String>   | cookies        |
  | headers    | Map<String,String>   | headers        |
  | statusCode | int                  | HTTP状态码     |
  | url        | String               | 当前页面的URL   |
  | title        | String               | 当前页面的标题   |
  | stream     | InputStream          | 二进制流(可用于下载) |
## 异常信息
当节点发生异常时，会产生ex变量，需要注意的是，ex变量不会向下传递

## sql执行结果
执行sql后产生此变量`rs`
- 当是select语句时，类型为`List<Map<String,Object>>`
- 当是selectInt语句时，变量类型为`int`
- 当是selectOne语句时，变量类型为`Map<String,Object>`
- 当是insert/update/delete语句时，变量类型为`int` 