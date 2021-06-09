import random


def cvkod(kod):
    osszeg_odd=osszeg_even=0
    for odd in [11,9,7,5,3,1]:
        osszeg_odd = osszeg_odd + int(kod[odd])
    for even in [10,8,6,4,2,0]:
        osszeg_even = osszeg_even + int(kod[even])
    cv = ( 10 - ( (3 * osszeg_odd + osszeg_even) % 10)) % 10
    return str(cv)
# ( 10 - [ (3 * Odd + Even) modulo 10 ] ) modulo 10

vszam=int(input ("Ird be a vonalkódok számát = "))
#f = open("vonalkodok.txt","a")
for k in range(0,vszam):
    vkod = "599"
    for i in range(0,9):
        vkod = vkod + str(random.randint(0,9))
    vkod = vkod + cvkod(vkod)
    print(vkod)
#    f.write(vkod + "\n")
#f.close()
