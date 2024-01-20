hour = int(input())
minutes = int(input())

total = hour * 60 + minutes + 15

hours = total // 60
if hours > 23:
    hours = 0

minutes = total % 60

print(f'{hours}:{minutes:02d}')
