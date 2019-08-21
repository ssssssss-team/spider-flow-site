# 执行SQL

- 数据源，选择之前定义好的数据源

- 语句类型，select/insert/update/delete

- SQL语句，如`INSERT INTO gitee_gvp(project_name, project_link,project_desc) VALUES (#${projectNames[projectIndex]}#,#${projectUrls[projectIndex]}#,#${projectDesc}#)`

  ::: warning

  需要注意的是，SQL语句不支持${}语法，但是参数是支持的，另外参数需要用##包起来

  :::

  ::: tip

  select语句会返回List\<Map\<String,Object>> 类型数据,insert/update/delete会返回int类型，以`rs`存入变量中

  :::