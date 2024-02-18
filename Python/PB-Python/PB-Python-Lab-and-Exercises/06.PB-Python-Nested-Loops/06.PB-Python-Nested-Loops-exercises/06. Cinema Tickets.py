command = input()
standard = 0
student = 0
kid = 0

while command != 'Finish':
    film = command
    spaces = int(input())
    taken = 0

    ticket = input()
    while ticket != 'End':
        taken += 1

        if ticket == 'standard':
            standard += 1
        elif ticket == 'student':
            student += 1
        elif ticket == 'kid':
            kid += 1

        if taken == spaces:
            break

        ticket = input()

    perc_full = taken / spaces * 100
    print(f"{film} - {perc_full:.2f}% full.")

    command = input()

total = student + standard + kid

print(f"Total tickets: {total}")
print(f"{(student / total * 100):.2f}% student tickets.")
print(f"{(standard / total * 100):.2f}% standard tickets.")
print(f"{(kid / total * 100):.2f}% kids tickets.")
