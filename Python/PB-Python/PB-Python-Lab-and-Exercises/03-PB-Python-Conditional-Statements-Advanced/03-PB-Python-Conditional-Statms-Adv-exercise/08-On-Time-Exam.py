hour_exam = int(input())
minute_exam = int(input())

hour_arrival = int(input())
minute_arrival = int(input())

exam_in_mins = hour_exam * 60 + minute_exam
arrival_in_mins = hour_arrival * 60 + minute_arrival
diff = exam_in_mins - arrival_in_mins
minutes = diff % 60

if arrival_in_mins <= exam_in_mins:
    if diff <= 30:
        print('On time')
    elif 30 < diff:
        print('Early')

    if diff < 60:
        if minutes < 9:
            print(f'{minutes} minutes before the start')
        else:
            print(f'{minutes} minutes before the start')
    else:
        hours = diff // 60

        if minutes > 9:
            print(f'{hours}:{minutes} hours before the start')
        else:
            print(f'{hours}:0{minutes} hours before the start')

elif arrival_in_mins > exam_in_mins:
    diff_late = arrival_in_mins - exam_in_mins
    minutes_late = diff_late % 60
    hours = diff_late // 60

    print('Late')

    if minutes_late < 60 and diff_late < 60:
        print(f'{minutes_late} minutes after the start')
    else:
        if minutes_late > 9:
            print(f'{hours}:{minutes_late} hours after the start')
        else:
            print(f'{hours}:0{minutes_late} hours after the start')
