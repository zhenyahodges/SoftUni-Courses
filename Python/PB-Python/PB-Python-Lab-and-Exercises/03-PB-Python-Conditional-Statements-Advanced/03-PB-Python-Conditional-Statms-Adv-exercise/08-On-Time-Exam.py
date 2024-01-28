hour_exam = int(input())
minute_exam = int(input())

hour_arrival = int(input())
minute_arrival = int(input())

exam_in_mins = hour_exam * 60 + minute_exam
arrival_in_mins = hour_arrival * 60 + minute_arrival

diff = abs(exam_in_mins - arrival_in_mins)
minutes = diff % 60
hours = diff // 60

if arrival_in_mins <= exam_in_mins:
    if diff <= 30:
        print('On time')
    elif 30 < diff:
        print('Early')

    if diff < 60:
        print(f'{minutes} minutes before the start')
    else:
        if minutes > 9:
            print(f'{hours}:{minutes} hours before the start')
        else:
            print(f'{hours}:0{minutes} hours before the start')

else:
    print('Late')

    if minutes < 60 and diff < 60:
        print(f'{minutes} minutes after the start')
    else:
        if minutes > 9:
            print(f'{hours}:{minutes} hours after the start')
        else:
            print(f'{hours}:0{minutes} hours after the start')
