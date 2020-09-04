category_names = [
'template',
'genre',
'genre_modifier',
'perspective',
'group_name',
'character',
'character_description',
'character_description_post',
'goal_prefix',
'goal',
'setting',
'setting_description',
'theme',
'mood',
'wildcard'
];

data = `
----------------- Notes ----------------- 
• Categories are defined by #categoryname: ... #end
• <a> will be replaced with a/an depending on context
• @name@ will be replaced with a call to the corresponding generate function
• Some generate functions also accept parameters: @name:comma,separated,parameters@


----------------- TEMPLATE ----------------- 

#template:
<a> @mood@ @genre@ game about @theme@ and @theme@, @wildcard@
<a> @mood@ @genre@ game @wildcard@ where you play as @character@ @goal@
<a> @mood@ @genre@ game about @theme@, where you play as @character:nopost@ @setting@
<a> @mood@ @genre@ game that takes place @setting@, where you play as @character@ @goal@
<a> @mood@ game about @theme@ [set, that takes place] @setting@, where you play as @character@ @goal@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres, where you play as @character@ @goal@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres, which tells a story of @theme@ and @theme@
<a> @mood@ @genre@ game @wildcard:always@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres @wildcard:always@
#end

----------------- GENRE (a ... game) ----------------- 
#genre:
platformeur
metroidvania
runner sans fin
jeu de tir
sport
stratégie
puzzle
jeu-de-rôle
roguelike
dating
survie
horreur
cartes
rhythme
aventure
tower defense
clicker
hack-and-slash
educationel
aventure textuelle
dactylographie
bac à sable
programmation
jeu de course de [bateau, voiture, kart, vélo, helicoptère]
simulation de [parc à thème, business, gestion de ville, ferme]
[pèche, football, cricket, basketball, hockey, tennis, tennis de table, baseball, golf, volley, combat à l'épée, équitation, snowboard, ski, skateboard]
#end

// a ... #genre game
#genre_modifier:
monde ouvert
tour-par-tour
sci-fiction
fantasie
#end

// a ... #genre game
#perspective:
2D
3D
première personne
trosième personne
vue du haut
isometrique
vue de côté
#end

----------------- CHARACTERS (you play as a...) ----------------- 
#group_name:
group
[faction, gang, famille, bande, horde]
[organisation, groupe]
#end

#character:
alien
monstre
magicien
sorcière
aventurier
assassin
marin
chef
robot
fantôme
humain
squelette
[cannard, oie, pingouin, poisson, baleine, requin]
[chiot, chien, chaton, chat, mammouth, dinosaure, dragon]
[abeille, fourmi, mouche, moustique]
bonhomme de neige
scientifique
programmeur
étudiant
youtuber
influencer
célébrité
président
politicien
[homme d'affaires, femme d'affaires]
empereur
dieu
ninja
technophobe
vampire
hacker
zombie
forme géométrique
voleur
pirate
intelligence artificielle
[prince, princesse, roi, reine]
[grand-mère, grand-père]
[troll, gobelin, orque, nain]
chevalier
agriculteur
astronaute
pilote
chocolatier
archéologue
médecin
agent de police
détective
pyromane
joueur
percepteur d'impôts
plombier
électricien
mécanicien
#end

----------------- DESCRIPTIONS (you play as a ... character) ----------------- 
#character_description:
minuscule
gigantesque
solitaire
facilement effrayés
extrêmement [séduisant.e, court.e, grand.e, intimidant.e, maladroit.e]
courageux.se
anxieux.se
célèbre
timide
effrayant
borgne
ennuyeux.se
ambitieux.se
avide de pouvoir
à deux têtes
wise
vieux/vielle
avide
invisible
magique
aveugle
pacifique
polie
inquiet
impoli
grincheux
charmant
énergique
imaginaire
[inamical, amical]
nerveux.se
optimiste
pessimiste
morts-vivants
excentrique
sarcastique
bien habillé
ludique
pauvre
riche
impatient.e
trop enthousiaste
magnifique
#end


#character_description_post:
voyageant dans le temps
génétiquement [modifié.e, amélioré.e]
paresseux.se
bavard
astucieux.se
qui vient [du futur, d'une autre planète, d'une autre dimension, d'une realité alternative, d'un univers parallèle]
qui n'a pas [d'amis, d'argent, de morales, d'âme]
qui adore [les chats, les poupées, rainbows, cars, spaceships, animals, flowers, long walks, writing, baking, gardening, fishing, fire]
who (is,are) passionate about [recycling, model trains, education, animal-rights, stamp-collecting, arcade games, board games, tea]
with [a tragic backstory, an adorable pet, a secret superpower, a secret identity]
who (can,can) [fly, bend time, turn invisible, teleport, summon spirits]
with a debilitating fear of [heights, ghosts, flying, water, being alone, people, blood, small spaces, crowds, spiders]
with a tendency to [overreact, faint at the sight of blood, spontaneously combust, over-share]
who (loathes,loathe) [violence, swimming, daylight, robots, humans, aliens]
with a controversial opinion on [politics, pizza toppings, education, robots, science]
who (is,are) addicted to [chocolate, pizza, fast-food, cartoons, danger, tea, coffee]
#end

----------------- GOALS (you play as a character/group of characters trying to...) ----------------- 

#goal_prefix:
[trying, attempting] to
who [desperately,] (wants,want) to
who will stop at nothing to
who (needs,need) to
#end

#goal:
find the secret to [eternal life, eternal youth, everlasting beauty]
save the world from @character:npc@
defeat @character:npc@
find [true love, a soul mate, a friend, peace and quiet]
become [filthy rich, world famous]
rule the world
find a [way home, new home, place to live]
pay off a debt
make the world a better place
make friends
[survive, avert, escape from] the [apocolypse, end of the world]
start a new [business, career, life]
pay the rent on time
leave the planet
eat more healthily
explore the [universe, world, galaxy]
solve a [mysterious, puzzling] case
[repair the, build <a>, protect the, destroy the] [spaceship, time-machine, armageddon-device]
cross [the road, a busy intersection, the galaxy, the ocean]
learn [photography, to play an instrument, to cook, to stop caring what others think]
found a new [religion, city, colony, school, guild, cult]
start a new life [on mars, in the country, in the city, on the moon, as a shepherd]
escape from @character:npc@
[gain the respect of @character:npc@, win the affection of @character:npc@]
rescue @character:npc@
#end

----------------- SETTINGS (a game set... / that takes place...) ----------------- 
#setting:
on <a> @setting_description@ [planet, spaceship, moon, star, rainbow, island, train, boat, mountain, rollercoaster, street, motorbike, bicycle, shipwreck, bouncy castle]
in <a> @setting_description@ [city, warehouse, graveyard, village, kingdom, sewer, shopping mall, nightclub, cave, labyrinth, park, parking lot, kitchen]
in <a> @setting_description@ [casino, library, junkyard, basement, dungeon, prison, tavern, resturant, cinema, valley, mansion, forest, jungle, office, hotel]
in the [distant future, distance past, recent past, near future, month of December, week before Christmas]
[in an alternate reality, in outer space, underwater, underground, in summer, in winter, in spring, in autumn]
inside [your head, a computer, a submarine, a dream, a nightmare, a bunker, a dumpster]
during [a great drought, the end of the world, an alien invasion, a massive flood, a volcano eruption, a terrible disaster, the reign of the @character_description@ king, the reign of the @character_description@ queen, the Renaissance, a war, a time of peace, a birthday party, an office party]
on the back of <a> @character_description@ [elephant, whale, turtle, giant, dolphin]
#end

Note: describes a location
#setting_description:
tiny
microscopic
enormous
spooky
alien
futuristic
ancient
forgotten
mysterious
forbidden
dangerous
holy
bustling
creepy
abandoned
popular
strange-smelling
hypnotic
radioactive
colourful
never-ending
strangely-decorated
tastefully-decorated
rat-infested
lively
vibrant
uninhabited
poorly-decorated
astonishing
critically-acclaimed
beautiful
boring
deadly
grubby
exotic
fabulous
glamorous
gloomy
well-hidden
undiscovered
jolly
luxurious
quaint
quirky
old-fashioned
unfashionable
modern
flying
floating
sinking
burning
mystical
magical
frozen
royal
#end

----------------- THEMES (a game about...) ----------------- 
#theme:
survival
cooking
farming
love
death
power
prejudice
hope
war
peace
friendship
revenge
betrayal
forgiveness
crime
punishment
aliens
isolation
chaos
the circle of life
fate
growing up
immortality
technology
totalitarianism
religion
tradition
mental illness
space travel
exploration
greed
justice
patriotism
corruption
exploitation
the end of the world
unfairness
hacking
artificial intelligence
the singularity
robot rights
extraterrestial life
illness
life after death
dancing
singing
bee-keeping
engineering
sewing
fashion
baking
stamp collecting
art
gardening
happiness
sadness
the concept of fun
chivalry
stereotypes
family
relationships
truth
lies
bravery
cowardice
mathematics
#end

----------------- MOOD (a ... game) ----------------- 
#mood:
unique
frustrating
challenging
rage-inducing
stressful
relaxing
meditative
calming
thought-provoking
addictive
[humorous, amusing]
whimsical
[scary, frightening, terrifying]
innovative
inspiring
groovey
artsy
upbeat
violent
peaceful
dreamy
stylish
short-and-sweet
slow-paced
intense
nostalgic
[strange, quirky, unusual] little
satirical
#end

----------------- WILDCARDS (a game ...) ----------------- 

#wildcard:
with <a> [hand-drawn, watercolour, graphic-novel, claymation, retro, low-poly, dream-like, abstract, cardboard-cutout] art style
controlled with [just one button, only two buttons, only the mouse, your voice]
in which [you explode, time freezes, time slows down, time speeds up, you shrink, you get bigger, the game gets harder] whenever you [stop moving, jump]
in which you only have one [life, item, inventory-slot, chance]
with <a> [time-travelling, grappling-hook] mechanic
which teaches the player [moral lessons, mathematics, geography, science, history, programming, cooking, random trivia]
with challenging boss fights
with a [cooperative, competitive] splitscreen mode
with an emphasis on [crafting, exploration, alchemy, creativity]
in which you need to collect [dreams, colours, memories]
with unlockable achievements
with lots of [procedurally generated content, character customization options]
with <a> [online,] leaderboard
designed with speedrunning in mind
with destructible terrain
with a built-in level editor
with a [funny, moving] story
#end
`;