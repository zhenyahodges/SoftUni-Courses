annual_tax = int(input())

sneakers = annual_tax * (1 - 0.40)
tracksuit = sneakers * (1 - 0.20)
ball = tracksuit / 4
accessories = ball / 5

cost = sneakers + tracksuit + ball + accessories+annual_tax

print(cost)
