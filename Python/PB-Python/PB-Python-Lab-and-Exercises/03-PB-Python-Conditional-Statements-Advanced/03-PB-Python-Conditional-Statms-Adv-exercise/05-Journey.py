budget = float(input())
season = str(input())
destination = ''
price = 0
country = ''

if season == 'summer':
    destination = 'Camp'

    if budget <= 100:
        country = 'Bulgaria'
        price = budget * 0.3
    elif 100 < budget <= 1000:
        country = 'Balkans'
        price = budget * 0.40
    elif budget > 1000:
        country = 'Europe'
        price = budget * 0.90
        destination = 'Hotel'

elif season == 'winter':
    destination = 'Hotel'

    if budget <= 100:
        country = 'Bulgaria'
        price = budget * 0.70
    elif 100 < budget <= 1000:
        country = 'Balkans'
        price = budget * 0.80
    elif budget > 1000:
        country = 'Europe'
        price = budget * 0.90
        destination = 'Hotel'

print(f"Somewhere in {country}")
print(f"{destination} - {price:.2f}")
