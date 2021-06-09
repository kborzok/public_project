tomb = [1,3,5,6,43,8,92]
keresett = int(input("Keresett szám = "))
i = 0
for ertek in tomb:
   if ertek == keresett:
      break
   else:
      i = i + 1
if i < len(tomb):
   print(i + 1)
else:
   print("Nincs ilyen elem!")

