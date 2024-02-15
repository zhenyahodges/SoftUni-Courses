import sys

command = input()
max_num = -sys.maxsize
top_score_name = ''
has_hat_trick = False

while command != 'END':
    name = command
    score = int(input())

    if score > max_num:
        max_num = score
        top_score_name = name

        if score >= 3 and top_score_name == name:
            has_hat_trick = True

    if score >= 10:
        break

    command = input()

print(f"{top_score_name} is the best player!")

if has_hat_trick:
    print(f"He has scored {max_num} goals and made a hat-trick !!!")
else:
    print(f"He has scored {max_num} goals.")
