import random
import string

chars=string.ascii_letters+string.digits+string.punctuation

# random pas of 10chs

password_length=10
random_pass=''

for _ in range(password_length):
    random_pass+=random.choice(chars)

print(f' randomly generated pass: {random_pass}')