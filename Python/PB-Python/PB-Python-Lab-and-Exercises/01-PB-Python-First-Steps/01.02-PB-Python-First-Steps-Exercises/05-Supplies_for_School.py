number_pens = int(input())
number_markers = int(input())
litres_detergent = int(input())
discount = int(input())

cost = number_pens * 5.80 + number_markers * 7.20 + litres_detergent * 1.20
total_discounted_cost = cost * (1 - discount / 100)

print(total_discounted_cost)
