# java.util.List

## length
::: tip 
返回值类型：int
:::

- 获取List的长度
```javascript
${listVar.length()}
```
## join
| 参数名 |       描述       | 可否为空 |
| :----: | :--------------: | :------: |
| separator |  分割字符  | 是 |
::: tip 
返回值类型：String
:::

- 将List用separator拼接在一起
```javascript
${listVar.join(',')}
```

## shuffle
::: tip 
返回值类型：List
:::

- 将list打乱顺序
```javascript
${listVar.shuffle()}
```

## sort
::: tip 
返回值类型：List
:::

- 将list排序(正序)
```javascript
${listVar.sort()}
```