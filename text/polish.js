var set_polish = function () {

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

LANG[INV.HAND              ] = ["Ręka"];
LANG[INV.GROUND            ] = ["Ziemia", "Brudna!"];
LANG[INV.SAND              ] = ["Piasek", "Mam go w oczach!"];
LANG[INV.WOOD              ] = ["Drewno", "Nie możesz mieć go wystarczająco!"];
LANG[INV.STONE             ] = ["Kamień", "Także nazywany skałą"];
LANG[INV.GOLD              ] = ["Złoto", "Bądź hojny, daj trochę innym"];
LANG[INV.DIAMOND           ] = ["Diament", "Co z nim zrobisz?"];
LANG[INV.AMETHYST          ] = ["Ametyst", "Jest Fiołkowy jak Lapa"];

LANG[INV.FLOUR             ] = ["Mąka", "Używana w gotowaniu"];
LANG[INV.COOKIE            ] = ["Ciastko", "Przepyszne ciasteczko od babci", "Jedzenie: 50"];
LANG[INV.CAKE              ] = ["Ciasto", "Raj dla smakoszy", "Jedzenie: 100"];
LANG[INV.MEAT              ] = ["Surowe mięso", "Możesz je upiec w ogniu", "Powoduje zatrucie pokarmowe: 10", "Jedzenie: 15"];
LANG[INV.COOKED_MEAT       ] = ["Pieczone mięso", "Krwisty stek, proszę", "Jedzenie: 35"];
LANG[INV.FOODFISH          ] = ["Surowa ryba", "Myślę, że nadal jest żywa", "Powoduje zatrucie pokarmowe: 10", "Jedzenie: 18"];
LANG[INV.FOODFISH_COOKED   ] = ["Pieczona ryba", "Z cytryną jest idealna", " Jedzenie: 35"];
LANG[INV.BREAD             ] = ["Chleb", "Świetny Francuski chleb", "Jest walutą używaną w markecie", "Jedzenie: 15"];
LANG[INV.SANDWICH          ] = ["Kanapka", "Smakuje jak kraboburger", "Jedzenie: 100"];
LANG[INV.CANDY             ] = ["Cukierki", "Tylko dla dzieci!", "Jedzenie: 100"];
LANG[INV.SUGAR_CAN         ] = ["Laska cukrowa", "Spróbuj, jest przepyszna", "Jedzenie: 100"];
LANG[INV.GARLAND           ] = ["Girlanda", "Idealna do dekorowania dachów"];

LANG[INV.SEED              ] = ["Nasionko jagody", "Wyrośnie w jagody", "Narodziny: 2min", "Rośnięcie: 55s", "Podlewanie: 3min 20s", "Wytrzymałość: 700", "Czas życia: 8 dni"];
LANG[INV.PLANT             ] = ["Jagody", "Jagody są pyszne!", "Jedzenie: 10"];
LANG[INV.WHEAT_SEED        ] = ["Nasiono pszenicy", "Wyrośnie w pszenicę", "Narodziny: 2min", "Rośnięcie: 16s", "Podlewanie: 2min", "Wytrzymałość: 700", "Czas życia: 8 dni"];
LANG[INV.WILD_WHEAT        ] = ["Pszenica", "Zamienia się w mąkę jeżeli wrzucisz ją do wiatraka"];
LANG[INV.PUMPKIN_SEED      ] = ["Nasiono dyni", "Wyrośnie w dynię", "Narodziny: 2min 40s", "Rośnięcie: 2min", "Podlewanie: 2min", "Wytrzymałość: 700", "Czas życia: 8 dni"];
LANG[INV.PUMPKIN           ] = ["Dynia", "Przypomina mi o Halloween", "Jedzenie: 30"];
LANG[INV.GARLIC_SEED       ] = ["Nasionko czosnku", "Bardzo niebezpieczne dla wampirów", "Obrażenia: 20", "Narodziny: 4min", "Rośnięcie: 1min 10s", "Podlewanie: 1min 40s", "Wytrzymałość: 700", "Czas życia: 8 dni"];
LANG[INV.GARLIC            ] = ["Czosnek", "Leczy cię i redukuje zimno", "Jedzenie: 14", "Uzdrawia z biegiem czasu: 30", "Efekt: 1"];
LANG[INV.THORNBUSH_SEED    ] = ["Nasiono kolczastego krzewu", "Może zranić twoich wrogów", "Obrażenia: 20", "Narodziny: 4min", "Rośnięcie: 15s", "Podlewanie: 3min", "Wytrzymałość: 1000", "Czas życia: 8 dni"];
LANG[INV.THORNBUSH         ] = ["Kolczasty krzew", "Kłuje!"];
LANG[INV.PLOT              ] = ["Donica", "Naprawdę, użyj jej", "Z tym genetycznie modyfikowanym nawozem, twoje rośliny", "będą rosły znacznie szybciej i będą potrzebować mniej wody", "Wytrzymałość: 2000"];
LANG[INV.ICE               ] = ["Lód", "Użyteczny do robienia ciast i wody"];
LANG[INV.SPANNER           ] = ["Klucz mechaniczny", "Do naprawiania drzwi i kolców", "Uszkodzenie: 2"];

LANG[INV.FUR_WOLF          ] = ["Wilcza skóra", "Szczeniaczek? Ale gdzie jest szczeniaczek?!"];
LANG[INV.FUR               ] = ["Skóra królika", "Ten królik był taki słodziutki..."];
LANG[INV.SPECIAL_FUR       ] = ["Skóra", "Jesteś fabryką chleba"];
LANG[INV.SPECIAL_FUR_2     ] = ["Ciemna skóra", "Byłeś gotowy zrobić coś złego"];
LANG[INV.FUR_WINTER        ] = ["Zimowa skóra", "Te zwierzęta chciały się tylko przytulić..."];
LANG[INV.SCALES            ] = ["Łuski", "Pachnie jak ryba!"];
LANG[INV.KRAKEN_SKIN       ] = ["Skóra krakena", "Nie byłeś zbyt przestraszony?"];

LANG[INV.FIRE              ] = ["Ognisko", "Ociepli cię!", "Wytrzymałość: 150", "Czas życia: 2min"];
LANG[INV.BIG_FIRE          ] = ["Duże ognisko", "Ociepli cię na dłużej!", "Wytrzymałość: 400", "Czas życia: 6min"];
LANG[INV.WORKBENCH         ] = ["Stół rzemieślniczy", "Użyteczny do stwarzania przedmiotów"];
LANG[INV.CORD              ] = ["Nić", "Używany w tworzeniu czapek i plecaków"];
LANG[INV.BLUE_CORD         ] = ["Diamentowa nić", "Używana w tworzeniu specjalnych czapek"];
LANG[INV.CHEST             ] = ["Skrzynia", "Pozwala ci na przechowywanie przedmiotów", "Wytrzymałość: 500"];

LANG[INV.SWORD_WOOD        ] = ["Drewniany miecz", "To coś działa?", "Obrażenia: 12", "Obrażenia do budowli: 4"];
LANG[INV.SWORD             ] = ["Kamienny miecz", "Bądź miły dla innych", "Obrażenia: 19", "Obrażenia do budowli: 6"];
LANG[INV.SWORD_GOLD        ] = ["Złoty miecz", "Król lasu", "Obrażenia: 22", "Obrażenia do budowli: 7"];
LANG[INV.SWORD_DIAMOND     ] = ["Diamentowy miecz", "Możesz poczuć moc", "Obrażenia: 24", "Obrażenia do budowli: 8"];
LANG[INV.PIRATE_SWORD      ] = ["Piracki miecz", "Ayyyyy!", "Dłuższy niż zwykły miecz", "Obrażenia: 24", "Obrażenia do budowli: 8"];
LANG[INV.SWORD_AMETHYST    ] = ["Ametystowy miecz", "fiołkowy to najpiękniejszy kolor na świecie", "Damage: 27", "Obrażenia do budowli: 9"];
LANG[INV.DRAGON_SWORD      ] = ["Smoczy miecz", "Bez litości!", "Obrażenia: 30", "Obrażenia do budowli: 10"];
LANG[INV.DRAGON_SPEAR      ] = ["Smocza włócznia", "Zabij ich wszystkich!", "Obrażenia: 22", "Obrażenia do budowli: 6"];

LANG[INV.PICK_WOOD         ] = ["Drewniany kilof", "Może wydobywać tylko kamienie i drewno", "Obrażenia: 1"];
LANG[INV.PICK              ] = ["Kamienny kilof", "Może wydobywać drewno, kamienie i złoto", "Obrażenia: 2"];
LANG[INV.PICK_GOLD         ] = ["Złoty kilof", "Może także wydobywać diamenty", "Obrażenia: 3", "Obrażenia do budowli: 1"];
LANG[INV.PICK_DIAMOND      ] = ["Diamentowy kilof", "Może wydobywać wszystko", "Obrażenia: 4", "Obrażenia do budowli: 1"];
LANG[INV.PICK_AMETHYST     ] = ["Ametystowy kilof", "Może wydobywać wszystko. Wygląda fantastycznie!" , "Obrażenia: 5", "Obrażenia do budowli: 1"];

LANG[INV.HAMMER            ] = ["Kamienny młot", "Pomocny w niszczeniu budowli", "Nie działa najlepiej na ametyście", "Obrażenia: 2", "Obrażenia do budowli: 20"];
LANG[INV.HAMMER_GOLD       ] = ["Złoty młot", "Pomocny w niszczeniu budowli", "Nie działa najlepiej na ametyście", "Obrażenia: 3", "Obrażenia do budowli: 30"];
LANG[INV.HAMMER_DIAMOND    ] = ["Diamentowy młot", "Pomocny w niszczeniu budowli", "Obrażenia: 4", "Obrażenia do budowli: 40"];
LANG[INV.HAMMER_AMETHYST   ] = ["Ametystowy młot", "Pomocny w niszczeniu budowli", "Obrażenia: 5", "Obrażenia do budowli: 50"];
LANG[INV.SUPER_HAMMER      ] = ["Super młot", "Miałeś kiedyś plan zniszczenia świata?", "Obrażenia: 12", "Obrażenia do budowli: 70"];

LANG[INV.WOOD_SPEAR        ] = ["Drewniana włócznia", "Jak patyk, ale kłuje.", "Obrażenia: 10", "Obrażenia do budowli: 2"];
LANG[INV.SPEAR             ] = ["Kamienna włócznia", "Początek ewolucji!", "Obrażenia: 14", "Obrażenia do budowli: 4"];
LANG[INV.GOLD_SPEAR        ] = ["Złota włócznia", "Uważaj, kłuje!", "Obrażenia: 15", "Obrażenia do budowli: 5"];
LANG[INV.DIAMOND_SPEAR     ] = ["Diamentowa włócznia", "Jesteś gotowy, aby zabić smoka", "Obrażenia: 17", "Obrażenia do budowli: 5"];
LANG[INV.AMETHYST_SPEAR    ] = ["Ametystowa włócznia", "Smoki już nie są dla ciebie zagrożeniem",  "Obrażenia: 18", "Obrażenia do budowli: 6"];

LANG[INV.SHOVEL            ] = ["Kamienna łopata", "Kop w ziemi aby zdobyć ziemię, lód i piasek", "Możesz także zdobyć minerały", "Obrażenia: 2"];
LANG[INV.SHOVEL_GOLD       ] = ["Złota łopata", "Kop w ziemi aby zdobyć ziemię, lód i piasek", "Możesz także zdobyć minerały", "Obrażenia: 3", "Obrażenia do budowli: 1"];
LANG[INV.SHOVEL_DIAMOND    ] = ["Diamentowa łopata", "Kop w ziemi aby zdobyć ziemię, lód i piasek", "Możesz także zdobyć minerały", "Obrażenia: 4", "Obrażenia do budowli: 1"];
LANG[INV.SHOVEL_AMETHYST   ] = ["Ametystowa łopata", "Kop w ziemi aby zdobyć ziemię, lód i piasek", "Możesz także zdobyć minerały",  "Obrażenia: 5", "Obrażenia do budowli: 1"];

LANG[INV.WOOD_HELMET       ] = ["Drewniany hełm", "Lepsze niż nic", "Obrona przed graczami: 1", "Obrona przed zwierzętami: 4"];
LANG[INV.STONE_HELMET      ] = ["Kamienny hełm", "Jesteś gotowy do bitwy!", "Obrona przed graczami: 2", "Obrona przed zwierzętami: 8"];
LANG[INV.GOLD_HELMET       ] = ["Złoty hełm", "Zwany także hełmem barbarzyńców", "Obrona przed graczami: 4", "Obrona przed zwierzętami: 13"];
LANG[INV.DIAMOND_HELMET    ] = ["Diamentowy hełm", "Nie przechwalaj się za bardzo", "Obrona przed graczami: 5", "Obrona przed zwierzętami: 19"];
LANG[INV.AMETHYST_HELMET   ] = ["Ametystowy hełm", "Nie boisz się już niczego", "Obrona przed graczami: 6", "Obrona przed zwierzętami: 23"];
LANG[INV.DRAGON_HELMET     ] = ["Smoczy hełm", "Zmierzysz się z całym światem", "Obrona przed graczami: 8", "Obrona przed zwierzętami: 27"];

LANG[INV.EXPLORER_HAT      ] = ["Czapka odkrywcy", "Zwierzęta nie będą zwracały na ciebie uwagi", "ale nie rób hałasu!", "Ciepło w i poza zimą"];
LANG[INV.CHRISTMAS_HAT     ] = ["świąteczna czapka", "Oh, oh, oh, Wesołych Świąt", "Ciepło w i poza zimą"];
LANG[INV.ELF_HAT           ] = ["Czapka elfa", "Nie pozwól się być wykorzystywanym, mały śnieżny elfie!", "Ciepło w i poza zimą"];
LANG[INV.HOOD              ] = ["Kaptur", "Jesteś łobuzem", "Możesz coś komuś ukraść jeśli", "- Jest noc", "- Nic przy sobie nie masz", "- Jeżeli nic przez chwilę nie dotykałeś", "- Nie jesteś blisko ognia", "- Twój cel nie jest ubrany w chłopską tunikę", "Jest ciepło w i poza zimą"];
LANG[INV.EARMUFFS          ] = ["Nauszniki", "Jakiś inny rodzaj małej czapki.", "Ciepło w i poza zimą"];
LANG[INV.COAT              ] = ["Czapka", "Także nazywana płaszczem.", "Ciepła w i poza zimą"];
LANG[INV.CAP_SCARF         ] = ["Szal i czapka", "Bardzo wygodna, bardzo ciepła"];
LANG[INV.PEASANT           ] = ["Chłopska tunika", "Twoje rośliny rosną szybciej", "Ciepła w i poza zimą"];
LANG[INV.WINTER_HOOD       ] = ["Zimowy kaptur", "Możesz coś komuś ukraść jeśli", "- Jest noc", "- Nic przy sobie nie masz", "- Jeżeli nic przez chwilę nie dotykałeś", "- Nie jesteś blisko ognia", "- Twój cel nie jest ubrany w tunikę zimowego chłopa", "Jest ciepło w i poza zimą"];
LANG[INV.WINTER_PEASANT    ] = ["Zimowa chłopska tunika", "Twoje rośliny rosną szybciej", "Ciepło w i poza zimą"];
LANG[INV.DIVING_MASK       ] = ["Maska do nurkowania", "Jesteś szybki w wodzie", "Ciepło", "Obrona przed graczami: 2, Obrona przed zwierzętami: 8"];
LANG[INV.SUPER_DIVING_SUIT ] = ["Strój głębinowy", "Jesteś bardzo szybki w wodzie", "Ciepło ci w wodzie", "Obrona przed graczami: 4, Obrona przed zwierzętami: 16"];

LANG[INV.DRAGON_ORB        ] = ["Smocza kula", "Zdobyta podczas zadania"];
LANG[INV.DRAGON_HEART      ] = ["Smocze serce", "Zamienia cię w ducha po śmierci!", "Jesteś duchem na 60 sekund", "Znajdź kamień rezurekcyjny",];
LANG[INV.GEMME_GREEN       ] = ["Zielony kryształ", "Nie oszukiwałeś, przysięgasz?"];
LANG[INV.GEMME_ORANGE      ] = ["Pomarańczowy kryształ", "Tylko prawdziwy pirat może go znaleźć!"];
LANG[INV.GEMME_BLUE        ] = ["Niebieski kryształ", "Dla zbyt miłych ludzi"];
LANG[INV.CROWN_GREEN       ] = ["Zielona korona", "Szybko się leczysz", "Uzdrawia z biegiem czasu: 40", "Obrona przed graczami: 4, Obrona przed zwierzętami: 16"];
LANG[INV.CROWN_ORANGE      ] = ["Pomarańczowa korona", "Nagle poczułeś smak szczęścia", "Obrona przed graczami: 4, Obrona przed zwierzętami: 16"];
LANG[INV.CROWN_BLUE        ] = ["Niebieska korona", "Gdy już będziesz martwy, zamienisz się w ducha", "Przy okazji stracisz swoją broń i kilof", "Obrona przed graczami: 4, Obrona przed zwierzętami: 16"];

LANG[INV.BUCKET_FULL       ] = ["Wiadro", "Również przydatne do napełnienia studni", "Jedno wiadro jest jak dwanaście butelek"];
LANG[INV.BUCKET_EMPTY      ] = ["Puste wiadro", "Musisz napełnić to wiadro wodą"];
LANG[INV.BOTTLE_FULL       ] = ["Butelka", "Pozwala pić wodę wszędzie", "Woda: 50"];
LANG[INV.BOTTLE_EMPTY      ] = ["Pusta butelka", "Możesz napełnić tą butelkę blisko źródła wody"];
LANG[INV.WATERING_CAN      ] = ["Pusta konewka", "Musisz ją napełnić w źródle wody, aby ją użyć"];
LANG[INV.WATERING_CAN_FULL ] = ["Konewka", "Pozwala podlewać rośliny", "Obrażenia: 1"];

LANG[INV.BAG               ] = ["Plecak", "Więcej miejsca na twoje przedmioty!"];
LANG[INV.PAPER             ] = ["Papier", "Używany w tworzeniu książki"];
LANG[INV.BOOK              ] = ["Książka", "Pozwala znacznie skrócić wytwarzanie", "Musisz ją nosić by zadziałała", "Uszkodzenie 1"];
LANG[INV.BANDAGE           ] = ["Bandaż", "Szybciej zregeneruj życie", "Uzdrawia z biegiem czasu: 30", "Efekt: 5"];
LANG[INV.LOCK              ] = ["Zamek", "Pozwala ci zamknąć skrzynię"];
LANG[INV.LOCKPICK          ] = ["Wytrych", "Pozwala ci odblokować jedną skrzynię"];
LANG[INV.TOTEM             ] = ["Totem", "Pozwala ci stworzyć drużynę", "Dziel się drzwiami i zamkniętymi skrzyniami", "Szkodliwe budynki nie zranią twoich przyjaciół"];
LANG[INV.BRIDGE            ] = ["Most", "Bardzo przydatny w wodzie", "Pozwala ci pić bez utonięcia", "Chodzisz szybciej w wodzie"];
LANG[INV.SIGN              ] = ["Tabliczka", "Zostaw wiadomość dla innych", "Wytrzymałość: 200"];
LANG[INV.ROOF              ] = ["Dach", "Trochę cie ogrzewa i chowa!"];
LANG[INV.WELL              ] = ["Studnia", "Umożliwia napełnienie butelki", "Wytrzymałość: 1000"];
LANG[INV.WALL              ] = ["Drewniany mur", "Znasz taniec ścian?", "Wytrzymałość: 1000"];
LANG[INV.STONE_WALL        ] = ["Kamienny mur", "Jest to trochę bardziej poważniejsze.", "Wytrzymałość: 1500"];
LANG[INV.GOLD_WALL         ] = [" Złoty mur", "Złoto na twoich murach? To trochę krzykliwe.", "Wytrzymałość: 2000"];
LANG[INV.DIAMOND_WALL      ] = ["Diamentowy mur", "Jaki błyszczący, uważaj na oczy", "Wytrzymałość: 2500"];
LANG[INV.AMETHYST_WALL     ] = ["Ametystowy mur", "Musisz bardzo się bać, aby wyjść!", "Wytrzymałość: 3000"];
LANG[INV.SPIKE             ] = ["Drewniany kolczasty mur", "Może uszkodzić wrogów", "Obrażenia: 10, Obrażenia po uszkodzeniu: 2", "Wytrzymałość: 150"];
LANG[INV.STONE_SPIKE       ] = ["Kamienny kolczasty mur", "Nie chciałbym być twoim wrogiem.", "Obrażenia: 20", " Obrażenia po uszkodzeniu: 3", "Wytrzymałość: 300"];
LANG[INV.GOLD_SPIKE        ] = ["Złoty kolczasty mur", "Jesteśtaki okrutny.", "Obrażenia: 30", " Obrażenia po uszkodzeniu: 3", "Wytrzymałość: 600"];
LANG[INV.DIAMOND_SPIKE     ] = ["Diamentowy kolczasty mur", "Raczej nie lubisz towarzystwa.", "Obrażenia: 40", "Obrażenia po uszkodzeniu: 4", "Wytrzymałość: 1200"];
LANG[INV.AMETHYST_SPIKE    ] = ["Ametystowy kolczasty mur", "Co ci sąsiedzi ci zrobili?", "Obrażenia: 50", "Obrażenia po uszkodzeniu: 4", "Wytrzymałość: 2400"];
LANG[INV.WOOD_DOOR         ] = ["Drewniane drzwi", "Może być otwarte przez ciebie lub przyjaciół", "Wytrzymałość: 1000"];
LANG[INV.STONE_DOOR        ] = ["Kamienne drzwi", "Solidne drzwi są bardziej poważne ", "Wytrzymałość: 1500"];
LANG[INV.GOLD_DOOR         ] = ["Złote drzwi", "Czy odbudowujesz El Dorado?", "Wytrzymałość: 2000"];
LANG[INV.DIAMOND_DOOR      ] = ["Diamentowe drzwi", "Dla błyszczącego domu", "Wytrzymałość: 2500"];
LANG[INV.AMETHYST_DOOR     ] = ["Ametystowe drzwi", "Czy twój dom to zamknięty sejf?", "Wytrzymałość: 3000"];

LANG[INV.FURNACE           ] = ["Piec", "Ogrzewa cię", "Zużywa drewno co 5 sekund", "Wytrzymałość: 1000"];
LANG[INV.WINDMILL          ] = ["Młyn", "Może produkować mąkę z pszenicy", "Przygotowanie mąki zajmuje 5 sekund", "Zwraca punkty podczas pracy", "Wytrzymałość: 2000"];
LANG[INV.BREAD_OVEN        ] = ["Piec do chleba", "Pozwala na wypiek chleba z mąki", "Przygotowanie chleba zajmuje 10 sekund", "Zwraca punkty podczas pracy", "Wytrzymałość: 2000"];
LANG[INV.RESURRECTION      ] = ["Kamień rezurekcyjny", "To magia", "Wskrzesi cię jeśli jesteś duchem", "Stracisz swoja broń i kilof", "Wytrzymałość: 200"];

LANG[TEXT.YOU_CANNOT_JOIN] = "Nie możesz dołączyć do tego serwera";
LANG[TEXT.KICKED] = "Wyrzucony: ";
LANG[TEXT.KEY_ALREADY] = "Twój klucz jest aktualnie używany przez innego gracza";
LANG[TEXT.KEY_WRONG] = "Twój klucz jest nieprawidłowy";
LANG[TEXT.OLD_VERSION] = "Posiadasz starszą wersję, musisz wyczyścić swoją pamięć";
LANG[TEXT.NO_MORE_RESOURCES] = "Nie ma nowych minerałów, zwierząt, i jedzenia";
LANG[TEXT.SURVIVED_1DAY] = "Przeżyłeś 1 dzień";
LANG[TEXT.SURVIVED] = "Przeżyłeś ";
LANG[TEXT.DAYS] = " dni";
LANG[TEXT.DEAD_SAD] = "Jesteś martwy ;-;";
LANG[TEXT.SPAM_ME] = "Serwer nie może znaleźć miejsca na spawn! Spamuj przycisk zagraj! Lub wybierz inny serwer...";
LANG[TEXT.SPAM_ME2] = "Serwer jest pełny! Spamuj przycisk zagraj!";
LANG[TEXT.EMPTY] = "Źródło jest puste";
LANG[TEXT.INV_FULL] = "Ekwipunek jest pełny (użyj prawego przycisku myszy, żeby wyrzucić przedmiot)";
LANG[TEXT.DEAD] = " jest martwy";
LANG[TEXT.WRONG_TOOL] = "To nie jest właściwe narzędzie";
LANG[TEXT.JOIN_TEAM] = "Dołączyłeś do drużyny";
LANG[TEXT.YOU_DEAD] = "Jesteś martwy";
LANG[TEXT.JOINED_TEAM] = " dołączył do drużyny";
LANG[TEXT.TEAM_DESTROYED] = "Twoja drużyna została zniszczona";
LANG[TEXT.LEFT_TEAM] = " Opuściłeś drużynę";
LANG[TEXT.LEFT_TEAM2] = " opuścił drużynę";
LANG[TEXT.TOKEN] = "Ktoś ukradł twój żeton :>";
LANG[TEXT.CHOOSE] = "Wybierz serwer";
LANG[TEXT.PLAYERS] = "graczy";
LANG[TEXT.TOTAL_PLAYERS] = "wszystkich graczy";
LANG[TEXT.TOTAL_MODE] = "graczy w tym trybie";
LANG[TEXT.COMMING_SOON] = "Już wkrótce...";

document.getElementById ("nickname_input").placeholder = "Przydomek";

DIE[0] = ["Zostałeś zabity bez powodu"];//UNKNOWN : 0,
DIE[1] = ["Umarłeś z głodu, jak nazwa gry wskazuje"];//STARVE  : 2,
DIE[2] = ["Zamarzłeś na śmierć. Ale smutne","Masz hipotermię. Następnym razem, zamiast tego spróbuj siedzieć obok ogniska."]; //COLD    : 2,
DIE[3] = ["Gracz zabił cię, mówiąc ci 'git gud.' ","Zostałeś zamordowany przez gracza. Nie martw się, ten gracz też zginie, ewentualnie."];//PLAYER  : 3,
DIE[4] = ["Byłeś za blisko ogniska i spłonąłeś. Zły pomysł.","Zginąłeś od ognia. Ogień cię rani. Idź i napisz o tym historię."];//FIRE    : 4,
DIE[5] = ["Twoje ciało stało się gniazdem dla pajęczych jaj","Pająk cię zabił. Przynajmniej to nie był królik."];//SPIDER  : 5,
DIE[6] = ["Wilk już nie będzie głodował po zjedzeniu cię","To nie są pieski.Wilki nie lubią jak się je głaszcze."];//WOLF    : 6,
DIE[7] = ["Lis był dla ciebie za szybki","Lis zmienił cię w pudło.Od kiedy zwierzęta mają magiczne zdolności?"];//FOX     : 7,
DIE[8] = ["Niedźwiedź chciał się tylko przytulić.","Niedźwiedź był biedny. Nie jest mi przykro."]; //BEAR    : 8,
DIE[9] = ["Zostałeś spalony na popiół przez smoka. Jakie to smutne.","Zostałeś spłaszczony przez smoka. Być zmiażdżonym to okropny sposób na śmierć."];//DRAGON  : 9,
DIE[10] = ["Wskoczyłeś na kolczasty mur. Niezbyt dobry pomysł...","Zostałeś zabity przez kolczasty mur. Większość ludzi ludzi jest wystarczająco rozsądna, aby nie dotykać spiczastych rzeczy."];//SPIKE   : 10,
DIE[11] = ["Nawet duch potrafi umrzeć.","Nie udało ci się dokonać rezurekcji. To jest gra, więc żyjesz po śmierci, więc..."];//GHOST : 11
DIE[12] = ["Bakterie z twojego surowego mięsa zabiły cię. Ta gra jest zdecydowanie za trudna.","Ty zabiłeś surowe mięso. Ono zabiło ciebię."];//RAW FOOD : 12
DIE[13] = ["Zginąłeś z pragnienia. Lepiej pić własny mocz."]; // WATER : 13
DIE[14] = ["Czy wiedziałeś, że usta głodomorka są zawsze pod wodą podczas pływania? Teraz wiesz."]; // OXYGEN : 14
DIE[15] = ["Nie martw się, zasmakowałeś pirani.","Zabawny fakt: Piranie jedzą ludzi, włączając ciebie."];//PIRANHA : 15,
DIE[16] = ["LapaMauve nie planuje abyś mógł zabić krakena","Kraken rozwalił twoją czaszkę."];//KRAKEN : 16,
DIE[17] = ["Twoja skóra odpada, słońce cię zabija."];//SUN LIGHT : 17
DIE[18] = ["Czosnek w twoich kieszeniach  ugotował ci mózg."];//GARLIC_POCKET: 18
DIE[19] = ["Jako wampir, nie stałbym blisko ząbków czosnku."];//GARLIC: 19
DIE[20] = ["Zjadłeś czosnek jako wampir, czego oczekiwałeś?"];//ATE GARLIC: 20
DIE[21] = ["Twoje ciało owija się w cierniste krzaki.Kiedy próbujesz uciec,twoja skóra odpada i twoje serce przestaje bić."];//THORNBUSH: 21

ZOMBIE_GRUMBLE = "Uuunnnggg";
ZOMBIE_GRUMBLES = [
	"Uuunnnggg... Głoduję",
	"Potrzebuję twojego mózgu Uuunnnggg...",
	"Świeże mięso tutaj.. Uuunnnggg",
	"Uuunnnggg... Jesteś pyszny",
	"Uuunnnggg...",
	"Jeść... uuunnnggg...",
	"Czuję krew... Uuunnnggg",
];

}
