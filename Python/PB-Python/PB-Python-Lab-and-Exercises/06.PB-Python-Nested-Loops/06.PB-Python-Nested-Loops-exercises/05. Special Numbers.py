n = int(input())

for x in range(1_111, 10_000):
    num_to_str = str(x)

    is_special = True
    for d in num_to_str:
        digit = int(d)

        if digit == 0:
            is_special = False
            break

        if n % digit != 0:
            is_special = False
            break

    if is_special:
        print(num_to_str, end=' ')
