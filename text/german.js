var set_german = function () {

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

LANG[INV.HAND          	] = ["Hand"];
LANG[INV.GROUND        	] = ["Boden", "Dreckig!"];
LANG[INV.SAND          	] = ["Sand", "Ich habe es in meine Augen bekommen!"];
LANG[INV.WOOD          	] = ["Holz", "Du kannst niemals zu viel haben!"];
LANG[INV.STONE         	] = ["Stein", "Auch Fels gennant"];
LANG[INV.GOLD          	] = ["Gold", "Sei großzügig, gib anderen etwas ab "];
LANG[INV.DIAMOND       	] = ["Diamant", "Was wirst du daraus machen?"];
LANG[INV.AMETHYST      	] = ["Amethyst", "Es ist Mauve farbend, genauso wie Lapa"];

LANG[INV.FLOUR         	] = ["Mehl", "wird fürs Backen gebraucht"];
LANG[INV.COOKIE        	] = ["Keks", "Ein prächtiger Keks von Großmutter", "Essen: 50"];
LANG[INV.CAKE          	] = ["Ein Kuchen", "Perfekter Kuchen für Gourmets", "Essen: 100"];
LANG[INV.MEAT          	] = ["rohes Fleisch", "Du kannst es mit einem Feuer braten", "verursacht Lebensmittelvergiftung: 10", "Essen: 15"];
LANG[INV.COOKED_MEAT   	] = ["gebratenes Fleisch", "Einmal blutiges Steak, bitte", "Essen: 35"];
LANG[INV.FOODFISH      	] = ["roher Fisch", "Ich glaube es lebt noch", "verursacht Lebensmittelvergiftung: 10", "Essen: 18"];
LANG[INV.FOODFISH_COOKED] = ["gebratener Fisch", "Mit einer Zitrone ist es perfekt", "Essen: 35"];
LANG[INV.BREAD         	] = ["Brot", "Ein vorzügliches französiches Brot", "Es wird als Währung im Markt benutzt", "Essen: 15"];
LANG[INV.SANDWICH      	] = ["Sandwich", "Schmeckt wie Krabbenburger", "Essen: 100"];
LANG[INV.CANDY         	] = ["Süßigkeiten", "Nur für Kinder!", "Essen: 100"];
LANG[INV.SUGAR_CAN     	] = ["Zuckerstange", "Probier mal, es schmeckt hervorragend", "Essen: 100"];
LANG[INV.GARLAND       	] = ["Girlande", "perfekter Schmuck für Dächer"];

LANG[INV.SEED          	] = ["Beeren Saatgut", "Wird eine Beere", "Entstehung: 2min",        "Wachstum: 55s", "Wasserbedarf: 3min 20s", "Haltbarkeit: 700", "Lebenszeit: 8 Tage"];
LANG[INV.PLANT         	] = ["Beere", "Beeren lecker!", "Essen: 10"];
LANG[INV.WHEAT_SEED    	] = ["Weizen Saatgut", "Wird zu Weizen", "Entstehung: 2min", "Wachstum: 16s", "Wasserbedarf: 2min", "Haltbarkeit: 700", "Lebenszeit: 8 Tage"];
LANG[INV.WILD_WHEAT    	] = ["Wildes Weizen", "Wenn es in eine Windmühle platziert wird, wird es zu Mehl"];
LANG[INV.PUMPKIN_SEED  	] = ["Kürbis Saatgut", "Wird zu Kürbis", "Entstehung: 2min 40s", "Wachstum: 2min", "Wasserbedarf: 2min", "Haltbarkeit: 700", "Lebenszeit: 8 Tage"];
LANG[INV.PUMPKIN       	] = ["Kürbis", "Es erinnert mich an Halloween", "Essen: 30"];
LANG[INV.GARLIC_SEED   	] = ["Knoblauch Saatgut", "Sehr gefährlich für Vampire", "Schaden: 20", "Entstehung: 4min", "Wachstum: 1min 10s", "Wasserbedarf: 1min 40s", "Haltbarkeit: 700", "Lebenszeit: 8 Tage"];
LANG[INV.GARLIC        	] = ["Knoblauch", "Heilt dich und hält die Kälte fern", "Essen: 14", "Heilung über Zeit: 30", "Effekt: 1"];
LANG[INV.THORNBUSH_SEED	] = ["Dornenbusch Saatgut", "Kann deinen Gegnern Schaden zufügen", "Schaden: 20", "Entstehung: 4min", "Wachstum: 15s", "Wasserbedarf: 3min", "Haltbarkeit: 1000", "Lebenszeit: 8 Tage"];
LANG[INV.THORNBUSH     	] = ["Dornenbusch", "Es sticht!"];
LANG[INV.PLOT          	] = ["Topf", "Ernsthaft, benutz es", "Mit diesem GMO dünger deine Pflanzen", "lässt sie schneller wachsen und reduziert den Wasserverbrauch", "Haltbarkeit: 2000"];
LANG[INV.ICE           	] = ["Eis", "Nützlich um Kuchen und Wasser herzustellen"];
LANG[INV.SPANNER       	] = ["Schraubenschlüssel", "Es kann Wände, Türen und Stacheln reparieren", "Schaden: 2"];

LANG[INV.FUR_WOLF      	] = ["Wolfsfell", "Welpe? Aber wo ist der Welpe?!"];
LANG[INV.FUR           	] = ["Hasenfell", "Der Hase war so süß..."];
LANG[INV.SPECIAL_FUR   	] = ["Klares Fell", "Du bist eine Brotfabrik"];
LANG[INV.SPECIAL_FUR_2 	] = ["Dunkles Fell", "Du machst dich bereit etwas falsches zu vollführen"];
LANG[INV.FUR_WINTER    	] = ["Winter Fell", "Diese Tiere wollten nur eine Umarmung..."];
LANG[INV.SCALES        	] = ["Schuppen", "Es riecht wie Fisch!"];
LANG[INV.KRAKEN_SKIN   	] = ["Kraken Haut", "Warst du nicht zu ängstlich?"];

LANG[INV.FIRE          	] = ["Lagerfeuer", "Wärmt dich!", "Haltbarkeit: 150", "Lebensdauer: 2min"];
LANG[INV.BIG_FIRE      	] = ["Großes Lagerfeuer", "Wärmt dich länger!", "Haltbarkeit: 400", "Lebensdauer: 6min"];
LANG[INV.WORKBENCH     	] = ["Werkbank", "Sehr nützlich um allerlei Sachen herzustellen"];
LANG[INV.CORD          	] = ["Faden", "Wird benötigt um Mützen und Rucksäcke herzustellen  "];
LANG[INV.BLUE_CORD     	] = ["Diamant Faden", "Wird für spezielle Mützen gebraucht"];
LANG[INV.CHEST         	] = ["Truhe", "Damit kannst du Gegenstände lagern", "Haltbarkeit: 500"];

LANG[INV.SWORD_WOOD    	] = ["Holzschwert", "Funktioniert das?", "Schaden: 12", "Schaden an Gebäuden: 4"];
LANG[INV.SWORD         	] = ["Steinschwert", "Sei nett zu Anderen", "Schaden: 19", "Schaden an Gebäuden: 6"];
LANG[INV.SWORD_GOLD    	] = ["Goldschwert", "König des Waldes", "Schaden: 22", "Schaden an Gebäuden: 7"];
LANG[INV.SWORD_DIAMOND 	] = ["Diamantschwert", "Du kannst die Kraft spüren", "Schaden: 24", "Schaden an Gebäuden: 8"];
LANG[INV.PIRATE_SWORD  	] = ["Piratenschwert", "Ayyyyy!", "Hat eine höhere Reichweite als ein normales Schwert", "Schaden: 24", "Schaden an Gebäuden: 8"];
LANG[INV.SWORD_AMETHYST	] = ["Amethystschwert", "Mauve ist die schönste Farbe der Welt", "Schaden: 27", "Schaden an Gebäuden: 9"];
LANG[INV.DRAGON_SWORD  	] = ["Drachenschwert", "Keine Gnade!", "Schaden: 30", "Schaden an Gebäuden: 10"];
LANG[INV.DRAGON_SPEAR  	] = ["Drachenspeer", "Töte sie alle!", "Schaden: 22", "Schaden an Gebäuden: 6"];

LANG[INV.PICK_WOOD     	] = ["Holzspitzhacke", "Kann nur Holz und Stein abbauen", "Schaden: 1"];
LANG[INV.PICK          	] = ["Steinspitzhacke", "Kann Holz, Stein und Gold abbauen", "Schaden: 2"];
LANG[INV.PICK_GOLD     	] = ["Goldspitzhacke", "Kann auch Diamanten abbauen", "Schaden: 3", "Schaden an Gebäuden: 1"];
LANG[INV.PICK_DIAMOND  	] = ["Diamantspitzhacke", "Kann alles abbauen", "Schaden: 4", "Schaden an Gebäuden: 1"];
LANG[INV.PICK_AMETHYST 	] = ["Amethystspitzhacke", "Kann alles abbauen, sieht außerdem gut aus!", "Schaden: 5", "Schaden an Gebäuden: 1"];

LANG[INV.HAMMER        	] = ["Steinhammer", "Nützlich um Gebäude zu zerstören", "Funktioniert nicht gut gegen Diamant oder Amethyst", "Schaden: 2", "Schaden an Gebäuden: 20"];
LANG[INV.HAMMER_GOLD   	] = ["Goldhammer", "Nützlich um Gebäude zu zerstören", "Funktioniert nicht gut gegen Amethyst", "Schaden: 3", "Schaden an Gebäuden: 30"];
LANG[INV.HAMMER_DIAMOND	] = ["Diamanthammer", "Nützlich um Gebäude zu zerstören", "Schaden: 4", "Schaden an Gebäuden: 40"];
LANG[INV.HAMMER_AMETHYST   ] = ["Amethysthammer", "Nützlich um Gebäude zu zerstören", "Schaden: 5", "Schaden an Gebäuden: 50"];
LANG[INV.SUPER_HAMMER  	] = ["Superhammer", "Willst du die Welt zerstören?", "Schaden: 12", "Schaden an Gebäuden: 70"];

LANG[INV.WOOD_SPEAR    	] = ["Holzspeer", "Wie ein Stock, nur mit dem Unterschied, dass es sticht.", "Schaden: 10", "Schaden an Gebäuden: 2"];
LANG[INV.SPEAR         	] = ["Steinspeer", "Der Anfang der Evolution!", "Schaden: 14", "Schaden an Gebäuden: 4"];
LANG[INV.GOLD_SPEAR    	] = ["Goldspeer", "Pass auf, es sticht!", "Schaden: 15", "Schaden an Gebäuden: 5"];
LANG[INV.DIAMOND_SPEAR 	] = ["Diamantspeer", "Du bist bereit einen Drachen zu töten", "Schaden: 17", "Schaden an Gebäuden: 5"];
LANG[INV.AMETHYST_SPEAR	] = ["AmethystSpeer", "Drachen jagen dir keine Angst mehr ein",  "Schaden: 18", "Schaden an Gebäuden: 6"];

LANG[INV.SHOVEL        	] = ["Steinschaufel", "Grab herum um Dreck, Eis und Sand zu bekommen", "Du kannst auch Mineralien bekommen", "Schaden: 2"];
LANG[INV.SHOVEL_GOLD   	] = ["Goldschaufel", "Grab herum um Dreck, Eis und Sand zu bekommen", "Du kannst auch Mineralien bekommen", "Schaden: 3", "Schaden an Gebäuden: 1"];
LANG[INV.SHOVEL_DIAMOND	] = ["Diamantschaufel", "Grab herum um Dreck, Eis und Sand zu bekommen", "Du kannst auch Mineralien bekommen", "Schaden: 4", "Schaden an Gebäuden: 1"];
LANG[INV.SHOVEL_AMETHYST   ] = ["Amethystschaufel", "Grab herum um Dreck, Eis und Sand zu bekommen", "Du kannst auch Mineralien bekommen",  "Schaden: 5", "Schaden an Gebäuden: 1"];

LANG[INV.WOOD_HELMET   	] = ["Holzhelm", "Besser als nichts", "Verteidigung gegen Spieler: 1", "Verteidigung gegen Tiere: 4"];
LANG[INV.STONE_HELMET  	] = ["Steinhelm", "Du bist bereit zu kämpfen!", "Verteidigung gegen Spieler: 2", "Verteidigung gegen Tiere: 8"];
LANG[INV.GOLD_HELMET   	] = ["Goldhelm", "AKA Der Helm der Unbarmherzigen", "Verteidigung gegen Spieler: 4", "Verteidigung gegen Tiere: 13"];
LANG[INV.DIAMOND_HELMET	] = ["Diamanthelm", "Gib nicht zu viel an", "Verteidigung gegen Spieler: 5", "Verteidigung gegen Tiere: 19"];
LANG[INV.AMETHYST_HELMET   ] = ["Amethysthelm", "Du musst vor nichts mehr angst haben", "Verteidigung gegen Spieler: 6", "Verteidigung gegen Tiere: 23"];
LANG[INV.DRAGON_HELMET 	] = ["Drachenhelm", "Du wirst die Welt erobern", "Verteidigung gegen Spieler: 8", "Verteidigung gegen Tiere: 27"];

LANG[INV.EXPLORER_HAT  	] = ["Erkunderhut", "Tiere beachten dich nicht mehr", "mach aber keine Geräusche!", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.CHRISTMAS_HAT 	] = ["Weihnachtshut", "Oh, oh, oh, fröhliche Weihnachten", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.ELF_HAT       	] = ["Elfenhut", "Lass dich nicht ausnutzen, du kleiner Schneeelf!","Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.HOOD          	] = ["Kapuze", "Du bist ein Schurke", "Du kannst jemand bestehlen solange:", "1) Es nacht ist", "2) Du nichts trägst", "3) dich niemand für acht Sekunden berührt hat", "4) Du nicht in der Nähe eines Feuers bist", "5) Dein Ziel keine Bauernkleidung trägt", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.EARMUFFS      	] = ["Ohrwärmer", "Eine Art kleiner chapka.", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.COAT          	] = ["Chapka", "Auch Mantel genannt.", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.CAP_SCARF     	] = ["Winterschaal und Kappe", "Sehr angenehm", "Sehr Warm"];
LANG[INV.PEASANT       	] = ["Bauer", "Deine Pflanzen wachsen schneller", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.WINTER_HOOD   	] = ["Winterkapuze", "Du bist ein Wilder Schurke", "Du kannst jemand bestehlen solange:", "1) Es nacht ist", "2) Du nichts trägst", "3) dich niemand für vier Sekunden berührt hat", "4) Du nicht in der Nähe eines Feuers bist", "5) Dein Ziel keine Winterbauernkleidung trägt", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.WINTER_PEASANT	] = ["Winterbauern", "Deine Pflanzen wachsen deutlich schneller", "Hält dich warm außerhalb von Wasser und Winter"];
LANG[INV.DIVING_MASK   	] = ["Tauchermaske", "Du bist schneller im Wasser", "Hält dich warm im Wasser", "Verteidigung gegen Spieler: 2, Verteidigung gegen Tiere: 8"];
LANG[INV.SUPER_DIVING_SUIT ] = ["Supertauchermaske", "Du bist sehr schnell im Wasser", "Hält dich warm im Wasser", "Verteidigung gegen Spieler: 4, Verteidigung gegen Tiere: 16"];

LANG[INV.DRAGON_ORB    	] = ["Drachenkugel", "Erhalten bei abschließung der Quest"];
LANG[INV.DRAGON_HEART  	] = ["Drachenherz", "Verwandelt dich in einen Geist, sobald du stirbst!", "Du bist für 60 Sekunden ein Geist", "Finde ein Wiederbelebungsstein.",];
LANG[INV.GEMME_GREEN   	] = ["Grüner Edelstein", "Du hast nicht gemogelt, versprochen?"];
LANG[INV.GEMME_ORANGE  	] = ["Orangener Edelstein", "Nur ein echter Pirat findet ihn!"];
LANG[INV.GEMME_BLUE    	] = ["Blauer Edelstein", "Für sehr nette Leute"];
LANG[INV.CROWN_GREEN   	] = ["Grüne Krone", "Du heilst dich selbst sehr schnell", "Heilung über Zeit: 40", "Verteidigung gegen Spieler: 4, Verteidigung gegen Tiere: 16"];
LANG[INV.CROWN_ORANGE  	] = ["Orangene Krone", "Du fühlst dich plötzlich als hättest du mehr Glück", "Verteidigung gegen Spieler: 4, Verteidigung gegen Tiere: 16"];
LANG[INV.CROWN_BLUE    	] = ["Blaue Krone", "Sobald du stirbst wirst du ein Geist", "Du wirst allerdings dein Schwert und deine Spitzhacke verlieren", "Verteidigung gegen Spieler: 4, Verteidigung gegen Tiere: 16"];

LANG[INV.BUCKET_FULL   	] = ["Eimer", "Nützlich um einen Brunnen zu füllen", "Ein Eimer ist vergleichbar mit zwölf Flaschen"];
LANG[INV.BUCKET_EMPTY  	] = ["Leerer Eimer", "Du musst den Eimer in der Nähe einer Wasserquelle füllen"];
LANG[INV.BOTTLE_FULL   	] = ["Flasche", "Erlaubt dir überall Wasser zu trinken", "Wasser: 50"];
LANG[INV.BOTTLE_EMPTY  	] = ["Leere Flasche", "Du musst die Flasche in der Nähe einer Wasserquelle füllen"];
LANG[INV.WATERING_CAN  	] = ["Leere Gießkanne", "Du musst es mit einer Wasserquelle füllen"];
LANG[INV.WATERING_CAN_FULL ] = ["Gießkanne", "Erlaubt das wässern von Pflanzen", "Schaden: 1"];

LANG[INV.BAG           	] = ["Rucksack", "Mehr Platz im Inventar!"];
LANG[INV.PAPER         	] = ["Papier", "Wird fürs Büchermachen verwendet"];
LANG[INV.BOOK          	] = ["Buch", "Reduziert die benötigte Zeit beim herstellen von Gegenständen", "Muss in der Hand gehalten werden um den Effekt zu nutzen", "Schaden: 1"];
LANG[INV.BANDAGE       	] = ["Verband", "Heile dich schneller", "Heilung über Zeit: 30", "Effekt: 5"];
LANG[INV.LOCK          	] = ["Schloss", "Erlaubt dir deine Truhe zu verschließen"];
LANG[INV.LOCKPICK      	] = ["Dietrich", "Erlaubt dir eine verschlossene Truhe zu öffnen"];
LANG[INV.TOTEM         	] = ["Totem", "Erlaubt dir ein Team zu gründen", "Teile Türen und Truhen", "verletzende Strukturen schaden deinen Freunden nicht mehr"];
LANG[INV.BRIDGE        	] = ["Brücke", "Sehr nützlich über Wasser", "Es erlaubt dir zu trinken ohne zu ertrinken", "lässt dich schneller auf dem Wasser laufen"];
LANG[INV.SIGN          	] = ["Schild", "Hinterlasse eine Nachricht für andere hier", "Haltbarkeit: 200"];
LANG[INV.ROOF          	] = ["Dach", "Versteckt dich ein wenig und hält warm dabei!"];
LANG[INV.WELL          	] = ["Brunnen", "Erlaubt dir deine Flasche zu füllen, eine mobile Wasserquelle", "Haltbarkeit: 1000"];
LANG[INV.WALL          	] = ["Holzwand", "Kennst du den Wandtanz?", "Haltbarkeit: 1000"];
LANG[INV.STONE_WALL    	] = ["Steinwand", "Es sieht ein wenig Ernsthafter aus.", "Haltbarkeit: 1500"];
LANG[INV.GOLD_WALL     	] = ["Goldwand", "Gold an deiner Wand? Es leuchtet ein wenig.", "Haltbarkeit: 2000"];
LANG[INV.DIAMOND_WALL  	] = ["Diamantwand", "So leuchtend, pass auf deine Augen auf", "Haltbarkeit: 2500"];
LANG[INV.AMETHYST_WALL 	] = ["Amethystwand", "Du musst dich wirklich fürchten raus zu gehen!", "Haltbarkeit: 3000"];
LANG[INV.SPIKE         	] = ["Holzstacheln", "Kann deine Gegner verletzen", "Schaden: 10, Schaden beim Angreifen: 2", "Haltbarkeit: 150"];
LANG[INV.STONE_SPIKE   	] = ["Steinstacheln", "Ich würde lieber nicht dein Gegner sein.", "Schaden: 20", "Schaden beim Angreifen: 3", "Haltbarkeit: 300"];
LANG[INV.GOLD_SPIKE    	] = ["Goldstacheln", "Du bist grausam.", "Schaden: 30", "Schaden beim Angreifen: 3", "Haltbarkeit: 600"];
LANG[INV.DIAMOND_SPIKE 	] = ["Diamantstacheln", "Du magst Gesellschaft nicht.", "Schaden: 40", "Schaden beim Angreifen: 4", "Haltbarkeit: 1200"];
LANG[INV.AMETHYST_SPIKE	] = ["Amethyststacheln", "Was zur Hölle haben deine Nachbarn dir angetan?", "Schaden: 50", "Schaden beim Angreifen: 4", "Haltbarkeit: 2400"];
LANG[INV.WOOD_DOOR     	] = ["Holztür", "Kann von dir oder deinen Freunden geöffnet werden", "Haltbarkeit: 1000"];
LANG[INV.STONE_DOOR    	] = ["Steintür", "Eine stärkere Tür ist ernsthafter", "Haltbarkeit: 1500"];
LANG[INV.GOLD_DOOR     	] = ["Goldtür", "Baust du el dorado?", "Haltbarkeit: 2000"];
LANG[INV.DIAMOND_DOOR  	] = ["Diamanttür", "Für ein scheinendes Haus", "Haltbarkeit: 2500"];
LANG[INV.AMETHYST_DOOR 	] = ["Amethysttür", "Ist dein Haus ein verschlossener Safe?", "Haltbarkeit: 3500"];

LANG[INV.FURNACE       	] = ["Ofen", "Wärmt dich", "Es verbraucht alle 5 Sekunden eine Einheit Holz", "Haltbarkeit: 1000"];
LANG[INV.WINDMILL      	] = ["Windmühle", "Kann mit Weizen, Mehl herstellen", "Es braucht 5 Sekunden um Mehl herzustellen", "Gibt dir Punkte während es arbeitet", "Haltbarkeit: 2000"];
LANG[INV.BREAD_OVEN    	] = ["Brotofen", "Erlaubt dir mit Mehl, Brot herzustellen", "Es braucht 5 Sekunden um Brot herzustellen", "Gibt dir Punkte während es arbeitet", "Haltbarkeit: 2000"];
LANG[INV.RESURRECTION  	] = ["Wiederbelebungsstein", "Es ist Magie", "Wiederbelebt dich, wenn du ein Geist bist", "Du wirst deine Waffe und Spitzhacke verlieren", "Haltbarkeit: 200"];

LANG[TEXT.YOU_CANNOT_JOIN] = "Du kannst diesem Server nicht beitreten";
LANG[TEXT.KICKED] = "Gekickt: ";
LANG[TEXT.KEY_ALREADY] = "Dein Schlüssel wurde bereits von jemand anderem benutzt";
LANG[TEXT.KEY_WRONG] = "Dein Schlüssel ist falsch";
LANG[TEXT.OLD_VERSION] = "Deine Version ist veraltet, säubere dein Cache";
LANG[TEXT.NO_MORE_RESOURCES] = "Es gibt keine neuen Ressourcen";
LANG[TEXT.SURVIVED_1DAY] = "Du hast einen Tag überlebt";
LANG[TEXT.SURVIVED] = "Du hast überlebt ";
LANG[TEXT.DAYS] = " Tage";
LANG[TEXT.DEAD_SAD] = "Du bist gestorben ;-;";
LANG[TEXT.SPAM_ME] = "Server kann kein Spawnplatz finden! Drücke immer wieder auf spielen!";
LANG[TEXT.SPAM_ME2] = "Server ist voll! Drücke immer wieder auf spielen!";
LANG[TEXT.EMPTY] = "Ressource ist leer";
LANG[TEXT.INV_FULL] = "Dein Inventar ist voll (rechts-klick um Gegenstände zu entfernen)";
LANG[TEXT.DEAD] = " ist gestorben";
LANG[TEXT.WRONG_TOOL] = "Das ist nicht das richtige Werkzeug";
LANG[TEXT.JOIN_TEAM] = "Du bist einem Team beigetreten";
LANG[TEXT.YOU_DEAD] = "Du bist gestorben";
LANG[TEXT.JOINED_TEAM] = " ist dem Team beigetreten";
LANG[TEXT.TEAM_DESTROYED] = "Dein Team wurde zerstört";
LANG[TEXT.LEFT_TEAM] = "Du hast das Team verlassen";
LANG[TEXT.LEFT_TEAM2] = " hat das Team verlassen";
LANG[TEXT.TOKEN] = "Jemand hat dein Token gestohlen :>";
LANG[TEXT.CHOOSE] = "Suche dir ein Server aus";
LANG[TEXT.PLAYERS] = "Spieler";
LANG[TEXT.TOTAL_PLAYERS] = "alle Spieler";
LANG[TEXT.TOTAL_MODE] = "Spieler in diesem Modus";
LANG[TEXT.COMMING_SOON] = "Bald verfügbar...";

document.getElementById ("nickname_input").placeholder = "Spitzname";

DIE[0] = ["Du wurdest ohne Grund getötet"];//UNKNOWN : 0,
DIE[1] = ["Du bist verhungert, wie der Name des Spiels andeutet"];//STARVE  : 2,
DIE[2] = ["Du bist erfroren. Zu schade","Du bist an Unterkühlung gestorben. Versuche nächstes Mal zu einem Feuer zu gehen ."]; //COLD	: 2,
DIE[3] = ["Ein Spieler hat dich getötet, während er dir gesagt hat 'git gud.'","Du wurdest von einem Spieler ermordet, mach dir keine Sorgen, er wird wahrscheinlich auch sterben ."];//PLAYER  : 3,
DIE[4] = ["Du bist zu nah ans Feuer gegangen und zu tode gebrannt. Schlechte Idee.","Du wurdest von einem Feuer umgebracht. Feuer tut weh. Schreib eine Geschichte darüber."];//FIRE	: 4,
DIE[5] = ["Dein Körper wird zu einem Spinnennest","Eine Spinne hat dich getötet. Zumindest war es kein Hase."];//SPIDER  : 5,
DIE[6] = ["Dieser Wolf wird nicht mehr verhungern","Sie sind keine Hunde. Wölfe mögen es nicht gestreichelt zu werden."];//WOLF	: 6,
DIE[7] = ["Der Fuchs war zu schnell für dich","Der Fuchs hat dich in eine Box verwandelt. Seit wann haben Tiere magische Kräfte?"];//FOX 	: 7,
DIE[8] = ["Der Bär wollte nur eine Umarmung.","Der Bär war zu viel zu ertragen. Es tut mir nicht leid."]; //BEAR	: 8,
DIE[9] = ["Du wurdest von einem Drachen knusprig gebraten. Zu schade.","Du wurdest von einem Drachen erdrückt. Zerquetscht zu werden ist ein schrecklicher Weg zu sterben."];//DRAGON  : 9,
DIE[10] = ["Du bist in eine Stachelwand gesprungen. Keine gute Idee...","Du wurdest von einer Stachelwand getötet. Die meisten Leute sind sensibel genug keine spitzen Sachen anzufassen."];//SPIKE   : 10,
DIE[11] = ["Sogar Geister können sterben.","Du hast es nicht geschafft wiederbelebt zu werden. Das ist ein Spiel, also lebst du nachdem du stirbst..."];//GHOST : 11
DIE[12] = ["Ein Bakterium von deinem rohen Fleisch hat dich getötet. Das Spiel ist definitiv zu schwierig.","Du hast das rohe Fleisch getötet. Es hat dich ebenfalls getötet."];//RAW FOOD : 12
DIE[13] = ["Du bist verdurstet. Solltest lieber deinen eigenen Urin trinken."]; // WATER : 13
DIE[14] = ["Wusstest du, dass dein Mund beim Schwimmen immer unterm Wasser ist? Jetzt weißt du es."]; // OXYGEN : 14
DIE[15] = ["Mach dir keine Sorge, der Piranha findet dich lecker.","Nebenbei: Piranhas essen Menschen. Dich mit eingeschlossen."];//PIRANHA : 15,
DIE[16] = ["LapaMauve plant nicht, dass du den Kraken töten kannst","Ein Kraken hat deinen Schädel zertrümmert."];//KRAKEN : 16,
DIE[17] = ["Deine Haut fällt auseinander, die Sonne hat dich umgebracht."];//SUN LIGHT : 17
DIE[18] = ["Knoblauch in deiner Tasche hat dein Gehirn gebraten "];//GARLIC_POCKET: 18
DIE[19] = ["Stehe als ein Vampir nicht neben den Knoblauchnelken."];//GARLIC: 19
DIE[20] = ["Du hast als ein Vampir Knoblauch gegessen, was hast du erwartet?"];//ATE GARLIC: 20
DIE[21] = ["Dein Körper ist von einem Dornenbusch umgeben.Während du versuchst zu entkommen löst sich deine Haut von deinem Körper und dein Herz hört auf zu schlagen."];//THORNBUSH: 21

ZOMBIE_GRUMBLE = "Uuunnnggg";
ZOMBIE_GRUMBLES = [
	"Uuunnnggg...Ich verhungere...",
	"Brauche dein Gehirn... Uuunnnggg...",
	"Hier gibt es frisches Fleisch... Uuunnnggg",
	"Uuunnnggg...Du bist lecker",
	"Uuunnnggg...",
	"Essen... uuunnnggg...",
	"Ich rieche Blut... Uuunnnggg"
];

}
