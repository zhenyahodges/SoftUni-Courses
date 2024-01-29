n = int(input())
size = str(input())
delivery = str(input())

price = 0
delivery_cost = 0

if n <= 10:
    print("Invalid order")

if size == "90X130":
    if n <= 30:
        price = 110
    elif 30 < n <= 60:
        price = 110 * 0.95
    else:
        price = 110 * 0.92
elif size == "100X150":
    if n <= 40:
        price = 140
    elif 40 < n <= 80:
        price = 140 * 0.94
    else:
        price = 140 * 0.90
elif size == "130X180":
    if n <= 20:
        price = 190
    elif 20 < n <= 50:
        price = 190 * 0.93
    else:
        price = 190 * 0.88
elif size == "200X300":
    if n <= 25:
        price = 250
    elif 25 < n <= 50:
        price = 250 * 0.91
    else:
        price = 250 * 0.86

if delivery == "With delivery":
    delivery_cost = 60

total = (price * n) + delivery_cost

if n > 99:
    total *= 0.96

if n > 10:
    print(f"{total:.2f} BGN")
