# 抓取页面

- 循环变量：用来定义循环变量，主要目的是抓取多个同类URL,如：projectIndex

- 循环次数：定义循环次数，可使用${}从变量中获取值，如：10，${list.length(var)}

- 起始URL：抓取地址，可使用${}从变量中获取值如：`https://gitee.com/${projectUrls[projectIndex]}`

- 请求方法：GET、POST、PUT、DELETE等等

- 请求参数：用来设置请求参数，可添加多个，参数值处可使用${}来获取值

- 请求header：用来设置请求header，可添加多个，header值处可使用${}来获取值

- 编码格式：结果以给定的编码格式读取

- 跟随重定向：开启时，当页面返回30x重定向时跟随重定向

- TLS验证：是否验证证书

- 代理：host:port

- form-data

  - 参数名：请求参数名

  - 参数值：请求参数值

  - 参数类型：text/file

  - 文件名：上传二进制数据时需要填的文件名
  
- raw
  
  - Content-Type：text/plain,application/json
  - 内容，请求内容
  
  ::: tip 
  
  此图形会返回一个HttpResponse对象，以`resp`存入变量中
  
  :::
  
  | 字段名称   | 字段类型             | 字段描述       |
  | ---------- | -------------------- | -------------- |
  | html       | String               | 页面HTML       |
  | json       | JSONObject/JSONArray | 内容转json结果 |
  | bytes      | byte[]               | 二进制结果     |
  | cookies    | Map<String,String>   | cookies        |
  | headers    | Map<String,String>   | headers        |
  | statusCode | int                  | HTTP状态码     |
  | url        | String               | 当前页面的URL   |
  | stream     | InputStream          | 二进制流(可用于下载) |