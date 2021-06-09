tomb = [1,3,5,6,43,8,92]
keresett = int(input("Keresett szám = "))
i = 0
while tomb[i] != keresett:
   i = i + 1
   if i == len(tomb):
      break
eredmeny = i + 1
if i < len(tomb):
   print(eredmeny)
else:
   print("Nincs találat")

