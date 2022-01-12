import system.print_ as print_

k = int(input("k:"))
a = 0
b = k
for n in range(1, 10000):
    c = (a + b) / 2
    if c ** 2 == k:
        break
    elif c ** 2 > k:
        b = c
    else:
        a = c

print_.str_(c)
