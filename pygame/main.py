import pygame
# initialise pygame
pygame.init()

default = True
#creer une premiere classe : joueur
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super(default).__init__()
        self.health = 100
        self.max_health = 100
        self.attack = 10
        self.velocity = 5
        self.image = pygame.image.load("assets/player.png")
        self.rect = self.image.get_rect()
        self.rect.x = 400

#demarrer la fenetre
pygame.display.set_caption("Last Tree Standing")
screen = pygame.display.set_mode((1080, 720))

#importer / charger l'arriere plan
background = pygame.image.load("assets/bg.jpg")

#charger notre joueur
player=Player()

running = True

#Boucle tant que cette condition est vraie
while running:

    #appliquer la fenetre de notre jeu
    screen.blit(background, (0, -200))
    
    #appliquer l'image de mon joueur
    screen.blit(player.image, player.rect)

    # mettre a jour l'ecran
    pygame.display.flip()
    # si le joueur ferme cette fenetre
    for event in pygame.event.get():
        #
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()
            print("Fermeture du jeu")