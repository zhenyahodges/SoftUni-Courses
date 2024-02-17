start = int(input())
end = int(input())
magic_num = int(input())
count = 0
is_found = False

for first_num in range(start, end + 1):
    for second_num in range(start, end + 1):
        count += 1
        if first_num + second_num == magic_num:
            is_found = True
            print(f"Combination N:{count} ({first_num} + {second_num} = {magic_num})")
            break
    if is_found:
        break

# if not is_found:
else:
    print(f"{count} combinations - neither equals {magic_num}")
