import turtle

#geingfun========================================
def getInput():
  user = 0
  while (user < 3 or (user%2) != 1):
    user = int(input("Enter an odd integer greater than or equal to 3: "))
  return user
#end func======================================

wn = turtle.Screen() # Set up the window and its attributes
wn.bgcolor("white")

maria = turtle.Turtle("turtle") # Create tess and set some attributes
maria.speed(0)
maria.color("blue", "lime")
maria.pensize(2)

user = getInput()
wn.title(str(user) + "- pointed star")

maria.begin_fill()
maria.setx(-150)
maria.setx(150)
angle = 180 - (180 / user)
print(angle)
for i in range(user):
  maria.right(angle)
  maria.dot( 8 ,"red")
  maria.forward(300)

maria.end_fill()
maria.ht()
wn.mainloop()
