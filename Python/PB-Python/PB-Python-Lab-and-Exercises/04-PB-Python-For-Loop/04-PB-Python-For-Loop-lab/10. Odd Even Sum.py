n = int(input())
even = 0
odd = 0

for i in range(n):
    curr_num = int(input())

    if i % 2 == 0:
        even += curr_num
    else:
        odd += curr_num

if even == odd:

    print('Yes')
    print(f'Sum = {even}')
else:
    diff = abs(even - odd)

    print('No')
    print(f'Diff = {diff}')
