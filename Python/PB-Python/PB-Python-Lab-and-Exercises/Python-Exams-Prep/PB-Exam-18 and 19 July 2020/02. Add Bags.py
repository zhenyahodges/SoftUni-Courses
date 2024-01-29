price_over_20kg = float(input())
kg_luggage = float(input())
days_to_travel = int(input())
n_luggages = int(input())

price = 0

if kg_luggage < 10:
    price = price_over_20kg * 0.20
elif 10 <= kg_luggage <= 20:
    price = price_over_20kg * 0.50
else:
    price = price_over_20kg

if days_to_travel < 7:
    price *= 1.40
elif 7 <= days_to_travel <= 30:
    price *= 1.15
else:
    price *= 1.10

cost = n_luggages * price

print(f"The total price of bags is: {cost:.2f} lv. ")
