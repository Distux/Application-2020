#kalea gin
#PA 4
#5/1(ish)/20
#Guessing game, make a number and have the user try to guess, mine
#ver 1

#------------------------------------------------------------------------------
#  Guess.py
#  The computer generates a number an the user has 3 guesses to attempt to 
#  it. If the number is not the target number, there will be a response
#  which tells if the target number is higher or lower.
#------------------------------------------------------------------------------

#from random import seed
from random import randint
import sys

def compare(test, answer):
   if test > answer:
      print("Your guess is too high.")
   elif test < answer:
      print("Your guess is too low.")
   else:
      print("you win!")
      return True
   return False

answer = randint(1,10)
#print(answer)
print ("I'm thinking of an integer in the range 1 to 10. You have three guesses.")
print("")
user = int(input("Enter your first guess: "))
cont = compare(user, answer)
if(cont):
   sys.exit(0)
print("")
user = int(input("Enter your second guess: "))
cont = compare(user, answer)
if(cont):
   sys.exit(0)
print("")
user = int(input("Enter your third guess: "))
cont = compare(user, answer)
if(cont):
   sys.exit(0)
else:
   print("")
   print("You lose. The number was ", answer, ".")
