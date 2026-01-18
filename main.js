/* Get mobile information */
mobile = 0;
/*
var mobile = (0 <= (window.location.href).indexOf ("m" + "o" + "b" + "i" + "l" + "e"));
if (mobile) {
	document.getElementById ("nickname_block").style.width    = "400px";
	document.getElementById ("region_select").style.width     = "400px";
	document.getElementById ("nickname_input").style.height   = "53px";
	document.getElementById ("region_select").style.height    = "40px";
	document.getElementById ("nickname_input").style.fontSize = "26px";
	document.getElementById ("region_select").style.fontSize  = "20px";
	document.getElementById ("nickname_input").style.borderRadius = "11px";
	document.getElementById ("region_select").style.borderRadius = "11px";
	var MOBILE = {

		LOGO : 0.8,
	}
}
*/

/* Set version code */
document.getElementById ("version").innerHTML = "" + CLIENT.VERSION_NUMBER + ".3";

var MAP = [];

/* Selet a random time to display when game launching */
var fake_world = { time : Math.floor (Math.random () * 2), items : [] }
init_fake_world ();

/* Load Client manager */
client = new NetworkClient ();

/* Not yet loaded modules */
var ui;                        // Main User Interface
var game = { is_run : false }; // 2d game
var world;                     // World object
var user;                      // User object
var scoreboard;                // Scoreboard Object
var audio = new MyAudio ();    // Audio manager

/* Enable devices */
var keyboard = new Keyboard ();    // Create gaming keyboard
var mouse    = new Mouse    ();    // Create gaming mouse

/* Timestamp */
var delta = 0, old_timestamp = 0;

/* FPS */
var fps = { img : false, counter : 0, delay : 0, cycle : 60, display : true };

/* Loader Interface */
var loader = new Loader (can, ctx,

	/* After we load image and stuff like that we need to load interface of player */
	function () {

		/* We loaded all images so we load sprites */
		create_images ();

		/* Load game */
		game = new Game (can, ctx);

		/* Load front page, user interface */
		ui = new UI (can, ctx);
		ui.login_after ();

		/* Load scoreboard interface */
		scoreboard = new Scoreboard (can, ctx);

		/* Load world object */
		world = new World ();

		/* Load user object */
		user = new User ();

		/* All stuff was loaded, so we quit loader and start menu */
		loader.quit (function () {

			loader.logo.style.display = "none";
			ui.run ();
		});
	});

function draw (timestamp) {

     	/* Call next frame */
	window.requestAnimationFrame (draw);

        /* Update delta */
	delta = (timestamp - old_timestamp) / 1000;
	old_timestamp  = timestamp;

	/* Check delta integrity */
	delta = (delta > 1) ? 1 : delta;

	/* Display game */
	if (game.is_run) {

		game.draw ();

	} else {

		ctx.clearRect (0, 0, canw, canh);

		/* Do we need to wait loader ? Yes ? Ok display loading view */
		if (loader.is_run) loader.draw ();

		/* Display user interface */
		else if (ui.is_run)
		{
			ui.update ();
			ui.draw ();
		}
		else if (scoreboard.is_run)
			scoreboard.draw ();
	}
}

/* Prevent quit my game ;-; */
window.onbeforeunload = function() {
	// if (game.is_run)
	// 	return "Are you sure you want quit starve.io ;-; ?";
};

resize_canvas ();
setInterval(resize_canvas, 1000);

draw (0);
