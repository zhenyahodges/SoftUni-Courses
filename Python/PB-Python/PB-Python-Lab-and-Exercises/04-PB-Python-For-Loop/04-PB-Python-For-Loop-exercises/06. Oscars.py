name = str(input())
points = float(input())
n_judges = int(input())

for _ in range(n_judges):
    judge = str(input())
    marks = float(input())

    new_points = (len(judge) * marks) / 2
    points += new_points

    if points > 1250.5:
        break

if points <= 1250.5:
    diff = (1250.5 - points)
    print(f"Sorry, {name} you need {diff:.1f} more!")
else:
    print(f"Congratulations, {name} got a nominee for leading role with {points:.1f}!")