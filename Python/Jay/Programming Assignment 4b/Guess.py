#kalea gin
#PA 4
#5/3(ish)/20
#Guessing game, make a number and have the user try to guess, revision of J's
#ver 2

#------------------------------------------------------------------------------
#  Guess.py
#  The computer generates a number an the user has 3 guesses to attempt to 
#  it. If the number is not the target number, there will be a response
#  which tells if the target number is higher or lower.
#------------------------------------------------------------------------------

import sys 
import random


# function for when n is not equal to guess

def not_n(x):
    if guess > x:
        print("Your guess is too high.")
        print()

    elif guess < x:
        print("Your guess is too low.")
        print()


#first guess


limit = 10
n = random.randint(1,10)
print(n)


print("I'm thinking of an integer in the range 1 to 10. You have three guesses.")
print()

#__

guess = int(input('Enter your first guess: '))



if guess == n:
    print("You win!")
    guess = 0

elif guess == 0: 
    guess = 0
    sys.exit(0)
    print("bai")
else:
    not_n(n)
    guess = int(input('Enter your second guess: '))

#second guess


if guess == n:
    print("You win!")
    guess = 0
elif guess == 0: 
    guess = 0
    sys.exit(0)
    print("bai")
else:
    not_n(n)
    guess = int(input('Enter your third guess: '))


#third guess


if guess == n:
    print("You win!")
    print()
elif guess == 0:
    print("bai")                          
else:
    not_n()
    print("You lose. The number was " + str(n) + "." )

#end of program