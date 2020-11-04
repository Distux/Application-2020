

# Recommended imports for all problems
# Some problems may require more
import sys
import math
import string
#print("starting")
# +++++++++++++++++++++++++ IDK WHERE I WENT WRONG ++++++++++++++++++++++++++++++
with open("Prob07.txt") as inputfile:    # Open the input file
    # Always start with reading in the number
  # of test cases from standard input. The
  # rstrip() method removes the lingering newline
    cases = int(inputfile.readline().rstrip())
  # Loop for each test case. This is the last line
  # common to all problems; the content of this
  # loop will change based on the problem solved.
    backup = []
 # output = []
    for caseNum in range(0, cases):
        #print( "CASENUM", caseNum)
        user = int(inputfile.readline().rstrip())
        backup.clear()
        for i in range(user):
            input = float(inputfile.readline().rstrip())
            backup.append(input)
        max = backup[0]
        min = backup[0]
        for i in range(1, user):
            #print("I is ", i , ": ", backup[i])
            if backup[i] > max:
                max = backup[i]
                #print("Called max:", max)
            if backup[i] < min:
                min = backup[i]
                #print("Called min: ", min)
        for x in range(user):
                #print("X = ", x, "Backup sub x = ", backup[x])
            print(int(((backup[x] - min) / (max - min)) * 255))



   