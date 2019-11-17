# 执行SQL

- 数据源，选择之前定义好的数据源

- 语句类型，select/insert/update/delete

- SQL语句，如`INSERT INTO gitee_gvp(project_name, project_link,project_desc) VALUES (#${projectNames[projectIndex]}#,#${projectUrls[projectIndex]}#,#${projectDesc}#)`

  ::: tip

  select语句会返回List\<Map\<String,Object>> 类型数据,selectInt/insert/update/delete会返回int类型，selectOne会返回Map\<String,Object>类型，以`rs`存入变量中

  :::