prim = False
for szam in range(2,100000):
    index = 2
    while (index < szam):
        if (szam % index == 0 ):
            prim = False
            break
        else:
            prim = True
        index = index + 1
    if prim: print(szam)
"""
prim legyen egyenlő hamis
szam legyen egyenl 2 vel
ismételd amig szam < mint 100
    index legyem = 2 vel
    ismeteld amig index < szam
        ha szám maradék nélkül osztható index-vel
            legyen prim hamis
            lépjen ki a ciklusból
        egyébként prim legyen igaz
        indexet növeld meg eggyel
    szamot noveld eggyel
ha prim igaz ird ki a számot
"""