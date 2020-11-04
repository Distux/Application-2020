

# Recommended imports for all problems
# Some problems may require more
import sys
import math
import string
#print("starting")
# +++++++++++++++++++++++++ IDK WHERE I WENT WRONG ++++++++++++++++++++++++++++++
with open("Prob08.txt") as inputfile:    # Open the input file
    # Always start with reading in the number
  # of test cases from standard input. The
  # rstrip() method removes the lingering newline
    cases = int(inputfile.readline().rstrip())
  # Loop for each test case. This is the last line
  # common to all problems; the content of this
  # loop will change based on the problem solved.

 # output = []
    
    for caseNum in range(0, cases):
        #print( "CASENUM", caseNum)
        rows, cols = (20, 20) 
        defaultArr = [[10 for i in range(cols)] for j in range(rows)]
        user = inputfile.readline().rstrip()
        user = user.split()
        xVal = int(user[0])
        yVal = int(user[1])
        #print (defaultArr[xVal][yVal])
        defaultArr[xVal][yVal] = 0

        #outside circle
        start = -2
        end = 3
        inc = 25
        for i in range(start,end):
           #print(i, "This is first i")
           #column
           if 0 <= yVal + i <= 19 and 19 >= xVal + start >= 0:
               defaultArr[xVal + start][yVal + i] = inc
           #ROW
           if i != start and 19 >= xVal + i >= 0 and 19 >= yVal + start >= 0:
               defaultArr[xVal + i][yVal + start] = inc
        for i in reversed(range(start,end)):
           #print(i , "this is second i")
           #column
           if 19 >= yVal + i >= 0 and 19 >= xVal - start >= 0:
               defaultArr[xVal - start][yVal + i] = inc
           #ROW
           if i != 2 and 19 >= xVal + i >= 0 and 19 >= yVal - start >= 0:
               defaultArr[xVal + i][yVal - start] = inc
        
        #inside circle
        inc = 50
        start = -1
        end = 2
        for i in range(start,end):
           #column
           if 19 >= yVal + i >= 0 and 19 >= xVal + start >= 0:
               defaultArr[xVal + start][yVal + i] = inc
           #ROW
           if i != start and 19 >= xVal + i >= 0 and 19 >= yVal + start >= 0:
               defaultArr[xVal + i][yVal + start] = inc
        for i in reversed(range(start,end)):
           #print("this is reversed check ", i)
           #column
           if 19 >= yVal + i >= 0 and 19 >= xVal - start >= 0:
               defaultArr[xVal - start][yVal + i] = inc
           #ROW
           if i != 1 and 19 >= xVal + i >= 0 and 19 >= yVal - start >= 0:
               defaultArr[xVal + i][yVal - start] = inc
        
        inc = 100
        defaultArr[xVal][yVal] = inc

        for r in defaultArr:
            for c in r:
                print(c,end = " ")
            print()
        #print()