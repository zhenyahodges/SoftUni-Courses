q_chicken = int(input())
q_fish = int(input())
q_vegetarian = int(input())

bill = q_chicken * 10.35 + q_fish * 12.4 + q_vegetarian * 8.15
dessert_cost = bill * 0.20

total = bill + dessert_cost + 2.50

print(f'{total}')
