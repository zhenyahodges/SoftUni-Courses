plastic = int(input())
litres_dye = int(input())
litres_developer = int(input())
hours = int(input())

plastic_cost = (plastic + 2) * 1.5
dye_cost = (litres_dye + (litres_dye * 0.10)) * 14.50
developer_cost = litres_developer * 5

material_cost = plastic_cost + dye_cost + developer_cost + 0.40
cost_per_worker = (material_cost * 0.30) * hours
total_cost = material_cost + cost_per_worker

print(total_cost)

