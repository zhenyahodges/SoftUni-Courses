change = float(input())
coins = 0

while change > 0:
    if change >= 2:
        coins += 1
        change -= 2
    elif change >= 1:
        coins += 1
        change -= 1
    elif change >= 0.50:
        coins += 1
        change -= 0.50
    elif change >= 0.20:
        coins += 1
        change -= 0.20
    elif change >= 0.10:
        coins += 1
        change -= 0.10
    elif change >= 0.05:
        coins += 1
        change -= 0.05
    elif change >= 0.02:
        coins += 1
        change -= 0.02
    elif change >= 0.01:
        coins += 1
        change -= 0.01

    change = round(change, 2)

print(coins)
