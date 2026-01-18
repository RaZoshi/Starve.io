var set_french = function () {

/* NEW */

LANG[INV.DRAGON_CUBE       ] = ["You feel a great power emanating from this orb"];
DIE[22] = ["This crab, though frightening in nature, pinched your fingertips so hard that you had a heart attack."];//CRAB: 22
LANG[INV.CRAB_STICK        ] = ["Crab sticks", "Oh, yeah? Is there crab in the crab sticks?", "Food: 20"];

LANG[TEXT.BACK_TO_THE_GAME] = " RETOUR AU JEU";
LANG[TEXT.TWITTER         ] = " Partage sur Twitter";
LANG[TEXT.FACEBOOK        ] = " Partage sur Facebook";
LANG[TEXT.KIT_NEXT        ] = "Tu peux acheter des objets dans le magasin à ta prochaine partie avec tes points";
LANG[TEXT.POINTS          ] = "points";
LANG[TEXT.SCORE           ] = "Score";
LANG[TEXT.KILL            ] = "Tués";
LANG[TEXT.DAYS_SURVIVED   ] = "Jours survécus";

LANG[TEXT.MODE_FREE       ] = "Mode de construction: Libre. Appuie sur G pour changer";
LANG[TEXT.MODE_GRID       ] = "Mode de construction: Grille. Appuie sur G pour changer";

LANG[INV.CRAB_LOOT        ] = ["Pince de crabe", "Les pinces de crabes peuvent aussi être mangées", "Food: 10"];
LANG[INV.CRAB_SPEAR       ] = ["Lance en crabe", "Te permet de soigner les crabes et de les calmer", "Donne un bonus de +10 degats quand elle est portée", "avec un casque un crabe sur un Crab King", "Damage: 14", "Building Damage: 4"];
LANG[INV.CROWN_CRAB       ] = ["Casque en crabe", "Tu es le Roi des Crabes!", "Les crabes te suivent", "Ils ne peuvent pas te frapper et toi non plus", "Players Defense: 4", "Animals Defense: 13"];
LANG[INV.BED              ] = ["Lit", "Repose-toi dans ce lit douillet", "Tu as moins froid, moins faim et moins soif", "Tu te régénères plus vite", "Durability: 400"];

document.getElementById ("typequest").innerHTML = "Chrono Quêtes";
document.getElementById ("timeremainingquest").innerHTML = "Temps Restant";
document.getElementById ("constraintquest").innerHTML = " Contraintes";
document.getElementById ("claim_rewards").innerHTML = " Résultat";
document.getElementById ("rewardquest").innerHTML = " Récompenses";
document.getElementById ("killdragon_1").innerHTML = " Collecte 1 Cœur de dragon dans la cave";
document.getElementById ("amethyst_2").innerHTML = " Récolte 1 améthyste";
document.getElementById ("survive20min_3").innerHTML = "Survis sans perdre de vie";
document.getElementById ("treasure_chest_4").innerHTML = " Ouvre 5 coffres au trésor";
document.getElementById ("dont_hit_5").innerHTML = " Sois pacifique";
document.getElementById ("bread_6").innerHTML = " Cuisine 100 pains en hiver, seul et sans retour en arrière";
document.getElementById ("winter_7").innerHTML = " Après 1 jour, survis en hiver";
for (var i = 0 ; i < 7 ; i++)
	document.getElementById ("claim_reward_" + i).innerHTML = "RÉCOMPENSE!";
document.getElementById ("quit_chronoquest").innerHTML = " QUITTER";

	/* END NEW */

LANG[INV.HAND              ] = ["Main"];
LANG[INV.GROUND            ] = ["Terre", "C'est sale!"];
LANG[INV.SAND              ] = ["Sable", "J'en ai dans les yeux"];
LANG[INV.WOOD              ] = ["Bois", "Tu n'en auras jamais trop!"];
LANG[INV.STONE             ] = ["Pierre", "Aussi appelée roche"];
LANG[INV.GOLD              ] = ["Or", "Sois généreux, donne en aux autres"];
LANG[INV.DIAMOND           ] = ["Diamant", "Comme tes yeux! wesh"];
LANG[INV.AMETHYST          ] = ["Améthyste", "C'est Mauve comme Lapa"];

LANG[INV.FLOUR             ] = ["Farine", "Utile pour la cuisine"];
LANG[INV.COOKIE            ] = ["Cookie", "Un somptueux cookie de Grand-Mère", "Nourriture: 50"];
LANG[INV.CAKE              ] = ["Gâteau", "Pour les fins gourmets", "Nourriture: 100"];
LANG[INV.MEAT              ] = ["Viande crue", "Tu peux la cuisiner avec du feu", "Intoxication: 10", "Nourriture: 15"];
LANG[INV.COOKED_MEAT       ] = ["Viande cuite", "Un steak saignant, s'il vous plait", "Nourriture: 35"];
LANG[INV.FOODFISH          ] = ["Poisson cru", "Je crois que c'est encore vivant", "Intoxication: 10", "Nourriture: 18"];
LANG[INV.FOODFISH_COOKED   ] = ["Poisson cuit", "Avec du citron, c'est parfait", "Nourriture: 35"];
LANG[INV.BREAD             ] = ["Baguette", "Une tradition s'il vous plait", "C'est la monnaie du marché", "Nourriture: 15"];
LANG[INV.SANDWICH          ] = ["Sandwich", "Le Jambon Beurre vaincra", "Nourriture: 100"];
LANG[INV.CANDY             ] = ["Bonbons", "Il n'y a pas de dentiste ici", "Nourriture: 100"];
LANG[INV.SUGAR_CAN         ] = ["Canne à sucre", "Sans sucre de canne", "Nourriture: 20"];
LANG[INV.GARLAND           ] = ["Guirlandes", "Utilisable sur les toits"];

LANG[INV.SEED              ] = ["Graines de baies", "Deviennent des baies", "Naissance: 2min", "Croissance: 55s", "Arrosage: 3min 20s", "Durabilité: 700", "Durée de vie: 8 jours"];
LANG[INV.PLANT             ] = ["Baies", "Peu nourrissant", "Nourriture: 10"];
LANG[INV.WHEAT_SEED        ] = ["Graines de blé", "Deviennent du blé", "Naissance: 2min", "Croissance: 16s", "Arrosage: 2min", "Durabilité: 700", "Durée de vie: 8 jours"];
LANG[INV.WILD_WHEAT        ] = ["Blé", "Peut être transformé en farine dans les moulins"];
LANG[INV.PUMPKIN_SEED      ] = ["Graines de citrouille", "Deviennent des citrouilles", "Naissance: 2min 40s", "Croissance: 2min", "Arrosage: 2min", "Durabilité: 700", "Durée de vie: 8 jours"];
LANG[INV.PUMPKIN           ] = ["Citrouille", "Ça me rappelle Halloween", "Nourriture: 30"];
LANG[INV.GARLIC_SEED       ] = ["Graines d'ail", "Très dangereux pour les vampires", "Dégâts: 20", "Naissance: 4min", "Croissance: 1min 10s", "Arrosage: 1min 40s", "Durabilité: 700", "Durée de vie: 8 jours"];
LANG[INV.GARLIC            ] = ["Ail", "Soigne et réduit le froid", "Nourriture: 14", "Soigne sur le temps: 30", "Effet: 1 fois"];
LANG[INV.THORNBUSH_SEED    ] = ["Graines de ronces", "Peuvent blesser vos ennemis", "Dégâts: 20", "Naissance: 4min", "Croissance: 15s", "Arrosage: 3min", "Durabilité: 1000", "Durée de vie: 8 jours"];
LANG[INV.THORNBUSH         ] = ["Ronces", "Ça pique!"];
LANG[INV.PLOT              ] = ["Terreau", "Indispensable", "Vos plantes grandiront plus vite", "et auront besoin de moins d'eau", "Durabilité: 2000"];
LANG[INV.ICE               ] = ["Glace", "Pratique pour faire de l'eau et des gâteaux"];
LANG[INV.SPANNER           ] = ["Clé à molette", "Pour réparer les portes, les murs et les piques", "Dégâts: 2"];

LANG[INV.FUR_WOLF          ] = ["Peau de loup", "Il était où le gentil ti Youki?"];
LANG[INV.FUR               ] = ["Peau de lapin", "Vous êtes un monstre"];
LANG[INV.SPECIAL_FUR       ] = ["Fourrure blanche", "Tu es une usine à pain"];
LANG[INV.SPECIAL_FUR_2     ] = ["Fourrure noire", "Tu te sens prêt à faire quelque chose de mal"];
LANG[INV.FUR_WINTER        ] = ["Fourrure d'hiver", "Il voulait juste un calin"];
LANG[INV.SCALES            ] = ["Écailles", "Ça sent le poisson!"];
LANG[INV.KRAKEN_SKIN       ] = ["Peau du kraken", "Tu n'as pas eu trop peur?"];

LANG[INV.FIRE              ] = ["Feu de camp", "Réchauffe", "Durabilité: 150", "Durée de vie: 2min"];
LANG[INV.BIG_FIRE          ] = ["Grand feu de camp", "Réchauffe plus longtemps", "Durabilité: 400", "Durée de vie: 6min"];
LANG[INV.WORKBENCH         ] = ["Établi", "Utile pour fabriquer toute sorte d'objets"];
LANG[INV.CORD              ] = ["Fil", "Utile pour faire des chapeaux et un sac"];
LANG[INV.BLUE_CORD         ] = ["Fil de diamant", "Utile pour faire des chapeaux"];
LANG[INV.CHEST             ] = ["Coffre", "Permet de ranger des objets", "Durabilité: 500"];

LANG[INV.SWORD_WOOD        ] = ["Épée en bois", "C'est pour les enfants", "Dégâts: 12", "Démolition: 4"];
LANG[INV.SWORD             ] = ["Épée en pierre", "Sois gentil avec les autres", "Dégâts: 19", "Démolition: 6"];
LANG[INV.SWORD_GOLD        ] = ["Épée en or", "Roi de la forêt", "Dégâts: 22", "Démolition: 7"];
LANG[INV.SWORD_DIAMOND     ] = ["Épée en diamant", "Tu te sens puissant", "Dégâts: 24", "Démolition: 8"];
LANG[INV.PIRATE_SWORD      ] = ["Épée de pirate", "Marin d'eau douce!", "Meilleure portée qu'une épée normale", "Dégâts: 24", "Démolition: 8"];
LANG[INV.SWORD_AMETHYST    ] = ["Épée en améthyste", "Mauve est la plus belle couleur du monde", "Dégâts: 27", "Démolition: 9"];
LANG[INV.DRAGON_SWORD      ] = ["Épée du Dragon", "Pas de pitié!", "Dégâts: 30", "Démolition: 10"];
LANG[INV.DRAGON_SPEAR      ] = ["Lance du Dragon", "Tuez-les tous!", "Dégâts: 22", "Démolition: 6"];

LANG[INV.PICK_WOOD         ] = ["Pioche en bois", "Peut récolter du bois et de la pierre", "Dégâts: 1"];
LANG[INV.PICK              ] = ["Pioche en pierre", "Peut aussi récolter de l'or", "Dégâts: 2"];
LANG[INV.PICK_GOLD         ] = ["Pioche en or", "Peut aussi récolter du diamant", "Dégâts: 3", "Démolition: 1"];
LANG[INV.PICK_DIAMOND      ] = ["Pioche en diamant", "Peut tout récolter", "Dégâts: 4", "Démolition: 1"];
LANG[INV.PICK_AMETHYST     ] = ["Pioche en améthyste", "Peut tout récolter", "Dégâts: 5", "Démolition: 1"];

LANG[INV.HAMMER            ] = ["Marteau en pierre", "Utile pour détruire les bâtiments", "Ne marche pas bien sur du diamant et améthyste", "Dégâts: 2", "Démolition: 20"];
LANG[INV.HAMMER_GOLD       ] = ["Marteau en or", "Utile pour détruire les bâtiments", "Ne marche pas bien sur l'améthyste", "Dégâts: 3", "Démolition: 30"];
LANG[INV.HAMMER_DIAMOND    ] = ["Marteau en diamant", "Utile pour détruire les bâtiments", "Dégâts: 4", "Démolition: 40"];
LANG[INV.HAMMER_AMETHYST   ] = ["Marteau en améthyste", "Utile pour détruire les bâtiments", "Dégâts: 5", "Démolition: 50"];
LANG[INV.SUPER_HAMMER      ] = ["Super Marteau", "As-tu prévu de détruire le monde?", "Dégâts: 12", "Démolition: 70"];

LANG[INV.WOOD_SPEAR        ] = ["Lance en bois", "Plus de peur que de mal", "Dégâts: 10", "Démolition: 2"];
LANG[INV.SPEAR             ] = ["Lance en pierre", "C'est le début de l'évolution", "Dégâts: 14", "Démolition: 4"];
LANG[INV.GOLD_SPEAR        ] = ["Lance en or", "Attention, ça pique!", "Dégâts: 15", "Buildings Dégâts: 5"];
LANG[INV.DIAMOND_SPEAR     ] = ["Lance en diamant", "Tu es prêt à tuer les dragons", "Dégâts: 17", "Buildings Dégâts: 5"];
LANG[INV.AMETHYST_SPEAR    ] = ["Lance en améthyste", "Les dragons ne te font plus peur",  "Dégâts: 18", "Buildings Dégâts: 6"];

LANG[INV.SHOVEL            ] = ["Pelle en pierre", "Creuse la terre, le sable et la neige", "Peut aussi récupérer des minéraux", "Dégâts: 2"];
LANG[INV.SHOVEL_GOLD       ] = ["Pelle en or", "Creuse la terre, le sable et la neige", "Peut aussi récupérer des minéraux", "Dégâts: 3", "Buildings Dégâts: 1"];
LANG[INV.SHOVEL_DIAMOND    ] = ["Pelle en diamant", "Creuse la terre, le sable et la neige", "Peut aussi récupérer des minéraux", "Dégâts: 4", "Buildings Dégâts: 1"];
LANG[INV.SHOVEL_AMETHYST   ] = ["Pelle en améthyste", "Creuse la terre, le sable et la neige", "Peut aussi récupérer des minéraux",  "Dégâts: 5", "Buildings Dégâts: 1"];

LANG[INV.WOOD_HELMET       ] = ["Casque en bois", "Mieux que rien", "Défense: 1", "Défense contre animaux: 4"];
LANG[INV.STONE_HELMET      ] = ["Casque en pierre", "Prêt pour la bataille", "Défense: 2", "Défense contre animaux: 8"];
LANG[INV.GOLD_HELMET       ] = ["Casque en or", "Alias le casque des sauvages", "Défense: 4", "Défense contre animaux: 13"];
LANG[INV.DIAMOND_HELMET    ] = ["Casque en diamant", "Ne te vante pas trop", "Défense: 5", "Défense contre animaux: 19"];
LANG[INV.AMETHYST_HELMET   ] = ["Casque en améthyste", "Tu n'as plus peur de rien", "Défense: 6", "Défense contre animaux: 23"];
LANG[INV.DRAGON_HELMET     ] = ["Casque du Dragon", "Tu vas conquérir le monde", "Défense: 8", "Défense contre animaux: 27"];

LANG[INV.EXPLORER_HAT      ] = ["Chapeau d'explorateur", "Les animaux t'ignorent", "Mais ne faites pas de bruit!", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.CHRISTMAS_HAT     ] = ["Chapeau du Père Noël", "Oh, oh, oh, Joyeux Nöel!", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.ELF_HAT           ] = ["Chapeau du lutin de Nöel", "Tu as vu le nouveau chef d'oeuvre d'Alain Chabat?", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.HOOD              ] = ["Capuche", "Voyou!", "Tu peux voler seulement si", "1) Il fait nuit", "2) Tu as les mains libres", "3) Tu n'as pas été touché depuis 8 secondes", "4) Tu es loin d'un feu", "5) Ta cible n'est pas un paysan", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.EARMUFFS          ] = ["Cache-oreilles", "Une sorte de petite chapka.", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.COAT              ] = ["Chapka", "Comment ça va, camarade?", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.CAP_SCARF         ] = ["Bonnet d'hiver", "Très confortable", "Très chaud"];
LANG[INV.PEASANT           ] = ["Tunique", "Les plantes poussent plus vite", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.WINTER_HOOD       ] = ["Capuche d'hiver", "Tu peux voler seulement si", "1) Il fait nuit", "2) Tu as les mains libres", "3) Tu n'as pas été touché depuis 4 secondes", "4) Tu es loin d'un feu", "5) Ta cible n'est pas un paysan d'hiver", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.WINTER_PEASANT    ] = ["Tunique d'hiver", "Tes plantes poussent plus vite", "Réchauffe en dehors de l'eau et dans l'hiver"];
LANG[INV.DIVING_MASK       ] = ["Masque de plongée", "Tu es rapide dans l'eau", "Réchauffe dans l'eau", "Défense: 2, Défense contre animaux: 8"];
LANG[INV.SUPER_DIVING_SUIT ] = ["Scaphandre", "Tu es très rapide dans l'eau", "Réchauffe dans l'eau", "Défense: 4, Défense contre animaux: 16"];

LANG[INV.DRAGON_ORB        ] = ["Orbe du Dragon", "Donné en Quête"];
LANG[INV.DRAGON_HEART      ] = ["Coeur de Dragon", "Te change en fantôme!", "Tu es un fantôme pendant 1 min", "Trouve une pierre de résurrection",];
LANG[INV.GEMME_GREEN       ] = ["Gemme verte", "Tu n'as pas triché, promis?"];
LANG[INV.GEMME_ORANGE      ] = ["Gemme orange", "Seul un vrai pirate peut l'obtenir!"];
LANG[INV.GEMME_BLUE        ] = ["Gemme bleue", "Pour les gens trop gentils"];
LANG[INV.CROWN_GREEN       ] = ["Couronne verte", "Te soigne très rapidement", "Soigne sur le temps: 40", "Défense: 4, Défense contre animaux: 16"];
LANG[INV.CROWN_ORANGE      ] = ["Couronne orange", "Tu te sens soudainement très chanceux", "Défense: 4, Défense contre animaux: 16"];
LANG[INV.CROWN_BLUE        ] = ["Couronne bleue", "Une fois mort, tu deviens un fantôme", "Tu perdras toutes tes arguments", "Défense: 4, Défense contre animaux: 16"];

LANG[INV.BUCKET_FULL       ] = ["Seau", "Utile pour remplir un puit", "Un sceau est équivalent à 20 bouteilles"];
LANG[INV.BUCKET_EMPTY      ] = ["Seau vide", "Pour remplir ce seau, approche-toi d'une source d'eau"];
LANG[INV.BOTTLE_FULL       ] = ["Bouteille", "Te permet de boire n'importe où", "Eau: 50"];
LANG[INV.BOTTLE_EMPTY      ] = ["Bouteille vide", "Tu peux remplir cette bouteille près d'une source d'eau"];
LANG[INV.WATERING_CAN      ] = ["Arrosoir vide", "Doit être rempli près d'une source d'eau"];
LANG[INV.WATERING_CAN_FULL ] = ["Arrosoir", "Permet d'arroser les plantes", "Dégâts: 1"];

LANG[INV.BAG               ] = ["Sac", "Plus de place dans ton inventaire!"];
LANG[INV.PAPER             ] = ["Papier", "Pour fabriquer toute sorte d'objets"];
LANG[INV.BOOK              ] = ["Livre", "Réduit considérablement le temps de fabrication", "Doit être porté pour fonctionner", "Dégâts: 1"];
LANG[INV.BANDAGE           ] = ["Bandage", "Soigne plus rapidement", "Soigne sur le temps: 30", "Effet: 5"];
LANG[INV.LOCK              ] = ["Cadenas", "Pour verrouiller un coffre"];
LANG[INV.LOCKPICK          ] = ["Clé", "Pour déverrouiller un coffre"];
LANG[INV.TOTEM             ] = ["Totem", "Te permet de créer une équipe", "Partage les portes et les coffres", "Les piques ne toucheront pas tes amis"];
LANG[INV.BRIDGE            ] = ["Pont", "Très utile sur l'eau", "Te permet de boire sans te noyer", "Marche plus vite sur l'eau"];
LANG[INV.SIGN              ] = ["Pancarte", "Laisse un message aux autres", "Durabilité: 200"];
LANG[INV.ROOF              ] = ["Toit", "Te cache un peu et te réchauffe"];
LANG[INV.WELL              ] = ["Puit", "Permet de remplir des bouteilles", "Durabilité: 1000"];
LANG[INV.WALL              ] = ["Mur en bois", "Tu connais la danse des murs?", "Durabilité: 1000"];
LANG[INV.STONE_WALL        ] = ["Mur en pierre", "Ça fait un peu plus sérieux", "Durabilité: 1500"];
LANG[INV.GOLD_WALL         ] = ["Mur en or", "De l'or sur tes murs? C'est un peu voyant", "Durabilité: 2000"];
LANG[INV.DIAMOND_WALL      ] = ["Mur en diamant", "Très brillant, cache tes yeux", "Durabilité: 2500"];
LANG[INV.AMETHYST_WALL     ] = ["Mur en améthyste", "Tu dois avoir très peur de sortir dehors!", "Durabilité: 3500"];
LANG[INV.SPIKE             ] = ["Piques en bois", "Peut blesser tes ennemis", "Dégâts: 10, Dégâts par coup: 2", "Durabilité: 150"];
LANG[INV.STONE_SPIKE       ] = ["Pique en pierre", "Je ne voudrais pas être ton ennemi", "Dégâts: 20", "Dégâts par coup: 3", "Durabilité: 300"];
LANG[INV.GOLD_SPIKE        ] = ["Pique en or", "Tu es si cruel", "Dégâts: 30", "Dégâts par coup: 3", "Durabilité: 600"];
LANG[INV.DIAMOND_SPIKE     ] = ["Pique en diamant", "Tu n'as pas l'air d'aimer la compagnie", "Dégâts: 40", "Dégâts par coup: 4", "Durabilité: 1200"];
LANG[INV.AMETHYST_SPIKE    ] = ["Pique en améthyste", "Mais qu'est ce que ton voisin t'a fait?", "Dégâts: 50", "Dégâts par coup: 4", "Durabilité: 2400"];
LANG[INV.WOOD_DOOR         ] = ["Porte en bois", "Peut être ouvert ou fermé par toi ou tes amis", "Durabilité: 1000"];
LANG[INV.STONE_DOOR        ] = ["Porte en pierre", "Tu connais les trois petits cochons?", "Durabilité: 1500"];
LANG[INV.GOLD_DOOR         ] = ["Porte en or", "Tu reconstruis l'el dorado?", "Durabilité: 2000"];
LANG[INV.DIAMOND_DOOR      ] = ["Porte en diamant", "Pour une maison éclatante", "Durabilité: 2500"];
LANG[INV.AMETHYST_DOOR     ] = ["Porte en améthyste", "Est-ce que ta maison est un coffre-fort?", "Durabilité: 3000"];

LANG[INV.FURNACE           ] = ["Chaudière", "Réchauffe", "Consume du bois toutes les 5 sec", "Durabilité: 1000"];
LANG[INV.WINDMILL          ] = ["Moulin", "Peut produire de la farine à partir du blé", "Prends 5 sec pour faire de la farine", "Tu obtiens des points quand c'est en marche", "Durabilité: 2000"];
LANG[INV.BREAD_OVEN        ] = ["Four à pain", "Produit du pain avec de la farine et du bois", "Prends 10 sec pour faire du pain", "Tu obtiens des points quand c'est en marche", "Durabilité: 2000"];
LANG[INV.RESURRECTION      ] = ["Pierre de résurrection", "Magie magie!", "Te ressuscite si tu es un fantôme", "Tu perds toutes tes armes", "Durabilité: 200"];

LANG[TEXT.YOU_CANNOT_JOIN] = "Tu ne peux pas rejoindre le serveur";
LANG[TEXT.KICKED] = "Expulsé: ";
LANG[TEXT.KEY_ALREADY] = "Ta clé est déjà utilisée par quelqu'un d'autre";
LANG[TEXT.KEY_WRONG] = "Ta clé est fausse";
LANG[TEXT.OLD_VERSION] = "Tu as une vieille version, rafraichis tes caches";
LANG[TEXT.NO_MORE_RESOURCES] = "Il n'y a plus de nouvelles ressources";
LANG[TEXT.SURVIVED_1DAY] = "Tu as survécu 1 jour";
LANG[TEXT.SURVIVED] = "Tu as survécu ";
LANG[TEXT.DAYS] = " jours";
LANG[TEXT.DEAD_SAD] = "Tu es mort ;-;";
LANG[TEXT.SPAM_ME] = "Le serveur ne trouve pas de points d'apparitions! Spam le bouton jouer!";
LANG[TEXT.SPAM_ME2] = "Le serveur est complet! Spam le bouton jouer";
LANG[TEXT.EMPTY] = "Cette ressource est vide";
LANG[TEXT.INV_FULL] = "Ton inventaire est rempli (Clic droit pour supprimer un objet)";
LANG[TEXT.DEAD] = " est mort";
LANG[TEXT.WRONG_TOOL] = "Ce n'est pas le bon outil";
LANG[TEXT.JOIN_TEAM] = "Tu as rejoins une équipe";
LANG[TEXT.YOU_DEAD] = "Tu es mort";
LANG[TEXT.JOINED_TEAM] = " a rejoint l'équipe";
LANG[TEXT.TEAM_DESTROYED] = "Ton équipe a été détruite";
LANG[TEXT.LEFT_TEAM] = "Tu as quitté l'équipe";
LANG[TEXT.LEFT_TEAM2] = " a quitté l'équipe";
LANG[TEXT.TOKEN] = "Quelqu'un a volé ton token :>";
LANG[TEXT.CHOOSE] = "Choisis un serveur";
LANG[TEXT.PLAYERS] = "joueurs";
LANG[TEXT.TOTAL_PLAYERS] = "joueurs";
LANG[TEXT.TOTAL_MODE] = "joueurs dans ce mode";
LANG[TEXT.COMMING_SOON] = "Bientôt...";

document.getElementById ("nickname_input").placeholder = "Surnom";

DIE[0]  = ["Tu as été tué sans raison particulière, juste comme ça"];//UNKNOWN : 0,
DIE[1]  = ["Tu es mort de faim, c'est plutôt ironique, non?"];//STARVE  : 2,
DIE[2]  = ["Tu es mort de froid. Dommage", "Tu as fait une hypothermie, la prochaine fois reste près d'un feu"];//COLD    : 2,
DIE[3]  = ["Un joueur t'a tué, avant de mourir tu pouvais l'entendre rire", "Un joueur t'a tué, avec un peu de chance il mourra aussi"];//PLAYER  : 3,
DIE[4]  = ["Tu es resté sur un feu trop longtemps et tu es mort suite aux brûlures","Tu es mort en restant trop longtemps sur un feu, tu voulais finir comme Jeanne d'Arc?"];//FIRE    : 4,
DIE[5]  = ["Ton corps deviendra un nid pour les oeufs d'araignées."];//SPIDER  : 5,
DIE[6]  = ["Ce loup n'aura plus faim après t'avoir mangé","Ce ne sont pas des chiens. Les loups n'aiment pas être domestiqués."];//WOLF    : 6,
DIE[7]  = ["Ce renard était trop rapide pour toi","Ce renard t'a transformé en boîte"];//FOX     : 7,
DIE[8]  = ["Cet ours voulait juste un câlin."];//BEAR    : 8,
DIE[9]  = ["Tu as été brûlé par un dragon. Quel gâchis","Tu t'es fait écraser par un dragon. Une bien terrible façon de mourir..."];//DRAGON  : 9,
DIE[10] = ["Tu as sauté sur des piques, c'était pas une bonne idée...","Tu es mort sur des piques. La plupart des gens sont assez sensés pour ne pas toucher les choses pointues"];//SPIKE   : 10,
DIE[11] = ["Même les fantômes peuvent mourir","Tu n'as pas réussi à te ressusciter. Mais c'est un jeu, tu reviens à la vie après être mort, donc..."];//GHOST : 11
DIE[12] = ["Une bactérie logée dans la viande crue t'a tué. Ce jeu est vraiment trop dur.","Tu as tué l'animal, sa viande t'a tué."];//RAW FOOD : 12
DIE[13] = ["Tu es mort de soif. La prochaine fois, vas dans un lac, dans la mer ou fais-toi une bouteille"];// WATER : 13
DIE[14] = ["Tu t'es noyé. Essaye de construire un pont la prochaine fois"];// OXYGEN : 14
DIE[15] = ["Ne t'inquiète pas, le piranha t'a trouvé appétissant."];//PIRANHA : 15,
DIE[16] = ["Un kraken a 'kraké' tes os."];//KRAKEN : 16,
DIE[17] = ["Ta peau tombe en lambeau, le soleil t'a brûlé."];//SUN LIGHT : 17
DIE[18] = ["L'ail dans ta poche a fait bouillir ton cerveau."];//GARLIC_POCKET: 18
DIE[19] = ["En tant que vampire, ne reste pas à côté des gousses d'ail."];//GARLIC: 19
DIE[20] = ["Tu as mangé de l'ail en tant que vampire, tu t'attendais à quoi?"];//ATE GARLIC: 20
DIE[21] = ["Ton corps est tombé dans les ronces. En essayant de t'échapper, ta peau s'est arrachée et la douleur a fait arrêter de battre ton coeur. lol ça rime."];//THORNBUSH: 21

ZOMBIE_GRUMBLE = "Uuunnnggg";
ZOMBIE_GRUMBLES = [
	"Uuunnnggg... J'ai faim",
	"Manger cerveau, Uuunnnggg...",
	"Viande fraîche ici... Uuunnnggg",
	"Uuunnnggg... Tu as l'air bon",
	"Uuunnnggg...",
	"Manger... uuunnnggg...",
	"Je peux sentir ton sang... Uuunnnggg",
];
}
