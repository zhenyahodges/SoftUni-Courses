pages_in_book = int(input())
pages_per_hour = int(input())
days = int(input())

hours = pages_in_book // pages_per_hour
hours_needed = hours // days

print(hours_needed)
