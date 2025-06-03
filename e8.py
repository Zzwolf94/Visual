temp = 0
def temperatura():
    
    while True:
        try:
           
            temp = float(input("Enter a temperature above absolute zero (-273.15°C): "))
            if (temp < -273.15):
                print("Please enter a valid number.")
            else:
                print("numero aceptado")

        except ValueError:
            print("Please enter a valid number.")

temperatura()



