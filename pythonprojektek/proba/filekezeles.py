import os
f = open("demo.txt","r")
"""
fajl = f.readline()
print(fajl)
fajl = f.readline()
print(fajl)
for x in f:
    print(x)
f.close()
f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()

#open and read the file after the appending:
f = open("demofile2.txt", "w")
f.write("Woops! I have deleted the content!")

f.close()

f = open("demofile2.txt", "r")
print(f.read())
f.close()

f = open("demofile3.txt", "w")
f.writelines(["See you soon!", "\nOver and out."])
f.close()

#open and read the file after the appending:
f = open("demofile3.txt", "r")
print(f.read())
"""
if os.path.exists("demofile2.txt"):
  os.remove("demofile2.txt")
  print("A fájl törölve")
else:
  print("Nem található a fájl!")