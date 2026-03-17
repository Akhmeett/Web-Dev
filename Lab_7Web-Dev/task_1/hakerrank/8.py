n = int(input())
student_marks = {}

for _ in range(n):
    line = input().split()
    name, marks = line[0], list(map(float, line[1:]))
    student_marks[name] = marks

query_name = input()

# Орташа мәнді есептеу
avg = sum(student_marks[query_name]) / len(student_marks[query_name])

# 2 ондық таңбаға дейін форматтап шығару
print("{:.2f}".format(avg))