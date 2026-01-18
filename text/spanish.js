var set_spanish = function () {

	/* NEW */

	LANG[INV.DRAGON_CUBE       ] = ["You feel a great power emanating from this orb"];
	DIE[22] = ["This crab, though frightening in nature, pinched your fingertips so hard that you had a heart attack."];//CRAB: 22
	LANG[INV.CRAB_STICK        ] = ["Crab sticks", "Oh, yeah? Is there crab in the crab sticks?", "Food: 20"];

	LANG[TEXT.BACK_TO_THE_GAME] = " BACK TO THE GAME";
	LANG[TEXT.TWITTER         ] = " Share on Twitter";
	LANG[TEXT.FACEBOOK        ] = " Share on Facebook";
	LANG[TEXT.KIT_NEXT        ] = "You can buy items on the shop in the next game with your points";
	LANG[TEXT.POINTS          ] = "points";
	LANG[TEXT.SCORE           ] = "Score";
	LANG[TEXT.KILL            ] = "Kill";
	LANG[TEXT.DAYS_SURVIVED   ] = "Days survived";

	LANG[TEXT.MODE_FREE       ] = "Building method: Free. Press G to change";
	LANG[TEXT.MODE_GRID       ] = "Building method: Grid. Press G to change";

	LANG[INV.CRAB_LOOT        ] = ["Crab Claw", "Crab claws can also be eaten", "Food: 10"];
	LANG[INV.CRAB_SPEAR       ] = ["Crab Spear", "Allow you to calm crabs, and heal them", "Damage: 14", "Building Damage: 4"];
	LANG[INV.CROWN_CRAB       ] = ["Crab Helmet", "You are the king of crabs!", "Crabs follow you", "They can't hit you and you can't hit them", "Players Defense: 4", "Animals Defense: 13"];
	LANG[INV.BED              ] = ["Bed", "Relax in this confortable bed", "You are less cold, less thirsty, and less hungry", "You will be cured faster", "Durability: 400"];

	document.getElementById ("typequest").innerHTML = "Chrono Quests";
	document.getElementById ("timeremainingquest").innerHTML = "Time Remaining";
	document.getElementById ("constraintquest").innerHTML = " Constraints";
	document.getElementById ("claim_rewards").innerHTML = " Claim rewards";
	document.getElementById ("rewardquest").innerHTML = " Reward";
	document.getElementById ("killdragon_1").innerHTML = " Collect 1 dragon heart";
	document.getElementById ("amethyst_2").innerHTML = " Gather 1 amethyst";
	document.getElementById ("survive20min_3").innerHTML = "Survive without losing life";
	document.getElementById ("treasure_chest_4").innerHTML = " Open 5 treasure chests";
	document.getElementById ("dont_hit_5").innerHTML = " Be peaceful";
	document.getElementById ("bread_6").innerHTML = " Collect 100 bread in deep winter";
	document.getElementById ("winter_7").innerHTML = " After 1 day, survive in winter";
	for (var i = 0 ; i < 7 ; i++)
		document.getElementById ("claim_reward_" + i).innerHTML = "CLAIM REWARD!";
	document.getElementById ("quit_chronoquest").innerHTML = " QUIT";

	/* END NEW */

	LANG[INV.HAND              ] = ["Mano"];
	LANG[INV.GROUND            ] = ["Tierra", "¡Tan limpia como mis manos!"];
	LANG[INV.SAND              ] = ["Arena", "¡Tengo arena en mis ojos!"];
	LANG[INV.WOOD              ] = ["Madera", "¡Nunca hay suficiente!"];
	LANG[INV.STONE             ] = ["Piedra", "También llamada roca."];
	LANG[INV.GOLD              ] = ["Oro", "Sé generoso, compártelo con los otros"];
	LANG[INV.DIAMOND           ] = ["Diamante", "¿Que vas a hacer con él?"];
	LANG[INV.AMETHYST          ] = ["Amatista", "Es Mauve como Lapa"];

	LANG[INV.FLOUR             ] = ["Harina", "Usada para cocinar."];
	LANG[INV.COOKIE            ] = ["Galleta", "Una galleta de la abuelita", "Comida: 50"];
	LANG[INV.CAKE              ] = ["Tarta", "¡Cumpleaños Feliz!", "Comida: 100"];
	LANG[INV.MEAT              ] = ["Carne Cruda", "Se cocina con fuego", "Causa veneno. 10", "Comida: 15"];
	LANG[INV.COOKED_MEAT       ] = ["Carne Cocinada", "es la supervivencia del más fuerte :'(", "Comida: 35"];
	LANG[INV.FOODFISH          ] = ["Pescado Crudo", "Creo que sigue vivo", "Causa veneno de comida: 10", "Comida: 18"];
	LANG[INV.FOODFISH_COOKED   ] = ["Pescado Cocinado", "Con limón sería perfecto", "Comida: 35"];
	LANG[INV.BREAD             ] = ["Pan", "¡Caliente, desde Francia!", "Es dinero usado en la tienda", "Comida: 15"];
	LANG[INV.SANDWICH          ] = ["Bocadillo", "Sabe como un Krabby Patty", "Comida: 100"];
	LANG[INV.CANDY             ] = ["Caramelos", "¡Solo para niños/as!", "Comida: 100"];
	LANG[INV.SUGAR_CAN         ] = ["Caña de Azúcar", "Pruébala, es deliciosa", "Comida: 100"];
	LANG[INV.GARLAND           ] = ["Guirnalda", "Perfecta para decorar el techo"];

	LANG[INV.SEED              ] = ["Semillas de Bayas", "Se convierte en bayas", "Nacimiento: 2 Minutos", "Crecimiento: 55 Segundos", "Necesita agua: 3 Minutos 20 Segundos", "Durabilidad: 700", "Tiempo de vida: 8 Días"];
	LANG[INV.PLANT             ] = ["Baya", "No es venenosa.", "Comida: 10"];
	LANG[INV.WHEAT_SEED        ] = ["Semilla de Trigo", "Se convierte en Trigo ", "Nacimiento: 2 Minutos", "Crecimiento: 16 Segundos", "Necesita agua: 2 Minutos", "Durabilidad: 700", "Tiempo de vida: 8 Días"];
	LANG[INV.WILD_WHEAT        ] = ["Trigo Silvestre", "Se convierte en harina cuando se coloca en un molino"];
	LANG[INV.PUMPKIN_SEED      ] = ["Semilla de Calabaza", "Crece a Calabazas", "Nacimiento: 2 Minutos 40 Segundos", "Crecimiento: 2 Minutos", "Necesita agua: 2 Minutos", "Durabilidad: 700", "Tiempo de vida: 8 Días"];
	LANG[INV.PUMPKIN           ] = ["Calabaza", "Me recuerda a Halloween", "Comida: 30"];
	LANG[INV.GARLIC_SEED       ] = ["Semilla de Ajo", "Muy peligroso para vampiros", "Daño: 20", "Nacimiento: 4 Minutos", "Crecimiento: 1 Minutos 10 Segundos", "Necesita Agua: 1 Minutos 40 Segundos", "Durabilidad: 700", "Tiempo de Vida: 8 Días"];
	LANG[INV.GARLIC            ] = ["Ajo", "Te sana y reduce el frio", "Comida: 14", "sanación con eliempo: 30", "Efecto: 1"];
	LANG[INV.THORNBUSH_SEED    ] = ["Semilla de Planta de Espinas", "Puede dañar a tus enemigos", "Daño por contacto: 20", "Nacimiento: 4 Minutos", "Crecimiento: 15 Segundos", "Necesita Agua: 3 Minutos", "Durabilidad: 1000", "Tiempo de Vida: 8 Días"];
	LANG[INV.THORNBUSH         ] = ["Planta de Espinas", "¡Te daña!"];
	LANG[INV.PLOT              ] = ["Parcela", "En serio, úsala", "Se usa para plantar plantas en invierno o sobre puentes", "Tus plantas crecerán muy rápido y necesitarán menos agua", "Durabilidad: 2000"];
	LANG[INV.ICE               ] = ["Hielo", "Bueno para hacer tartas y agua"];
	LANG[INV.SPANNER           ] = ["Llave de Reparación", "Puede reparar paredes, puertas y pinchos", "Daño: 2"];

	LANG[INV.FUR_WOLF          ] = ["Pelaje de Lobo", "¿Perrito? ¡¿Donde esta el perrito?!"];
	LANG[INV.FUR               ] = ["Pelaje de Conejo", "El Conejo era muy lindo..."];
	LANG[INV.SPECIAL_FUR       ] = ["Pelaje Puro", "¡Eres una maquina de pan!"];
	LANG[INV.SPECIAL_FUR_2     ] = ["Pelaje Oscuro", "¿Estás listo para hacer algo malo?"];
	LANG[INV.FUR_WINTER        ] = ["Pelaje de Invierno", "Esos animales solo querían un abrazo..."];
	LANG[INV.SCALES            ] = ["Escamas", "¡Huele a pescado!"];
	LANG[INV.KRAKEN_SKIN       ] = ["Piel del Kraken", "¡¿No tienes mucho miedo?!"];

	LANG[INV.FIRE              ] = ["Fogata", "¡Te calienta!", "Durabilidad: 150", "Tiempo de vida: 2 Minutos"];
	LANG[INV.BIG_FIRE          ] = ["Fogata Grande", "¡Te calienta por más tiempo!", "Durabilidad: 400", "Tiempo de Vida: 6 Minutos"];
	LANG[INV.WORKBENCH         ] = ["Mesa de Trabajo", "¡Te sirve mucho para crear cosas de todos tipos!"];
	LANG[INV.CORD              ] = ["Hilo", "Usado para craftear ropa y mochila"];
	LANG[INV.BLUE_CORD         ] = ["Hilo de Diamante", "Usado para craftear ropa especial"];
	LANG[INV.CHEST             ] = ["Cofre", "Te permite guardar cosas, o compartirlas", "Durabilidad: 500"];

	LANG[INV.SWORD_WOOD        ] = ["Espada de Madera", "¿Eso funciona?", "Daño: 12", "Daño para estructuras: 4"];
	LANG[INV.SWORD             ] = ["Espada de Piedra", "Sé bueno con los otros", "Daño: 19", "Daño para estructuras: 6"];
	LANG[INV.SWORD_GOLD        ] = ["Espada de Oro", "¡Rey de la selva!", "Daño: 22", "Daño para estructuras: 7"];
	LANG[INV.SWORD_DIAMOND     ] = ["Espada de Diamante", "Puedes sentir el poder", "Daño: 24", "Daño para estructuras: 8"];
	LANG[INV.PIRATE_SWORD      ] = ["Espada de Pirata", "Arrrrr!", "¡Mejor distancia que una espada normal", "Daño: 24", "Daño para estructuras: 8"];
	LANG[INV.SWORD_AMETHYST    ] = ["Espada de Amatista", "Mauve es el mejor color del mundo :3", "Daño: 27", "Daño para estructuras: 9"];
	LANG[INV.DRAGON_SWORD      ] = ["Espada del Dragón", "¡Tienes el poder de un Dragón!", "Daño: 30", "Daño para estructuras: 10"];
	LANG[INV.DRAGON_SPEAR      ] = ["Lanza del Dragón", "¡Mátalos a todos!", "Daño: 22", "Daño para estructuras: 6"];

	LANG[INV.PICK_WOOD         ] = ["Pico de Madera", "Solo puede minar madera y piedra", "Daño: 1"];
	LANG[INV.PICK              ] = ["Pico de Piedra", "Puede minar hasta oro", "Daño: 2"];
	LANG[INV.PICK_GOLD         ] = ["Pico de Oro", "Puede minar hasta Diamante", "Daño: 3", "Daño para estructuras: 1"];
	LANG[INV.PICK_DIAMOND      ] = ["Pico de Diamante", "¡Puede minarlo todo!", "Daño: 4", "Daño para estructuras: 1"];
	LANG[INV.PICK_AMETHYST     ] = ["Pico de Amatista", "¡Puede minarlo todo, parece fantastico!", "Daño: 5", "Daño para estructuras: 1"];

	LANG[INV.HAMMER            ] = ["Martillo de Piedra", "Bueno para destruir estructuras", "No funciona bien con diamante y amatista", "Daño: 2", "Daño para estructuras: 20"];
	LANG[INV.HAMMER_GOLD       ] = ["Martillo de Oro", "Bueno para destruir estructuras", "No funciona bien con amatista ", "Daño: 3", "Daño para estructuras: 30"];
	LANG[INV.HAMMER_DIAMOND    ] = ["Martillo de Diamante", "Bueno para destruir estructuras", "Daño: 4", "Daño para estructuras: 40"];
	LANG[INV.HAMMER_AMETHYST   ] = ["Martillo de Amatista", "Bueno para destruir estructuras", "Daño: 5", "Daño para estructuras: 50"];
	LANG[INV.SUPER_HAMMER      ] = ["Super Martillo", "¿Has planeado destruir el mundo?", "Daño: 12", "Daño para estructuras: 70"];

	LANG[INV.WOOD_SPEAR        ] = ["Lanza de Madera", "Como un palo de madera, pero mata.", "Daño: 10", "Daño para estructuras: 2"];
	LANG[INV.SPEAR             ] = ["Lanza de Piedra", "¡El comienzo de la evolución!", "Daño: 14", "Daño para estructuras: 4"];
	LANG[INV.GOLD_SPEAR        ] = ["Lanza de Oro", "¡Cuidado, te hace mucho daño!", "Daño: 15", "Daño para estructuras: 5"];
	LANG[INV.DIAMOND_SPEAR     ] = ["Lanza de Diamante", "¡Estas preparado para matar al Dragon!", "Daño: 17", "Daño para estructuras: 5"];
	LANG[INV.AMETHYST_SPEAR    ] = ["Lanza de Amatista", "Los dragones te tienen miedo",  "Daño: 18", "Daño para estructuras: 6"];

	LANG[INV.SHOVEL            ] = ["Pala de Piedra", "Cava para conseguir tierra, arena y hielo", "También puedes conseguir minerales", "Daño: 2"];
	LANG[INV.SHOVEL_GOLD       ] = ["Pala de Oro", "Cava para conseguir tierra, arena y hielo", "También puedes conseguir minerales", "Daño: 3", "Daño para estructuras: 1"];
	LANG[INV.SHOVEL_DIAMOND    ] = ["Pala de Diamante", "Cava para conseguir tierra, arena y hielo", "También puedes conseguir minerales", "Daño: 4", "Daño para estructuras: 1"];
	LANG[INV.SHOVEL_AMETHYST   ] = ["Pala de Amatista", "Cava para conseguir tierra, arena y hielo", "También puedes conseguir minerales",  "Daño: 5", "Daño para estructuras: 1"];

	LANG[INV.WOOD_HELMET       ] = ["Casco de Madera", "¡Mejor que nada!", "Protección contra jugadores: 1", "Protección contra animales: 4"];
	LANG[INV.STONE_HELMET      ] = ["Casco de Piedra", "¡Estas listo para la batalla!", "Protección contra jugadores: 2", "Protección contra animales: 8"];
	LANG[INV.GOLD_HELMET       ] = ["Casco de Oro", "AKA el casco de los salvajes", "Protección contra jugadores: 4", "Protección contra animales: 13"];
	LANG[INV.DIAMOND_HELMET    ] = ["Casco de Diamante", "No ataques tanto", "Protección de jugadores: 5", "Protección contra animales: 19"];
	LANG[INV.AMETHYST_HELMET   ] = ["Casco de Amatista", "¡No tienes miedo de nada!", "Protección contra jugadores: 6", "Protección contra animales: 23"];
	LANG[INV.DRAGON_HELMET     ] = ["Casco del Dragón", "¡Vas a dominar el mundo!", "Protección contra jugadores: 8", "Protección contra animales: 27"];

	LANG[INV.EXPLORER_HAT      ] = ["Gorro del Explorador", "Los animales no te atacarán", "¡Pero no ataques!", " Te calienta en el invierno y fuera del agua"];
	LANG[INV.CHRISTMAS_HAT     ] = ["Gorro de Navidad", "¡Ho, ho, ho, feliz Navidad!", "Te calienta en el invierno y fuera del  agua"];
	LANG[INV.ELF_HAT           ] = ["Gorro del Duende", "¡No dejes que te descubren que eres, duende del hielo!", "Te calienta en el invierno y fuera del agua"];
	LANG[INV.HOOD              ] = ["Capucha", "¡Eres un ladron!", "Puedes robar de alguien solo si", "1) Es de noche", "2) No tienes nada en tu mano", "3) Si no te han tocado en los  8 segundos anteriores", "4) No estas cerca de una fogata", "5) Si tu objetivo no lleva puesto una gorra de campesino", "Te calienta en invierno y fuera del agua"];
	LANG[INV.EARMUFFS          ] = ["Orejeras", "Como un abrigo pequeño.", "Te calienta en invierno y fuera del agua"];
	LANG[INV.COAT              ] = ["Chapka", "También llamado abrigo.", "Te calienta en el invierno y fuera del agua"];
	LANG[INV.CAP_SCARF         ] = ["Gorro y Bufanda ", "Muy cómodo, muy caliente"];
	LANG[INV.PEASANT           ] = ["Gorra de Campesino", "Tus plantas crecen mas rápido", "Te Calienta en el invierno y fuera del agua"];
	LANG[INV.WINTER_HOOD       ] = ["Capucha de Invierno", "Puedes robar de alguien solo si", "1) Es de noche", "2) No tienes nada en tu mano", "3) Si no te han tocado antes de 8 segundos", "4) No estas cerca de un fuego", "5) Si tu objetivo no lleva puesto una Gorra de Campesino", "Te calienta en invierno y fuera del agua"];
	LANG[INV.WINTER_PEASANT    ] = ["Gorra de Invierno del Campesino", "Tus plantas crecen aún más rápido", "Te calienta en invierno y fuera del agua"];
	LANG[INV.DIVING_MASK       ] = ["Máscara de Buceo", "Eres un tiburón en el agua", "Calienta en el agua", "Protección contra jugadores: 2, Protección contra animales: 8"];
	LANG[INV.SUPER_DIVING_SUIT ] = ["Súper Máscara de Buceo", "Eres muy rápido en agua", "Calienta en el agua", "Defensa del Jugador: 4, Defensa de los animales: 16"];

	LANG[INV.DRAGON_ORB        ] = ["Esfera del Dragón", "Dada en la misión"];
	LANG[INV.DRAGON_HEART      ] = ["Corazón del Dragón", "¡Te convierte en un fantasma cuando mueres!", "Eres un fantasma por 60 segundos", "Encuentra una Piedra de resurreción",];
	LANG[INV.GEMME_GREEN       ] = ["Gema Verde", "¿¿No has hecho trampas, verdad??"];
	LANG[INV.GEMME_ORANGE      ] = ["Gema Naranja", "¡Solo un pirata verdadero lo puede encontrar!"];
	LANG[INV.GEMME_BLUE        ] = ["Gema Azul", "Para gente muy amable"];
	LANG[INV.CROWN_GREEN       ] = ["Corona Verde", "Te sanas muy rápido", "Sanación con el tiempo: 40", "Protección contra jugadores: 4, Protección contra animales: 16"];
	LANG[INV.CROWN_ORANGE      ] = ["Corona Naranja", "Ahora tienes much suerte", "Protección contra jugadores: 4, Protección contra animales: 16"];
	LANG[INV.CROWN_BLUE        ] = ["Corona Azul", "Cuando mueres, te conviertes en un fantasma", "Pero perderás tu alma", "Protección contra jugador: 4, Protección contra animales: 16"];

	LANG[INV.BUCKET_FULL       ] = ["Cubo", "Bueno para rellenar botellas", "Un cubo es equivalente a 12 botellas"];
	LANG[INV.BUCKET_EMPTY      ] = ["Cubo Vacío", "Tienes que llenar este cubo con agua"];
	LANG[INV.BOTTLE_FULL       ] = ["Botella", "Te permite beber agua donde quieras", "Agua: 50"];
	LANG[INV.BOTTLE_EMPTY      ] = ["Botella Vacia", "La puedes llenar de agua"];
	LANG[INV.WATERING_CAN      ] = ["Regadera Vacía", "La tienes que llenar de agua"];
	LANG[INV.WATERING_CAN_FULL ] = ["Regadera", "Te permite regar las plantas", "Daño: 1"];

	LANG[INV.BAG               ] = ["Mochila", "¡Mas espacio para tus cosas!"];
	LANG[INV.PAPER             ] = ["Hoja", "Usada para hacer un libro"];
	LANG[INV.BOOK              ] = ["Libro", "Reduce el tiempo de elaboración", "Lo tienes que tener en la mano para que funcione", "Daño: 1"];
	LANG[INV.BANDAGE           ] = ["Vendaje", "Recuperas vida mas rapido", "Sanación tiempo: 30", "Efecto: 5"];
	LANG[INV.LOCK              ] = ["Cerradura", "Te permite cerrar tu cofre"];
	LANG[INV.LOCKPICK          ] = ["Llave", "Te permite abrir un cofre cerrado"];
	LANG[INV.TOTEM             ] = ["Tótem", "Te permite crear un equipo", "Compartir puertas y cofres cerrados", "Tus pinchos no dañan al resto tu equipo"];
	LANG[INV.BRIDGE            ] = ["Puente", "Muy útil en el agua", "Te permite beber agua sin tener que ahogarse", "Puedes nadar más rápido encima del agua"];
	LANG[INV.SIGN              ] = ["Cartel", "Sirve para dejar un mensage para otros", "Durabilidad: 200"];
	LANG[INV.ROOF              ] = ["Techo", "Te esconde un poco y te protege del frío"];
	LANG[INV.WELL              ] = ["Fuente", "Permite rellenar botellas", "Durabilidad: 1000"];
	LANG[INV.WALL              ] = ["Pared de Madera", "Es solo una pared.", "Durabilidad: 1000"];
	LANG[INV.STONE_WALL        ] = ["Pared de Piedra", "Es un poco más serio", "Durabilidad: 1500"];
	LANG[INV.GOLD_WALL         ] = ["Pared de Oro", "¿Oro en de tus paredes? Eres rico", "Durabilidad: 2000"];
	LANG[INV.DIAMOND_WALL      ] = ["Pared de Diamante", "Muy brillante, cuidado con tus ojos", "Durabilidad: 2500"];
	LANG[INV.AMETHYST_WALL     ] = ["Pared de Amatista", "¡Debes tener mucho miedo de lo que hay fuera!", "Durabilidad: 3500"];
	LANG[INV.SPIKE             ] = ["Pincho de Madera", "Puede dañar a tus enemigos", "Daño: 10, Daño por golpe: 2", "Durabilidad: 150"];
	LANG[INV.STONE_SPIKE       ] = ["Pincho de Piedra", "No querría ser tu enemigo.", "Daño: 20", "Daño por contacto: 3", "Durabilidad: 300"];
	LANG[INV.GOLD_SPIKE        ] = ["Pincho de Oro", "¡Eres tan cruel!", "Daño: 30", "Daño por golpe: 3", "Durabilidad: 600"];
	LANG[INV.DIAMOND_SPIKE     ] = ["Pincho de Diamante", "No te gusta tener compañía.", "Daño: 40", "Daño por contacto: 4", "Durabilidad: 1200"];
	LANG[INV.AMETHYST_SPIKE    ] = ["Pincho de Amatista", "¡¿Que demonios te hicieron tus vecinos?!", "Daño: 50", "Daño por contacto: 4", "Durabilidad: 2400"];
	LANG[INV.WOOD_DOOR         ] = ["Puerta de Madera", "Puedes abrir y cerrarla ", "Durabilidad: 1000"];
	LANG[INV.STONE_DOOR        ] = ["Puerta de Piedra", "Una puerta más buena es más seria", "Durabilidad: 1500"];
	LANG[INV.GOLD_DOOR         ] = ["Puerta de Oro", "¿Estas reconstruyendo El Dorado?", "Durabilidad: 2000"];
	LANG[INV.DIAMOND_DOOR      ] = ["Puerta de Diamante", "Para una casa brillante", "Durabilidad: 2500"];
	LANG[INV.AMETHYST_DOOR     ] = ["Puerta de Amatista", "¿Tu casa es una caja fuerte?", "Durabilidad: 3500"];

	LANG[INV.FURNACE           ] = ["Caldera", "Te calienta", "Consume 1 Madera cada 5 segundos", "Durabilidad: 1000"];
	LANG[INV.WINDMILL          ] = ["Molino", "Puede producir harina a partir del trigo", "Necesita 5 segundos para producir harina", "Devuelve los puntos que trabaja", "Durabilidad: 2000"];
	LANG[INV.BREAD_OVEN        ] = ["Horno de Pan", "Produce pan de harina", "Necesita 10 segundos para producir Pan", "Devuelve los puntos que trabaja", "Durabilidad: 2000"];
	LANG[INV.RESURRECTION      ] = ["Piedra de Resurreción", "¡Es magia!", "Te resucitacuando eres una fantasma", "Perderás tu arma", "Durabilidad: 200"];

	LANG[TEXT.YOU_CANNOT_JOIN] = "No puedes unirte a este servidor";
	LANG[TEXT.KICKED] = "Expulsado: ";
	LANG[TEXT.KEY_ALREADY] = "Tu llave ya está usada";
	LANG[TEXT.KEY_WRONG] = "Tu llave está mal";
	LANG[TEXT.OLD_VERSION] = "Tienes una versión antigua, limpia tu cache";
	LANG[TEXT.NO_MORE_RESOURCES] = "No hay mas recursos";
	LANG[TEXT.SURVIVED_1DAY] = "Has sobrevivido 1 día";
	LANG[TEXT.SURVIVED] = "Has sobrevivido ";
	LANG[TEXT.DAYS] = " días";
	LANG[TEXT.DEAD_SAD] = "Estás muerto ;-;";
	LANG[TEXT.SPAM_ME] = "No se encuentra un lugar para unirse, ¡spamea el botón de jugar!";
	LANG[TEXT.SPAM_ME2] = "El servidor esta lleno, ¡spamea el botón de jugar!";
	LANG[TEXT.EMPTY] = "Recurso vacio";
	LANG[TEXT.INV_FULL] = "¡Inventario lleno!(Haz click derecho para borrar cosas) ";
	LANG[TEXT.DEAD] = " está muerto";
	LANG[TEXT.WRONG_TOOL] = "Esta no es la herramienta correcta";
	LANG[TEXT.JOIN_TEAM] = "Te has unido a un equipo";
	LANG[TEXT.YOU_DEAD] = "Estás muerto";
	LANG[TEXT.JOINED_TEAM] = " se unió al equipo";
	LANG[TEXT.TEAM_DESTROYED] = "Tu equipo ha sido destruido";
	LANG[TEXT.LEFT_TEAM] = "Has dejado el equipo";
	LANG[TEXT.LEFT_TEAM2] = " dejo el equipo ";
	LANG[TEXT.TOKEN] = "Alguien te robó tu token :>";
	LANG[TEXT.CHOOSE] = "Elige un servidor";
	LANG[TEXT.PLAYERS] = "jugadores";
	LANG[TEXT.TOTAL_PLAYERS] = "total de jugadores";
	LANG[TEXT.TOTAL_MODE] = "Jugadores en este modo de juego";
	LANG[TEXT.COMMING_SOON] = "Próximamente...";

	document.getElementById ("nickname_input").placeholder = "Apodo";

	DIE[0] = ["Has muerto por ninguna razón"];//UNKNOWN : 0,
	DIE[1] = ["Has muerto de hambre, como implica el nombre del juego dice"];//STARVE  : 2,
	DIE[2] = ["Te has congelado hasta morir, qué triste","Moriste por hipotermia. La próxima quédate cerca de  una fogata."]; //COLD    : 2,
	DIE[3] = ["Un jugador te ha matado diciendo que mejores.","Fuiste asesinado por un jugador, pero no te preocupes, ese jugador también morirá, eventualmente."];//PLAYER  : 3,
	DIE[4] = ["Te has acercado demasiado al fuego, y te has quemado vivo, mala idea.","Has muerto por el fuego, el fuego te quema, ve y escribe una historia sobre eso."];//FIRE    : 4,
	DIE[5] = ["Tu cuerpo será un buen nido para los huevos de la arañas","Una araña te ha matado, al menos no fué un conejo."];//SPIDER  : 5,
	DIE[6] = ["El lobo no tendrá hambre después de comerte.","No son perros, no les gusta ser acariciados."];//WOLF    : 6,
	DIE[7] = ["El zorro era demasiado rápido para ti.","El zorro te convirtió en una caja. ¿Desde cuándo los animales tienen poderes mágicos?"];//FOX     : 7,
	DIE[8] = ["El oso solo quería un abrazo","El oso era demasiado para ti. Lo siento."]; //BEAR    : 8,
	DIE[9] = ["El dragón te quemó vivo.","El dragón te ha aplastado, todos tus huesos ahora son vapor... otro cadaver mas."];//DRAGON  : 9,
	DIE[10] = ["Has saltado a una pared de pinchos, mala idea","Has muerto por una pared de pinchos. La gente suele ser lo suficientemente sensible para no tocar cosas puntiagudas.."];//SPIKE   : 10,
	DIE[11] = ["Un fantasma también puede morir.","No has revivido a tiempo, asi que eres un fantasma de un fantasma."];//GHOST : 11
	DIE[12] = ["Una bacteria te ha matado por comer carne cruda. Este juego es muy difícil.","Has matado a la carne cruda. Ella también te ha matado a ti.."];//RAW FOOD : 12
	DIE[13] = ["Has muerto de sed, mejor bebe tu propia orina."]; // WATER : 13
	DIE[14] = ["¿Sabiás que los jugadores tienen su boca debajo del agua? Ahora lo sabes."]; // OXYGEN : 14
	DIE[15] = ["No te preocupes, a la piraña le pareciste delicioso.","Las pirañas comen a personas, incluyendote a ti también."];//PIRANHA : 15,
	DIE[16] = ["LapaMauve no planea que puedas matar al kraken","Un Kraken te partió el kra-neo."];//KRAKEN : 16,
	DIE[17] = ["Tu piel se cayó, el sol te quemó."];//SUN LIGHT : 17
	DIE[18] = ["El ajo guardado en tu bolsillo te quemó el cerebro."];//GARLIC_POCKET: 18
	DIE[19] = ["Eres un vampiro, no te quedes cerca del ajo."];//GARLIC: 19
	DIE[20] = ["Has comido un ajo siendo  vampiro,¿que esperabas?"];//ATE GARLIC: 20
	DIE[21] = ["Te has quedado atrapado en una planta de espinas. Al intentar escapar, tu piel se cae y entra un pincho en tu corazón."];//THORNBUSH: 21

ZOMBIE_GRUMBLE = "Uuunnnggg";
ZOMBIE_GRUMBLES = [
		"Uuunnnggg... Tengo hambre",
		"Necesito tu cerebro uuunnnggg...",
		"Carne fresca... Uuunnnggg",
		"Uuunnnggg... Pareces delicioso",
		"Uuunnnggg...",
		"Comida... uuunnnggg...",
		"Puedo oler sangre... Uuunnnggg",
];

}
