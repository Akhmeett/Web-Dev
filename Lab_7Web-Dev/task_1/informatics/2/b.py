def power(a, n):
    return a ** n

data = input().split()
a = float(data[0])
n = int(data[1])

print(power(a, n))