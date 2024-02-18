num1 = int(input())
num2 = int(input())

for n in range(num1, num2 + 1):
    init_num = str(n)
    even = 0
    odd = 0
    for i, digit in enumerate(init_num):
        if i % 2 == 0:
            odd += int(digit)
        else:
            even += int(digit)
    if even == odd:
        print(n, end=' ')
