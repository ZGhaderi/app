

from pynput.mouse import Button, Controller

mouse = Controller()

print ("Current position: " + str(mouse.position))

mouse.move = (500,200)
