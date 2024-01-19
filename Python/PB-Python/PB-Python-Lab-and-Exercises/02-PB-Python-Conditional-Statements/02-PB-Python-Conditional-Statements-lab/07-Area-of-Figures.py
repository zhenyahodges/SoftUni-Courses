from math import pi
figure_type = str(input())
area = 0

if figure_type == 'square':
    dimension_1 = float(input())
    area = dimension_1 * dimension_1
elif figure_type == 'rectangle':
    dimension_1 = float(input())
    dimension_2 = float(input())
    area = dimension_1 * dimension_2
elif figure_type == 'circle':
    dimension_1 = float(input())
    area = pi * (dimension_1 ** 2)
elif figure_type == 'triangle':
    dimension_1 = float(input())
    dimension_2 = float(input())
    area = 1 / 2 * dimension_1 * dimension_2

print(f'{area:.3f}')
