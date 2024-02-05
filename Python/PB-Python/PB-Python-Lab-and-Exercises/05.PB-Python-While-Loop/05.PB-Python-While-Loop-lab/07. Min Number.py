import sys

data = input()
min_num = sys.maxsize

while data != 'Stop':
    data = int(data)

    if data < min_num:
        min_num = data

    data = input()

print(min_num)
