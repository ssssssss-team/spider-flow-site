# 常见问题

## 定时任务不会运行

需要修改配置文件`spider-flow-web/src/main/resources/application.properties`中`spider.job.enable`修改为`true`

## 为什么出现检测到可能出现死循环,测试终止

此项仅仅是在测试时出现,以防止出现真的死循环而无法停止。其检测逻辑为当节点执行次数超过预期(`默认5000,如需修改请修改application.properties中的spider.detect.dead-cycle值`)则停止运行，

## 点击测试后测试窗口无输出,后台报错(空指针)

出现该情况的请检查流程是否有箭头未连接到节点上的情况

