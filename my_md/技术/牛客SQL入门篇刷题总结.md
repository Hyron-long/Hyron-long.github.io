# 牛客题霸——SQL入门篇知识点总结 

## 简单处理查询结果

1. **查询结果去重 **

```sql
select distinct university
from user_profile
```

**`DISTINCT` 关键字用于去除查询结果中的重复值。**

2. **查询结果限制返回行数**

```sql
select device_id
from user_profile
limit 2
```

**限制结果数量**：使用 `LIMIT` 子句来限制返回的行数为2

3. **将查询后的列重新命名**

```sql
select device_id as user_infos_example
from user_profile
limit 2
```

**重命名列**：使用 `AS` 关键字来重命名结果列

## 条件查询 

1. **查找后排序**

```sql
select device_id,age
from user_profile
order by age asc;
```

**`ORDER BY age ASC`: 按照 `age` 升序排列结果。'desc'为降序**

2. *查找后多列排序**

```sql
select device_id , gpa,age
from user_profile
order by gpa desc,age desc
```

**`ORDER BY gpa DESC, age DESC`: 先按照 `gpa` 降序排序，再按照 `age` 降序排序。**

