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

$$
\frac{11}{17}=\frac{1}{2}+\frac{1}{7}+\frac{1}{238}
$$

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

$$
\frac{1}{y}=\frac{1}{x_1}+\frac{1}{x_2}+......+\frac{1}{x_n}≤\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+......+\frac{1}{n}≤1
$$
