town = str(input())
sales = float(input())
has_error = False
commission = 0

if town in ['Sofia', 'Varna', 'Plovdiv']:
    if 0 <= sales <= 500:
        if town == 'Sofia':
            commission = 0.05
        elif town == 'Varna':
            commission = 0.045
        if town == 'Plovdiv':
            commission = 0.055
    elif 500 < sales <= 1000:
        if town == 'Sofia':
            commission = 0.07
        elif town == 'Varna':
            commission = 0.075
        if town == 'Plovdiv':
            commission = 0.08
    elif 1000 < sales <= 10000:
        if town == 'Sofia':
            commission = 0.08
        elif town == 'Varna':
            commission = 0.10
        if town == 'Plovdiv':
            commission = 0.12
    elif sales > 10000:
        if town == 'Sofia':
            commission = 0.12
        elif town == 'Varna':
            commission = 0.13
        if town == 'Plovdiv':
            commission = 0.145
    else:
        has_error = True
else:
    has_error = True

if has_error:
    print('error')
else:
    total = commission * sales
    print(f'{total:.2f}')
