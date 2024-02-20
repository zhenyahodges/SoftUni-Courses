num=int(input())

first =num%10
mid=(num%100)//10
last=num//100

for n in range(1, first+1):
    for x in range(1,mid+1):
        for y in range(1, last+1):
            print(f'{n} * {x} * {y} = {n*x*y}', end='; ')
            print()
