pricePerKvM = 7.61
kvM = float(input())
cost = (kvM * pricePerKvM)
discount = cost * 0.18
finalPrice = cost - discount

print(f'The final price is: {finalPrice} lv.')
print(f'The discount is: {discount} lv.')
