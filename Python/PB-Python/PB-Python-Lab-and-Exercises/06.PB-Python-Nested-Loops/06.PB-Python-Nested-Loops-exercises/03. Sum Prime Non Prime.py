command = input()
prime = 0
non_prime = 0

while command != 'stop':
    n = int(command)

    if n < 0:
        print("Number is negative.")
        command = input()
        continue

    is_prime = True
    for divisor in range(2, n):
        if n % divisor == 0:
            is_prime = False
            break

    if is_prime:
        prime += n
    else:
        non_prime += n

    command = input()

print(f"Sum of all prime numbers is: {prime}")
print(f"Sum of all non prime numbers is: {non_prime}")
