##### 题目1

编程实现，让用户输入一个整数n，打印输出n以内的全部大于0的偶数（不包含n）

```python
n = int(input("Enter a number: ")) # 输入格式
```

方法1：for循环

```python
def method1(_n: int):
    for i in range(_n):  # 不包含n 左闭右开
        if i % 2 == 0:
            print(i(_n))
```

方法2：用filter筛选出`range(0,n)`的列表中符合

```python
def method2(_n: int):
    print(list(filter(lambda x: x % 2 == 0, range(_n))))
```

方法3：用while循环

```python
def method3(_n: int):
    i = 0
    while i < _n:
        if i % 2 == 0:
            print(i)
        i += 1
```

方法4：用range的步长

```python
def method4(_n: int):
    print(list(range(0, _n, 2)))
```

##### 题目2

编程实现，让用户输入若干个整数，要求打印输出最大的和最小的数字。

方法1：`max()`与`min()`函数

```python
# 输入格式[num1] [num2] [num3]
print_max_min1(input("请输入若干个数字：").split(" "))
```

```python
def print_max_min1(_iterable):
    print(f"在当前序列中，最大值为{max(_iterable)} 最小值为{min(_iterable)}")
```

方法2：while循环比较大小

```python
num_max = num_min = int(input("请输入添加数字："))
while True:
    num = int(input("请输入添加数字："))
    if num > num_max:
        num_max = num
    if num < num_min:
        num_min = num
    print(f"最大值为{num_max} 最小值为{num_min}")
```

##### 题目3：

有四个数字：1、2、3、4，能组成多少个互不相同且`无重复数字`的三位数？各是多少？

方法1：for循环

```python
for i in range(1, 5):
    for j in range(1, 5):
        for k in range(1, 5):
            if i != k and j != k and i != j and k != j:
                print(i, j, k)
```

方法2：列表生成式/推导式

```python
print([f"{x} {y} {z}" for x in range(1, 5) for y in range(1, 5) for z in range(1, 5) if (x != y) and (x != z) and (y != z)])
```

##### 题目4（百鸡百钱问题）：

我国古代数学家张丘建在《算经》一书中曾提出过著名的“百钱买百鸡”问题

翻译过来即：公鸡一个五块钱，母鸡一个三块钱，小鸡三个一块钱

现在要用一百块钱买一百只鸡，问公鸡、母鸡、小鸡各多少只？

方法1：for遍历法

```python
for i in range(20):
    for j in range(34):
        for k in range(34):
            if i + j + k * 3 == 100 and i * 5 + j * 3 + k == 100:
                print(f"公鸡:{i} 母鸡:{j} 小鸡{k * 3}")
```

##### 题目5（三天打鱼两天晒网）：

中国有句俗语叫“三天打鱼两天晒网”。某人从1990年1月1日起开始“三天打鱼两天晒网”，问这个人在以后的以后的某一天中是打鱼还是晒网。（以2024年8月1日为例）

闰年定义：一个年份如果能被4整除但不能被100整除，或者能被400整除

```python
def is_leap_year(year: int):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
```

```python
CONSTANT_START = 1990
CONSTANT_MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def calculate(year: int, month: int, day: int):
    num = 0
    for i in range(CONSTANT_START, year):
        if is_leap_year(i):
            num += 1
    days = 0
    if is_leap_year(year) and month >= 2:
        days += 1
    for i in range(0, month):
        days += CONSTANT_MONTH_DAYS[i]
    total_days = num * 366 + (year - CONSTANT_START - num) * 365 + days + day
    print(total_days)
    match total_days % 5:
        case 0 | 1 | 2:
            print("打鱼")
        case 3 | 4:
            print("晒网")
```

```python
date = list(map(int, input().split(" ")))
if len(date) == 3 and date[0] >= CONSTANT_START and 1 <= date[1] <= 12:  # 防止年份与月份导致的崩溃
    calculate(int(date[0]), int(date[1]), int(date[2]))
else:
    print("日期输入格式错误，请重新输入！")
```

##### 题目6 （肇事卡车）

一辆卡车发生交通事故后逃跑，现场有三个目击者，但都没有记住车牌号，只记下车号的一些特征

甲说：卡车牌照的前两位数字相同

乙说：开车牌照的后两位数字是相同的，但与前两位不同

丙说：四位车号刚好是一个整数的平方。请根据以上线索求出肇事卡车车号

方法一：

```python
for i in range(0, 10):
    for j in range(0, 10):
        num = i * 1000 + i * 100 + j * 10 + j  # 取车牌号数字
        for k in range(1, 100):  # 找出一个符合的整数
            if k * k == num and i != j:
                print(f"车牌号为：{num}")
```

方法2：

```python
for i in range(10, 100):
    for j in range(10, 100):
        if i % 10 == i // 10 and j % 10 == j // 10 and i != j and int((i * 100 + j) ** (1 / 2)) == (i * 100 + j) ** (
                1 / 2):
            print(i * 100 + j)
```

##### 题目7（兔子产子）

有一对兔子，从出生后的第3个月起每个月都生一对兔子。小兔子长到第三个月后每个月又生一对兔子，假设所有的兔子都不死，问30个月内每个月的兔子总数为多少？

方法1：for循环生成斐波那契数列

```python
a, b = 0, 1
for i in range(1, 31):
    a, b = b, a + b
    print(f"第{i}个月： 共有 {a} 只兔兔")
```

方法2：for循环列表生成斐波那契数列：

```python
list1 = [1, 1]
for i in range(2, 30):
    a = list1[i-1] + list1[i-2]
    list1.append(a)
print(list1)
```

**其实方法一与方法二没有区别只是生成斐波那契数列的方式不同**

方法3：动态规划（难度大）

```python
def calculate_rabbit(n):
    if n <= 2:
        return 1
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 1

    for _i in range(3, n + 1):
        dp[_i] = dp[_i - 1] + dp[_i - 2]

    return dp[n]


for i in range(1, 31):
    print(f"第{i}个月： 共有 {calculate_rabbit(i)} 只兔兔")
```

##### 题目8（求特定方程根）

用求方程$2x^3−4x^2+3x−6=0$在1附近的一个实数根。

方法1：牛顿迭代法

```python
def root_Newton(a, b, c, d, times):
    x0 = 1.5
    for i in range(times):
        x0 = x0 - (a * x0 ** 3 + b * x0 ** 2 + c * x0 + d) / (3 * a * x0 ** 2 + 2 * b * x0 + c)
        print(f"第{i + 1}次迭代，方程根为{x0}")


root_Newton(2, -4, 3, -6, 10)
```

方法2：二分法

```python
def f(x):
    return 2 * x ** 3 - 4 * x ** 2 + 3 * x - 6


left = f(1)
right = f(3)
while abs(left - right) > 1e-5:
    root = (right + left) / 2
    if f(left) * f(root) < 0:
        right = root
    elif f(root) == 0:
        left = root
        break
    else:
        left = root
print(f"x={left}")
```

**注意：二分法经测试在题设条件下只能实现无限逼近x=2的根，而牛顿迭代法可以求出特定解**

##### 题目9（最佳存款方案）

银行一年整存零取的月息为0.63%。某人手中有一笔钱，她打算在今后的5年中每年年底取出1000元，到第5年时刚好取完，请算出她存钱的时应该存入多少？

```python
m = 0
for i in range(5):
    m = (1000 + m) / (1 + 12 * 0.0063)
print(m)
```

从第五年往回计算，第五年为1000

##### 题目10（数据排序）

方式一：冒泡排序

![冒泡排序](img\冒泡排序.gif)

```python
def buble_sort(items: list):
    length = range(len(items))
    for i in length:
        for j in length:
            if items[i] < items[j]:
                items[i], items[j] = items[j], items[i]
    return items
```

方式2：选择排序

![](img\选择排序.gif)

```python
def choose_sort(items: list):
    for i in range(len(items)):
        min_idx = i
        for j in range(i + 1, len(items)):
            if items[min_idx] > items[j]:
                min_idx = j
        items[i], items[min_idx] = items[min_idx], items[i]
    return items
```

方式3：插入排序

![](img\插入排序.gif)

```python
def insert_sort(items: list):  
    for i in range(len(items)):  
        sort_item = items[i]  
        j = i - 1  
        while j >= 0 and sort_item < items[j]:  
            items[j + 1] = items[j]  
            j = j - 1  
        items[j + 1] = sort_item  
    return items
```

方式4：快速排序

![](img\快速排序.gif)

```python
def quick_sort(items: list):
    if len(items) <= 1:
        return items
    else:
        pivot = items[0]  # 基准值
        less = [x for x in items[1:] if x <= pivot]  # 比基准值小
        greater = [x for x in items[1:] if x > pivot]  # 比基准值大
        return quick_sort(less) + [pivot] + quick_sort(greater)
```
##### 题目11（完数）

求某一范围内完数的个数。如果一个数等于它的因子之和，则称该数为“完数”（或“完全数”)。

例如，6的因子为1、2、3，而 6=1+2+3，因此6是“完数”。

`输入格式：6 `     `输出格式：6=1+2+3`

```python
def is_perfect_number(num):
    total = 0
    num_list = []
    for i in range(1, num):
        if num % i == 0:
            total = total + i
            num_list.append(i)
    return total == num, num_list
```

```python
def calculate(number):
    for i in range(1, number + 1):
        is_perfect, num_list = is_perfect_number(i)
        if is_perfect:
            print(f"{i}={"+".join(map(str, num_list)
```

```python
num = int(input("请输入要取完数的范围："))
calculate(num)
```

##### 题目12（亲密数）

如果整数A的全部因子（包括1，不包括A本身）之和等于B；

且整数B的全部因子（包括1，不包括B本身）之和等于A，则将整数A和B称为亲密数。

`输入格式：3000`    `输出格式：220 284`

因数计算

```python
def sum_of_divisors(n):
    """计算一个数的所有因子（不包括自身）之和"""
    sum_div = 1  # 这行代码初始化变量 sum_div 为 1。因为 1 是任何数的因子，所以在计算因子之和时，我们从 1 开始。
    i = 2  # 这行代码初始化循环变量 i 为 2。从 2 开始是因为我们已经将 1 加入到 sum_div 中，而且任何数都不会有小于 2 的因子。
    while i * i <= n:  # 这是一个 while 循环，条件是 i 的平方小于等于 n。这个条件确保了我们只需要检查到 n 的平方根，
        # 因为更大的因子会与已经检查过的因子配对。
        if n % i == 0:  # 如果 n 除以 i 的余数为 0，说明 i 是 n 的一个因子。
            sum_div += i
            if i != n // i:  # 检查 i 是否不等于 n 除以 i 的商。如果不相等，说明 i 和 n // i 是一对不同的因子。
                sum_div += n // i  # 如果 i 和 n // i 是一对不同的因子，将 n // i 也加到 sum_div 上。
        i += 1  # 每次循环结束时，将 i 的值增加 1，继续检查下一个可能的因子。
    return sum_div
```

```python
def find_amicable_numbers(limit):
    """找出给定限制内的所有亲密数对"""
    amicable_pairs = []
    for a in range(2, limit):
        b = sum_of_divisors(a)
        if b != a and sum_of_divisors(b) == a:
            amicable_pairs.append((a, b))
    return amicable_pairs
```

打印结果

```python
for pair in amicable_numbers:
    print(pair)
```

##### 题目13（埃及分数）

所谓埃及分数，是指分子为1 的分数。任何一个分数都可以表示为埃及分数之和的形式。

如2/3=1/2+1/6，但不允许2/3=1/3+1/3，因为加数中有相同的。

然而，一个分数的表示方式是不唯一的，加数少的比加数多的好，加数个数相同的，最小的分数越大越好。

如果最小的相同，则比较次小的。

依次类推。编程求任意分数的埃及分数分解。

$$\frac{11}{17}=\frac{1}{2}+\frac{1}{7}+\frac{1}{238}$$

```python
def egypt(a,b):
    """a/b=1/(q+1）+(a-r)/b(q+1）"""
    assert a<b
    while b%a != 0:
        q, r = b//a, b%a
        a -= r
        b *= (q+1)
        yield q+1
    yield int(b/a)
```

$$\frac{1}{y}=\frac{1}{x_1}+\frac{1}{x_2}+......+\frac{1}{x_n}$$
