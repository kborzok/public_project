import os
"""
Egy stringben megszamolja a szavakat.
"""
def wc(s):
    flist = s.split()
    return len(flist)
"""
Megszámoljuk a karaktereket a stringben
"""
def ksz(s):
    return len(s)
"""
Megszámolja a karaktereket egy sztingben a space nélkül
"""
def ksznp(s):
    return len(s)-s.count(" ")
"""
Főprogram
"""
#if os.path.exists("demofile3.txt"):
try:
    f = open("demofile2.txt")
    fajl = f.read()
    f.close()
    print("A fájl nem található")
except FileNotFoundError:
#else:
    print("A fájl nem létezik!")
#print(fajl)
try:
    print(wc(fajl))
    print(wc("saas sasa kjdiei daoskfoekd"))
    print(ksz(fajl))
    print(ksznp(fajl))
except NameError:
    print("Hibás azonosító")