#kalea gin
#PA 7
#5/31/20
#preform a dice simulation
#ver 2


#------------------------------------------------------------------------------
#  Probability.py
#
#  Simulates throwing m k-sided dice a user inputted number of times.  Calculates 
#  relative frequency of each possible sum as an approximation to the probability
#  of that sum. Calculates the % of each occurrance and number of occurrances.
#  Use the montecarlo method to get experimental probabilities
#------------------------------------------------------------------------------

import random

rng = random.Random(237) # Create a random number generator

def throwDice(m, k):
   """
   throws m independent k sided dice and returns the result in a m-tuple
   """

   diceList = m*[0]

   for x in range (m):
      die1 = rng.randrange(1,k+1)
      print("die {0}: ".format(x), die1, "  ", end="")
      diceList[x] = die1

   return tuple(diceList)
# end ThrowDice()



#-- main ----------------------------------------------------------------------   
print()
#prompt for numDice
prompt = "Enter the number of dice: "
numDice = int(input(prompt))
prompt = "Please " + prompt.lower()
while(numDice < 1):#input Validation
   print("The number of dice must be at least 1")
   numDice = int(input(prompt))
   #end while
print()


#prompt for numSides
prompt = "Enter the number of sides on each die: "
numSides = int(input(prompt))
prompt = "Please " + prompt.lower()
while(numSides < 2): #input Validation
   print("The number of sides on each die must be at least 2")
   numSides = int(input(prompt))
   #end while
print()


#prompt for numTrials
prompt = "Enter the number of trials to perform: "
numTrials = int(input(prompt))
prompt = "Please " + prompt.lower()
while(numTrials < 2):#input Validation
   print("The number of trials must be at least 1")
   numTrials = int(input(prompt))
   #end while
print()

# perform simulation, record and print frequencies
frequency = ((numSides*numDice)+1)*[0]  # same as [0,0,0,0,0,0,0,0,0,0,0,0,0 ect]
for i in range(numTrials):
   t = throwDice(numDice, numSides)
   sum = 0
   for x in range (len(t)): #calculate the sum
      sum += t[x]
   #end for
   print("Sum of the {0}th roll is:".format(i), sum)
   frequency[sum] += 1;
# end for

print()
print("Frequencies:")
print(frequency)


# calculate relative frequencies and probabilities 
relativeFrequency = [0]
probability = [0]
for i in range(1, len(frequency)):
   relativeFrequency.append(frequency[i]/numTrials)
   probability.append((frequency[i]/numTrials) * 100)
# end for


print()


# print results
f1 = "{0:<9}{1:<14}{2:<23}{3:<}"
f2 = 70*"-"
f3 = "{0:>4}      {1:>5}           {2:<23.5f}{3:>5.2f}"
print(f1.format("Sum","Frequency","Relative Frequency","Experimental Probability"))
print(f2)
print("-----------------------")
for i in range(numDice, len(frequency)):
   print(f3.format(i, frequency[i], relativeFrequency[i], probability[i]), "%")
#end for
print()