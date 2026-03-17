from models import Animal, Dog, Cat

dog = Dog("Rex", 5, "Brown", "Shepherd")
cat = Cat("Murka", 3, "White", 9)

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())
    print()