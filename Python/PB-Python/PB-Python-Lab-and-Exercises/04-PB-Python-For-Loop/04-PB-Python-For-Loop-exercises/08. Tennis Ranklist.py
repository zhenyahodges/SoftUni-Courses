import math

n = int(input())
points = int(input())
wins = 0
new_points=0

for _ in range(n):
    stage = str(input())

    if stage == 'W':
        new_points += 2000
        wins += 1
    elif stage == 'F':
         new_points += 1200
    elif stage == 'SF':
        new_points += 720

avrg = math.floor( new_points / n)
won=wins/n *100
new_points += points

print(f"Final points: {int(new_points)}")
print(f"Average points: {avrg}")
print(f"{won:.2f}%")