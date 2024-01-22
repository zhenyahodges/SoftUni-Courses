show = str(input())
rows = int(input())
cols = int(input())
price = 0

if show == 'Premiere':
    price = 12
elif show == 'Normal':
    price = 7.50
elif show=='Discount':
    price = 5.00

total = price * rows * cols

print(f'{total:.2f} leva')
