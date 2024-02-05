name = str(input())

total = 0
year = 0
average = 0
fail = 0

while year < 12:
    score = float(input())

    if score < 4:
        fail += 1

        if fail > 1:
            print(f"{name} has been excluded at {year+1} grade")
            break
        continue

    total += score
    year += 1

else:
    average = total / year
    print(f"{name} graduated. Average grade: {average:.2f}")
