var lang = navigator.language || navigator.userLanguage; 
var timezone = -(new Date().getTimezoneOffset() / 60);

var TZ_EU = "Europe";
var TZ_RU = "Russia";
var TZ_NA = "North America";
var TZ_SA = "South America";
var TZ_WA = "West America";
var TZ_AS = "Asia";
var TZ_AU = "Australia";

var TZ = TZ_EU;

if (timezone >= -2 && timezone <= 2)
	TZ = TZ_EU;
else if (timezone > 2 && timezone <= 5)
	TZ = TZ_RU;
else if (timezone > 5 && timezone <= 9)
	TZ = TZ_AS;
else if (timezone > 9)
	TZ = TZ_AU;
else if (timezone >= -5 && timezone < -2) {

	if (lang === 'pt-BR' || lang === 'pt-br' || lang === 'pt' || lang === 'pt-pt')
		TZ = TZ_SA;
	else
		TZ = TZ_NA;
} else if (timezone < -5) {

	if (lang === 'pt-BR' || lang === 'pt-br' || lang === 'pt' || lang === 'pt-pt')
		TZ = TZ_SA;
	else
		TZ = TZ_WA;
}

