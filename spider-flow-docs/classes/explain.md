# 说明

本功能主要应用于链式调用，以及减少编写表达式的一种方式。
本方法主要是对已有的对象进行扩展方法，如java.lang.String，本身并没有regx方法，通过扩展给java.lang.String增加regx方法，调用时使用${var.regx('pattern')}方式进行调用