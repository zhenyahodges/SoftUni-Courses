import math

record_sec = float(input())
distance_m = float(input())
time_s_per_m = float(input())

time_s = distance_m * time_s_per_m
add = math.floor(distance_m / 15)
add_s = add * 12.50
total_s = time_s + add_s

if total_s < record_sec:
    print(f"Yes, he succeeded! The new world record is {total_s:.2f} seconds.")
else:
    print(f"No, he failed! He was {total_s - record_sec:.2f} seconds slower.")
