import sys

n = int(input())

sum_nums = 0
max_num = -sys.maxsize

for num in range(n):
    curr_num = int(input())

    if curr_num > max_num:
        max_num = curr_num

    sum_nums += curr_num

diff = abs(sum_nums - max_num)

if max_num == diff:
    print('Yes')
    print(f'Sum = {diff}')
else:
    sum_nums = sum_nums - max_num
    print('No')
    print(f'Diff = {abs(max_num - sum_nums)}')
