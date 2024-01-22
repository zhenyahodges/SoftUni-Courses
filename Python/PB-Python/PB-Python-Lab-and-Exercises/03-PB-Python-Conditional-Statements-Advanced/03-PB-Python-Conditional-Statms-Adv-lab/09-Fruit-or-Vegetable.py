product = str(input())

# if item=='banana' or item=='kiwi' or item=='apple' or item=='cherry' or item='lemon' or item

if product in ['banana', 'kiwi', 'apple', 'cherry', 'lemon', 'grapes']:
    print('fruit')
elif product in ['tomato', 'cucumber', 'pepper', 'carrot']:
    print('vegetable')
else:
    print('unknown')
