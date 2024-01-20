points = int(input())

bonus = 0
if points <= 100:
    bonus = 5
elif 100 < points <= 1000:
    bonus = 0.20 * points
elif points > 1000:
    bonus = 0.10 * points

if points % 2 == 0:
    bonus += 1
elif points % 10 == 5:
    bonus += 2

print(bonus)
print(bonus + points)
