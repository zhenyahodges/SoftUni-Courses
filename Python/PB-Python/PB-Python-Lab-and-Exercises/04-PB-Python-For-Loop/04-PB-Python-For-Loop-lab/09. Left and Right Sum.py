n = int(input())
left_sum = 0
right_sum = 0

for _ in range(1, n + 1):
    left_sum += int(input())

for _ in range(1, n + 1):
    right_sum += int(input())

if left_sum == right_sum:
    print(f'Yes, sum = {left_sum}')
else:
    diff = abs(left_sum - right_sum)
    print(f'No, diff = {diff}')

# left_sum = 0
# right_sum = 0
#
# n = int(input())
# for i in range(1, 2 * n + 1):
#     num = int(input())
#     if i <= n:
#         left_sum += num
#     else:
#         right_sum += num
#
# if left_sum == right_sum:
#     print(f"Yes, sum = {left_sum}")
# else:
#     diff = left_sum - right_sum
#     print(f"No, diff = {abs(diff)}")