jury = int(input())
command = str(input())
total = 0
count = 0

while command != 'Finish':
    presentation = command
    marks = 0

    for _ in range(jury):
        points = float(input())
        count += 1
        marks += points
        total += points

    avrg = marks / jury
    print(f"{presentation} - {avrg:.2f}.")

    command = input()

total_avrg = total / count
print(f"Student's final assessment is {total_avrg:.2f}.")
