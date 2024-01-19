time_sec_1 = int(input())
time_sec_2 = int(input())
time_sec_3 = int(input())

total = time_sec_1 + time_sec_2 + time_sec_3

minutes = total // 60
seconds = total % 60

if seconds < 10:
    print(f'{minutes}:0{seconds}')
else:
    print(f'{minutes}:{seconds}')
