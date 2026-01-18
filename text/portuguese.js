var set_portuguese = function () {

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

LANG[INV.HAND              ] = ["mão"];
LANG[INV.GROUND            ] = ["terra", "está sujo!"];
LANG[INV.SAND              ] = ["areia", "entrou nos meus olhos!"];
LANG[INV.WOOD              ] = ["madeira", "você não pode pegar o suficiente disso!"];
LANG[INV.STONE             ] = ["pedra", "também chamado rocha"];
LANG[INV.GOLD              ] = ["ouro", "seja generoso, dê para outros"];
LANG[INV.DIAMOND           ] = ["diamante", "o que você irá fazer com isso?"];
LANG[INV.AMETHYST          ] = ["ametista", "é mauve como lapa"];

LANG[INV.FLOUR             ] = ["farinha", "usada na cozinha"];
LANG[INV.COOKIE            ] = ["biscoito", "biscoito da vovó", "comida: 50"];
LANG[INV.CAKE              ] = ["bolo", "bolo dos sonhos para gourmets", "comida: 100"];
LANG[INV.MEAT              ] = ["carne crua", "você pode cozinhar na fogueira", "envenenamento por comida: 10", "comida: 15"];
LANG[INV.COOKED_MEAT       ] = ["carne assada", "um mal passado, por favor", "comida: 35"];
LANG[INV.FOODFISH          ] = ["peixe cru", "eu acho que ainda está vivo", "causa envenenamento por comida: 10", "comida: 18"];
LANG[INV.FOODFISH_COOKED   ] = ["peixe assado", "com limão é perfeito", "comida: 35"];
LANG[INV.BREAD             ] = ["pão", "um excelente pão francês", "é a moeda do mercado", "comida: 15"];
LANG[INV.SANDWICH          ] = ["sanduíche", "saboroso com rissol de krabby", "comida: 100"];
LANG[INV.CANDY             ] = ["doces", "apenas para crianças!", "comida: 100"];
LANG[INV.SUGAR_CAN         ] = ["cana-de-açúcar", "prove, é delicioso!", "comida: 100"];
LANG[INV.GARLAND           ] = ["pisca-pisca", "decoração perfeita de telhado"];

LANG[INV.SEED              ] = ["sementes de berries", "cresce como berrie", "nasce em: 2min", "cresce em: 55s", "precisa de água em: 3min 20s", "durabilidade: 700", "tempo de vida: 8 dias"];
LANG[INV.PLANT             ] = ["berry", "Berry saborosa!", "comida: 10"];
LANG[INV.WHEAT_SEED        ] = ["semente de trigo", "cresce como trigo", "nasce em: 2min", "cresce em: 16s", "precisa de água em: 2min", "durabilidade: 700", "tempo de vida: 8 days"];
LANG[INV.WILD_WHEAT        ] = ["planta selvagem", "vira farinha quando coloca em um moinho de vento"];
LANG[INV.PUMPKIN_SEED      ] = ["semente de abóbora", "cresce como abóbora", "nasce em: 2min 40s", "cresce em: 2min", "precisa de água em: 2min", "durabilidade: 700", "tempo de vida: 8 dias"];
LANG[INV.PUMPKIN           ] = ["abóbora", "é a lembrança do halloween", "comida: 30"];
LANG[INV.GARLIC_SEED       ] = ["semente de alho", "muito perigoso para vampiros", "dano: 20", "nassce: 4min", "cresce em: 1min 10s", "precisa de água em: 1min 40s", "durabilidade: 700", "tempo de vida: 8 dias"];
LANG[INV.GARLIC            ] = ["alho", "cura você e reduz o frio", "comida: 14", "cura ao longo do tempo: 30", "efeito: 1"];
LANG[INV.THORNBUSH_SEED    ] = ["semente de mato de espinhos", "pode dar dano nos seus inimigos", "dano: 20", "nasce em: 4min", "cresce em: 15s", "precisa de água em: 3min", "durabilidade: 1000", "tempo de vida: 8 days"];
LANG[INV.THORNBUSH         ] = ["mato de espinhos", "pica!"];
LANG[INV.PLOT              ] = ["pote", "sério, use isso", "com esse GMO fertilize suas plantas", "vai crescer mais rápido e com menos água", "durabilidade: 2000"];
LANG[INV.ICE               ] = ["gelo", "útil para fazer bolo e água"];
LANG[INV.SPANNER           ] = ["chave inglesa", "para reparar portas, muros e muros com espinho", "dano: 2"];

LANG[INV.FUR_WOLF          ] = ["pele de lobo", "cachorro? mas onde está o cachorro?!"];
LANG[INV.FUR               ] = ["pele de coelho", "o coelho era tão fofo..."];
LANG[INV.SPECIAL_FUR       ] = ["pele pura", "você é uma fábrica de pão"];
LANG[INV.SPECIAL_FUR_2     ] = ["pele negra", "você está pronto para fazer algo errado"];
LANG[INV.FUR_WINTER        ] = ["pele de inverno", "ele só queria um abraço"];
LANG[INV.SCALES            ] = ["escala", "é pequeno como peixe!"];
LANG[INV.KRAKEN_SKIN       ] = ["pele do kraken", "você não está com medo?"];

LANG[INV.FIRE              ] = ["fogueira", "esquenta você!", "durabilidade: 150", "tempo de vida: 2min"];
LANG[INV.BIG_FIRE          ] = ["fogueira grande", "te esquenta por mais tempo!", "durabilidade: 400", "tempo de vida: 6min"];
LANG[INV.WORKBENCH         ] = ["mesa de trabalho", "muito útil para fazer todos os objetos"];
LANG[INV.CORD              ] = ["linha", "usada para fazer chapéus e mochila"];
LANG[INV.BLUE_CORD         ] = ["linha de diamante", "usada para fazer chapéus especiais"];
LANG[INV.CHEST             ] = ["baú", "permite que você guarde itens", "durabilidade: 500"];

LANG[INV.SWORD_WOOD        ] = ["espada de madeira", "isso funciona?", "dano: 12", "dano em construções: 4"];
LANG[INV.SWORD             ] = ["espada de pedra", "seja legal com outros", "dano: 19", "dano em construções: 6"];
LANG[INV.SWORD_GOLD        ] = ["espada de ouro", "rei da floresta", "dano: 22", "dano em construções: 7"];
LANG[INV.SWORD_DIAMOND     ] = ["espada de diamante", "você pode sentir o poder", "dano: 24", "dano em construções: 8"];
LANG[INV.PIRATE_SWORD      ] = ["espada de pirata", "AYYYYY!", "alcança mais distância que a espada normal", "dano: 24", "dano em construções: 8"];
LANG[INV.SWORD_AMETHYST    ] = ["espada de ametista", "mauve é a cor mais bonita do mundo", "dano: 27", "dano em construções: 9"];
LANG[INV.DRAGON_SWORD      ] = ["espada do dragão", "sem piedade!", "dano: 30", "dano em construções: 10"];
LANG[INV.DRAGON_SPEAR      ] = ["lança do dragão", "mate todos eles!", "dano: 22", "dano em construções: 6"];

LANG[INV.PICK_WOOD         ] = ["picareta de madeira", "pode coletar apenas madeira e pedra", "dano: 1"];
LANG[INV.PICK_STONE        ] = ["picareta de pedra", "pode coletar madeira, pedra e ouro", "dano: 2"];
LANG[INV.PICK_GOLD         ] = ["picareta de ouro", "pode coletar diamante", "dano: 3", "dano em construções: 1"];
LANG[INV.PICK_DIAMOND      ] = ["picareta de diamante", "pode coletar tudo", "dano: 4", "dano em construções: 1"];
LANG[INV.PICK_AMETHYST     ] = ["picareta de ametista", "pode coletar tudo, parece fantastico!", "dano: 5", "dano em construções: 1"];

LANG[INV.HAMMER            ] = ["martelo de pedra", "útil para destruir construções", "não funciona bem no diamante e na ametista", "dano: 2", "dano em construções: 20"];
LANG[INV.HAMMER_GOLD       ] = ["martelo de ouro", "útil para destruir construções", "não funciona bem na ametista", "dano: 3", "dano em construções: 30"];
LANG[INV.HAMMER_DIAMOND    ] = ["martelo de diamante", "útil para destruir construções", "dano: 4", "dano em construções: 40"];
LANG[INV.HAMMER_AMETHYST   ] = ["martelo de ametista", "útil para destruir construções", "dano: 5", "dano em construções: 50"];
LANG[INV.SUPER_HAMMER      ] = ["super martelo", "você planeja destruir o mundo?", "dano: 12", "dano em construções: 70"];

LANG[INV.WOOD_SPEAR        ] = ["lança de madeira", "parece um graveto de madeira mas pica.", "dano: 10", "dano em construções: 2"];
LANG[INV.SPEAR             ] = ["lança de pedra", "o começo da evolução!", "dano: 14", "dano em construções: 4"];
LANG[INV.GOLD_SPEAR        ] = ["lança de ouro", "cuidado, pica!", "dano: 15", "dano em construções: 5"];
LANG[INV.DIAMOND_SPEAR     ] = ["lança de diamante", "você está pronto para matar um dragão", "Dano: 17", "dano em construções: 5"];
LANG[INV.AMETHYST_SPEAR    ] = ["lança de ametista", "dragões não te amedrontam",  "Dano: 18", "dano em construções: 6"];

LANG[INV.SHOVEL            ] = ["pá de pedral", "cave o chão para pegar terra, areia e gelo", "você também pode pegar minerais", "dano: 2"];
LANG[INV.SHOVEL_GOLD       ] = ["pá de ouro", "cave o chão para pegar terra, areia e gelo", "você também pode pegar minerais", "dano: 3", "dano em construções: 1"];
LANG[INV.SHOVEL_DIAMOND    ] = ["pá de diamante", "cave o chão para pegar terra, areia e gelo", "você também pode pegar minerais", "dano: 4", "dano em construções: 1"];
LANG[INV.SHOVEL_AMETHYST   ] = ["pá de ametista", "cave o chão para pegar terra, areia e gelo", "você também pode pegar minerais", "dano: 5", "dano em construções: 1"];

LANG[INV.WOOD_HELMET       ] = ["capacete de madeira", "melhor que nada", "defesa de jogadores: 1", "defesa de animais: 4"];
LANG[INV.STONE_HELMET      ] = ["capacete de pedra", "você está pronto para a batalha!", "defesa de jogadores: 2", "Animals Defense: 8"];
LANG[INV.GOLD_HELMET       ] = ["capacete de ouro", "AKA o capacete dos selvagens", "defesa de jogadores: 4", "defesa de animais: 13"];
LANG[INV.DIAMOND_HELMET    ] = ["capacete de diamante", "não se precipite tanto", "defesa de jogadores: 5", "defesa de animais: 19"];
LANG[INV.AMETHYST_HELMET   ] = ["capacete de ametista", "você não tem medo de mais nada", "defesa de jogadores: 6", "defesa de animais: 23"];
LANG[INV.DRAGON_HELMET     ] = ["capacete do dragão", "você vai conquistar o mundo", "defesa de jogadores: 8", "defesa de animais: 27"];

LANG[INV.EXPLORER_HAT      ] = ["chapéu de explorador", "animais não vão te atacar", "mas não faça barulho!", "quente fora da água"];
LANG[INV.CHRISTMAS_HAT     ] = ["gorro de natal", "Oh, oh, oh, feliz natal", "quente fora da água e neve"];
LANG[INV.ELF_HAT           ] = ["chapéu de elfo", "não deixe-se ser explorado, seu pequeno elfo de neve!", "quente fora da água e neve"];
LANG[INV.HOOD              ] = ["capuz", "você é um trapaceiro", "você pode roubar alguém apenas se", "1) é de noite", "2)você não está segurando nada", "3) se você n foi tocado por 5 segundos", "4) você não está perto de uma fogueira", "5) seu alvo não está com equipamento camponês", "quente fora da água e na neve"];
LANG[INV.EARMUFFS          ] = ["protetor de orelhas", "algum tipo de chapka pequena.", "quente fora da água e neve"];
LANG[INV.COAT              ] = ["Chapka", "também chamado de casaco.", "esquenta fora da água e na neve", "muito quente"];
LANG[INV.CAP_SCARF         ] = ["Chapéu de inverno", "Muito confortável", "Muito quente"];
LANG[INV.PEASANT           ] = ["túnica", "suas plantas crescem rápido", "quente fora da água e na neve"];
LANG[INV.WINTER_HOOD       ] = ["capuz de inferno", "você só pode roubar alguém se", "é de noite", "-você não está segurando nada", "- se você não foi tocado por 4 segundos", "- você não está perto de uma fogueira", "-seu alvo não está com equipamento de camponês de inverno", "esquenta fora da água e na neve"];
LANG[INV.WINTER_PEASANT    ] = ["camponês de inverno", "suas plantas crescem rápido", "quente fora da água e na neve"];
LANG[INV.DIVING_MASK       ] = ["máscara de mergulho", "você é rápido na água", "quente na água", "defesa de jogadores: 2, defesa de animais: 8"];
LANG[INV.SUPER_DIVING_SUIT ] = ["super máscara de mergulho", "você é muito rápido na água", "quente na água", "defesa de jogadores: 4, defesa de animais: 16"];

LANG[INV.DRAGON_ORB        ] = ["esfera do dragão", "dado na questt"];
LANG[INV.DRAGON_HEART      ] = ["coração de dragão", "torna você num fantasmas na morte!", "você é um fantasma por 60 segundos", "ache uma pedra da ressurreição",];
LANG[INV.GEMME_GREEN       ] = ["pedra verde", "você não vai trapacear, promete?"];
LANG[INV.GEMME_ORANGE      ] = ["pedra laranja", "apenas um pirata de verdade pode achar-lo!"];
LANG[INV.GEMME_BLUE        ] = ["pedra azul", "para pessoas muito gentis"];
LANG[INV.CROWN_GREEN       ] = ["coroa verde", "você se regenera muito rápido", "regenera ao longo do tempo: 40", "defesa de jogadores: 4, defesa de animais: 16"];
LANG[INV.CROWN_ORANGE      ] = ["coroa laranja", "de repente você se sente muito sortudo", "defesa de jogadores: 4, defesa de animais: 16"];
LANG[INV.CROWN_BLUE        ] = ["coroa azul", "quando você morrer, você vira um fantasma", "você perderá sua arma", "defesa de jogadores: 4, defesa de animais: 16"];

LANG[INV.BUCKET_FULL       ] = ["balde", "útil para encher um poço", "um balde equivale a doze garrafas"];
LANG[INV.BUCKET_EMPTY      ] = ["balde vazio","você precisa encher esse balde perto de uma fonte de água"];
LANG[INV.BOTTLE_FULL       ] = ["garrafa", "permite que você beba água em qualquer lugar", "água: 50"];
LANG[INV.BOTTLE_EMPTY      ] = ["garrafa vazia", "você pode encher essa garrafa perto de uma fonte de água"];
LANG[INV.WATERING_CAN      ] = ["regador vazio", "você deve enche-lo com uma fonte de água para usa-lo"];
LANG[INV.WATERING_CAN_FULL ] = ["regador", "permite regar as plantas", "dano: 1"];

LANG[INV.BAG               ] = ["mochila", "mais espaço para seus itens!"];
LANG[INV.PAPER             ] = ["papel", "usado para fazer o livro"];
LANG[INV.BOOK              ] = ["livro", "permite reduzir consideradamente o tempo de construções", "mas precisa está equipado para fucionar", "dano: 1"];
LANG[INV.BANDAGE           ] = ["bandagem", "recupera sua vida mais rapidamente", "Heal over time: 30", "Effect: 5"];
LANG[INV.LOCK              ] = ["fechadura", "permite você trancar seu baú"];
LANG[INV.LOCKPICK          ] = ["chave", "permite destrancar um baú"];
LANG[INV.TOTEM             ] = ["Totem", "permite você criar um time", "compartilha portas e baús", "edifício prejudicial não quer machucar seu amigo"];
LANG[INV.BRIDGE            ] = ["ponte", "muito útil na água", "permite você beber sem se afogar", "anda rápido na água"];
LANG[INV.SIGN              ] = ["placa", "deixe uma mensagem para outros", "durabilidade: 200"];
LANG[INV.ROOF              ] = ["telhado", "esconde você um pouco e te esquenta!"];
LANG[INV.WELL              ] = ["poço", "permite encher garrafas", "durabilidade: 1000"];
LANG[INV.WALL              ] = ["muro de madeira", "você sabia que o muro dança?", "durabilidade: 1000"];
LANG[INV.STONE_WALL        ] = ["muro de pedra", "é um pocu mais sério.", "durabilidade: 1500"];
LANG[INV.GOLD_WALL         ] = ["muro de ouro", "ouro nos seus muros? é muito chamativo.", "durabilidade: 2000"];
LANG[INV.DIAMOND_WALL      ] = ["muro de diamante", "tão brilhoso, veja seus olhos", "durabilidade: 2500"];
LANG[INV.AMETHYST_WALL     ] = ["muro de ametista", "você está muito assustado de sair!", "durabilidade: 3000"];
LANG[INV.SPIKE             ] = ["espiga de madeira", "pode dar dano nos seus inimigos", "dano: 10, dano no acerto: 2", "durabilidade: 150"];
LANG[INV.STONE_SPIKE       ] = ["espiga de pedra", "eu não quero ser seu inimigo.", "dano: 20", "dano no acerto: 3", "durabilidade: 300"];
LANG[INV.GOLD_SPIKE        ] = ["espiga de ouro", "você é tão cruel.", "dano: 30", "dano no acerto: 3", "durabilidade: 600"];
LANG[INV.DIAMOND_SPIKE     ] = ["espiga de diamante", "você não gosta de ter companhia.", "dano: 40", "dano no acerto: 4", "durabilidade: 1200"];
LANG[INV.AMETHYST_SPIKE    ] = ["espiga de ametista", "o que diabos seu vizinhos fizeram para você?", "dano: 50", "dano no acerto: 4", "durabilidade: 2400"];
LANG[INV.WOOD_DOOR         ] = ["porta de madeira", "pode ser aberta ou fechada por você ou seus amigos", "durabilidade: 1000"];
LANG[INV.STONE_DOOR        ] = ["porta de pedra", "uma porta mais forte é mais sério", "durabilidade: 1500"];
LANG[INV.GOLD_DOOR         ] = ["porta de ouro", "você está re-construindo o el dorado?", "durabilidade: 2000"];
LANG[INV.DIAMOND_DOOR      ] = ["porta de diamante", "para uma casa brilhante", "durabilidade: 2500"];
LANG[INV.AMETHYST_DOOR     ] = ["porta de ametista", "é a sua casa um lugar trancado seguro?", "durabilidade: 3500"];

LANG[INV.FURNACE           ] = ["fornalha", "esquenta você", "consumi madeira em todo 5 segundos", "durabilidade: 1000"];
LANG[INV.WINDMILL          ] = ["moinho de vento", "pode produzir farinha do trigo", "demora 5 segundos para fazer farinha", "dá pontos ao trabalhar", "durabilidade: 2000"];
LANG[INV.BREAD_OVEN        ] = ["forno de pão", "permite fazer pão feito de farinha", "demora 10 segundos para fazer pão", "dá pontos ao trabalhar", "durabilidade: 2000"];
LANG[INV.RESURRECTION      ] = ["pedra da ressurreição", "é mágico", "te ressuscita se você for um fantasmas", "você vai perder sua arma", "durabilidade 200: 200"];

LANG[TEXT.YOU_CANNOT_JOIN] = "você não pode entrar no servidor";
LANG[TEXT.KICKED] = "kickado: ";
LANG[TEXT.KEY_ALREADY] = "sua chave está em uso por outra pessoa";
LANG[TEXT.KEY_WRONG] = "sua chave está errada";
LANG[TEXT.OLD_VERSION] = "você tem uma versão velha, limpe seu cache";
LANG[TEXT.NO_MORE_RESOURCES] = "não tem mais recursos";
LANG[TEXT.SURVIVED_1DAY] = "você sobreviveu 1 dia";
LANG[TEXT.SURVIVED] = "você sobreviveu ";
LANG[TEXT.DAYS] = " dias";
LANG[TEXT.DEAD_SAD] = "você está morto ;-;";
LANG[TEXT.SPAM_ME] = "servidor não pôde achar um local de spawn! spam o botão de play!";
LANG[TEXT.SPAM_ME2] = "servidor está cheio! spam o botão de play!";
LANG[TEXT.EMPTY] = "não tem recursos";
LANG[TEXT.INV_FULL] = "inventário está cheio (botão direito para deletar itens)";
LANG[TEXT.DEAD] = " está morto";
LANG[TEXT.WRONG_TOOL] = "essa não é a ferramenta certa";
LANG[TEXT.JOIN_TEAM] = "você entrou no time";
LANG[TEXT.YOU_DEAD] = "você está morto";
LANG[TEXT.JOINED_TEAM] = "entrou no time";
LANG[TEXT.TEAM_DESTROYED] = "seu time foi destruido";
LANG[TEXT.LEFT_TEAM] = "você saiu do time";
LANG[TEXT.LEFT_TEAM2] = " saiu do time";
LANG[TEXT.TOKEN] = "alguém roubou sua ficha :>";
LANG[TEXT.CHOOSE] = "escolha um servidor";
LANG[TEXT.PLAYERS] = "jogadores";
LANG[TEXT.TOTAL_PLAYERS] = "jogadores totais";
LANG[TEXT.TOTAL_MODE] = "jogadores nesse modo";
LANG[TEXT.COMMING_SOON] = "Coming soon...";

document.getElementById ("nickname_input").placeholder = "Apelido";

DIE[0] = ["você morreu sem motivo"];//UNKNOWN : 0,
DIE[1] = ["você morreu de fome, como o jogo diz"];//STARVE  : 2,
DIE[2] = ["você morreu de frio. tão triste","você pegou hipotermia na próxima vez, tente sentar numa fogueira em vez disso."]; //COLD    : 2,
DIE[3] = ["um jogador te matou dizendo a você para matar..'","você foi morto por um jogador. não se preocupe, aquele jogador morrerá também, eventualmente."];//PLAYER  : 3,
DIE[4] = ["você ficou muito perto de uma fogueira e queimou até a morte. má ideia.","você morreu por um incêndio. fogueira te machuca. vá escrever uma história sobre isso."];//FIRE    : 4,
DIE[5] = ["seu corpo vai virar um ninho para ovos de aranhas","uma aranha te matou. pelo menos não era um coelho."];//SPIDER  : 5,
DIE[6] = ["o lobo não vão morrer de fome depois te te comer","eles não são cachorros. lobos não gostam de ser que nem animais de estimação."];//WOLF    : 6,
DIE[7] = ["a raposa era muito rápida para você","a raposa te tornou uma caixa. desde quando os animais tem poderes mágicos?"];//FOX     : 7,
DIE[8] = ["o urso só queria um abraço."," o urso era muito nu. eu não sinto muito."]; //BEAR    : 8,
DIE[9] = ["você foi queimado por um dragão. tão triste..","você foi esmagado por um dragão.. ser esmagado é uma maneira horrível de morrer."];//DRAGON  : 9,
DIE[10] = ["você pulou em um muro com espinhos. não é uma boa ideia...","você foi morto por um muro com espinhos. muitas pessoas são sensíveis o bastante para não tocar em coisas pontudas."];//SPIKE   : 10,
DIE[11] = ["até fantasmas podem morrer.","você falhou para ser ressuscitado. This is a game, so you go to life after you die, so..."];//GHOST : 11
DIE[12] = ["uma bactéria da sua comida crua te matou esse jogo é definitivamente muito díficil.","você matou a carne crua. a carne crua te matou também."];//RAW FOOD : 12
DIE[13] = ["você morreu de sede. melhor beber sua própria urina."]; // WATER : 13
DIE[14] = ["você sabia que você morre afogado? agora você sabe."]; // OXYGEN : 14
DIE[15] = ["não se preocupe, as piranhas acham você saboroso.","fato engraçado: Piranhas comem pessoas. incluindo você."];//PIRANHA : 15,
DIE[16] = ["LapaMauve não planeja você matar o kraken","um kraken comeu seu esqueleto."];//KRAKEN : 16,
DIE[17] = ["sua pele caindo aos pedaços, o sol te matou."];//SUN LIGHT : 17
DIE[18] = ["o alho amarzenado em seus bolsos ferveu seu cérebro."];//GARLIC_POCKET: 18
DIE[19] = ["como vampiro, não chegue perto do alho."];//GARLIC: 19
DIE[20] = ["você comeu alho como vampiro, o que você esperava?"];//ATE GARLIC: 20
DIE[21] = ["seu corpo se enroscou nos espinhos. quando você tenta escapar, sua pele sai e seu coração para de bater."];//THORNBUSH: 21

ZOMBIE_GRUMBLE = "Uuunnnggg";
ZOMBIE_GRUMBLES = [
	"Uuunnnggg... estou morrendo de fome",
	"preciso do seu cerébro Uuunnnggg...",
	"carne fresca aqui... Uuunnnggg",
	"Uuunnnggg... você parece saboroso",
	"Uuunnnggg...",
	"Eat... uuunnnggg...",
	"consigo sentir o cheiro de sangue... Uuunnnggg",
];

}
