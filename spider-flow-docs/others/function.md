# 自定义函数

## 自定义函数介绍

## 定义自定义函数

需要修改配置文件`spider-flow-web/src/main/resources/application.properties`中`spider.job.enable`修改为`true`

## 使用自定义函数

此项仅仅是在测试时出现,以防止出现真的死循环而无法停止。其检测逻辑为当节点执行次数超过预期(`默认5000,如需修改请修改application.properties中的spider.detect.dead-cycle值`)则停止运行，
