n_groups = int(input())
musala = 0
monblan = 0
kilim = 0
k2 = 0
everest = 0

for _ in range(n_groups):
    people = int(input())

    if people <= 5:
        musala += people
    elif 6 <= people <= 12:
        monblan += people
    elif 13 <= people <= 25:
        kilim += people
    elif 26 <= people <= 40:
        k2 += people
    elif people >= 40:
        everest += people

total_people = musala + monblan + kilim + k2 + everest

musala = (musala / total_people) * 100
monblan = (monblan / total_people) * 100
kilim = (kilim / total_people) * 100
k2 = (k2 / total_people) * 100
everest = (everest / total_people) * 100

print(f'{musala:.2f}%')
print(f'{monblan:.2f}%')
print(f'{kilim:.2f}%')
print(f'{k2:.2f}%')
print(f'{everest:.2f}%')
