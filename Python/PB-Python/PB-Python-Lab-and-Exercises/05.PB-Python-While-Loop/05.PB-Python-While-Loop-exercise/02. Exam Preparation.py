allowed_bad_marks = int(input())

score = 0
count = 0
bad_mark_count = 0
last = ''
has_failed = True

while bad_mark_count < allowed_bad_marks:
    task = str(input())

    if task == 'Enough':
        has_failed = False
        break

    mark = int(input())

    if mark <= 4:
        bad_mark_count += 1

    count += 1
    last = task
    score += mark

if has_failed:
    print(f'You need a break, {allowed_bad_marks} poor grades.')
else:
    avrg = score / count
    print(f'Average score: {avrg:.2f}')
    print(f'Number of problems: {count}')
    print(f'Last problem: {last}')
