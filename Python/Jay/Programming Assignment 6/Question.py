#kalea gin
#PA 6
#5/20/20
#A reverse of PA 4, have the user think of a number, computer binary searches to guess.
#ver 1

#------------------------------------------------------------------------------
#  Question.py
#
#  Reverse of PA 4, program uses binary search and inputted boundraries to guess 
#  a number which the user thinks of in their head. User answers successive 
#  questions based on the binary search so the computer can guess their number.
#------------------------------------------------------------------------------

import sys

def testPlurality(numGuesses, yourNumber):
   print()
   grammar = "it"
   if yourNum:
      grammar = "your number"
      #end if
   if numGuesses > 1:
      print("I found", grammar, "in", numGuesses, "guesses.")
   else:
      print("I found", grammar, "in", numGuesses, "guess.")
      #end if-else
   sys.exit(0)
#end testPlurality

#main====================================
print()
print()
print("Enter 2 numbers, low then high.")
lowest = int(input("low = "))
highest = int(input("high = "))
print()

#input validation
while lowest > highest:
   print("Please enter the smaller followed by the larger number.")
   lowest = int(input("low = "))
   highest = int(input("high = "))
   print()
#end while loop

print("Think of a number in the range {0} to {1}.".format(lowest, highest))
print()

#check if the numbers are the same
if lowest == highest:
   print("I found your number! Its {0}".format(highest))
   sys.exit(0)
   #end if

#count the number of guesses
numGuesses = 0

#make sure the counters dont cross over
while highest >= lowest:
   numGuesses += 1
   middle = (highest + lowest)//2
   print("Is your number Less than, Greater than, or Equal to {0}?".format(middle))
   x = input("Type 'L', 'G' or 'E': ")
   x = x.upper() #handle both upper and lower case
   
   #input validation
   while x != "L" and x != "G" and x != "E":
      print()
      x = input("Please type 'L', 'G' or 'E': ")
      x = x.upper()
   #end while

   if x == "L":
      highest = middle - 1
   elif x == "G":
      lowest = middle + 1
   else:
      yourNum = True
      testPlurality(numGuesses, yourNum)
      #end if-else
   #end if-else

   #check if the answer was found via remainder
   if lowest == (middle - 1):
      print("Your number is {0}. ". format(lowest), end="")
      yourNum = False
      testPlurality(numGuesses, yourNum)
   elif highest == (middle + 1):
      print("Your number is {0}. ". format(highest), end="")
      yourNum = False
      testPlurality(numGuesses, yourNum)
      #end if-else
   #end if
   print()
#end while

#if not found, answer must not have been constant
if(numGuesses == 1):
   print("Your answer was not consistent.")
else:
   print("Your answers have not been consistent.")
sys.exit(0)

 