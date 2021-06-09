from random import randint
szam = randint(1,90)
tipp=0
while True:
    tipp = int(input("Kérem tippet"))
    if (szam > tipp):
        print("Nagyobbra gondoltam")
    else:
        if (szam <tipp):
            print("Kisebbre gondoltam")
        else:
            print ("Eltaláltad")
            break

