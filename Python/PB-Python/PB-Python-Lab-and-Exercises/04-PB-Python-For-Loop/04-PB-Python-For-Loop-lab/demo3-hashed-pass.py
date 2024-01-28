import hashlib


def hash_pass(password):
    password_bytes = password.encode('utf-8')
    hash_obj = hashlib.sha256()
    hash_obj.update(password_bytes)
    hashed_pass = hash_obj.hexdigest()

    return hashed_pass


password = 'SoftUni123'
hashed_pass = hash_pass(password)

print(f'hashed password: {hashed_pass}')
