
"""
This module provides functions to perform standard vector operations.  Vectors
are represented as lists of numbers (floats or ints).  Functions that take two 
vector arguments may give arbitrary output if the vectors are not compatible,
i.e. of the same dimension.  
"""
#------------------------------------------------------------------------------
# import standard library modules
#------------------------------------------------------------------------------
import random
import math

#------------------------------------------------------------------------------
# function definitions
#------------------------------------------------------------------------------
def check(u, v):
   """
   Returns a bool true if the lengths of u and v are equal, returns false if not
   """
   if(len(u) != len(v)):
      return False
   else:
      return True
#end check

def add(u, v):
   """
   Returns the vector sum u+v.
   """
   valid = check(u,v)
   if not valid:
      return "error, uneven vector lengths"
   #end if
   c = [0.0]*len(u)
   for x in range(len(u)):
      c[x] = u[x] + v[x]
   #end for
   return c
# end add()

def negate(u):
   """
   Returns the negative –u of the vector u. 
   """
   c = [0.0]*len(u)
   for x in range(len(u)):
      c[x] = u[x] * -1
   #end for
   return c
# end negate()   

def sub(u, v):
   """
   Returns the difference u-v.
   """
   valid = check(u,v)
   if not valid:
      return "error, uneven vector lengths"
   #end if
   c = add(u, negate(v))
   return c
# end sub()

def scalarMult(c, u):
   """
   Return the scalar product cu of the number c by the vector u.
   """
   d = [0.0]*len(u)
   for x in range(len(u)):
      d[x] = c*u[x]
   #end for
   return d
# end scalarMult()

def zip(u, v):
   """
   Returns the component-wise product of u with v.
   """
   valid = check(u,v)
   if not valid:
      return "error, uneven vector lengths"
   #end if
   c = [0.0]*len(u)
   for x in range(len(u)):
      c[x] = u[x]*v[x]
   #end for
   return c
# end zip()

def dot(u, v):
   """
   Returns the dot product of u with v
   """
   valid = check(u,v)
   if not valid:
      return "error, uneven vector lengths"
   #end if
   a = zip(u,v)
   sum = 0
   for x in range(len(a)):
      sum += a[x]
   #end for
   return sum
# end dot()

def length(u):
   """
   Returns the (geometric) length of the vector u. 
   """
   a = 0
   for x in range(len(u)):
      a += pow(u[x],2)
      #print(a)
   #end for
   #print(pow(a, .5))
   return pow(a, .5)
# end length()
   
def unit(v):
   """
   Return a unit (geometric length 1) vector in the direction of v.
   """
   a = length(v)
   c = [0.0]*len(v)
   for x in range(len(v)):
      c[x] = v[x] / a
   #end for
   return c
# end unit()

def angle(u, v):
   """
   Return the angle (in degrees) between vectors u and v.
   """
   return math.degrees(math.acos(dot(unit(u),unit(v))))
# end angle()

def randVector(n, a, b):
   """
   Returns a vector of dimension n whose components are random floats in the range [𝑎, 𝑏).
   """
   c = n*[0]
   for x in range(n):
      c[x] = random.random()
   #end for
   return c
# end randomVector()

