#!/usr/bin/env python3
# ctrl + l limpiar
# ctrl + c cortar
def main():
    a = 0 
    result = 0
    
    while True:
        try:
            a = float(input("Enter an integer for the first number: "))
            break
        except ValueError:
            print("Invalid input! Please enter an integer.")
    
    result = a % 2
    
    if result == 0:
        print(f"The number {a} is even.")
    else:
        print(f"The number {a} is odd.")
    
main()