destination = str(input())
is_going = False

while destination != 'End':
    cost = float(input())

    while cost > 0:
        saved = float(input())
        cost -= saved
        is_going = False
    else:
        is_going = True
        print(f"Going to {destination}!")

    destination = str(input())
