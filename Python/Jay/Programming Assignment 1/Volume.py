

#Volume of a sphere
#kalea gin
#calculte the volume of a sphere prompt the user
#ver 1
#4/2/20


import math
pi = math.pi
radius = float(input("Enter the radius of the sphere: "))

if (radius < 0):
 print("The radius cannot be less than 1")
 radius = float(input("Enter the radius of the sphere: "))
 
volume = (4*pi*(radius**3))/3
print("The volume is: ", round(volume, 12))
surfaceArea = (4*pi*(radius**2))
print("The surface area is: ", round(surfaceArea, 14))