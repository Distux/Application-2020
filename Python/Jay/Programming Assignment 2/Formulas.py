#Programming Assignment 2
#Kalea Gin
#4/9/2020
#calculte stuff given user inputted radius heicht ect Use formulas
#ver 1

import math
pi = math.pi

def sphere_volume(r):
    volume = (4/3) * pi * (r**3)
    return volume

def sphere_area(r):
    area = 4 * pi * (r**2)
    return area

def cylinder_volume(r, h):
    volume = pi * (r**2) * h
    return volume

def cylinder_area(r, h):
    area = 2 * pi * r * h + 2 * pi * (r ** 2)
    return area

def print_sphere(r):
    print("\n")
    vol = sphere_volume(r)
    print("The volume of the sphere with radius ", r, " is: ", vol)
    area = sphere_area(r)
    print("The surface area of the sphere with radius ", r, " is: ", area)
    

def print_cylinder(r, h):
    print("\n")
    vol = cylinder_volume(r,h)
    print("The volume of the cylinder with radius", r, " and height ", h, " is: ", vol)
    area = cylinder_area(r,h)
    print("The surface area of the cylinder with radius", r, " and height ", h, " is: ", area)
    

# int main() { --------------------------------------------------------------------------------------------------------------
print("Enter three numbers: ")

x = float(input("x = "))
while(x < 0):
    x = float(input("x must be greater than 0 \n x = "))

y = float(input("y = "))
while(y < 0):
    y = float(input("y must be greater than 0 \n y = "))

z = float(input("z = "))
while(z < 0):
    z = float(input("z must be greater than 0 \n z = "))

print_sphere(x)
print_sphere(y)
print_sphere(z)
print_cylinder(x,y)
print_cylinder(y,z)
print_cylinder(z,x)
# return 0; } ---------------------------------------------------------------------------------------------------------------
