f = open("vonalkodok.txt","r")
inkod = input("Kérem a keresenfő vonalkódot = ")
for line in f:
    if line[:13] == inkod:
        print(inkod)
