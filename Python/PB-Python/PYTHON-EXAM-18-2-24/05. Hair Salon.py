aim = int(input())
command = input()
total = 0
has_achieved = False

while command != 'closed':
    cat = command

    price = 0

    if cat == 'haircut':
        service = input()
        if service == 'mens':
            price = 15
        elif service == 'ladies':
            price = 20
        elif service == 'kids':
            price = 10

    elif cat == 'color':
        service = input()
        if service == 'touch up':
            price = 20
        elif service == 'full color':
            price = 30

    total += price

    if aim <= total:
        has_achieved = True
        break

    command = input()

if has_achieved:
    print(f"You have reached your target for the day!")
else:
    diff = abs(total - aim)
    print(f"Target not reached! You need {diff}lv. more.")

print(f"Earned money: {total}lv.")
