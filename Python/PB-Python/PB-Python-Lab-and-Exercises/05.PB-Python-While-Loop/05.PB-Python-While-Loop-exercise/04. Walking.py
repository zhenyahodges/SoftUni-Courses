goal = 10000
daily_steps = 0
steps = input()

while steps != "Going home":
    current_steps = int(steps)
    daily_steps += current_steps

    if daily_steps >= goal:
        break
    steps = input()

if steps == 'Going home':
    current_steps = int(input())
    daily_steps += current_steps

is_goal_reached = daily_steps >= goal

if is_goal_reached:
    diff = abs(goal - daily_steps)
    print(f"Goal reached! Good job!")
    print(f"{diff} steps over the goal!")
else:
    diff = abs(goal - daily_steps)
    print(f"{diff} more steps to reach goal.")
