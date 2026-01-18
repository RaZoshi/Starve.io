var LANG    = [];
var ENGLISH = [];
var FRENCH  = [];
var POLISH  = [];
var ITALIAN = [];
var SPANISH = [];
var RUSSIAN = [];

for (var i = 0 ; i < ENGLISH.length ; i++)
	LANG[i] = ENGLISH[i];

/* Determinate language of browser */
if (!lang) {
	lang = "EN";
	var userlang = navigator.language || navigator.userLanguage; 
	switch (userlang) {

		case "ru" : lang = "RU"; break;
		case "en" : lang = "EN"; break;
		case "es" : lang = "SP"; break;
		case "fr" : lang = "FR"; break;
		case "it" : lang = "IT"; break;
		case "pl" : lang = "PL"; break;
	}
}

if (lang == "FR") {
	for (var i = 0 ; i < ENGLISH.length ; i++) {
		if (FRENCH[i]) LANG[i] = FRENCH[i];
	}
} else if (lang == "PL") {
	for (var i = 0 ; i < ENGLISH.length ; i++) {
		if (POLISH[i]) LANG[i] = POLISH[i];
	}

} else if (lang == "IT") {

	for (var i = 0 ; i < ENGLISH.length ; i++) {
		if (ITALIAN[i]) LANG[i] = ITALIAN[i];
	}

} else if (lang == "SP") {

	for (var i = 0 ; i < ENGLISH.length ; i++) {
		if (SPANISH[i]) LANG[i] = SPANISH[i];
	}
} else if (lang == "RU") {

	for (var i = 0 ; i < ENGLISH.length ; i++) {
		if (RUSSIAN[i]) LANG[i] = RUSSIAN[i];
	}

} else {

	for (var i = 0 ; i < ENGLISH.length ; i++)
		LANG[i] = ENGLISH[i];
}

