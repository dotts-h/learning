class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sit(self):
        print(f"{self.name} is now sitting.")
        return self

    def roll_over(self):
        print(f"{self.name} rolled over!")
    
catel = Dog('luna', 10)
catel.sit().roll_over()
print(catel.name)