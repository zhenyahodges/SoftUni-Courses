length = int(input())
width = int(input())
height = int(input())
percent_taken = float(input()) / 100

# in cm
#  1л=1 дм3/.
volume_cm = length * width * height
# volume_l =volume_cm * 0.001
volume_l = volume_cm / 1000

litres_needed = volume_l * (1-percent_taken)

print(litres_needed)
