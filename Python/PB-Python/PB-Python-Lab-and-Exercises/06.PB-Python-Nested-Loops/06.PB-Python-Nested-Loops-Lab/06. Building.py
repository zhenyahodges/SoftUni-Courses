floors = int(input())
rooms_per_floor = int(input())
flat_name = ''
sign = ''

# for floor in range(floors, 0, -1):
#     for room in range(rooms_per_floor):
#         if floor == floors:
#             flat_name = f'L{floor}{room}'
#         else:
#             if floor % 2 == 0:
#                 flat_name = f'O{floor}{room}'
#             else:
#                 flat_name = f'A{floor}{room}'
#
#         print(flat_name, end=' ')
#     print()

for floor in reversed(range(1, floors + 1)):
    sign = 'A' if floor % 2 else 'O'

    if floor == floors:
        sign = 'L'

    for room in range(rooms_per_floor):
        flat_name = f'{sign}{floor}{room}'
        print(flat_name, end=' ')

    print()
