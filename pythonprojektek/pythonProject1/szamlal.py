def karkeres(lanc,betu):
    szaml=0
    for i in range(0,len(lanc)):
        if lanc[i] == betu:
            szaml+=1
    return szaml
def karkeres1(lanc,betu):
    szaml=0
    for k in lanc:
        if k == betu:
            szaml+=1
    return szaml
print(karkeres("Ez egy mondat amiben az a betüket keressük","a"))
print(karkeres1("Ez egy mondat amiben az a betüket keressük","a"))
