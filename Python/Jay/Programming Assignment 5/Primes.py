#kalea gin
#PA 5
#5/20/20
#Generate a user inputed number of prime numbers.
#ver 1

#------------------------------------------------------------------------------
#  Primes.py
#
#  using mathematical proofs that a prime number must be: the suqare root of the 
#  searched for prime, less than half of it, and a multiple of previous primes,
#  generate a amount of primes according to the user. The program begins with
#  a few primes then appends newly discovered primes which are used to further 
#  calculate more primes. 
#------------------------------------------------------------------------------


def isPrime(m, L):
   for x in L:
      if x <= pow(m, .5):
         if (m % x) == 0:
            return False
         #end if
      else:
         break
      #end if
   return True
#end is prime ====================================================


#starting main body
print("")
print("")
primeList = [2]
numPrime = int(input("Enter the number of Primes to compute: "))
while numPrime < 0:
   print("The number of primes cannot be less than 0")
   numPrime = int(input("Enter the number of Primes to compute: "))
testPrime = 3


print()
print()
print("The first {0} primes are:".format(numPrime))


while len(primeList) < numPrime:
   temp = isPrime(testPrime, primeList)
   if temp:
      primeList.append(testPrime)
      print(testPrime, end=" ", flush = True)
      if(len(primeList) % 10) == 9 and len(primeList) != 0:
         print("")
   #end if statement
   testPrime += 1
#end loop



"""
print(r'/n/n')
print("The first {0} primes are:".format(numPrime))
for x in range (len(primeList)):
   print(primeList[x], end=" ")
   if(x % 10) == 9 and x != 0:
      print("")
      #end new line maker after 10
   #end for
"""