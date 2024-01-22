animal = str(input())
result = ''

if animal == 'dog':
    result = "mammal"
elif animal == "snake" or animal == 'crocodile' \
        or animal == 'tortoise':
    result = "reptile"
else:
    result = 'unknown'

print(result)
