from tkinter import *

def km_to_mi():
    try:
        km = bemenet1.get()
        ktm = float(km) / 1.609344
        text1['state'] = NORMAL
        text1.delete(1.0,END)
        ktm = str(ktm)
        text1.insert(END, ktm[0:5])
        text1['state'] = DISABLED
    except:
        text1['state'] = NORMAL
        text1.delete(1.0, END)
        text1.insert(END, "Csak számokat lehet beírni!")
        text1['state'] = DISABLED



win = Tk()
win.title("Konverter")
win.geometry('800x600')

Label(win, text="kiklóméter", font="Helvetica 12 bold").grid(row=0,column=1)
Label(win, text="mérföld", font="Helvetica 12 bold").grid(row=1,column=1)

Button(win, text="Km mérfőld átváltás", command=km_to_mi, font="Helvetica 12 bold").grid(row=2, column=0)
bemenet1 = Entry(win, font="Helvetica 20 bold")
bemenet1.grid(row=0,column=0)

text1 = Text(win, height=1, width=20, state=DISABLED, font="Helvetica 20 bold")
text1.grid(row=1, column=0)
win.mainloop()