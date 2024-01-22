budget = int(input())
season = str(input())
fishermen = int(input())
price = 0

if season == 'Spring':
    if fishermen <= 6:
        price = 3000 * 0.90
    elif 6 < fishermen <= 11:
        price = 3000 * 0.85
    else:
        price = 3000 * 0.75
elif season == 'Summer' or season == 'Autumn':
    if fishermen <= 6:
        price = 4200 * 0.90
    elif 6 < fishermen <= 11:
        price = 4200 * 0.85
    else:
        price = 4200 * 0.75
elif season == 'Winter':
    if fishermen <= 6:
        price = 2600 * 0.90
    elif 6 < fishermen <= 11:
        price = 2600 * 0.85
    else:
        price = 2600 * 0.75

if (fishermen % 2 == 0) and (season != 'Autumn'):
    price *= 0.95

if budget >= price:
    print(f"Yes! You have {(budget - price):.2f} leva left.")
else:
    print(f"Not enough money! You need {(price - budget):.2f} leva.")
