budget = float(input())
cards = int(input())
processor = int(input())
ram = int(input())
discount = 0

cards_cost = cards * 250
processor_price = cards_cost * 0.35
ram_price = cards_cost * 0.10

total = cards_cost + processor * processor_price + ram * ram_price

if cards > processor:
    total = total * 0.85

if budget >= total:
    print(f"You have {budget - total:.2f} leva left!")
else:
    print(f"Not enough money! You need {total - budget:.2f} leva more!")
