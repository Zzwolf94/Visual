#!/usr/bin/env python3
# ctrl + l limpiar
# ctrl + c cortar
def main():
    a = 0 
    b = 0
    c = 0
    result = 0
    while True:
        try:
            a = float(input("Enter an integer for the first number: "))
            break
        except ValueError:
            print("Invalid input! Please enter an integer.")
    while True:
        try:
            b = float(input("Enter an integer for the second number: "))
            break
        except ValueError:
            print("Invalid input! Please enter an integer.")
    while True:
        try:
            c = float(input("Enter an integer for the third number: "))
            break
        except ValueError:
            print("Invalid input! Please enter an integer.") 
    
    
    result = ((c+5)*(b**2-(3*a*c))*a**2)/(4*a)
    
    result = int(result)    

    print("The result is: ", result)
    
main()