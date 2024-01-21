budget = float(input())
extras = int(input())
clothing_cost_per_xtra = float(input())

decor = budget * 0.1

if extras > 150:
    clothing_cost_per_xtra = clothing_cost_per_xtra * 0.90

total = extras * clothing_cost_per_xtra + decor
diff = budget - total

if total > budget:
    print("Not enough money!")
    print(f'Wingard needs {total - budget:.2f} leva more.')
    print(f'Wingard needs {abs(diff):.2f} leva more.')
elif total <= budget:
    print("Action!")
    print(f"Wingard starts filming with {budget - total:.2f} leva left.")
