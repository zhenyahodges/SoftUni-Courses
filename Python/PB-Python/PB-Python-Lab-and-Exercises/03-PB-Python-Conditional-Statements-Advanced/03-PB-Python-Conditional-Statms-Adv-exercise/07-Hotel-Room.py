month = str(input())
nights = int(input())
cost_studio = 0
cost_apart = 0

if month in ['May', 'October']:
    cost_studio = 50
    cost_apart = 65

    if 7 < nights <= 14:
        cost_studio *= 0.95
    elif 14 < nights:
        cost_studio *= 0.70

elif month in ['June', 'September']:
    cost_studio = 75.20
    cost_apart = 68.70

    if 14 < nights:
        cost_studio *= 0.80

elif month in ['July', 'August']:
    cost_studio = 76
    cost_apart = 77

if 14 < nights:
    cost_apart *= 0.90

total_studio = cost_studio * nights
total_apart = cost_apart * nights

print(f"Apartment: {total_apart:.2f} lv.")
print(f'Studio: {total_studio:.2f} lv.')
