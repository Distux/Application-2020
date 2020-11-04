from os import system, name 
import time
import random
import sys
import math



MAX_X = (15)
MAX_Y = (15)



class Monster:
  speed = 1
  def __init__(self, initHp, xPos, yPos):
    self.hp = initHp
    self.x = xPos
    self.y = yPos

  def move(self, charX, charY):
    #reference https://www.youtube.com/watch?v=DVYDkHdsTIM
    radians = math.atan2(charY-self.y, charX - self.x)
    newX = round(math.cos(radians))
    newY = round(math.sin(radians))
    return newX, newY



  
  def die(self):
    del self
  
  def checkStatus(self):
    if self.hp <= 0:
      self.die()
  


def clear(): 
    if name == 'nt': 
        _ = system('cls')    
    else: 
        _ = system('clear') 


def loading(initCount = None, initAct = None, initDots = None, initFinish = None):
  
  activity = "Loading"
  dots = "."
  finish = "Success!"
  #if count != None:
  #  count = initCount
  if initAct != None:
    activity = initAct
  if initDots != None:
    dots = initDots
  if initFinish != None:
    finish = initFinish
  count = 4
  while True:
    for x in range (0,count):  
      b = activity + dots * x
      print (b, end="\r")
      time.sleep(1)
    if random.randint(0,4) != 2:
      sys.stdout.write("\033[K")
      print(finish)
      time.sleep(1)
      break
    else:
      print("Unsuccessful.", end="\r")
      time.sleep(1)
      sys.stdout.write("\033[K")
      activity = "Retrying"

def gameOver():
  clear()
  print("You lose")
  sys.exit()

def printScreen():
  global screen
  clear()
  for x in reversed(range(MAX_X)):
    for y in range(MAX_Y):
      print(screen[y][x], end="  ")
    print()
  print("Health:", health, "Energy:", energy)

def clearGrid():
  global screen
  for x in range(MAX_X):
    for y in range(MAX_Y):
      screen[y][x] = 0

def checkBounds(pos):
  errors = 1
  while errors != 0:
    errors = 0
    if not pos[1] < MAX_Y:
      errors += 1
      pos[1] -= MAX_Y
    if pos[1] < 0:
      errors += 1
      pos[1] += MAX_Y
    if not pos[0] < MAX_X:
      errors += 1
      pos[0] -= MAX_X
    if pos[0] < 0:
      errors += 1
      pos[0] += MAX_X


def contact(pos):
  global energy
  global health
  tile = screen[pos[0]][pos[1]]
  if tile == "X":
    health -= 1
  elif tile == "E":
    energy += 1
  elif tile == "H":
    health += 1
    



def setPos(x, y, unit = None, mon = None):
  global screen
  #if the 3rd paramaeter is blank use C for character
  chara = "C"
  origin = []
  newPos = [x,y]
  monster = Monster(0,0,0)

  if unit != None:
    chara = unit
  if mon != None:
    monster = mon

  #check bounds
  checkBounds(newPos)
  if chara == "C":
    contact(newPos)
    origin.append(charPos[0])
    origin.append(charPos[1])
    checkBounds(origin)
  elif chara == "X":
    origin.append(monster.x)
    origin.append(monster.y)
    checkBounds(origin)
  
  
  #clear former position
  if chara == "C" or chara == "X":
    screen[origin[0]][origin[1]] = baseTile
  #set postion
  screen[newPos[0]][newPos[1]] = chara 
  #print(chara, newPos, "origin:", origin)

  
def up(numSpaces):
    #move character, dont change pos value because need for removal
    setPos(charPos[0], charPos[1] + numSpaces)
    charPos[1] += numSpaces
    checkBounds(charPos)
    
    
  
def down(numSpaces):
    #move character, dont change pos value because need for removal
    setPos(charPos[0], charPos[1] - numSpaces)
    charPos[1] -= numSpaces
    checkBounds(charPos)
    
  
def left(numSpaces):
    #move character, dont change pos value because need for removal
    setPos(charPos[0] - numSpaces, charPos[1])
    charPos[0]  -= numSpaces
    checkBounds(charPos)
    
  
def right(numSpaces):
    #move character, dont change pos value because need for removal
    setPos(charPos[0] + numSpaces, charPos[1])
    charPos[0] += numSpaces
    checkBounds(charPos)

def attack():
  monsters[0].hp -= 1
  monsters[0].checkStatus()
    

def command(speed):
  global turn
  move = input()
  if move == "w":
    up(speed)
  elif move == "s":
    down(speed)
  elif move == "a":
    left(speed)
  elif move == "d":
    right(speed)
  elif move == "e":
    attack()
  else: #so that the screen doesnt derp out
    printScreen()
    #turn -= 1

def title():
  user = "string"
  print("Hweeo")
  while user != "":
    user = input("Press ENTER to start or type HELP for commands.")
    if user.lower() == "help":
      clear()
      print("Use WASD to navigate the expanse and avoid the X's !")


def event():
  x = random.randint(0, MAX_X)
  y = random.randint(0, MAX_Y)
  e = random.randint(0, len(eventList) - 1)
  #if its a monster add it to the array 
  if eventList[e] == "X": 
    #if its above the max no of monsters do nothing
    if len(monsters) >= difficulty[1] - 1:
      eventList.append(baseTile) #make more difficult
      return
    #else add the monster to the monster data array
    monsters.append(Monster(difficulty[0], x, y))
  setPos(x, y, eventList[e])
      
def monsterTurn():
  for mon in monsters:
    monX, monY = mon.move(charPos[0], charPos[1])
    monX = int(monX + mon.x)
    monY = int(monY + mon.y)
    setPos(monX, monY, "X", mon)
    mon.x = monX
    mon.y = monY
  
#===========================================================
#main method
#===========================================================
difficulty = [1,5] #can make a 2d array for multiple difficulties, first number is the health and second is the max no of monsters
eventList = ["X", "H", "E"]
screen = [["-" for i in range(MAX_X)] for j in range(MAX_Y)]
baseTile = "-"
monsters = []
numMonsters = 0
charPos = [13,3]
turn = 0
speed = 1
energy = 0
health = 3
alive = True

title()
clear()
#loading()
clear()
setPos(13,3)
event()


while alive:
  printScreen()
  if turn != 0 and turn % 3 == 1:
    event()
  command(speed)
  monsterTurn()
  if health < 1:
    gameOver()
  #eventList.append("-") #decrease spawn rate
  #input()
  turn += 1

  



