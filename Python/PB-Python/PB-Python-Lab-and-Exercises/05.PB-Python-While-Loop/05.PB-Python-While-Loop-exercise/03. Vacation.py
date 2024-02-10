cost = float(input())
budget = float(input())

days = 0
count = 0
hasSaved = False

while budget < cost and count < 5:
    action = str(input())
    money = float(input())
    days += 1

    if action == 'spend':
        count += 1
        budget -= money

        if budget < 0:
            budget = 0
    elif action == 'save':
        budget += money
        count = 0

if budget >= cost:
    print(f'You saved the money for {days} days.')

if count == 5:
    print(f"You can\'t save the money.")
    print(f'{days}')
