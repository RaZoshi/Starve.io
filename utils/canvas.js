var can = document.getElementById('game_canvas');
var ctx = can.getContext('2d');
var canw  = can.width;
var canh  = can.height;
var canw2 = can.width  / 2;
var canh2 = can.height / 2;
var canm  = { x : canw2, y : canh2 };
var scale = 1;
var ratio = 1;
var ratio_opt = -1;

var isMobile = true;

var JUNK10;
var JUNK8 = "J" + JUNK3;
var JUNK6 = "S" + JUNK4;
var WINDOW1 = window;
var JUNK4;
var JSONWORD2;
var JUNK1 = "O";
var JUNK2 = JUNK1 + "N";
var JSONWORD1 = "O";
var JSONWORD12 = 0;
var JUNK3;
var WINDOW2 = WINDOW1;
var JUNK4;
var JSONWORD3;
var JUNK6 = "N";
var JUNK7 = "J";
var JUNK1 = "O" + JUNK3;
var JUNK8;
var WINDOW3 = WINDOW2;
var JUNK9;
var JUNK10;
var JSONWORD4;
var JUNK5;
var JUNK4;
var JUNK3;
var WINDOW4 = WINDOW3;
var JUNK2 = "N" + JUNK5;
var JUNK2;
var WINDOW5 = WINDOW4;
var JSONWORD5;
var JUNK1;
var JUNK10;
var JUNK9 = "";
var JSONWORD6;
var WINDOW6 = WINDOW5;
var JSONWORD7;
var JUNK4;
var JUNK3;
var WINDOW7 = WINDOW6;
var JUNK1;
var JSONWORD8;
var JUNK8;
var WINDOW8 = WINDOW7;
var JUNK7 = "O";
var JUNK10 = "J";
var JUNK6;
var JSONWORD9;
var JUNK10;
var WINDOW8 = WINDOW7;
var JSONWORD9 = "S";
var WINDOW9 = WINDOW8;
var JUNK5;
var JSONWORD10;
var WINDOW10 = WINDOW9;
var JUNK4 = JUNK10 + JSONWORD9;

/* Disable context menu */
can.oncontextmenu = function () { return false; };

JUNK8 =  JUNK10;
JUNK9 = JUNK8;

/* Convert into image */
function CTI (c) {

	var img = new Image ();
	img.src = c.toDataURL ("image/png");

	/* Cross browser */
	img.width  = c.width;
	img.height = c.height;

	img.isLoaded = 1;

	return img
}

JUNK8 = JUNK6;
JUNK7 = JUNK7 + JUNK8;
JSONWORD1 = JUNK4 + JUNK7;
JSONWORD2 = JSONWORD1;
JUNK1 = JUNK2;
JSONWORD3 = JSONWORD2;
JUNK2 = JUNK3;
JUNK3 = JUNK4;
JSONWORD5 = JUNK4 + JUNK7;
JUNK3 = JUNK4;
JUNK1 = JUNK4;
JSONWORD4 = JSONWORD5;
JUNK6 = JUNK7 + JUNK8;
JSONWORD6 = JSONWORD2;
JUNK1 = JUNK4 + JUNK7;
JSONWORD7 = JSONWORD1;
JUNK2 = JUNK4 + JUNK7;
JSONWORD8 = JSONWORD3;
JUNK7 = JUNK3;
JSONWORD9 = JSONWORD1;
JSONWORD10 = JSONWORD2;
JUNK8 = JUNK1;

var devicePixelRatio = window.devicePixelRatio || 1;
var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
	ctx.mozBackingStorePixelRatio ||
	ctx.msBackingStorePixelRatio ||
	ctx.oBackingStorePixelRatio ||
	ctx.backingStorePixelRatio || 1;

/* Canvas sizing */
function resize_canvas () {
	window.scrollTo(0, 0);

	if (can.width != window.innerWidth) {
		can.width = window.innerWidth;
		canw = can.width;
		canw2 = can.width  / 2;
	}

	if (can.height != window.innerHeight) {

		can.height = window.innerHeight;
		canh = can.height;
		canh2 = can.height / 2;
	}


	canm  = { x : canw2, y : canh2 };

	var ow = can.width;
	var oh = can.height;

	if (ratio_opt === -1)
		ratio = devicePixelRatio / backingStoreRatio;
	else ratio = ratio_opt;

	can.width = ow * ratio;
	can.height = oh * ratio;
	can.style.width = ow + "px";
	can.style.height = oh + "px";
	ctx.scale (ratio, ratio);

	/* Resize cam of user */
	if (user) {
		user.cam.rw  = ow;
		user.cam.rh  = oh;
	}

	/* Update loading view configuration */
	if (loader.is_run) loader.update ();
	/* Update UI configuration */
	else if (ui.is_run) ui.update ();
	/* Update game scene */
	else if (game.is_run) game.update ();
	/* Update scoreboard scene */
	else if (scoreboard.is_run) scoreboard.update ();
}

/* Unbind body mouse interaction and bind resize_canvas */
var game_body = document.getElementById ("game_body");
game_body.ondragstart = function () { return false };
game_body.ondrop      = function () { return false };

game_body.onresize = function() {
	resize_canvas();
	setTimeout(resize_canvas, 1000);
};

/* Initialization of requestAnimationFrame */
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
