f = open("varosok.txt","r")
p=[]
s1=f.readline()
k=s1.split()
maxtav=int(k[1])
varos=k[0]
for sor in f:
    s=sor.split()
    tavolsag=int(s[1])
    if tavolsag < maxtav:
        maxtav = tavolsag
        varos=s[0]
print(varos,maxtav)
f.close()
f = open("eredmeny.txt","w")
eredmeny = varos +" "+ str(maxtav)
f.write(eredmeny)
f.close()



