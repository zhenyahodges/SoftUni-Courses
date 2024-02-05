amount = input()
total = 0

while amount != 'NoMoreMoney':
    amount = float(amount)

    if amount < 0:
        print("Invalid operation!")
        break

    total += amount
    print(f'Increase: {amount:.2f}')

    amount = input()

print(f"Total: {total:.2f}")
