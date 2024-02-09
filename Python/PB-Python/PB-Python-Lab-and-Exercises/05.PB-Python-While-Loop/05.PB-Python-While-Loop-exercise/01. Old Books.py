book_to_find = str(input())
isFound = False
count = 0
book = str(input())

while book != 'No More Books':

    if book == book_to_find:
        isFound = True
        print(f'You checked {count} books and found it.')
        break

    count += 1
    book = str(input())

if not isFound:
    print(f'The book you search is not here!')
    print(f'You checked {count} books.')
