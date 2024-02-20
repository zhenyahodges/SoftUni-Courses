party = float(input())
letters = int(input())
roses = int(input())
keyrings = int(input())
caritcat = int(input())
surprises = int(input())
discount = 0

num = letters + roses + keyrings + caritcat + surprises
total_item_prof = letters * 0.60 + roses * 7.20 + keyrings * 3.60 + caritcat * 18.20 + surprises * 22

if num >= 25:
    total_item_prof = total_item_prof * .65

total_item_prof = total_item_prof * 0.90

diff = abs(total_item_prof - party)

if party <= total_item_prof:

    print(f"Yes! {diff:.2f} lv left.")
else:
    print(f"Not enough money! {diff:.2f} lv needed.")
