deposit = float(input())
term = int(input())
rate = float(input())

total_sum = deposit + (term * ((deposit * (rate/100)) / 12))

print(total_sum)
