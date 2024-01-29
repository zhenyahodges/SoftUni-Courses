N = int(input())
washing_m_price = float(input())
toy_price = int(input())

even_total = 0
odd_total = 0
odd_count = 0
total_sum = 0

for i in range(1, N + 1):
    if i % 2 == 0:
        even_total += i * 5
        even_total -= 1
    else:
        odd_count += 1

odd_total = odd_count * toy_price
total_sum = even_total + odd_total
diff = abs(washing_m_price - total_sum)

if washing_m_price <= total_sum:
    print(f'Yes! {diff:.2f}')
else:
    print(f'No! {diff:.2f}')
