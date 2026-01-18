// YOLLA
if (!window["YMPB"]) {
	window["YMPB"] = window["YMPB"] || {};
	isYolla = 0;
} else isYolla = 1;

window["YMPB"]["que"] = window["YMPB"]["que"] || [];

// ADINPLAY
window.aiptag = window.aiptag || {};
window.aiptag["consented"] = true;
window.aiptag["cmd"] = window.aiptag["cmd"] || [];
window.aiptag["cmd"]["display"] = window.aiptag["cmd"]["display"] || [];
window.aiptag["cmd"]["player"] = window.aiptag["cmd"]["player"] || [];

function refreshAds () {

	window["YMPB"]["refresh"] ();
}

function yollaCallback () {

	document.getElementById('preroll').style.display = 'none'; 
	/* Connect to the server */
	client.connect ();
}

var fun = function() {

	adplayer = new aipPlayer({
		AD_WIDTH: 960,
		AD_HEIGHT: 540,
		AD_FULLSCREEN: true,
		AD_CENTERPLAYER: true,
		LOADING_TEXT: 'loading advertisement',
		PREROLL_ELEM: function(){return document.getElementById('preroll')},
		AIP_COMPLETE: function ()  {
			/*******************
			 ***** WARNING *****
			 *******************
			 Please do not remove the PREROLL_ELEM
			 from the page, it will be hidden automaticly.
			 If you do want to remove it use the AIP_REMOVE callback
			*/
			/* Connect to the server */
			client.connect ();
		},
		AIP_REMOVE: function ()  {
			// Here it's save to remove the PREROLL_ELEM from the page
			// But it's not necessary
		}
	});
};

window.aiptag["cmd"]["player"].push (fun);

var ___adsvid = 0;

function check_ads () {
	xhttp.open ("GET", "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=20190929", true);
	xhttp.send ();
};

/**
 * Check if adblocker is present
 */
var xhttp = new XMLHttpRequest ();
xhttp.onreadystatechange = function () {

	if (this.readyState === 4 && this.status === 0) {

		// Yolla
		/*
		document.getElementById ("sadblock").style.display = 'inline-block';
		document.getElementById ("sadblock").src = './img/adblock' + Math.floor (Math.random () * 2) + '.png';
		*/
	}
}
