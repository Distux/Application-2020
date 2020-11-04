#------------------------------------------------------------------------------
#  DiceProbability.py
#
#  Simulates throwing a pair of dice many times.  Calculates the relative
#  frequency of each possible sum as an approximation to the probability
#  of that sum. Calculates the theoretical probability, and the error.
#------------------------------------------------------------------------------

import random

rng = random.Random() # Create a random number generator

def throwTwoDice():
   """
   throws two independent dice and returns the result in a 2-tuple
   """
   die1 = rng.randrange(1,7)   
   die2 = rng.randrange(1,7)
   return (die1, die2)
# end ThrowTwoDice()


#-- main ----------------------------------------------------------------------   

numberOfTrials = 1_000_000


# perform simulation, record and print frequencies
frequency = 13*[0]  # same as [0,0,0,0,0,0,0,0,0,0,0,0,0]
for i in range(numberOfTrials):
   t = throwTwoDice()
   frequency[t[0]+t[1]] += 1;
# end for

print()
print("Frequencies:")
print(frequency)


# calculate relative frequencies, probabilities and errors
relativeFrequency = [0, 0]
probability = [0,0]
error = [0,0]
for i in range(2, len(frequency)):
   relativeFrequency.append(frequency[i]/numberOfTrials)
   probability.append(min(i-1,13-i)/36)
   error.append(abs(probability[i]-relativeFrequency[i]))
# end for


#print(relativeFrequency)
#print(probability)
#print(error)
print()


# print results
f1 = "{0:<10}{1:<22}{2:<22}{3:<22}"
f2 = 71*"-"
f3 = "{0:>3}       {1:<22.15f}{2:<22.15f}{3:<.15f}"
print(f1.format("Sum","Relative Frequency","Probability","Error"))
print(f2)
for i in range(2, len(frequency)):
   print(f3.format(i, relativeFrequency[i], probability[i], error[i]))
#end for

print()