price_holiday = float(input())

q_puzzles = int(input())
q_dolls = int(input())
q_bears = int(input())
q_minions = int(input())
q_trucks = int(input())

discount = 0
quantity = q_puzzles + q_dolls + q_bears + q_minions + q_trucks

if quantity >= 50:
    discount = 0.25

cost = q_puzzles * 2.60 + q_dolls * 3 + q_bears * 4.10 + q_minions * 8.20 + q_trucks * 2

discounted_cost = cost * (1 - discount)
net = discounted_cost * 0.90

if net >= price_holiday:
    print(f'Yes! {net - price_holiday:.2f} lv left.')
else:
    print(f'Not enough money! {price_holiday - net:.2f} lv needed.')
