name = str(input())
number_adult_tickets = int(input())
number_child_tickets = int(input())
price_adult_tickets = float(input())
tax = float(input())

price_child_tickets = price_adult_tickets * 0.3 + tax
taxed_adult_price = price_adult_tickets + tax

cost = number_adult_tickets * taxed_adult_price + number_child_tickets * price_child_tickets

profit = cost * 0.20

print(f'The profit of your agency from {name} tickets is {profit:.2f} lv.')
