import sys

n = int(input())

max_num = -sys.maxsize
min_num = sys.maxsize

for _ in range(n):
    curr_num = int(input())

    if curr_num < min_num:
        min_num = curr_num
    if curr_num > max_num:
        max_num = curr_num

print(f'Max number: {max_num}')
print(f'Min number: {min_num}')
