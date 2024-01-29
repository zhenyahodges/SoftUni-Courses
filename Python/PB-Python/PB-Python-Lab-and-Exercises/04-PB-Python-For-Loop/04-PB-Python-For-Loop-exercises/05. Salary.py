import math

n = int(input())
salary = float(input())
penalty = 0

for _ in range(n):
    tab = str(input())

    if tab == 'Facebook':
        salary -= 150
    elif tab == 'Instagram':
        salary -= 100
    elif tab == 'Reddit':
        salary -= 50

    if salary <= 0:
        print("You have lost your salary.")
        break

if salary:
    print(math.floor(salary))
