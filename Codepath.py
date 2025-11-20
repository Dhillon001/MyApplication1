'''class Villager:
    def __init__(self, name, species, catchphrase):
        self.name = name
        self.species = species
        self.catchphrase = catchphrase
        self.furniture = []

# Instantiate your villager here
apollo = Villager("Apollo","Eagle","pah" )


print(apollo.name)  
print(apollo.species)  
print(apollo.catchphrase) 
print(apollo.furniture) 

'''


'''Problem 2

class Villager:
    def __init__(self, name, species, catchphrase):
        self.name = name
        self.species = species
        self.catchphrase = catchphrase
        self.furniture = []

    def greet_player(self, player_name):
        return f"{self.name}: Hey there, {player_name}! How's it going, {self.catchphrase}!"

bones = Villager("Bones", "Dog", "ruff it up")

player_name = "Samia"
print(bones.greet_player(player_name))

'''

class Villager:
    def __init__(self, name, species, catchphrase):
        self.name = name
        self.species = species
		        self.catchphrase = catchphrase
        self.furniture = []
	
	    def set_catchphrase(self, new_catchphrase):
		    if len(new_catchphrase) > 20:
                for i in new_catchphrase:
                    if not (i.isalpha() or i.isspace()):
                        return ("Invalid catchphrase")
                  
        


Example Usage:

alice = Villager("Alice", "Koala", "guvnor")

alice.set_catchphrase("sweet dreams")
print(alice.catchphrase)
alice.set_catchphrase("#?!")
print(alice.catchphrase)
Example Output:
'''
Example 1:
Catchphrase Updated!
sweet dreams
Invalid catchphrase
sweet dreams

'''