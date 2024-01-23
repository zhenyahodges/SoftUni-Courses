days = int(input())
room = str(input())
mark = str(input())

nights = days - 1
price_per_night = 0
discount = 0

if room == 'room for one person':
    price_per_night = 18
elif room == 'apartment':
    price_per_night = 25
    if days < 10:
        discount = 0.70
    elif 10 <= days <= 15:
        discount = 0.65
    else:
        discount = 0.50
elif room == 'president apartment':
    price_per_night = 35
    if days < 10:
        discount = 0.90
    elif 10 <= days <= 15:
        discount = 0.85
    else:
        discount = 0.80

total = nights * price_per_night

if discount:
    total *= discount

if mark == 'positive':
    total *= 1.25
elif mark == 'negative':
    total *= 0.90

print(f'{total:.2f}')
