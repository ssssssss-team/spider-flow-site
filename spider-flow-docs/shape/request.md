# 抓取页面

- 循环变量：用来定义循环变量，主要目的是抓取多个同类URL,如：projectIndex

- 循环次数：定义循环次数，可使用${}从变量中获取值（FreeMarker语法），如：10

- 起始URL：抓取地址，可使用${}从变量中获取值（FreeMarker语法）如：`https://gitee.com/${projectUrls[projectIndex]}`

- 请求方法：GET、POST

- 请求参数：用来设置请求参数，可添加多个，参数值处可使用${}来获取值

- 请求header：用来设置请求header，可添加多个，header值处可使用${}来获取值

- 代理：host:port

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