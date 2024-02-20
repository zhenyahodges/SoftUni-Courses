weight = float(input())
type = str(input())
distance = int(input())
price_per_km = 0

if type == 'standard':
    if weight < 1:
        price_per_km = 0.03
    elif 1 <= weight < 10:
        price_per_km = 0.05
    elif 10 <= weight < 40:
        price_per_km = 0.10
    elif 40 <= weight < 90:
        price_per_km = 0.15
    elif 90 <= weight < 150:
        price_per_km = 0.20

elif type == "express":
    if weight < 1:
        price_per_km = 0.03 + (weight * (0.03 * 0.80))
    elif 1 <= weight < 10:
        price_per_km = 0.05 + (weight * (0.05 * 0.40))
    elif 10 <= weight < 40:
        price_per_km = 0.10 + (weight * (0.10 * 0.05))
    elif 40 <= weight < 90:
        price_per_km = 0.15 + (weight * (0.15 * 0.02))
    elif 90 <= weight < 150:
        price_per_km = 0.20 + (weight * (0.20 * 0.01))

total = price_per_km * distance

print(f"The delivery of your shipment with weight of {weight:.3f} kg. would cost {total:.2f} lv.")
