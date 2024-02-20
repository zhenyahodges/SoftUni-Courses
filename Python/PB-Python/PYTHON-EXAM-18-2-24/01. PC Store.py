processor_usd = float(input())
card_usd = float(input())
ram_usd = float(input())
ram_q = int(input())
discount = float(input())

# 1usd=1.57lv
ram_total = ram_usd * ram_q

to_be_disc = processor_usd + card_usd
disc=to_be_disc*(1-discount)

money_usd = disc + ram_total

money_lv = money_usd * 1.57
print(f"Money needed - {money_lv:.2f} leva.")
