age = float(input())
title = str(input())
result = ''

if title == 'm' and age >= 16:
    result = 'Mr.'
elif title == "m" and age < 16:
    result = "Master"
elif title == "f" and age >= 16:
    result = "Ms."
elif title == "f" and age < 16:
    result = "Miss"

print(result)
