#!/usr/bin/env python3
import sys

from pynput.mouse import Button, Controller
mouse = Controller()
# print("X: " + sys.argv[1]) 
# print("Y: " + sys.argv[2]) 
x = int(sys.argv[1])
y = int(sys.argv[2])
mouse.position = (x,y)
file = open("sample.txt","a")
file.write("mouse x is %d , y is %d\n" %(x,y))
file.close()
