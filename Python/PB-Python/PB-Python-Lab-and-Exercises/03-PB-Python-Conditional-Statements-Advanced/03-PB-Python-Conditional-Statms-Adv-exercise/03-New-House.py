flower = str(input())
quantity = int(input())
budget = int(input())
price = 0

if flower == 'Roses':
    if quantity <= 80:
        price = 5
    else:
        price = 5 * 0.90
elif flower == 'Dahlias':
    if quantity <= 90:
        price = 3.80
    else:
        price = 3.80 * 0.85
elif flower == 'Tulips':
    if quantity <= 80:
        price = 2.80
    else:
        price = 2.80 * 0.85
elif flower == 'Narcissus':
    if quantity < 120:
        price = 3.00 * 1.15
    else:
        price = 3.00
elif flower == 'Gladiolus':
    if quantity < 80:
        price = 2.50 * 1.20
    else:
        price = 2.50

total = quantity * price

if budget >= total:
    print(f"Hey, you have a great garden with {quantity} {flower} and {(budget - total):.2f} leva left.")
else:
    print(f"Not enough money, you need {(total - budget):.2f} leva more.")
