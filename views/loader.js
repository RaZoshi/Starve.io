var LOADER = {

	SERVER_INFO_URL   : "datas/info.json",
}

function Loader (can, ctx, after_loading_stuff) {

	this.can           = can;
	this.ctx           = ctx;

	/* Misc objects */
	this.logo = {
		translate : { x : 0, y : 0 },
		style : document.getElementById ("loading").style,
		update : function () {
			if (isMobile) {
				this.style.transform = `translate(${(window.innerWidth / 2) - 250}px, ${(window.innerHeight / 2) - 75}px)`;
			}	else {
				this.style.left  = this.translate.x + "px";
				this.style.top   = Math.floor (this.translate.y) + "px";
			}
		}
	};

	this.logo.style.position = "absolute";
	this.logo.style.display  = "inline-block";
	this.logo.update ();

	/* Check if loader is running */
	this.is_run = true;
	this.stop = function () { this.is_run = false; };

	/* Create object of loader */
	this.loading = { total : 1 /* load images */ };

	/* WATCH OUT, I'M NOT SURE ABOUT THIS TRICK, IT MAY BE A SOURCE OF BUG *
	 * That seem work for use this object in a event listener              */
	var _this = this;

	/* Quit effect, all content escape from the top */
	var fun_after_quit = function () {};
	var quit_effect_step = 0;
	var quit_effect_max_step = 40;
	this.quit_effect = function () {

		_this.update ();
		quit_effect_step++;
		if (quit_effect_step == quit_effect_max_step) {

			_this.stop ();

			fun_after_quit ();

			return;
		}

		window.setTimeout (_this.quit_effect, 33);
	};

	/* Quit with nice effect and run next function */
	this.quit = function (fun) {

		/* Will be run after quit */
		fun_after_quit = fun;

		_this.quit_effect ();
	};

	/* Load function image */
	var TIMEDEBUG_IMAGE = new Date ().getTime ();
	function need_to_load_this_image (name) {

		if (name.indexOf ("normal-mode") !== -1 || name.indexOf ("player0") !== -1)
			return 1;

		if (name.indexOf ("day-bag") !== -1 || name.indexOf ("night-bag") !== -1 ||
		    name.indexOf ("day-book") !== -1 || name.indexOf ("night-book") !== -1 ||
		    name.indexOf ("day-player") !== -1 || name.indexOf ("night-player") !== -1 ||
		    name.indexOf ("day-accessory") !== -1 || name.indexOf ("night-accessory") !== -1 ||
		    name.indexOf ("day-crate") !== -1 || name.indexOf ("night-crate") !== -1 ||
		    name.indexOf ("day-skin") !== -1 || name.indexOf ("night-skin") !== -1 ||
		    name.indexOf ("day-river") !== -1 || name.indexOf ("night-river") !== -1 ||
		    name.indexOf ("day-river") !== -1 || name.indexOf ("night-river") !== -1 ||
		    name.indexOf ("day-rock") !== -1 || name.indexOf ("night-rock") !== -1 ||
		    name.indexOf ("day-flower") !== -1 || name.indexOf ("night-flower") !== -1 ||
		    name.indexOf ("day-leaf") !== -1 || name.indexOf ("night-leaf") !== -1 ||
		    name.indexOf ("day-herb") !== -1 || name.indexOf ("night-herb") !== -1 ||
		    name.indexOf ("day-shell") !== -1 || name.indexOf ("night-shell") !== -1 ||
		    name.indexOf ("day-hand-skin") !== -1 || name.indexOf ("night-hand-skin") !== -1 ||
		    name.indexOf ("bignight") !== -1 || name.indexOf ("bigday") !== -1 ||
		    name.indexOf ("bigzday") !== -1 || name.indexOf ("bigznight") !== -1 ||
		    name.indexOf ("tutorial-box") !== -1 || name.indexOf ("tuto-") !== -1 ||
		    name.indexOf ("-leaderboard-") !== -1 || name.indexOf ("-lead-") !== -1 ||
		    name.indexOf ("day-lava-") !== -1 || name.indexOf ("night-lava-") !== -1 ||
		    name.indexOf ("-click.png") !== -1 || name.indexOf ("-in.png") !== -1 ||
		    name.indexOf ("-fog") !== -1 || name.indexOf ("-lava") !== -1 ||
		    name.indexOf ("pebblecompo") !== -1 || name.indexOf ("avatar-player") !== -1)
			return 0;
		return 1;
	};

	var number_img_to_load = Object.keys(IMAGES).length;
	var number_img_to_load2 = number_img_to_load;
	console.log ("Image to load: ", number_img_to_load);
	for (var img in IMAGES) {

		if (need_to_load_this_image (IMAGES[img]) === 0)
			number_img_to_load--;
	}
	console.log ("Image to load with high priority: ", number_img_to_load);

	var my_loader_fun = function () {

		if (this.isLoaded !== 0)
			return this.isLoaded;

		this.isLoaded = 2;
		this.src = this._src;

		return 0;
	};

	var my_onload_fun = function (a) {

		this.isLoaded = 1;
	}

	var already_had_server_info = 0;
	var receive_server_info = function (b, s) {

		/* Call quit effect */
		if (b) {
			if (already_had_server_info === 1)
				return;
			already_had_server_info = 1;
			console.log (Date.now () - TIMEDEBUG_IMAGE);

			// Set per defualt English text
			if (next_lang !== set_english)
				set_english ();

			next_lang ();
			var privateServerName = Utils.getURLData ("server")

			if (privateServerName === null)
				client.store_server_list ();
			else {
				client.privateServer = 1;
				client.server_list = [{"nu":0, "m":100, "i": "server" + privateServerName + ".starve.io", 
				"p" : 443, "a" : "Private Server " + privateServerName, "ssl" : 1}];
			}

			client.update_server_list ();
			setTimeout (after_loading_stuff, 100);

		} else if (s === 4) {
			setTimeout (function () { location.href = "https://starve.io"; }, 1000);
		}
	}

	var request_server_info = function () {

		client.xhttp_get (receive_server_info, LOADER.SERVER_INFO_URL);
	}

	var wait_font = function () {

		if (!document.fonts || !document.fonts.check)
			setTimeout (request_server_info, 1000);
		else if (document.fonts.check('1em Baloo Paaji'))
			setTimeout (request_server_info, 100);
		else
			setTimeout (wait_font, 100);
	}

	var my_onerror_fun = function () { 

		var _src = this.src;
		var _wait = (need_to_load_this_image (_src) === 0) ? 10000 : 2000;

		setTimeout (function () { 

			for (var i in DUMP_IMAGES) {

				if (_src.indexOf (DUMP_IMAGES[i]) !== -1) {

					IMAGES[i] = new Image ();
					IMAGES[i].onload = my_onload_fun;
					IMAGES[i].onerror = my_onerror_fun;

					IMAGES[i].src = _src;
					break;
				}
			}

			// location.href = "https://starve.io"; 
		}, _wait);
	}

	/* Load sprite and all stuff */
	function load_images (priority) {

		for (var i in IMAGES) {

			var src = IMAGES[i];

			// Skip already loaded image
			if (typeof (src) !== "string")
				continue;

			// Skip image that does not match the priority
			if (need_to_load_this_image (src) !== priority)
				continue;

			IMAGES[i] = new Image ();
			IMAGES[i].isLoaded = 0;
			IMAGES[i].onload = my_onload_fun;
			IMAGES[i].onerror = my_onerror_fun;
			IMAGES[i].tryLoad = my_loader_fun;

			if (window["location"]["protocol"] !== 'https:')
				IMAGES[i]._src = src;
			else
				IMAGES[i]._src = 'https://starve.io/' + src;
		}
	}

	// Firstly load all image with high priority
	load_images (1);
	// Then load images with low priority
	load_images (0);

	// Try to force loading ?
	create_text (1, "l", 20, "#000");
	wait_font ();

	// generate the image query selector
	_load_images ();

	/* Update position of object, usefull for trigger */
	this.update = function () {

		this.logo.translate.x = (canw - 500) / 2;
		this.logo.translate.y = (canh - 150) / 2;

		/* Quit effect */
		var move_effect = 2500 / (quit_effect_max_step - quit_effect_step + 1) - 48;
		// I substract 48 for avoid move_effect when no using -> when quit_effect_step == 0
		this.logo.translate.y -= move_effect;

		this.logo.update ();
	}

	this.logo.update ();

	this.draw = function () {

		try {
			/* Draw fake world */
			draw_fake_world ();

		} catch (e) {};

		/* Update position */
		this.update ();
	}
}
