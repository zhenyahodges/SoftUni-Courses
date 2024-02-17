days = int(input())
hours = int(input())
cost = 0

total = 0

for day in range(1, days + 1):
    day_total = 0
    for hour in range(1, hours + 1):
        if day % 2 == 0:
            if hour % 2 != 0:
                cost = 2.50
            else:
                cost = 1
        else:
            if hour % 2 == 0:
                cost = 1.25
            else:
                cost = 1

        day_total += cost
    total += day_total

    print(f'Day: {day} - {day_total:.2f} leva')
print(f'Total: {total:.2f} leva')
