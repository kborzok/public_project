prim = False
for szam in range(2,10):
    index = 2
    while (index < szam):
        if (szam % index == 0 ):
            prim = False
            break
        else:
            prim = True
        index = index + 1
    szam = szam + 1
    if prim: print(szam)
