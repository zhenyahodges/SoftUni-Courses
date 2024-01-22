day = str(input())
result = ''

if day == 'Monday' or day == "Tuesday" \
        or day == "Wednesday" or day == "Thursday" \
        or day == "Friday":
    result = "Working day"
elif day == "Sunday" or day == 'Saturday':
    result = "Weekend"
else:
    result = 'Error'

print(result)
