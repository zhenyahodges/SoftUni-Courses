num_bitcoins = int(input())
num_yuans = float(input())
commission = float(input())

bit_to_lv = 1168 * num_bitcoins
bit_to_eu = bit_to_lv / 1.95

yuan_to_usd = num_yuans * 0.15
yuan_to_lv = yuan_to_usd * 1.76
yaun_to_eu = yuan_to_lv / 1.95

total = bit_to_eu + yaun_to_eu
net = total * (1 - commission / 100)

print(f'{net:.2f}')
