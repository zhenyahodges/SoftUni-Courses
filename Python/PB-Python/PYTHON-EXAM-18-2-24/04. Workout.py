import math

n = int(input())
m = float(input())
total = m
day = 0

for day in range(n):
    day += 1
    increase = float(input())
    new = m + (m * (increase / 100))
    m = new
    total += new

diff = math.ceil(abs(total - 1000))

if total >= 1000:
    print(f"You've done a great job running {diff} more kilometers!")
else:
    print(f"Sorry Mrs. Ivanova, you need to run {diff} more kilometers")
