n = int(input())

points = 0
red_points = 0
or_points = 0
yell_points = 0
wh_points = 0
b_points = 0
others = 0

for _ in range(n):
    color = str(input())

    if color == 'red':
        points += 5
        red_points += 1
    elif color == 'orange':
        points += 10
        or_points += 1
    elif color == 'yellow':
        points += 15
        yell_points += 1
    elif color == 'white':
        points += 20
        wh_points += 1
    elif color == 'black':
        points = points / 2
        b_points += 1
    else:
        others += 1

print(f"Total points: {int(points)}")
print(f"Red balls: {red_points}")
print(f"Orange balls: {or_points}")
print(f"Yellow balls: {yell_points}")
print(f"White balls: {wh_points}")
print(f"Other colors picked: {others}")
print(f"Divides from black balls: {b_points}")
