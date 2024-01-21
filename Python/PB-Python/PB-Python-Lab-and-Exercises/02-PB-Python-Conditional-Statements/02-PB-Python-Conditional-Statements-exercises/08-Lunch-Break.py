from math import ceil

title = str(input())
duration_episode = int(input())
duration_break = int(input())

lunch = duration_break / 8
rest = duration_break / 4

time_left = duration_break - lunch - rest

if time_left >= duration_episode:
    print(f"You have enough time to watch {title} and left with {ceil(time_left - duration_episode)} minutes free time.")
else:
    print(f"You don't have enough time to watch {title}, you need {ceil(duration_episode - time_left)} more minutes.")
