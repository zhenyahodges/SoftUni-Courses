width = int(input())
length = int(input())
height = int(input())

volume = width * height * length

command = input()

while command != "Done":
    boxes = int(command)

    volume -= boxes

    if volume <= 0:
        break

    command = input()
else:
    if vol