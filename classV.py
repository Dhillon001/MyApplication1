class Villager:
    def __init__(self, name, species, catchphrase):
        self.name = name
        self.species = species
        self.catchphrase = catchphrase
        self.furniture = []
	
    def set_catchphrase(self, new_catchphrase):
        if len(new_catchphrase) < 20:
            for i in new_catchphrase:
                if not (i.isalpha() or i.isspace()):
                    print ("Invalid catchphrase")
                    return
                
            self.catchphrase = new_catchphrase
            print ("Catchphase updated!")
        else : 
            print ("Invalid Catchphase")
        
         
                  
        



alice = Villager("Alice", "Koala", "guvnor")

alice.set_catchphrase("sweet dreams")
print(alice.catchphrase)
alice.set_catchphrase("#?!")
print(alice.catchphrase)

'''
Example Output:

Example 1:
Catchphrase Updated!
sweet dreams
Invalid catchphrase
sweet dreams

'''