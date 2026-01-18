function UI (can, ctx) {

	var __LEFT__     = 1;
	var __RIGHT__    = 2;
	var __TOP__      = 4;
	var __BOTTOM__   = 8;
	var __MIDDLE_X__ = 16;
	var __MIDDLE_Y__ = 32;

	var __NO_HD__ = 0;
	var __HD__    = 1;

	var __NO_BREATH__ = 0;
	var __BREATH__    = 1;

	var __HIDE__    = 0;
	var __DISPLAY__ = 1;

	this.can        = can;
	this.ctx        = ctx;

	/* Edge does not provide image for cursor feature */
	if (window.navigator.userAgent.indexOf("Edge") > -1) {
		this.cursor0 = "default";
		this.cursor1 = "pointer";
	} else {
		this.cursor0 = "url('img/cursor0.png'), default";
		this.cursor1 = "url('img/cursor1.png'), pointer";
	}

	/* WATCH OUT, I'M NOT SURE ABOUT THIS TRICK, IT MAY BE A SOURCE OF BUG *
	 * That seem work for use this object in a event listener              */
	var _this = this;

	/* Waiting the connection */
	this.waiting = false;

	/* In UI or outside */
	this.in_this_view = 0;

	/* Current mode score selected */
	this.current_mode_score = -1;

	/* Loading effect */
	this.loading = {
		translate : { x : 0, y : 0 },
		angle : 0,
		img : sprite[SPRITE.GEAR2],
		draw : function () {

			this.angle += delta * 2;
			ctx.save ();
			ctx.translate (canw2, canh2 * .2);
			ctx.rotate (this.angle);
			ctxDrawImage (
				ctx, this.img, -this.img.width / 2, -this.img.height / 2, undefined, undefined,
				undefined, undefined, undefined, undefined
			);
			ctx.restore ();
		}
	}

	/* Language selector */
	this.langselect = {
		id    : document.getElementById ("langselect"),
		style : document.getElementById ("langselect").style,
		translate : { x : 0, y : 0, _x: 0, _y: 0 },
		update : function () {
			// this.style.left  = Math.floor (this.translate.x) + "px";
			// this.style.top   = Math.floor (this.translate.y) + "px";
		},
		position: __BOTTOM__ | __MIDDLE_X__,
		mog: Mogs.LangselectElement
	};

	this.bread = 0;
	this.previous_bread = -1;
	this.bread_img = undefined;

	this.new_nickname = "";
	this.previous_new_nickname = "";
	this.new_nickname_img = undefined;

	this.lvl = 0;
	this.previous_lvl = -1;
	this.lvl_img = undefined;

	this.xp = 0;
	this.xp_dest = 0;

	this.firstName = 0;

	this.kill = 0;
	this.death = 0;
	this.time = 0;
	this.score = 0;
	this.scoreTotal = 0;
	this.bestKill = 0;
	this.bestTime = 0;
	this.bestScore = 0;
	this.seasons = [];

	this.kit = -1;
	this.previous_kit_hour = -1;
	this.previous_kit_min = -1;
	this.kit_img_min  = undefined;
	this.kit_img_hour = undefined;

	this.privateServerTime = -1;
	this.previous_privateServerTime_day = -1;
	this.previous_privateServerTime_hour = -1;
	this.previous_privateServerTime_min = -1;
	this.privateServerTime_img_min  = undefined;
	this.privateServerTime_img_hour = undefined;
	this.privateServerTime_img_day = undefined;

	this.cosmetic_name = undefined;
	this.cosmetic_author = undefined;

	this.leaderboard_range = undefined;
	this.leaderboard_mode = undefined;
	this.leaderboard_sorted = undefined;
	this.leaderboard_season = undefined;

	this.profile_season = 3;

	this.breath = 0;

	function CosmeticSelector (___type, first, ___setter, firstId, unlock) {

		var __this = this;
		var last = first + 9
		var cursor = 0;
		var currentId = firstId;

		// Init first button
		for (var i = first ; i < last ; i++) {

			_this.buttons[i].info.callback = onClickCosmetic;
			_this.buttons[i].info.cosmeticType = ___type;
		}

		function loadText () {

			var info = ___type[currentId];
			ui.cosmetic_name   = gui_render_text (info.name, "'Baloo Paaji', sans-serif", "#EFE4B4", 30, 350, undefined, 10, 8);
			if (info.level !== undefined)
				ui.cosmetic_author = gui_render_text ("Level " + info.level, "'Baloo Paaji', sans-serif", "#EFE4B4", 30, 250, undefined, 10, 8);
			else
				ui.cosmetic_author = gui_render_text ("by " + info.author, "'Baloo Paaji', sans-serif", "#EFE4B4", 30, 250, undefined, 10, 8);
		};

		function onClickCosmetic () {

			if (currentId === this.cosmeticId ||
			    this.cosmeticId === -1)
				return;

			// Display locked info box
			if (this.unlocked > 0) {
				if (first === FIRST_BUTTON_SKIN)
					update_subview (__LOCKED_SKIN__, __HIDE__, "none");
				else
					update_subview (__LOCKED_ACC__, __HIDE__, "none");
			} else {
				if (first === FIRST_BUTTON_SKIN)
					update_subview (__LOCKED_SKIN__, __DISPLAY__, "inline-block");
				else
					update_subview (__LOCKED_ACC__, __DISPLAY__, "inline-block");
			}

			currentId = this.cosmeticId;
			___setter (this.cosmeticId);
			loadText ();
		};

		function moveNext () {

			if (cursor * 3 + 9 < ___type.length) cursor++;
			__this.initSelector ();
		};

		function movePrevious () {

			if (cursor > 0) cursor--;
			__this.initSelector ();
		};

		function initSelector () {

			for (var i = first, j = cursor * 3 ; i < last && j < ___type.length ; i++, j++) {

				if (___type[j].rarity === RARITY.SPECIAL && unlock[j] === 0) {
					_this.buttons[i].info.cosmeticId = -1;
					_this.buttons[i].info.active = __HIDE__;
					continue;
				}

				_this.buttons[i].info.cosmeticId = j;
				for (var k = 0 ; k < 3 ; k++) {

					_this.buttons[i].info.img[k] = RARITY_BUTTON[___type[j].rarity][k];
					_this.buttons[i].info.active = __DISPLAY__;
					_this.buttons[i].info.unlocked = unlock[j];
				}
			}

			for (; i < last ; i++) {
				_this.buttons[i].info.cosmeticId = -1;
				_this.buttons[i].info.active = __HIDE__;
			}

			loadText ();
		};
		this.initSelector = initSelector;

		_this.buttons[last].info.callback = movePrevious;
		_this.buttons[last + 1].info.callback = moveNext;
	};

	/* Open window of settings */
	this.settings = false;

	this.quality = (Cookies.get ("starve_quality")) ? Cookies.get ("starve_quality") : "high";
	if (this.quality === "high") {
		document.getElementById ("high_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("low_ing").style.backgroundColor  = "#3A2A0D";

		this.quality = 1;
	} else {
		document.getElementById ("low_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("high_ing").style.backgroundColor  = "#3A2A0D";
		this.quality = 0;
	}

	this.high_quality = function () {
		document.getElementById ("high_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("low_ing").style.backgroundColor  = "#3A2A0D";
		Cookies.set ("starve_quality",  "high", { expires: 30 });
		document.getElementById ("input_ratio").value = 1;
		game.change_ratio ();
		ui.quality = 1;
	};

	this.low_quality = function () {
		document.getElementById ("high_ing").style.backgroundColor = "#3A2A0D";
		document.getElementById ("low_ing").style.backgroundColor  = "#B56D18";
		Cookies.set ("starve_quality",  "low", { expires: 30 });
		document.getElementById ("input_ratio").value = 0.5 / (devicePixelRatio / backingStoreRatio);
		game.change_ratio ();
		ui.quality = 0;
	};

  if (Cookies.get ("starve_mapping") === undefined && lang === "FR") {
				keyboard.set_azerty ();
				this.mapping = "azerty";
	} else
		this.mapping = (Cookies.get ("starve_mapping")) ? Cookies.get ("starve_mapping") : "qwerty";


	if (this.mapping == "azerty") {
		keyboard.set_azerty ();
		document.getElementById ("azerty_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("qwerty_ing").style.backgroundColor = "#3A2A0D";
	} else {
		document.getElementById ("qwerty_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("azerty_ing").style.backgroundColor = "#3A2A0D";
	}

	this.set_azerty = function () {
		keyboard.set_azerty ();
		document.getElementById ("azerty_ing").style.backgroundColor = "#B56D18";
		document.getElementById ("qwerty_ing").style.backgroundColor = "#3A2A0D";
		Cookies.set ("starve_mapping",  "azerty", { expires: 30 });
	};

	this.set_qwerty = function () {
		keyboard.set_qwerty ();
		document.getElementById ("azerty_ing").style.backgroundColor = "#3A2A0D";
		document.getElementById ("qwerty_ing").style.backgroundColor = "#B56D18";
		Cookies.set ("starve_mapping",  "qwerty", { expires: 30 });
	}

	/* All Rights Reserved */
	this.all_rights_reserved = {
		id    : document.getElementById ("all_rights_reserved"),
		style : document.getElementById ("all_rights_reserved").style,
		translate : { x : 0, y : 0, _x: 0, _y: 0 },
		update : function () {
			this.style.left  = this.translate.x + "px";
			this.style.top   = Math.floor (this.translate.y) + "px";
		},
		mog: Mogs.AllRightsElement,
		position: __BOTTOM__ | __MIDDLE_X__
	};

	function init_skin () {

		var ct = Number (Cookies.get ("starve_crate"));
		var dd = Number (Cookies.get ("starve_dead"));
		var bk = Number (Cookies.get ("starve_book"));
		var bg = Number (Cookies.get ("starve_bag"));
		var sk = Number (Cookies.get ("starve_skin"));
		var ac = Number (Cookies.get ("starve_accessory"));

		_this.skin      = (sk) ? sk : 0;
		_this.book      = (bk) ? bk : 0;
		_this.crate     = (ct) ? ct : 1;
		_this.accessory = (ac) ? ac : 0;
		_this.bag       = (bg) ? bg : 0;
		_this.dead      = (dd) ? dd : 0;
	};

	init_skin ();

	this.unlock = {};
	this.unlock.skin      = [];
	this.unlock.bag       = [];
	this.unlock.book      = [];
	this.unlock.crate     = [];
	this.unlock.dead      = [];
	this.unlock.accessory = [];
	this.day_mode = 0;

	/* Unlock cosmetics */
	function unlock_cosmetics () {

		var cosmetic = COSMETICS.SKIN;
		for (var i = 0 ; i < cosmetic.length ; i++) {

			if (cosmetic[i].rarity === RARITY.FREE)
				_this.unlock.skin[i] = 1;
			else
				_this.unlock.skin[i] = 0;
		}

		var cosmetic = COSMETICS.ACCESSORY;
		for (var i = 0 ; i < cosmetic.length ; i++) {

			if (cosmetic[i].rarity === RARITY.FREE)
				_this.unlock.accessory[i] = 1;
			else
				_this.unlock.accessory[i] = 0;
		}

		var cosmetic = COSMETICS.BAG;
		for (var i = 0 ; i < cosmetic.length ; i++) {

			if (cosmetic[i].rarity === RARITY.FREE)
				_this.unlock.bag[i] = 1;
			else
				_this.unlock.bag[i] = 0;
		}

		var cosmetic = COSMETICS.BOOK;
		for (var i = 0 ; i < cosmetic.length ; i++) {

			if (cosmetic[i].rarity === RARITY.FREE)
				_this.unlock.book[i] = 1;
			else
				_this.unlock.book[i] = 0;
		}

		var cosmetic = COSMETICS.CRATE;
		for (var i = 0 ; i < cosmetic.length ; i++) {

			if (cosmetic[i].rarity === RARITY.FREE) {
				_this.unlock.crate[i] = 1;
				_this.unlock.dead[i] = 1;
			} else {
				_this.unlock.crate[i] = 0;
				_this.unlock.dead[i] = 0;
			}
		}
	};
	this.unlock_cosmetics = unlock_cosmetics;

	unlock_cosmetics ();

	/* trevda button */
	this.trevda = {
		id    : document.getElementById ("trevda"),
		style : document.getElementById ("trevda").style,
		translate : { x : 0, y : 0, _x: 0, _y: 0 },
		update : function () {
			// this.style.left  = this.translate.x + "px";
			// this.style.top   = Math.floor (this.translate.y) + "px";
		},
		position: __LEFT__ | __MIDDLE_Y__,
		mog: Mogs.TrevdaElement
	};

	/*
	this.twitch = {
		id    : document.getElementById ("twitch"),
		style : document.getElementById ("twitch").style,
		translate : { x : 0, y : 0 },
		update : function () {
			this.style.left  = this.translate.x + "px";
			this.style.top   = Math.floor (this.translate.y) + "px";
		}
	};
	*/

	/* Appear effect, all content appear from the bottom */
	var appear_effect_step = 0;
	var appear_effect_max_step = 30;
	var appear_effect = function () {

		_this.update ();
		appear_effect_step++;
		if (appear_effect_step == appear_effect_max_step) {
			_this.add_event_listener ();
			_this.in_this_view = true;
			_this.update ();
			return;
		}

		window.setTimeout (appear_effect, 33);
	}

	/* Quit UI with nicke effect */
	this.quit = function (fun) {

		/* Will be run after quit */
		fun_after_quit = fun;

		/* Clean menu trigger */
		_this.remove_event_listener ();
		_this.in_this_view = 0;

		/* Make nice quit effect */
		quit_effect_step = -1;
		quit_effect ();
	}

	/* Quit effect, all content escape from the top */
	var fun_after_quit;
	var quit_effect_step = -1;
	var quit_effect_max_step = 30;
	var quit_effect = function () {

		_this.update ();
		quit_effect_step++;
		if (quit_effect_step == quit_effect_max_step) {

			Cookies.set ("starve_nickname",  _this.nickname.input.value, { expires: 30 });
			_this.nickname.style.display = "none";
			_this.server_list.style.display = "none";
			_this.langselect.style.display = "none";
			_this.all_rights_reserved.style.display = "none";
			_this.trevda.style.display = "none";
			//_this.twitch.style.display = "none";

			_this.stop ();
			fun_after_quit ();
			return;
		}

		window.setTimeout (quit_effect, 33);
	}

	/* Check if user interface is running */
	this.is_run = false;
	this.stop = function () { this.is_run = false; };

	/* Run the user interface, make effect and add event listener */
	this.run = function () {

		check_ads ();

		/* Reset ground color */
		document.getElementById ("game_body").style.backgroundColor = SPRITE.GROUND[fake_world.time];
		/* Reset ui css interface */
		_this.nickname.style.display = "inline-block";
		_this.server_list.style.display = "inline-block";
		_this.langselect.style.display = "inline-block";
		_this.all_rights_reserved.style.display = "inline-block";
		_this.trevda.style.display = "inline-block";
		//_this.twitch.style.display = "inline-block";

		_this.waiting = false;

		_this.is_run = true;
		quit_effect_step = -1;
		appear_effect_step = 0;
		appear_effect ();
	}

	/**
	 * Update UIComponent position
	 * @param {UIComponent} component
	 * @param {number} effect
	 */
	this.update_component = function (component, effect) {
		if (isMobile && component.mog) return this.update_component_mobile.apply(this, arguments);

		effect = (effect < 0) ? -effect : effect;


		// Update component position
		if ((component.position & __MIDDLE_X__) === __MIDDLE_X__) {

			if ((component.position & __LEFT__) === __LEFT__)
				component.translate.x = canw2 + component.translate._x - effect;
			else if ((component.position & __RIGHT__) === __RIGHT__)
				component.translate.x = canw2 + component.translate._x + effect;
			else
				component.translate.x = canw2 + component.translate._x;

		} else if ((component.position & __LEFT__) === __LEFT__)
			component.translate.x = component.translate._x - effect;
		else if ((component.position & __RIGHT__) === __RIGHT__)
			component.translate.x = canw - component.translate._x + effect;
		else
			component.translate.x = component.translate._x;

		if ((component.position & __MIDDLE_Y__) === __MIDDLE_Y__) {

			if ((component.position & __TOP__) === __TOP__)
				component.translate.y = canh2 + component.translate._y - effect;
			else if ((component.position & __BOTTOM__) === __BOTTOM__)
				component.translate.y = canh2 + component.translate._y + effect;
			else
				component.translate.y = canh2 + component.translate._y;

		} else if ((component.position & __TOP__) === __TOP__)
			component.translate.y = component.translate._y - effect;
		else if ((component.position & __BOTTOM__) === __BOTTOM__)
			component.translate.y = canh + component.translate._y + effect;
		else
			component.translate.y = component.translate._y;

		// Apply position for CSS component
		if (component.style !== undefined) {

			component.style.left  = Math.floor (component.translate.x) + "px";
			component.style.top   = Math.floor (component.translate.y) + "px";
		}
	};

	this.update_component_mobile = function (component, effect) {

		effect = (effect < 0) ? -effect : effect;

		if (component.style === undefined) {
			if (component.mog && (component.mog.par !== null)) return;
		}

		// Update component position
		if ((component.position & __MIDDLE_X__) === __MIDDLE_X__) {

			if ((component.position & __LEFT__) === __LEFT__)
				component.translate.x = canw2 + component.translate._x - effect;
			else if ((component.position & __RIGHT__) === __RIGHT__)
				component.translate.x = canw2 + component.translate._x + effect;
			else
				component.translate.x = canw2 + component.translate._x;

		} else if ((component.position & __LEFT__) === __LEFT__)
			component.translate.x = component.translate._x - effect;
		else if ((component.position & __RIGHT__) === __RIGHT__)
			component.translate.x = canw + component.translate._x + effect;
		else
			component.translate.x = component.translate._x;

		if ((component.position & __MIDDLE_Y__) === __MIDDLE_Y__) {

			if ((component.position & __TOP__) === __TOP__)
				component.translate.y = canh2 + component.translate._y - effect;
			else if ((component.position & __BOTTOM__) === __BOTTOM__)
				component.translate.y = canh2 + component.translate._y + effect;
			else
				component.translate.y = canh2 + component.translate._y;

		} else if ((component.position & __TOP__) === __TOP__)
			component.translate.y = component.translate._y - effect;
		else if ((component.position & __BOTTOM__) === __BOTTOM__)
			component.translate.y = canh + component.translate._y + effect;
		else
			component.translate.y = component.translate._y;

		if (component.style !== undefined) updateMobileCssElement(component, component.mog);
	};

	/* Update position of object, usefull for trigger */
	this.update = function () {


		Tub.updateLeaderboardScaling();
		Tub.updateBagScaling();
		Tub.updateBookScaling();
		Tub.updatePadDirScaling();
		Tub.updateZoomIconScaling();
		Tub.checkRatioAndAdjustMog();



		// Compute transition effect
		var effect = 0;
		if (appear_effect_step != appear_effect_max_step || quit_effect_step != -1) {

			/* Appear effect */
			if (appear_effect_step != appear_effect_max_step)
				// I substract 50 because at end, move effect do not down at 0
				var effect = 1500 / (appear_effect_step + 1) - 50;

			/* Quit effect */
			if (quit_effect_step != -1)
				// I substract 48 for center correctly -> when quit_effect_step == 0
				var effect = - (1750 / (quit_effect_max_step - quit_effect_step + 1) - 48);
		}

		// Update background image component
		for (var i = 0 ; i < this.bkgd.length ; i++)
			this.update_component (this.bkgd[i], effect);

		// Update buttons
		for (var i = 0 ; i < this.buttons.length ; i++)
			this.update_component (this.buttons[i].info, effect);

		// Update CSS element
		for (var i = 0 ; i < this.css.length ; i++)
			this.update_component (this.css[i], effect);

		if (isMobile) return;

		this.loading.translate.x = ((canw  - this.loading.img.width) / 2);
		this.loading.translate.y = 0;

		this.langselect.translate.x = canw  - 450;
		this.langselect.translate.y = canh - 40;

		this.all_rights_reserved.translate.x = canw  - 340;
		this.all_rights_reserved.translate.y = canh - 25;

		this.trevda.translate.x = canw - 320;
		this.trevda.translate.y = 80;

		if (appear_effect_step != appear_effect_max_step || quit_effect_step != -1) {

			var move_effect = 0;
			/* Appear effect */
			if (appear_effect_step != appear_effect_max_step) {
				var move_effect = 1500 / (appear_effect_step + 1) - 50;
				// I substract 50 because at end, move effect do not down at 0
			}

			/* Quit effect */
			if (quit_effect_step != -1) {
				var move_effect = - (1750 / (quit_effect_max_step - quit_effect_step + 1) - 48);
				// I substract 48 for center correctly -> when quit_effect_step == 0
			}

			this.loading.translate.y      -= (move_effect > 0) ? move_effect : -move_effect;
			this.langselect.translate.y          -= (move_effect < 0) ? move_effect : -move_effect;
			this.all_rights_reserved.translate.y -= (move_effect < 0) ? move_effect : -move_effect;
		}

		this.langselect.update ();
		this.all_rights_reserved.update ();
		this.trevda.update ();
	}

	this.create_spin = function (info) {

		var spin = document.createElement ("canvas");
		var spinCtx = spin.getContext ("2d");
		spin.width = 342
		spin.height = 342

		var start = -Math.PI / 2;
		for (var i = 0 ; i < info.length ; i++) {

			var col = info[i][0];
			var deg = info[i][1] * Math.PI / 180;

			spinCtx.beginPath ();
			spinCtx.arc (171, 171, 170, start, start + deg, false);
			spinCtx.lineTo (171, 171);
			spinCtx.fillStyle = col;
			spinCtx.fill ();

			start += deg;
		}

		return spin;
	};

	this.generate_new_nickname = function () {

		// Draw text info
		this.new_nickname = document.getElementById ("account_nickname_input").value;
		if (this.new_nickname !== this.previous_new_nickname) {

			this.previous_new_nickname = this.new_nickname;
			this.new_nickname_img = gui_render_text (this.new_nickname,
				"'Baloo Paaji', sans-serif", "#EFE4B4", 45, 550);
		}
	};

	this.draw = function () {

		/* Draw fake world */
		draw_fake_world ();

		// Place experience gauge relatively to the top left interface
		ui.xp = Utils.lerp (ui.xp, ui.xp_dest, 0.03);
		this.bkgd[LEVEL_GAUGE].translate.x = this.bkgd[0].translate.x + -72 + 165 * ui.xp;
		this.bkgd[LEVEL_GAUGE].translate._x = this.bkgd[LEVEL_GAUGE].translate.x;
		this.bkgd[LEVEL_GAUGE].translate.y = this.bkgd[0].translate.y + 30;
		this.bkgd[LEVEL_GAUGE].translate._y = this.bkgd[LEVEL_GAUGE].translate.y;

		// Render all background images
		for (var i = 2 ; i < this.bkgd.length ; i++) {
			if (this.bkgd[i].active === __DISPLAY__)
				this.bkgd[i].draw (ctx);
		}

		// Render kit remains time
		var remains = this.kit - Date.now ();
		if (remains > 0) {

			var min  = Math.floor (remains / 60000);
			var hour = Math.floor (min / 60);
			min %= 60;
			if (min !== this.previous_kit_min) {

				this.previous_kit_min = min;
				min = (min < 10) ? "0" + min : "" + min;
				_this.kit_img_min = gui_render_text (min, "'Baloo Paaji', sans-serif", "#EFE4B4", 80, 200);
			}

			if (hour !== this.previous_kit_hour) {

				this.previous_kit_hour = hour;
				hour = (hour < 10) ? "0" + hour : "" + hour;
				_this.kit_img_hour = gui_render_text (hour, "'Baloo Paaji', sans-serif", "#EFE4B4", 80, 200);
			}

			var remain_box = this.bkgd[BAG_REMAIN_BOX];
			remain_box.draw (ctx);
			var img = this.kit_img_hour;
			ctxDrawImage (ctx, img, remain_box.translate.x - img.width / 4 + 182,
			               remain_box.translate.y - img.height / 4 + 40, img.width / 2, img.height / 2);
			var img = this.kit_img_min;
			ctxDrawImage (ctx, img, remain_box.translate.x - img.width / 4 + 251,
			               remain_box.translate.y - img.height / 4 + 40, img.width / 2, img.height / 2);
		}

		// Render privateServerTime remains time
		var remains = this.privateServerTime - Date.now ();
		if (remains > 0) {

			var min  = Math.floor (remains / 60000);
			var hour = Math.floor (min / 60);
			var day = Math.floor (hour / 24);
			min %= 60;
			hour %= 24;
			if (min !== this.previous_privateServerTime_min) {

				this.previous_privateServerTime_min = min;
				min = (min < 10) ? "0" + min : "" + min;
				_this.privateServerTime_img_min = gui_render_text (min, "'Baloo Paaji', sans-serif", "#EFE4B4", 80, 200);
			}

			if (hour !== this.previous_privateServerTime_hour) {

				this.previous_privateServerTime_hour = hour;
				hour = (hour < 10) ? "0" + hour : "" + hour;
				_this.privateServerTime_img_hour = gui_render_text (hour, "'Baloo Paaji', sans-serif", "#EFE4B4", 80, 200);
			}

			if (day !== this.previous_privateServerTime_day) {

				this.previous_privateServerTime_day = day;
				day = (day < 10) ? "0" + day : "" + day;
				_this.privateServerTime_img_day = gui_render_text (day, "'Baloo Paaji', sans-serif", "#EFE4B4", 80, 200);
			}

			var remain_box = this.bkgd[SERVER_REMAIN_BOX];
			remain_box.draw (ctx);
			var img = this.privateServerTime_img_day;
			ctxDrawImage (ctx, img, remain_box.translate.x - img.width / 4 + 113,
			               remain_box.translate.y - img.height / 4 + 40, img.width / 2, img.height / 2);
			var img = this.privateServerTime_img_hour;
			ctxDrawImage (ctx, img, remain_box.translate.x - img.width / 4 + 182,
			               remain_box.translate.y - img.height / 4 + 40, img.width / 2, img.height / 2);
			var img = this.privateServerTime_img_min;
			ctxDrawImage (ctx, img, remain_box.translate.x - img.width / 4 + 251,
			               remain_box.translate.y - img.height / 4 + 40, img.width / 2, img.height / 2);
		}

		// Select current view for buttons
		if ((this.current_view & __GAME__) === __GAME__)
			this.buttons[GAME_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __LEADERBOARD__) === __LEADERBOARD__)
			this.buttons[LEADERBOARD_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __COSMETICS__) === __COSMETICS__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __PROFILE__) === __PROFILE__)
			this.buttons[PROFILE_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __TUTORIAL__) === __TUTORIAL__)
			this.buttons[TUTORIAL_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __LOGIN__) ===  __LOGIN__)
			this.buttons[LOGIN_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SHOP__) === __SHOP__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_1__) === __SPIN_1__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_2__) === __SPIN_2__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_3__) === __SPIN_3__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_4__) === __SPIN_4__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_5__) === __SPIN_5__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SPIN_6__) === __SPIN_6__)
			this.buttons[SHOP_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SKIN__) === __SKIN__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __BAG__) === __BAG__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __CRATE__) === __CRATE__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __BOOK__) === __BOOK__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __ACCESSORY__) === __ACCESSORY__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __LOOT__) === __LOOT__)
			this.buttons[COSMETICS_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SERVER_LOCATION__) === __SERVER_LOCATION__)
			this.buttons[SERVER_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SERVER_DURATION__) === __SERVER_DURATION__)
			this.buttons[SERVER_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SERVER_ACCESS__) === __SERVER_ACCESS__)
			this.buttons[SERVER_BUTTON].info.state = BUTTON_CLICK;
		else if ((this.current_view & __SEASON4__) === __SEASON4__)
			this.buttons[PROFILE_BUTTON].info.state = BUTTON_CLICK;

		// Selected button effect for the leaderboard view
		if ((this.current_view & __LEADERBOARD__) === __LEADERBOARD__) {

			if (this.leaderboard_mode === this.LEADERBOARD_TOTAL) {

				this.leaderboard_range = this.LEADERBOARD_ALL;
				this.buttons[this.LEADERBOARD_ALL].info.active   = __HIDE__;
				this.buttons[this.LEADERBOARD_WEEK].info.active  = __HIDE__;
				this.buttons[this.LEADERBOARD_TODAY].info.active = __HIDE__;

			} else {

				this.buttons[this.LEADERBOARD_ALL].info.active   = __DISPLAY__;
				this.buttons[this.LEADERBOARD_WEEK].info.active  = __DISPLAY__;
				this.buttons[this.LEADERBOARD_TODAY].info.active = __DISPLAY__;
			}

			if (this.leaderboard_mode === this.LEADERBOARD_NORMAL)
				this.buttons[this.LEADERBOARD_NORMAL].info.state = BUTTON_CLICK;
			else if (this.leaderboard_mode === this.LEADERBOARD_VAMPIRE)
				this.buttons[this.LEADERBOARD_VAMPIRE].info.state = BUTTON_CLICK;
			else if (this.leaderboard_mode === this.LEADERBOARD_TOTAL)
				this.buttons[this.LEADERBOARD_TOTAL].info.state = BUTTON_CLICK;
			else if (this.leaderboard_mode === this.LEADERBOARD_ZOMBIE)
				this.buttons[this.LEADERBOARD_ZOMBIE].info.state = BUTTON_CLICK;
			else if (this.leaderboard_mode === this.LEADERBOARD_FOREST)
				this.buttons[this.LEADERBOARD_FOREST].info.state = BUTTON_CLICK;

			if (this.leaderboard_range === this.LEADERBOARD_ALL)
				this.buttons[this.LEADERBOARD_ALL].info.state = BUTTON_CLICK;
			else if (this.leaderboard_range === this.LEADERBOARD_WEEK)
				this.buttons[this.LEADERBOARD_WEEK].info.state = BUTTON_CLICK;
			else if (this.leaderboard_range === this.LEADERBOARD_TODAY)
				this.buttons[this.LEADERBOARD_TODAY].info.state = BUTTON_CLICK;

			if (this.leaderboard_sorted === this.LEADERBOARD_KILL)
				this.buttons[this.LEADERBOARD_KILL].info.state = BUTTON_CLICK;
			else if (this.leaderboard_sorted === this.LEADERBOARD_SCORE)
				this.buttons[this.LEADERBOARD_SCORE].info.state = BUTTON_CLICK;
			else if (this.leaderboard_sorted === this.LEADERBOARD_TIME)
				this.buttons[this.LEADERBOARD_TIME].info.state = BUTTON_CLICK;

			if (this.leaderboard_season === this.LEADERBOARD_SEASON1)
				this.buttons[this.LEADERBOARD_SEASON1].info.state = BUTTON_CLICK;
			else if (this.leaderboard_season === this.LEADERBOARD_SEASON2)
				this.buttons[this.LEADERBOARD_SEASON2].info.state = BUTTON_CLICK;
			else if (this.leaderboard_season === this.LEADERBOARD_SEASON3)
				this.buttons[this.LEADERBOARD_SEASON3].info.state = BUTTON_CLICK;
			else if (this.leaderboard_season === this.LEADERBOARD_SEASON4)
				this.buttons[this.LEADERBOARD_SEASON4].info.state = BUTTON_CLICK;
		}

		// Selected button effect for the profile view
		if ((this.current_view & __PROFILE__) === __PROFILE__) {

			if (this.current_mode_score === -1)
				this.buttons[SCORE_MODE_TOTAL].info.state = BUTTON_CLICK;
			else if (this.current_mode_score === WORLD.MODE_PVP)
				this.buttons[SCORE_MODE_NORMAL].info.state = BUTTON_CLICK;
			else if (this.current_mode_score === WORLD.MODE_ZOMBIES)
				this.buttons[SCORE_MODE_ZOMBIE].info.state = BUTTON_CLICK;
			else if (this.current_mode_score === WORLD.MODE_VAMPIRES)
				this.buttons[SCORE_MODE_VAMPIRE].info.state = BUTTON_CLICK;
			else if (this.current_mode_score === WORLD.MODE_LEGACY)
				this.buttons[SCORE_MODE_FOREST].info.state = BUTTON_CLICK;

			if (this.profile_season === 0)
				this.buttons[SCORE_MODE_SEASON1].info.state = BUTTON_CLICK;
			else if (this.profile_season === 1)
				this.buttons[SCORE_MODE_SEASON2].info.state = BUTTON_CLICK;
			else if (this.profile_season === 2)
				this.buttons[SCORE_MODE_SEASON3].info.state = BUTTON_CLICK;
			else if (this.profile_season === 3)
				this.buttons[SCORE_MODE_SEASON4].info.state = BUTTON_CLICK;
		}

		// Update hint effect
		if ((this.current_view & __GAME__) === __GAME__ && client.privateServer === 0) {

			if (this.buttons[NORMAL_MODE].in_button (mouse.pos))
				this.buttons[NORMAL_MODE].hint = 1
			else
				this.buttons[NORMAL_MODE].hint = 0

			if (this.buttons[FOREST_MODE].in_button (mouse.pos))
				this.buttons[FOREST_MODE].hint = 1;
			else
				this.buttons[FOREST_MODE].hint = 0;

			if (this.buttons[MODE_COMMUNITY].in_button (mouse.pos))
				this.buttons[MODE_COMMUNITY].hint = 1;
			else
				this.buttons[MODE_COMMUNITY].hint = 0;

			if (this.buttons[MODE_EXPERIMENTAL].in_button (mouse.pos))
				this.buttons[MODE_EXPERIMENTAL].hint = 1;
			else
				this.buttons[MODE_EXPERIMENTAL].hint = 0;

			if (this.buttons[ZOMBIE_MODE].in_button (mouse.pos))
				this.buttons[ZOMBIE_MODE].hint = 1;
			else
				this.buttons[ZOMBIE_MODE].hint = 0;

			if (this.buttons[VAMPIRE_MODE].in_button (mouse.pos))
				this.buttons[VAMPIRE_MODE].hint = 1;
			else
				this.buttons[VAMPIRE_MODE].hint = 0;
		}	else {
			this.buttons[NORMAL_MODE].hint = 0
			this.buttons[FOREST_MODE].hint = 0
			this.buttons[MODE_COMMUNITY].hint = 0
			this.buttons[MODE_EXPERIMENTAL].hint = 0
			this.buttons[ZOMBIE_MODE].hint = 0
			this.buttons[VAMPIRE_MODE].hint = 0
		}

		// Render spin effect
		var _r = 1;
		if ((this.current_view & (__SPIN_1__ | __SPIN_2__ | __SPIN_3__ | __SPIN_4__ | __SPIN_5__ | __SPIN_6__)) > 1) {

			var pmog;
			if ((this.current_view & __SPIN_1__) === __SPIN_1__) pmog = Mogs.Spin1Bkg;
			if ((this.current_view & __SPIN_5__) === __SPIN_5__) pmog = Mogs.Spin2Bkg;
			if ((this.current_view & __SPIN_3__) === __SPIN_3__) pmog = Mogs.Spin3Bkg;
			if ((this.current_view & __SPIN_4__) === __SPIN_4__) pmog = Mogs.Spin4Bkg;
			if ((this.current_view & __SPIN_2__) === __SPIN_2__) pmog = Mogs.Spin5Bkg;
			if ((this.current_view & __SPIN_6__) === __SPIN_6__) pmog = Mogs.Spin6Bkg;

			var img = IMAGES.ARROW_SPIN;

			ctx.save ();
			// ctx.translate (canw2, SPIN_TOP + img.height / 4);

			ctx.translate(pmog.translate.x + (770 * pmog.scale), pmog.translate.y + (230 * pmog.scale));
			ctx.scale(pmog.scale * 2, pmog.scale * 2);

			if (this.spin === 1) {

				this.spin_effect += delta / 3;
				_r = this.spin_target - 100 / (Math.pow (1 + this.spin_effect, 1 + this.spin_effect));
				ctx.rotate (_r);
			}

			ctxDrawImage (ctx, img, -img.width / 4, -img.height / 4, img.width / 2, img.height / 2);// !!!!!!!!!!

			ctx.restore ();
		}

		// Select current mode for buttons
		if (client.privateServer === 0) {

			if (client.current_mode === WORLD.MODE_PVP)
				this.buttons[NORMAL_MODE].info.state = BUTTON_CLICK;
			else if (client.current_mode === WORLD.MODE_LEGACY)
				this.buttons[FOREST_MODE].info.state = BUTTON_CLICK;
			else if (client.current_mode === WORLD.MODE_ZOMBIES)
				this.buttons[ZOMBIE_MODE].info.state = BUTTON_CLICK;
			else if (client.current_mode === WORLD.MODE_VAMPIRES)
				this.buttons[VAMPIRE_MODE].info.state = BUTTON_CLICK;
			else if (client.current_mode === WORLD.MODE_COMMUNITY)
				this.buttons[MODE_COMMUNITY].info.state = BUTTON_CLICK;
			else if (client.current_mode === WORLD.MODE_EXPERIMENTAL)
				this.buttons[MODE_EXPERIMENTAL].info.state = BUTTON_CLICK;
		}

		for (var i = 1 ; i < this.buttons.length ; i++) {
			if (this.buttons[i].info.active === __DISPLAY__)
				this.buttons[i].draw (ctx);
		}

		// Render top left UI
		this.bkgd[0].draw (ctx);

		// Render new nickname
		if ((this.current_view & (__CHANGE_NICKNAME0__ | __CHANGE_NICKNAME1__)) > 0) {
			var img = this.new_nickname_img;
			Mogs.ProfileNicknameLabel2.w = img.width;
			Mogs.ProfileNicknameLabel2.h = img.height;
			ctxDrawImage (ctx, img, canw2 - img.width / 4, 138, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, Mogs.ProfileNicknameLabel2);
		}

		// Render level image
		var lvl = Math.max (1, Math.min (18, Math.floor ((ui.lvl + 3) / 2)));
		this.bkgd[lvl].active = __DISPLAY__;
		this.bkgd[lvl].draw (ctx);
		this.bkgd[lvl].active = __HIDE__;

		this.buttons[0].draw (ctx);

		// Display cosmetics current selection
		if ((this.current_view & (__COSMETICS__ | __BAG__ | __BOOK__ | __SKIN__ | __ACCESSORY__)) > 1) {

			var _x = ((this.current_view & (__BAG__ | __BOOK__ | __SKIN__ | __ACCESSORY__)) > 1) ? -190 : 0;

			var bag, book, left, right, body, accessory, mogpar;

			if (isMobile) {
				if (_x === 0) {
					bag = Mogs.CosmeticsBag;
					book = Mogs.CosmeticsBook;
					left = Mogs.CosmeticsHandLeft;
					right = Mogs.CosmeticsHandRight;
					body = Mogs.CosmeticsBody;
					accessory = Mogs.CosmeticsAccessory;
				}	else {
					bag = Mogs.CosmeticsSideBag;
					book = Mogs.CosmeticsSideBook;
					left = Mogs.CosmeticsSideHandLeft;
					right = Mogs.CosmeticsSideHandRight;
					body = Mogs.CosmeticsSideBody;
					accessory = Mogs.CosmeticsSideAccessory;
				}
			}

			if (isMobile) {
				if ((this.current_view & __COSMETICS__) === __COSMETICS__) mogpar = 'SkinsBaseBox';
				if ((this.current_view & __BAG__) === __BAG__) mogpar = 'BagBox';
				if ((this.current_view & __BOOK__) === __BOOK__) mogpar = 'BookBox';
				if ((this.current_view & __SKIN__) === __SKIN__) mogpar = 'CustomskinBox';
				if ((this.current_view & __ACCESSORY__) === __ACCESSORY__) mogpar = 'AccessoriesBox';
			}

			var img = sprite[SPRITE.BAG][this.bag][this.day_mode];
			bag.w = img.width;
			bag.h = img.height;
			bag.par = mogpar;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 + _x, 183, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, bag);

			this.breath = (this.breath + delta * 1000) % 2000;
			var v = 4.5 * (this.breath < 1000) ? this.breath / 1000 : (2000 - this.breath) / 1000;

			var img = sprite[SPRITE.BOOK][this.book][this.day_mode];
			book.w = img.width;
			book.h = img.height;
			book.par = mogpar;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 - 62 + v + _x, 240, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, book);

			var img = sprite[SPRITE.HAND][this.skin][this.day_mode];
			left.w = img.width;
			left.h = img.height;
			right.w = img.width;
			right.h = img.height;
			left.par = mogpar;
			right.par = mogpar;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 - 54 + v + _x, 272, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, left);
			ctxDrawImage (ctx, img, canw2 - img.width / 4 + 54 - v + _x, 272, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, right);

			var img = sprite[SPRITE.BODY][this.skin][this.day_mode];
			body.w = img.width;
			body.h = img.height;
			body.par = mogpar;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 + _x, 222, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, body);

			var img = sprite[SPRITE.ACCESSORY][this.accessory][this.day_mode];
			accessory.w = img.width;
			accessory.h = img.height;
			accessory.par = mogpar;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 + _x, 222, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, accessory);
		}

		// Render crate
		if ((this.current_view & __COSMETICS__) === __COSMETICS__) {

			var img = sprite[SPRITE.CRATE][this.crate][this.day_mode];
			Mogs.CosmeticsCrateLeft.w = img.width;
			Mogs.CosmeticsCrateLeft.h = img.height;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 - 61, 406 - img.height / 4, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, Mogs.CosmeticsCrateLeft);
			var img = sprite[SPRITE.CRATE][this.dead][this.day_mode];
			Mogs.CosmeticsCrateRight.w = img.width;
			Mogs.CosmeticsCrateRight.h = img.height;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 + 53, 406 - img.height / 4, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, Mogs.CosmeticsCrateRight);
		}

		if ((this.current_view & __CRATE__) === __CRATE__) {
			var img = sprite[SPRITE.CRATE][this.dead][this.day_mode];
			Mogs.CosmDeadCrate.w = img.width;
			Mogs.CosmDeadCrate.h = img.height;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 - 200, 268 - img.height / 4, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, Mogs.CosmDeadCrate);
		}

		if ((this.current_view & __LOOT__) === __LOOT__) {
			var img = sprite[SPRITE.CRATE][this.crate][this.day_mode];
			Mogs.CosmLootCrate.w = img.width;
			Mogs.CosmLootCrate.h = img.height;
			ctxDrawImage (ctx, img, canw2 - img.width / 4 - 200, 268 - img.height / 4, img.width / 2, img.height / 2,
				undefined, undefined, undefined, undefined, Mogs.CosmLootCrate);
		}

		// Render cosmetics selector
		if ((this.current_view & (__BAG__ | __BOOK__ | __SKIN__ | __ACCESSORY__ | __CRATE__ | __LOOT__)) > 1) {

			for (var i = 1 ; i < this.buttons.length ; i++) {

				if ((this.buttons[i].view & this.current_view) === 0)
					continue;

				var button = this.buttons[i].info, buttonmog;
				if (button.cosmeticId >= 0) {

					buttonmog = button.mog;

					var img = button.cosmeticType[button.cosmeticId].day;
					// console.log(button)
					ctxDrawImage (ctx, img, button.translate.x - img.width / 8 + 44.5,
						button.translate.y - img.height / 8 + 45.5, img.width / 4, img.height / 4,
						undefined, undefined, undefined, undefined, buttonmog);

					if (button.unlocked !== 1) {

						var img = IMAGES.RED_LOCKED;
						ctxDrawImage (ctx, img, button.translate.x - img.width / 4 + 44.5,
							button.translate.y - img.height / 4 + 44.5, img.width / 2, img.height / 2,
							undefined, undefined, undefined, undefined, buttonmog);
					}
				}
			}

			var mogpar;
			if (isMobile) {
				if ((this.current_view & __COSMETICS__) === __COSMETICS__) mogpar = 'SkinsBaseBox';
				if ((this.current_view & __BAG__) === __BAG__) mogpar = 'BagBox';
				if ((this.current_view & __BOOK__) === __BOOK__) mogpar = 'BookBox';
				if ((this.current_view & __SKIN__) === __SKIN__) mogpar = 'CustomskinBox';
				if ((this.current_view & __ACCESSORY__) === __ACCESSORY__) mogpar = 'AccessoriesBox';
				if ((this.current_view & __LOOT__) === __LOOT__) mogpar = 'LootBox';
				if ((this.current_view & __CRATE__) === __CRATE__) mogpar = 'DeadBox';
			}


			var img = this.cosmetic_name;
			Mogs.CosmetName.par = mogpar;
			Mogs.CosmetName.w = img.width;
			Mogs.CosmetName.h = img.height;
			ctxDrawImage (ctx, img, canw2 - 312, 375, img.width / 2, img.height / 2, undefined, undefined,  undefined, undefined, Mogs.CosmetName);
			var img = this.cosmetic_author;
			Mogs.CosmetAuthor.par = mogpar;
			Mogs.CosmetAuthor.w = img.width;
			Mogs.CosmetAuthor.h = img.height;
			ctxDrawImage (ctx, img, canw2 - 312, 395, img.width / 2, img.height / 2, undefined, undefined,  undefined, undefined, Mogs.CosmetAuthor);
		}

		// Draw text info
		if (this.bread !== this.previous_bread) {

			this.previous_bread = this.bread;
			this.bread_img = gui_render_text ("" + this.bread, "'Baloo Paaji', sans-serif", "#EFE4B4", 60, 250);
		}

		Mogs.BreadMenuText.w = this.bread_img.w2 * 2;
		Mogs.BreadMenuText.h = this.bread_img.h2 * 2;

		ctxDrawImage (
			ctx, this.bread_img, this.bkgd[0].translate.x + 50, 15, this.bread_img.w2,
			this.bread_img.h2, undefined, undefined, undefined, undefined, Mogs.BreadMenuText
		);

		if (this.lvl !== this.previous_lvl) {

			this.previous_lvl = this.lvl;
			this.lvl_img = gui_render_text ("LVL " + (this.lvl + 1), "'Baloo Paaji', sans-serif", "#EFE4B4", 50, 250,
				undefined, 30, 24, undefined, undefined, undefined, undefined, "#3F3019", 20);
		}

		Mogs.LvlMenuText.w = this.lvl_img.w2 * 2;
		Mogs.LvlMenuText.h = this.lvl_img.h2 * 2;

		ctxDrawImage (ctx, this.lvl_img, this.bkgd[0].translate.x + 94, 0, this.lvl_img.w2, this.lvl_img.h2,
			undefined, undefined, undefined, undefined, Mogs.LvlMenuText);

		// Display hint effect
		if (client.privateServer === 0) {

			var hint = this.buttons[NORMAL_MODE].hint;
			if (hint > 0) {

				var img = IMAGES.NORMAL_MODE_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverNormalMode);
			}

			var hint = this.buttons[FOREST_MODE].hint;
			if (hint > 0) {

				var img = IMAGES.FOREST_MODE_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverForestMode);
			}

			var hint = this.buttons[MODE_COMMUNITY].hint;
			if (hint > 0) {

				var img = IMAGES.MODE_COMMUNITY_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverCommunMode);
			}

			var hint = this.buttons[MODE_EXPERIMENTAL].hint;
			if (hint > 0) {

				var img = IMAGES.MODE_EXPERIMENTAL_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverExperiMode);
			}

			var hint = this.buttons[VAMPIRE_MODE].hint;
			if (hint > 0) {

				var img = IMAGES.VAMPIRE_MODE_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverVampirMode);
			}

			var hint = this.buttons[ZOMBIE_MODE].hint;
			if (hint > 0) {

				var img = IMAGES.ZOMBIE_MODE_HOVER;
				ctxDrawImage (ctx, img, canw2 - img.width / 4, -36 - img.height * Utils.ease_in_out_quad (1 - hint) / 2,
					img.width / 2, img.height / 2, undefined, undefined, undefined, undefined, Mogs.HoverZombieMode);
			}
		}

		// Spin win effect
		if (this.spin === 1 && Math.abs (_r - this.spin_target) < 0.006) {

			ctx.globalAlpha = Math.min (1, this.spin_win_effect * 3);

			var img = IMAGES.SPIN_LIGHT;

			ctx.save ();
			ctx.translate (canw2, 260);

			this.spin_win_effect += delta;
			ctx.rotate (this.spin_win_effect);

			ctxDrawImage (ctx, img, -img.width / 2, -img.height / 2, img.width, img.height);
			ctx.restore ();

			var v = 1.05 + 0.05 * Math.sin (this.spin_win_effect * 5);
			if (this.spin_type === 0) {

				img = COSMETICS.SKIN[this.spin_win].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 260 - h / 2, w, h);

			} else if (this.spin_type === 1) {

				img = COSMETICS.SKIN[0].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 260 - h / 2, w, h);

				img = COSMETICS.ACCESSORY[this.spin_win].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 260 - h / 2, w, h);

			} else if (this.spin_type === 2) {

				img = COSMETICS.BAG[this.spin_win].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 180 - h / 2, w, h);

				img = COSMETICS.SKIN[0].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 260 - h / 2, w, h);

			} else if (this.spin_type === 3) {

				img = COSMETICS.BOOK[this.spin_win].day;
				var w = v * img.width; var h = v * img.height;
				ctx.save ();
				ctx.translate (canw2, 260);
				ctx.rotate (Math.PI);
				ctxDrawImage (ctx, img, -w / 2, -h / 2, w, h);
				ctx.restore ();

			} else if (this.spin_type === 4) {

				img = COSMETICS.CRATE[this.spin_win].day;
				var w = v * img.width; var h = v * img.height;
				ctxDrawImage (ctx, img, canw2 - w / 2, 260 - h / 2, w, h);
			}

			var img = this.spin_name;
			ctxDrawImage (ctx, img, canw2 - img.width / 4, 340, img.width / 2, img.height / 2);
			var img = this.spin_author;
			ctxDrawImage (ctx, img, canw2 - img.width / 4, 365, img.width / 2, img.height / 2);

			if (this.spin_win_effect > 6) {
				this.spin = 0;
				select_subview (__SHOP__);
			}

			ctx.globalAlpha = 1;
		}

		// Draw alert message
		user.alert.draw ("#FFF", "#000");

		/* Loading */
		if (_this.waiting) this.loading.draw ();

		/* Update token */
		//refresh_token ();
	}

	var COUNTER = 0;
	var __GAME__        = Math.pow (2, COUNTER++);
	var __PROFILE__     = Math.pow (2, COUNTER++);
	this.__PROFILE__ = __PROFILE__;
	var __LOGIN__       = Math.pow (2, COUNTER++);
	var __COSMETICS__   = Math.pow (2, COUNTER++);
	var __SHOP__        = Math.pow (2, COUNTER++);
	var __TUTORIAL__    = Math.pow (2, COUNTER++);
	var __LEADERBOARD__ = Math.pow (2, COUNTER++);
	var __BUY__         = Math.pow (2, COUNTER++);
	this.__BUY__ = __BUY__;
	var __LOCKED_SKIN__ = Math.pow (2, COUNTER++);
	var __LOCKED_ACC__  = Math.pow (2, COUNTER++);
	var __SPIN_1__      = Math.pow (2, COUNTER++);
	var __SPIN_2__      = Math.pow (2, COUNTER++);
	var __SPIN_3__      = Math.pow (2, COUNTER++);
	var __SPIN_4__      = Math.pow (2, COUNTER++);
	var __SPIN_5__      = Math.pow (2, COUNTER++);
	var __SPIN_6__      = Math.pow (2, COUNTER++);
	var __SKIN__        = Math.pow (2, COUNTER++);
	var __CRATE__       = Math.pow (2, COUNTER++);
	var __BAG__         = Math.pow (2, COUNTER++);
	var __BOOK__        = Math.pow (2, COUNTER++);
	var __ACCESSORY__   = Math.pow (2, COUNTER++);
	var __LOOT__        = Math.pow (2, COUNTER++);
	var __CHANGE_NICKNAME1__ = Math.pow (2, COUNTER++);
	var __CHANGE_NICKNAME0__ = Math.pow (2, COUNTER++);
	var __SERVER_LOCATION__  = Math.pow (2, COUNTER++);
	this.__SERVER_LOCATION__ = __SERVER_LOCATION__;
	var __SERVER_DURATION__  = Math.pow (2, COUNTER++);
	this.__SERVER_DURATION__ = __SERVER_DURATION__;
	var __SERVER_ACCESS__    = Math.pow (2, COUNTER++);
	this.__SERVER_ACCESS__ = __SERVER_ACCESS__;
	var __SEASON4__        = Math.pow (2, COUNTER++);

	this.current_view = __GAME__;

	// Hide or display only one UI type
	function update_subview (view, mode, _css) {

		// Hide the previous view component
		for (var i = 0 ; i < _this.bkgd.length ; i++) {

			if ((_this.bkgd[i].view & view) !== 0)
				_this.bkgd[i].active = mode;
		}
		for (var i = 0 ; i < _this.buttons.length ; i++) {

			if ((_this.buttons[i].view & view) !== 0)
				_this.buttons[i].info.active = mode;
		}
		for (var i = 0 ; i < _this.css.length ; i++) {

			if ((_this.css[i].view & view) !== 0)
				_this.css[i].style.display = _css;
		}
	};


	var assetInfo = [];
	this.hijackedAsset = 0;

	function addAsset (assetName, assetSize) {

		assetName = assetName.replace ("Xday", "day");
		assetName = assetName.replace ("Xnight", "night");

		for (var i = 0 ; i < assetInfo.length ; i++) {

			var asset = assetInfo[i];
			if (asset[0] === assetName) {

				if (asset[1] !== assetSize)
					ui.hijackedAsset = 1;
				return;
			}
		}

		assetInfo.push ([assetName, assetSize]);
	}

	function detectRedirectedAsset (assetURL) {

		assetURL = assetURL.replace ("http://starve.io", "https://starve.io");

		var xhr = new XMLHttpRequest();

		xhr.open('HEAD', assetURL, true);

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var size = Number (xhr.getResponseHeader('Content-Length'));
					if (size > 0) addAsset (assetURL, size);
				}
			}
		}

		xhr.send (null);
	};

	// Detect redirected asset
	function detectCheat () {

		/*
		detectRedirectedAsset (sprite[SPRITE.BAG][ui.bag][0].src);
		detectRedirectedAsset (sprite[SPRITE.BAG][ui.bag][0].src.replace ('day', 'Xday'));
		detectRedirectedAsset (sprite[SPRITE.BAG][ui.bag][1].src);
		detectRedirectedAsset (sprite[SPRITE.BAG][ui.bag][1].src.replace ('night', 'Xnight'));

		detectRedirectedAsset (sprite[SPRITE.BODY][ui.skin][0].src);
		detectRedirectedAsset (sprite[SPRITE.BODY][ui.skin][0].src.replace ('day', 'Xday'));
		detectRedirectedAsset (sprite[SPRITE.BODY][ui.skin][1].src);
		detectRedirectedAsset (sprite[SPRITE.BODY][ui.skin][1].src.replace ('night', 'Xnight'));

		detectRedirectedAsset (sprite[SPRITE.HAND][ui.skin][0].src);
		detectRedirectedAsset (sprite[SPRITE.HAND][ui.skin][0].src.replace ('day', 'Xday'));
		detectRedirectedAsset (sprite[SPRITE.HAND][ui.skin][1].src);
		detectRedirectedAsset (sprite[SPRITE.HAND][ui.skin][1].src.replace ('night', 'Xnight'));
		*/
	};

	// Correct the selected skin
	function correct_selected_skin () {

		var ct = Number (Cookies.get ("starve_crate"));
		var dd = Number (Cookies.get ("starve_dead"));
		var bk = Number (Cookies.get ("starve_book"));
		var bg = Number (Cookies.get ("starve_bag"));
		var sk = Number (Cookies.get ("starve_skin"));
		var ac = Number (Cookies.get ("starve_accessory"));

		if (!(ui.unlock.skin[ui.skin] > 0))
			ui.skin = (!(ui.unlock.skin[sk] > 0)) ? 0 : sk;
		if (!(ui.unlock.book[ui.book] > 0))
			ui.book = (!(ui.unlock.book[bk] > 0)) ? 0 : bk;
		if (!(ui.unlock.dead[ui.dead] > 0))
			ui.dead = (!(ui.unlock.dead[dd] > 0)) ? 0 : dd;
		if (!(ui.unlock.crate[ui.crate] > 0))
			ui.crate = (!(ui.unlock.crate[ct] > 0)) ? 0 : ct;
		if (!(ui.unlock.accessory[ui.accessory] > 0))
			ui.accessory = (!(ui.unlock.accessory[ac] > 0)) ? 0 : ac;
		if (!(ui.unlock.bag[ui.bag] > 0))
			ui.bag = (!(ui.unlock.bag[bg] > 0)) ? 0 : bg;
	};

	// Move from a UI subview to another
	function select_subview (view) {

		// Was triggered outside of this view, we don't want that
		if (_this.in_this_view === false)
			return;

		// Always hide the popup
		update_subview (__LOCKED_SKIN__, __HIDE__, "none");
		update_subview (__LOCKED_ACC__, __HIDE__, "none");
		// Check the skin integrity
		correct_selected_skin ();

		// We don't need to change the current view for the same view
		if (view === _this.current_view || _this.spin >= 1)
			return;

		// Hide or display the ads relatively to the subview
		if (view === __GAME__ || view === __SHOP__ || view === __PROFILE__ || view === __LEADERBOARD__ || view === __COSMETICS__ || view === __TUTORIAL__)
			_this.trevda.style.display = "inline-block";
		else
			_this.trevda.style.display = "none";


		// Hide the previous view component
		update_subview (_this.current_view, __HIDE__, "none");

		// Display the new view component
		_this.current_view = view;
		update_subview (_this.current_view, __DISPLAY__, "inline-block");
	};
	this.select_subview = select_subview;

	this.play_game = function () {

		// Prevent multiple connexion
		if (_this.waiting === false) {

			/* Fix selected skin */
			correct_selected_skin ();

			/* Don't restore session (or even try) */
			user.reconnect.enabled = false;

			/* User cannot control totally the interface */
			_this.waiting = true;

			/* ADINPLAY
			if (!(___adsvid % 2) && window.adplayer)
				window.aiptag["cmd"]["player"].push (function() { window.adplayer["startPreRoll"] (); });
			else
				client.connect ();
			*/

			/* YOLLA ads */
			if (!(___adsvid % 2) && isYolla === 1) {

				window["YMPB"]["que"].push (
					function () {
						document.getElementById ('preroll').style.display = 'block';
						window["YMPB"]["preroll"] ('preroll', yollaCallback);
					});
			} else
				client.connect ();

			/* Detect redirected asset */
			detectCheat ();
		}
	}

	/* Nickname input */
	if (window.innerWidth < 1300 || isMobile) {
		this.nickname = {
			id    : document.getElementById ("nickname_block"),
			style : document.getElementById ("nickname_block").style,
			input : document.getElementById ("nickname_input"),
			active : __DISPLAY__,
			position : __TOP__ | __LEFT__,
			view : __GAME__,
			translate : { x : 0, y : 0, _x : 200, _y : 184 },
			mog: Mogs.NicknameElement
		};
	} else {
		this.nickname = {
			id    : document.getElementById ("nickname_block"),
			style : document.getElementById ("nickname_block").style,
			input : document.getElementById ("nickname_input"),
			active : __DISPLAY__,
			position : __TOP__ | __MIDDLE_X__,
			view : __GAME__,
			translate : { x : 0, y : 0, _x : -180, _y : 184 },
		};
	}

	this.nickname.id.addEventListener ("keyup", function (event) {
	    event.preventDefault ();
	    if (event.keyCode == 13 && !_this.waiting && !_this.settings)
	    	_this.play_game ();
	});

	this.nickname.input.value =
		(Cookies.get ("starve_nickname")) ? Cookies.get ("starve_nickname") : "";

	this.account_nickname = {
		id    : document.getElementById ("account_nickname_block"),
		style : document.getElementById ("account_nickname_block").style,
		input : document.getElementById ("account_nickname_input"),
		active : __HIDE__,
		position : __TOP__ | __MIDDLE_X__,
		view : __PROFILE__,
		translate : { x : 0, y : 0, _x : -122, _y : 110 },
		mog: Mogs.ProfileNicknameLabel
	};

	/* Server list */
	/* Nickname input */
	if (window.innerWidth < 1300 || isMobile)
	this.server_list = {
		id    : document.getElementById ("servselect"),
		style : document.getElementById ("servselect").style,
		active : __DISPLAY__,
		position : __TOP__ | __LEFT__,
		view : __GAME__,
		translate : { x : 0, y : 0, _x : 208, _y : 225 },
		mog: Mogs.ServerListElement
	};
	else
	this.server_list = {
		id    : document.getElementById ("servselect"),
		style : document.getElementById ("servselect").style,
		active : __DISPLAY__,
		position : __TOP__ | __MIDDLE_X__,
		view : __GAME__,
		translate : { x : 0, y : 0, _x : -180, _y : 225 }
	};

	/* leaderboard */
	this.leaderboard = {
		id    : document.getElementById ("leaderboard"),
		style : document.getElementById ("leaderboard").style,
		active : __HIDE__,
		position : __TOP__ | __MIDDLE_X__,
		view : __LEADERBOARD__,
		translate : { x : 0, y : 0, _x : -294.5, _y : 190 },
		mog: Mogs.LeaderboardMenuElement
	};
	if (isMobile) {
		this.leaderboard.style.top = '0px';
		this.leaderboard.style.left = '0px';
	}

	/* Profile Stats */
	this.stats_box = {
		id    : document.getElementById ("stats_box"),
		style : document.getElementById ("stats_box").style,
		active : __HIDE__,
		position : __TOP__ | __MIDDLE_X__,
		view : __PROFILE__,
		translate : { x : 0, y : 0, _x : 125, _y : 187 },
		mog: Mogs.ProfileStatsBox
	};
	/* Daily Quests *//*
	this.daily_quest_box = {
		id    : document.getElementById ("daily_quest_box"),
		style : document.getElementById ("daily_quest_box").style,
		active : __HIDE__,
		position : __TOP__ | __MIDDLE_X__,
		view : __PROFILE__,
		translate : { x : 0, y : 0, _x : -300, _y : 400 },
	};*/
	/* Server Address Input */
	this.serverAddressBlock = {
		id    : document.getElementById ("serverAddressBlock"),
		style : document.getElementById ("serverAddressBlock").style,
		input : document.getElementById ("serverAddressInput"),
		active : __HIDE__,
		position : __TOP__ | __MIDDLE_X__,
		view : __SERVER_ACCESS__,
		translate : { x : 0, y : 0, _x : -220, _y : 350 },
	};

	COUNTER = 0;
	this.css = [];
	this.css[COUNTER++] = this.nickname;
	this.css[COUNTER++] = this.trevda;
	this.css[COUNTER++] = this.langselect;
	this.css[COUNTER++] = this.all_rights_reserved;
	this.css[COUNTER++] = this.server_list;
	this.css[COUNTER++] = this.leaderboard;
	this.css[COUNTER++] = this.account_nickname;
	this.css[COUNTER++] = this.stats_box;
	/*this.css[COUNTER++] = this.daily_quest_box;*/
	this.css[COUNTER++] = this.serverAddressBlock;

	COUNTER = 0;
	this.bkgd = [];
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_RESUME, __DISPLAY__, 0, 0, __LEFT__, Mogs.AvatarResume);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL1, __HIDE__, 0, 0, __LEFT__, Mogs.AvatarLvl1);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL2, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL3, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL4, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL5, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL6, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL7, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL8, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL9, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL10, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL11, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL12, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL13, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL14, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL15, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL16, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL17, __HIDE__, 0, 0, __LEFT__);
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.AVATAR_LVL18, __HIDE__, 0, 0, __LEFT__);
	if (window.innerWidth < 1300 && !isMobile)
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LOGO_INTERFACE, __DISPLAY__,
		200, 100, __TOP__ | __LEFT__);
	else
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LOGO_INTERFACE, __DISPLAY__,
		-/*IMAGES.LOGO_INTERFACE.width*/753 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.LogoInterface);
	this.bkgd[COUNTER++].view = __GAME__;
	this.bkgd[COUNTER++] = gui_create_image_hd (IMAGES.LINKS_BG, __DISPLAY__, 353, -10, __RIGHT__, Mogs.LinksBg);
	if (window.innerWidth > 1300 || isMobile) {
		this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.CHANGELOG_BOX, __DISPLAY__, -/*IMAGES.CHANGELOG_BOX.width*/885 / 4, -/*IMAGES.CHANGELOG_BOX.height*/319 / 2, __BOTTOM__ | __MIDDLE_X__, Mogs.ChangelogBox);
		this.bkgd[COUNTER++].view = __GAME__;
	}
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.PROFILE_BOX, __HIDE__,
		-/*IMAGES.PROFILE_BOX.width*/1293 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.ProfileBoxMenu);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SKINS_BOX, __HIDE__,
		-/*IMAGES.SKINS_BOX.width*/1425 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.SkinsBaseBox);
	this.bkgd[COUNTER++].view = __COSMETICS__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.ACCOUNT_BOX, __HIDE__,
		-/*IMAGES.ACCOUNT_BOX.width*/905 / 4, 50, __TOP__ | __MIDDLE_X__, Mogs.AccountBox);
	this.bkgd[COUNTER++].view = __LOGIN__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SHOP_BOX, __HIDE__,
		-/*IMAGES.SHOP_BOX.width*/1608 / 4, 130, __TOP__ | __MIDDLE_X__, Mogs.ShopBox);
	this.bkgd[COUNTER++].view = __SHOP__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.PRIVATE_SERVER_BOX, __HIDE__,
		-/*IMAGES.PRIVATE_SERVER_BOX.width*/462 / 4 - 290, 300, __TOP__ | __MIDDLE_X__, Mogs.ShopPrivateServerBox);
	this.bkgd[COUNTER++].view = __SHOP__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SERVER_LOCATION_BOX, __HIDE__,
		-/*IMAGES.SERVER_LOCATION_BOX.width*/1117 / 4, 130, __TOP__ | __MIDDLE_X__, Mogs.LocationBox);
		this.bkgd[COUNTER++].view = __SERVER_LOCATION__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SERVER_DURATION_BOX, __HIDE__,
		-/*IMAGES.SERVER_DURATION_BOX.width*/1222 / 4, 130, __TOP__ | __MIDDLE_X__, Mogs.DurationBox);
		this.bkgd[COUNTER++].view = __SERVER_DURATION__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SERVER_ACCESS_BOX, __HIDE__,
		-/*IMAGES.SERVER_ACCESS_BOX.width*/1222 / 4, 100, __TOP__ | __MIDDLE_X__);
		this.bkgd[COUNTER++].view = __SERVER_ACCESS__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SEASON4_BOX, __HIDE__,
		-IMAGES.SEASON4_BOX.width / 4, -15, __TOP__ | __MIDDLE_X__, Mogs.Season4Box);
		this.bkgd[COUNTER++].view = __SEASON4__;

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.TUTORIAL_BOX, __HIDE__,
		-/*IMAGES.TUTORIAL_BOX.width*/1497 / 4, 110, __TOP__ | __MIDDLE_X__, Mogs.TutorialBox);
	this.bkgd[COUNTER++].view = __TUTORIAL__;

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LEADERBOARD_BOX, __HIDE__,
		-/*IMAGES.LEADERBOARD_BOX.width*/1226 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.LeaderboardBox);
	this.bkgd[COUNTER++].view = __LEADERBOARD__;

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.BUY_BREAD_BOX, __HIDE__,
		-/*IMAGES.BUY_BREAD_BOX.width*/1381 / 4, 80, __TOP__ | __MIDDLE_X__, Mogs.BuyBreadBox);
	this.bkgd[COUNTER++].view = __BUY__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN1, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin1Bkg);
	this.bkgd[COUNTER++].view = __SPIN_1__;
	var DEG = 360 / 100;
	var spinImg = this.create_spin ([["#25c5d6", DEG * 3], ["#e2cf27", DEG * 10],
		["#afac98", DEG * 30], ["#d88e23", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin1Img);
	this.bkgd[COUNTER++].view = __SPIN_1__;

	this.play_spin = function (_target, type, win) {

		_this.spin = 1;
		_this.spin_effect = 0;
		_this.spin_win_effect = 0;
		_this.spin_target = _target;
		_this.spin_type = type;

		var info;
		var i = 0;
		if (type === 0) {
			for (i = 0 ; i < COSMETICS.SKIN.length ; i++) { if (win === COSMETICS.SKIN[i].id) break; }
			info = COSMETICS.SKIN[i];
			_this.unlock.skin[i] = 1;
		} else if (type === 1) {
			for (i = 0 ; i < COSMETICS.ACCESSORY.length ; i++) { if (win === COSMETICS.ACCESSORY[i].id) break; }
			info = COSMETICS.ACCESSORY[i];
			_this.unlock.accessory[i] = 1;
		} else if (type === 2) {
			for (i = 0 ; i < COSMETICS.BAG.length ; i++) { if (win === COSMETICS.BAG[i].id) break; }
			info = COSMETICS.BAG[i];
			_this.unlock.bag[i] = 1;
		} else if (type === 3) {
			for (i = 0 ; i < COSMETICS.BOOK.length ; i++) { if (win === COSMETICS.BOOK[i].id) break; }
			info = COSMETICS.BOOK[i];
			_this.unlock.book[i] = 1;
		} else if (type === 4) {
			for (i = 0 ; i < COSMETICS.CRATE.length ; i++) { if (win === COSMETICS.CRATE[i].id) break; }
			info = COSMETICS.CRATE[i];
			_this.unlock.crate[i] = 1;
			_this.unlock.dead[i] = 1;
		}

		_this.spin_win = i;
		_this.spin_author = gui_render_text ("by " + info.author, "'Baloo Paaji', sans-serif",
			"#EFE4B4", 40, 500, undefined, 30, 24, undefined, undefined, undefined, undefined, "#000000", 24);
		_this.spin_name = gui_render_text (info.name, "'Baloo Paaji', sans-serif", "#EFE4B4",
			60, 600, undefined, 30, 24, undefined, undefined, undefined, undefined, "#000000", 20);
	};

	this.spin = 0;
	this.spin_effect = 0;
	this.spin_target = 0;
	this.spin_type = 0;
	this.spin_win_effect = 0;
	this.spin_author = undefined;
	this.spin_name = undefined;
	var SPIN_TOP = 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.ARROW_SPIN.height*/260 / 4;
	var SPIN_CENTER = -/*IMAGES.ARROW_SPIN.width*/260 / 4;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN2, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin2Bkg);
	this.bkgd[COUNTER++].view = __SPIN_5__;

	var spinImg = this.create_spin ([["#d45ce5", DEG * 3], ["#25c5d6", DEG * 10],
		["#e2cf27", DEG * 30], ["#afac98", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin2Img);
	this.bkgd[COUNTER++].view = __SPIN_5__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN3, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin3Bkg);
	this.bkgd[COUNTER++].view = __SPIN_3__;

	var spinImg = this.create_spin ([["#d33a2a", DEG * 3], ["#d45ce5", DEG * 10],
		["#25c5d6", DEG * 30], ["#e2cf27", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin3Img);
	this.bkgd[COUNTER++].view = __SPIN_3__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN4, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin4Bkg);
	this.bkgd[COUNTER++].view = __SPIN_4__;

	var spinImg = this.create_spin ([["#25c5d6", DEG * 3], ["#e2cf27", DEG * 10],
		["#afac98", DEG * 30], ["#d88e23", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin4Img);
	this.bkgd[COUNTER++].view = __SPIN_4__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN5, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin5Bkg);
	this.bkgd[COUNTER++].view = __SPIN_2__;

	var spinImg = this.create_spin ([["#d45ce5", DEG * 3], ["#25c5d6", DEG * 10],
		["#e2cf27", DEG * 30], ["#afac98", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin5Img);
	this.bkgd[COUNTER++].view = __SPIN_2__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.SPIN6, __HIDE__,
		-/*IMAGES.SPIN1.width*/1542 / 4, 150, __TOP__ | __MIDDLE_X__, Mogs.Spin6Bkg);
	this.bkgd[COUNTER++].view = __SPIN_6__;

	var spinImg = this.create_spin ([["#d33a2a", DEG * 3], ["#d45ce5", DEG * 10],
		["#25c5d6", DEG * 30], ["#e2cf27", DEG * 57]]);
	this.bkgd[COUNTER] = gui_create_image_hd (spinImg, __HIDE__, -spinImg.width / 4, 178, __TOP__ | __MIDDLE_X__, Mogs.Spin6Img);
	this.bkgd[COUNTER++].view = __SPIN_6__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.CUSTOM_SKIN_BOX, __HIDE__,
		-/*IMAGES.CUSTOM_SKIN_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.CustomskinBox);
	this.bkgd[COUNTER++].view = __SKIN__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.ACCESSORIES_BOX, __HIDE__,
		-/*IMAGES.ACCESSORIES_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.AccessoriesBox);
	this.bkgd[COUNTER++].view = __ACCESSORY__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.BAG_BOX, __HIDE__,
		-/*IMAGES.BAG_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.BagBox);
	this.bkgd[COUNTER++].view = __BAG__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.BOOK_BOX, __HIDE__,
		-/*IMAGES.BOOK_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.BookBox);
	this.bkgd[COUNTER++].view = __BOOK__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.CRATE_BOX, __HIDE__,
		-/*IMAGES.CRATE_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.DeadBox);
	this.bkgd[COUNTER++].view = __CRATE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LOOT_BOX, __HIDE__,
		-/*IMAGES.LOOT_BOX.width*/1366 / 4, 100, __TOP__ | __MIDDLE_X__, Mogs.LootBox);
	this.bkgd[COUNTER++].view = __LOOT__;
	BAG_REMAIN_BOX = COUNTER++;
	this.bkgd[BAG_REMAIN_BOX] = gui_create_image_hd (IMAGES.BAG_REMAIN_BOX, __HIDE__,
		/*IMAGES.AVATAR_RESUME.width*/908 / 2 + 30, 0, __TOP__);
	SERVER_REMAIN_BOX = COUNTER++;
	this.bkgd[SERVER_REMAIN_BOX] = gui_create_image_hd (IMAGES.SERVER_REMAIN_BOX, __HIDE__,
		/*IMAGES.AVATAR_RESUME.width*/908 / 2 + /*IMAGES.BAG_REMAIN_BOX.width*/597 / 2 + 60, 0, __TOP__);

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LOCKED_CUSTOM_ALERT, __HIDE__,
		-/*IMAGES.LOCKED_CUSTOM_ALERT.width*/758 / 4, -5, __TOP__ | __MIDDLE_X__, Mogs.LockedCustAlert);
	this.bkgd[COUNTER++].view = __LOCKED_ACC__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LOCKED_SKIN_ALERT, __HIDE__,
		-/*IMAGES.LOCKED_SKIN_ALERT.width*/758 / 4, -5, __TOP__ | __MIDDLE_X__, Mogs.LockedSkinAlert);
	this.bkgd[COUNTER++].view = __LOCKED_SKIN__;
	LEVEL_GAUGE = COUNTER++;
	this.bkgd[LEVEL_GAUGE] = gui_create_image_hd (IMAGES.GAUGE, __DISPLAY__, 93, 30, __TOP__, Mogs.ProgressionGauge);

	/*
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.LEADERBOARD_SOON, __HIDE__,
		-IMAGES.LEADERBOARD_SOON.width / 4, 110, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __LEADERBOARD__;
	*/

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.CHANGE_NICKNAME1_BOX, __HIDE__,
		-/*IMAGES.CHANGE_NICKNAME1_BOX.width*/692 / 4, 110, __TOP__ | __MIDDLE_X__, Mogs.ProfileNicknameChangeBox);
	this.bkgd[COUNTER++].view = __CHANGE_NICKNAME1__;

	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.CHANGE_NICKNAME0_BOX, __HIDE__,
		-/*IMAGES.CHANGE_NICKNAME0_BOX.width*/692 / 4, 110, __TOP__ | __MIDDLE_X__, Mogs.ProfileNicknameChangeBox);
	this.bkgd[COUNTER++].view = __CHANGE_NICKNAME0__;

/*this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_QUEST_BOX, __HIDE__,
		-IMAGES.DAILY_QUEST_BOX.width / 4, 340, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_5_BREAD, __HIDE__,
		-192, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_10_BREAD, __HIDE__,
		-192, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_VALID, __HIDE__,
		-192, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_5_BREAD, __HIDE__,
		10, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_10_BREAD, __HIDE__,
		10, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_VALID, __HIDE__,
		10, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_5_BREAD, __HIDE__,
		213, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_10_BREAD, __HIDE__,
		213, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.DAILY_VALID, __HIDE__,
		213, 405, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __PROFILE__;
*/
/*
	this.bkgd[COUNTER] = gui_create_image_hd (IMAGES.ACCOUNT_MAINTENANCE, __HIDE__,
		-IMAGES.ACCOUNT_MAINTENANCE.width / 4, 110, __TOP__ | __MIDDLE_X__);
	this.bkgd[COUNTER++].view = __LOGIN__;
*/
	COUNTER = 0;
	this.buttons = [];

	// Buy Bread
	this.buttons[COUNTER++] = gui_create_button (50, 57, "",
		[IMAGES.BUY_BREAD_OUT, IMAGES.BUY_BREAD_IN, IMAGES.BUY_BREAD_CLICK],
		__HD__, __NO_BREATH__, function () {
			// if (_this.isUserLogged ()) select_subview (__BUY__);
			if (true) select_subview (__BUY__);
			else select_subview (__LOGIN__) }, 320, 0, __LEFT__, __DISPLAY__, Mogs.BuyBreadBtn);

	if (window.innerWidth < 1300 && !isMobile)
		this.buttons[COUNTER] = gui_create_button (202, 97, "",
			[IMAGES.PLAY_BUTTON_OUT, IMAGES.PLAY_BUTTON_IN, IMAGES.PLAY_BUTTON_CLICK],
			__HD__, __NO_BREATH__, this.play_game, 462, 235, __TOP__ | __LEFT__, __DISPLAY__);
	else
		this.buttons[COUNTER] = gui_create_button (202, 97, "",
			[IMAGES.PLAY_BUTTON_OUT, IMAGES.PLAY_BUTTON_IN, IMAGES.PLAY_BUTTON_CLICK],
			__HD__, __NO_BREATH__, this.play_game, 74, 235, __TOP__ | __MIDDLE_X__, __DISPLAY__, Mogs.PlayButton);
	this.buttons[COUNTER++].view = __GAME__;

	// Changelog
	if (window.innerWidth > 1300 || isMobile) {
		this.buttons[COUNTER] = gui_create_button (355, 168, "",
			[IMAGES.CHANGELOG_BUTTON_OUT, IMAGES.CHANGELOG_BUTTON_OUT, IMAGES.CHANGELOG_BUTTON_OUT],
			__HD__, __NO_BREATH__, function () {
				window.open ("./changelog.html", "_blank"); },
				-195, -115, __BOTTOM__ | __MIDDLE_X__, __DISPLAY__, Mogs.ChangelogButton);
		this.buttons[COUNTER++].view = __GAME__;

		//ALSO PLAY
		this.buttons[COUNTER] = gui_create_button (355, 168, "",
			[IMAGES.DEVASTIO_BUTTON_OUT, IMAGES.DEVASTIO_BUTTON_OUT, IMAGES.DEVASTIO_BUTTON_OUT],
			__HD__, __NO_BREATH__, function () {
				window.open ("https://devast.io", "_blank"); },
				20, -115, __BOTTOM__ | __MIDDLE_X__, __DISPLAY__, Mogs.DevastButton);
		this.buttons[COUNTER++].view = __GAME__;
	}

	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.DISCORD_BUTTON_OUT, IMAGES.DISCORD_BUTTON_IN, IMAGES.DISCORD_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://discord.gg/starveio", "_blank"); },
			330, 10, __RIGHT__, __DISPLAY__, Mogs.DiscordButton);
	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.REDDIT_BUTTON_OUT, IMAGES.REDDIT_BUTTON_IN, IMAGES.REDDIT_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://reddit.com/r/starveio", "_blank"); },
			280, 10, __RIGHT__, __DISPLAY__, Mogs.RedditButton);
	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.WIKI_BUTTON_OUT, IMAGES.WIKI_BUTTON_IN, IMAGES.WIKI_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://starveiopro.wikia.com/wiki/", "_blank"); },
			230, 10, __RIGHT__, __DISPLAY__, Mogs.WikiButton);
	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.FACEBOOK_BUTTON_OUT, IMAGES.FACEBOOK_BUTTON_IN, IMAGES.FACEBOOK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () {
			window.open ("https://www.facebook.com/pages/category/Video-Game/limaxio-571818073000979/", "_blank"); },
			155, 10, __RIGHT__, __DISPLAY__, Mogs.FacebookButton);
	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.TWITTER_BUTTON_OUT, IMAGES.TWITTER_BUTTON_IN, IMAGES.TWITTER_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://twitter.com/lapamauve", "_blank"); },
			105, 10, __RIGHT__, __DISPLAY__, Mogs.TwitterButton);
	this.buttons[COUNTER++] = gui_create_button (80, 80, "",
		[IMAGES.YOUTUBE_BUTTON_OUT, IMAGES.YOUTUBE_BUTTON_IN, IMAGES.YOUTUBE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://youtube.com/c/lapamauve", "_blank"); },
			55, 10, __RIGHT__, __DISPLAY__, Mogs.YoutubeButton);

	// Leaderboard
	LEADERBOARD_BUTTON = COUNTER++;
	this.buttons[LEADERBOARD_BUTTON] = gui_create_button (232, 142, "",
		[IMAGES.ICONS_BOTTOM_BG_BUTTON_OUT, IMAGES.ICONS_BOTTOM_BG_BUTTON_IN, IMAGES.ICONS_BOTTOM_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__LEADERBOARD__);
			getLeaderboard (ui.LEADERBOARD_ALL, ui.LEADERBOARD_TOTAL, ui.LEADERBOARD_SCORE, ui.LEADERBOARD_SEASON4)}, -5, 573, __LEFT__, __DISPLAY__,
		Mogs.MenuLeaderboardBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.LEADERBOARD_ICON, IMAGES.LEADERBOARD_ICON, IMAGES.LEADERBOARD_ICON],
		__HD__, __BREATH__, function () { select_subview (__LEADERBOARD__); }, -5, 566, __LEFT__, __DISPLAY__, Mogs.MenuLeaderboardBtnIcn);

	// Tutorial
	TUTORIAL_BUTTON = COUNTER++;
	this.buttons[TUTORIAL_BUTTON] = gui_create_button (236, 165, "",
		[IMAGES.ICONS_BG_BUTTON_OUT, IMAGES.ICONS_BG_BUTTON_IN, IMAGES.ICONS_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__TUTORIAL__) }, -5, 494, __LEFT__, __DISPLAY__, Mogs.MenuTutorialBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.TUTORIAL_ICON, IMAGES.TUTORIAL_ICON, IMAGES.TUTORIAL_ICON],
		__HD__, __BREATH__, function () { select_subview (__TUTORIAL__) }, -5, 494, __LEFT__, __DISPLAY__, Mogs.MenuTutorialBtnIcn);

	// Server access
	SERVER_BUTTON = COUNTER++;
	this.buttons[SERVER_BUTTON] = gui_create_button (236, 165, "",
		[IMAGES.ICONS_BG_BUTTON_OUT, IMAGES.ICONS_BG_BUTTON_IN, IMAGES.ICONS_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () {

			// if (_this.isUserLogged ()) {
			if (true) {
				if (ui.privateServerTime - Date.now () > 0)
					select_subview (__SERVER_ACCESS__);
				else
					select_subview (__SERVER_LOCATION__);
			} else select_subview (__LOGIN__);

		}, -5, 415, __LEFT__, __DISPLAY__, Mogs.MenuServerBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.SERVER_ACCESS_ICON, IMAGES.SERVER_ACCESS_ICON, IMAGES.SERVER_ACCESS_ICON],
		__HD__, __BREATH__, function () {

			// if (_this.isUserLogged ()) {
			if (true) {
				if (ui.privateServerTime - Date.now () > 0)
					select_subview (__SERVER_ACCESS__);
				else
					select_subview (__SERVER_LOCATION__);
			} else select_subview (__LOGIN__);

		}, -5, 415, __LEFT__, __DISPLAY__, Mogs.MenuServerBtnIcn);

	// Shop
	SHOP_BUTTON = COUNTER++;
	this.buttons[SHOP_BUTTON] = gui_create_button (236, 165, "",
		[IMAGES.ICONS_BG_BUTTON_OUT, IMAGES.ICONS_BG_BUTTON_IN, IMAGES.ICONS_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, -5, 336, __LEFT__, __DISPLAY__, Mogs.MenuShopBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.SHOP_ICON, IMAGES.SHOP_ICON, IMAGES.SHOP_ICON],
		__HD__, __BREATH__, function () { select_subview (__SHOP__) }, -5, 336, __LEFT__, __DISPLAY__, Mogs.MenuShopBtnIcn);

	// Cosmetic
	COSMETICS_BUTTON = COUNTER++;
	this.buttons[COSMETICS_BUTTON] = gui_create_button (236, 165, "",
		[IMAGES.ICONS_BG_BUTTON_OUT, IMAGES.ICONS_BG_BUTTON_IN, IMAGES.ICONS_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -5, 257, __LEFT__, __DISPLAY__, Mogs.MenuCosmeticsBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.SKINS_ICON, IMAGES.SKINS_ICON, IMAGES.SKINS_ICON],
		__HD__, __BREATH__, function () { select_subview (__COSMETICS__) }, -5, 257, __LEFT__, __DISPLAY__, Mogs.MenuCosmeticsBtnIcn);

	// Play game
	GAME_BUTTON = COUNTER++;
	this.buttons[GAME_BUTTON] = gui_create_button (236, 165, "",
		[IMAGES.ICONS_BG_BUTTON_OUT, IMAGES.ICONS_BG_BUTTON_IN, IMAGES.ICONS_BG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__GAME__) }, -5, 178, __LEFT__, __DISPLAY__, Mogs.MenuStartGameBtn);
	this.buttons[COUNTER++] = gui_create_button (236, 165, "",
		[IMAGES.START_ICON, IMAGES.START_ICON, IMAGES.START_ICON],
		__HD__, __BREATH__, function () { select_subview (__GAME__) }, -5, 178, __LEFT__, __DISPLAY__, Mogs.MenuStartGameBtnIcn);

	// Login
	LOGIN_BUTTON = COUNTER++;
	this.LOGIN_BUTTON = LOGIN_BUTTON;
	this.buttons[LOGIN_BUTTON] = gui_create_button (324, 222, "",
		[IMAGES.LOGIN_BUTTON_OUT, IMAGES.LOGIN_BUTTON_IN, IMAGES.LOGIN_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__LOGIN__) }, 0, 70, __LEFT__, __DISPLAY__, Mogs.LoginButton);

	// Profile
	PROFILE_BUTTON = COUNTER++;
	PROFILE_BUTTON_2 = COUNTER++;
	this.PROFILE_BUTTON = PROFILE_BUTTON;
	this.PROFILE_BUTTON_2 = PROFILE_BUTTON_2;
	this.buttons[PROFILE_BUTTON] = gui_create_button (324, 222, "",
		[IMAGES.PROFILE_BUTTON_OUT, IMAGES.PROFILE_BUTTON_IN, IMAGES.PROFILE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__PROFILE__); init_profile (-1); }, 0, 70, __LEFT__, __HIDE__, Mogs.ProfileMenuBtn);
	this.buttons[PROFILE_BUTTON_2] = gui_create_button (324, 222, "",
		[IMAGES.PROFILE_ICON, IMAGES.PROFILE_ICON, IMAGES.PROFILE_ICON],
		__HD__, __BREATH__, function () { select_subview (__PROFILE__); init_profile (-1); }, 0, 70, __LEFT__, __HIDE__,
		Mogs.ProfileMenuIcon);

	// Do not display mode selection if the player use private server to play the game
	if (client.privateServer === 0) {

		var NORMAL_MODE = COUNTER++;
		if (window.innerWidth < 1300 && !isMobile)
		this.buttons[NORMAL_MODE] = gui_create_button (266, 176, "",
			[IMAGES.NORMAL_MODE_OUT, IMAGES.NORMAL_MODE_IN, IMAGES.NORMAL_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_PVP)
			}, 150, 300, __LEFT__ | __TOP__, __DISPLAY__);
		else
		this.buttons[NORMAL_MODE] = gui_create_button (266, 176, "",
			[IMAGES.NORMAL_MODE_OUT, IMAGES.NORMAL_MODE_IN, IMAGES.NORMAL_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_PVP)
			}, -340, 100, __MIDDLE_X__ | __TOP__, __DISPLAY__, Mogs.NormalModeButton);
		this.buttons[NORMAL_MODE].view = __GAME__;
		this.buttons[NORMAL_MODE].hint = 0;

		var FOREST_MODE = COUNTER++;
		if (window.innerWidth < 1300 && !isMobile)
		this.buttons[FOREST_MODE] = gui_create_button (266, 176, "",
			[IMAGES.FOREST_MODE_OUT, IMAGES.FOREST_MODE_IN, IMAGES.FOREST_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_LEGACY)
			}, 150, 400, __LEFT__ | __TOP__, __DISPLAY__);
		else
		this.buttons[FOREST_MODE] = gui_create_button (266, 176, "",
			[IMAGES.FOREST_MODE_OUT, IMAGES.FOREST_MODE_IN, IMAGES.FOREST_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_LEGACY)
			}, -340, 200, __MIDDLE_X__ | __TOP__, __DISPLAY__, Mogs.ForestModeButton);
		this.buttons[FOREST_MODE].view = __GAME__;
		this.buttons[FOREST_MODE].hint = 0;

		var MODE_COMMUNITY = COUNTER++;
		if (window.innerWidth < 1300 && !isMobile)
		this.buttons[MODE_COMMUNITY] = gui_create_button (266, 176, "",
			[IMAGES.MODE_COMMUNITY_OUT, IMAGES.MODE_COMMUNITY_IN, IMAGES.MODE_COMMUNITY_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_COMMUNITY)
			}, 450, 300, __LEFT__ | __TOP__, __DISPLAY__);
		else
		this.buttons[MODE_COMMUNITY] = gui_create_button (266, 176, "",
			[IMAGES.MODE_COMMUNITY_OUT, IMAGES.MODE_COMMUNITY_IN, IMAGES.MODE_COMMUNITY_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_COMMUNITY)
			}, -340, 300, __MIDDLE_X__ | __TOP__, __DISPLAY__, Mogs.CommunityModeButton);
		this.buttons[MODE_COMMUNITY].view = __GAME__;
		this.buttons[MODE_COMMUNITY].hint = 0;

		var ZOMBIE_MODE = COUNTER++;
		if (window.innerWidth < 1300 && !isMobile)
		this.buttons[ZOMBIE_MODE] = gui_create_button (266, 176, "",
			[IMAGES.ZOMBIE_MODE_OUT, IMAGES.ZOMBIE_MODE_IN, IMAGES.ZOMBIE_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_ZOMBIES)
			}, 300, 300, __LEFT__ | __TOP__, __DISPLAY__);
		else
		this.buttons[ZOMBIE_MODE] = gui_create_button (266, 176, "",
			[IMAGES.ZOMBIE_MODE_OUT, IMAGES.ZOMBIE_MODE_IN, IMAGES.ZOMBIE_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_ZOMBIES)
			}, 204, 100, __MIDDLE_X__ | __TOP__, __DISPLAY__, Mogs.ZombieModeButton);
		this.buttons[ZOMBIE_MODE].view = __GAME__;
		this.buttons[ZOMBIE_MODE].hint = 0;

		var VAMPIRE_MODE = COUNTER++;
		if (window.innerWidth < 1300 && !isMobile)
		this.buttons[VAMPIRE_MODE] = gui_create_button (266, 176, "",
			[IMAGES.VAMPIRE_MODE_OUT, IMAGES.VAMPIRE_MODE_IN, IMAGES.VAMPIRE_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_VAMPIRES)
			}, 300, 400, __LEFT__ | __TOP__, __DISPLAY__);
		else
		this.buttons[VAMPIRE_MODE] = gui_create_button (266, 176, "",
			[IMAGES.VAMPIRE_MODE_OUT, IMAGES.VAMPIRE_MODE_IN, IMAGES.VAMPIRE_MODE_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_VAMPIRES)
			}, 204, 200, __MIDDLE_X__ | __TOP__, __DISPLAY__, Mogs.VampireModeButton);
		this.buttons[VAMPIRE_MODE].view = __GAME__;
		this.buttons[VAMPIRE_MODE].hint = 0;

		// Experimental
		var MODE_EXPERIMENTAL = COUNTER++;
		this.buttons[MODE_EXPERIMENTAL] = gui_create_button (266, 176, "",
			[IMAGES.MODE_EXPERIMENTAL_OUT, IMAGES.MODE_EXPERIMENTAL_IN, IMAGES.MODE_EXPERIMENTAL_CLICK],
			__HD__, __NO_BREATH__, function () {
				client.select_gamemode (WORLD.MODE_EXPERIMENTAL)
			}, (window.innerWidth < 1300) ? 450 : 204, (window.innerWidth < 1300) ?
				400 : 300, ((window.innerWidth < 1300 && !isMobile) ? __LEFT__ : __MIDDLE_X__) | __TOP__, __DISPLAY__, Mogs.ExperimentalModeButton);
		this.buttons[MODE_EXPERIMENTAL].view = __GAME__;
		this.buttons[MODE_EXPERIMENTAL].hint = 0;
	}

	//Modify Profile
	this.buttons[COUNTER] = gui_create_button (87, 78, "",
		[IMAGES.MODIFY_NAME_OUT, IMAGES.MODIFY_NAME_IN, IMAGES.MODIFY_NAME_CLICK],
		__HD__, __NO_BREATH__, function () { ui.generate_new_nickname ();
			if (ui.firstName === 0)
				select_subview (__CHANGE_NICKNAME0__)
			else
				select_subview (__CHANGE_NICKNAME1__)
		}, 127, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ProfileNameChangeBtn);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Log out Profile
	this.buttons[COUNTER] = gui_create_button (87, 78, "",
		[IMAGES.LOGOUT_OUT, IMAGES.LOGOUT_IN, IMAGES.LOGOUT_CLICK],
		__HD__, __NO_BREATH__, function () { logout (); }, 255, 110, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileLogoutBtn);
	this.buttons[COUNTER++].view = __PROFILE__;

	// Close Box
	this.buttons[COUNTER] = gui_create_button (58, 64, "",
		[IMAGES.CLOSE_BUTTON_OUT, IMAGES.CLOSE_BUTTON_IN, IMAGES.CLOSE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__GAME__) }, 189, 118, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.AccountBoxCloseBtn);
	this.buttons[COUNTER++].view = __LOGIN__;

	// Login Google
	this.buttons[COUNTER] = gui_create_button (497, 72, "",
		[IMAGES.LOGIN_GOOGLE_OUT, IMAGES.LOGIN_GOOGLE_IN, IMAGES.LOGIN_GOOGLE_CLICK],
		__HD__, __NO_BREATH__, function () { loginWithGoogle () }, -130, 390, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.AccountBoxGoogle);
	this.buttons[COUNTER++].view = __LOGIN__;

	// Login Facebook
	this.buttons[COUNTER] = gui_create_button (497, 72, "",
		[IMAGES.LOGIN_FACEBOOK_OUT, IMAGES.LOGIN_FACEBOOK_IN, IMAGES.LOGIN_FACEBOOK_CLICK],
		__HD__, __NO_BREATH__,  function () { logWithFacebook () }, -130, 430, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.AccountBoxFacebook);
	this.buttons[COUNTER++].view = __LOGIN__;

	__LEVEL_FACTOR__ = 20000;
	function xp_formula (score) {

		var lvl = ui.level_formula (score);
		var previous_exp = lvl * lvl * __LEVEL_FACTOR__;
		var next_exp = (lvl + 1) * (lvl + 1) * __LEVEL_FACTOR__ - previous_exp;
		score -= previous_exp;

		return score / next_exp;
	};
	this.xp_formula = xp_formula;

	function level_formula (score) {

		return Math.floor (Math.sqrt (score / __LEVEL_FACTOR__));
	};
	this.level_formula = level_formula;

	this.update_score = function (score) {

		ui.lvl = ui.level_formula (score);
		ui.xp_dest = ui.xp_formula (score);
		ui.xp = 0;
		ui.score = score;
	};

	function init_profile (id, season) {

		// Change season stats
		if (season !== undefined) {

			ui.profile_season = season;

			var lastSeason = ui.seasons[season];
			ui.score = lastSeason["score"];
			ui.kill = lastSeason["kill"];
			ui.death = lastSeason["death"];
			ui.time = lastSeason["time"];
			ui.bestScore = lastSeason["bestScore"];
			ui.bestKill = lastSeason["bestKill"];
			ui.bestTime = lastSeason["bestTime"];
			ui.scoreTotal = lastSeason["scoreTotal"];
		}

		// Reset id with the previous value if not defined
		if (id === undefined)
			id = ui.current_mode_score;

		ui.current_mode_score = id;

		if (id >= 0) {

			document.getElementById ("stats_box_time").innerHTML = ui.bestTime[id];
			document.getElementById ("stats_box_kill").innerHTML = ui.bestKill[id];
			document.getElementById ("stats_box_score").innerHTML = ui.bestScore[id];
		} else {

			var kill = 0;
			for (var i = 0 ; i < ui.kill.length ; i++)
				kill += ui.kill[i];
			var time = 0;
			for (var i = 0 ; i < ui.time.length ; i++)
				time += ui.time[i];

			document.getElementById ("stats_box_time").innerHTML = time;
			document.getElementById ("stats_box_kill").innerHTML = kill;
			document.getElementById ("stats_box_score").innerHTML = ui.score;
		}

	};

	this.login_restore_data = function (data) {

		ui.buttons[ui.LOGIN_BUTTON].info.active = 0;
		ui.buttons[ui.PROFILE_BUTTON].info.active = 1;
		ui.buttons[ui.PROFILE_BUTTON_2].info.active = 1;

		init_skin ();

		if (data["name"].indexOf ("Starver#") === -1)
			document.getElementById ("account_nickname_input").value =
				window["decodeURIComponent"](window["escape"](window["atob"] (data["name"])));
		else
			document.getElementById ("account_nickname_input").value = data["name"];

		ui.bread = data["bread"];

		var seasons = data["seasons"];
		var lastSeason = seasons[seasons.length - 1];

		ui.seasons = seasons;

		_this.update_score (lastSeason["score"]);
		ui.score = lastSeason["score"];
		ui.kill = lastSeason["kill"];
		ui.death = lastSeason["death"];
		ui.time = lastSeason["time"];
		ui.bestScore = lastSeason["bestScore"];
		ui.bestKill = lastSeason["bestKill"];
		ui.bestTime = lastSeason["bestTime"];
		ui.scoreTotal = lastSeason["scoreTotal"];

		ui.firstName = data["firstName"];

		document.getElementById ("serverAddressInput").value = "https://starve.io/?server=" + data["privateServer"];

		if (ui.firstName === undefined)
			ui.firstName = 0;

		ui.privateServerTime = Date.now () + data["privateServerTime"];
		if (Number (data["privateServerTime"]) > 0)
			ui.privateServerTime = Date.now () + Number (data["privateServerTime"]);

		ui.kit = Date.now () + data["kit"];
		if (Number (data["kit"]) > 0)
			ui.kit = Date.now () + Number (data["kit"]);

		var cosmetic = COSMETICS.SKIN;
		for (var i = 0 ; i < data["skins"].length ; i++) { var v = data["skins"][i]; if (v > 0) {
				for (var j = 0 ; j < cosmetic.length ; j++) { if (cosmetic[j].id === i) _this.unlock.skin[j] = 1;
				} } }

		var cosmetic = COSMETICS.ACCESSORY;
		for (var i = 0 ; i < data["accessories"].length ; i++) { var v = data["accessories"][i]; if (v > 0) {
				for (var j = 0 ; j < cosmetic.length ; j++) { if (cosmetic[j].id === i)
						_this.unlock.accessory[j] = 1; } } }

		var cosmetic = COSMETICS.BOOK;
		for (var i = 0 ; i < data["books"].length ; i++) { var v = data["books"][i]; if (v > 0) {
				for (var j = 0 ; j < cosmetic.length ; j++) { if (cosmetic[j].id === i) _this.unlock.book[j] = 1;
				} } }

		var cosmetic = COSMETICS.BAG;
		for (var i = 0 ; i < data["bags"].length ; i++) { var v = data["bags"][i]; if (v > 0) {
				for (var j = 0 ; j < cosmetic.length ; j++) { if (cosmetic[j].id === i) _this.unlock.bag[j] = 1;
				} } }

		var cosmetic = COSMETICS.CRATE;
		for (var i = 0 ; i < data["crates"].length ; i++) { var v = data["crates"][i]; if (v > 0) {
				for (var j = 0 ; j < cosmetic.length ; j++) { if (cosmetic[j].id === i) {
						_this.unlock.crate[j] = 1; _this.unlock.dead[j] = 1; } } } }
	};

	this.login_after = function () {

		window.onUserLogin = function () {

			select_subview (__GAME__)
			getUserDetails (_this.login_restore_data);
		};

		// If the user logged in during the loading time
		if (userAlreadyLoggedIn === 1)
			window.onUserLogin ();
	}

	window.onUserLogout = function () {

		ui.buttons[ui.LOGIN_BUTTON].info.active = 1;
		ui.buttons[ui.PROFILE_BUTTON].info.active = 0;
		ui.buttons[ui.PROFILE_BUTTON_2].info.active = 0;
		select_subview (__GAME__)
	};

	this.isUserLogged = function () {

		return ui.buttons[ui.PROFILE_BUTTON].info.active;
	}

	// Get More Golden Bread Shop
	this.buttons[COUNTER] = gui_create_button (461, 105, "",
		[IMAGES.GET_MORE_BUTTON_OUT, IMAGES.GET_MORE_BUTTON_IN, IMAGES.GET_MORE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) select_subview (__BUY__)
			else select_subview (__LOGIN__) }, -100, 80, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopGetMoreBtn);
	this.buttons[COUNTER++].view = __SHOP__;

	// Tuto Wiki
	this.buttons[COUNTER] = gui_create_button (157, 158, "",
		[IMAGES.TUTO_WIKI_OUT, IMAGES.TUTO_WIKI_IN, IMAGES.TUTO_WIKI_CLICK],
		__HD__, __NO_BREATH__, function () { window.open ("https://starveiopro.wikia.com/wiki/", "_blank"); },
		-35, 125, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.TutorialWikiBtn);
	this.buttons[COUNTER++].view = __TUTORIAL__;

	// Tuto Previous
	this.buttons[COUNTER] = gui_create_button (66, 73, "",
		[IMAGES.TUTO_PREVIOUS_OUT, IMAGES.TUTO_PREVIOUS_IN, IMAGES.TUTO_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -68, 340, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.TutorialPrevBtn);
	this.buttons[COUNTER++].view = __TUTORIAL__;

	// Tuto Next
	this.buttons[COUNTER] = gui_create_button (66, 73, "",
		[IMAGES.TUTO_NEXT_OUT, IMAGES.TUTO_NEXT_IN, IMAGES.TUTO_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, -30, 340, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.TutorialNextBtn);
	this.buttons[COUNTER++].view = __TUTORIAL__;

	// Level leaderboard
	this.buttons[COUNTER] = gui_create_button (97, 66, "",
		[IMAGES.LVL_LEADERBOARD_OUT, IMAGES.LVL_LEADERBOARD_IN, IMAGES.LVL_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, undefined, -14, 151, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardLvlBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Kill leaderboard
	this.LEADERBOARD_KILL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (135, 66, "",
		[IMAGES.KILL_LEADERBOARD_OUT, IMAGES.KILL_LEADERBOARD_IN, IMAGES.KILL_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, ui.LEADERBOARD_KILL) }, 37.5, 151, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardKillsBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Time leaderboard
	this.LEADERBOARD_TIME = COUNTER;
	this.buttons[COUNTER] = gui_create_button (160, 66, "",
		[IMAGES.TIME_LEADERBOARD_OUT, IMAGES.TIME_LEADERBOARD_IN, IMAGES.TIME_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, ui.LEADERBOARD_TIME) }, 107.5, 151, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardTimeBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Score leaderboard
	this.LEADERBOARD_SCORE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (207, 66, "",
		[IMAGES.SCORE_LEADERBOARD_OUT, IMAGES.SCORE_LEADERBOARD_IN, IMAGES.SCORE_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, ui.LEADERBOARD_SCORE) }, 190.5, 151, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardScoreBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Today leaderboard
	this.LEADERBOARD_TODAY = COUNTER;
	this.buttons[COUNTER] = gui_create_button (144, 66, "",
		[IMAGES.TODAY_LEADERBOARD_OUT, IMAGES.TODAY_LEADERBOARD_IN, IMAGES.TODAY_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (ui.LEADERBOARD_TODAY); }, 103.5, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardTodayBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Week leaderboard
	this.LEADERBOARD_WEEK = COUNTER;
	this.buttons[COUNTER] = gui_create_button (124, 66, "",
		[IMAGES.WEEK_LEADERBOARD_OUT, IMAGES.WEEK_LEADERBOARD_IN, IMAGES.WEEK_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (ui.LEADERBOARD_WEEK); }, 177.5, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardWeekBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// All leaderboard
	this.LEADERBOARD_ALL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (104, 66, "",
		[IMAGES.ALL_LEADERBOARD_OUT, IMAGES.ALL_LEADERBOARD_IN, IMAGES.ALL_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (ui.LEADERBOARD_ALL); }, 242, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardAllBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Season1 leaderboard
	this.LEADERBOARD_SEASON1 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (183, 66, "",
		[IMAGES.SEASON1_LEADERBOARD_OUT, IMAGES.SEASON1_LEADERBOARD_IN, IMAGES.SEASON1_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, undefined, ui.LEADERBOARD_SEASON1) }, -290, 521, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LeaderboardSeason1);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Season2 leaderboard
	this.LEADERBOARD_SEASON2 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (183, 66, "",
		[IMAGES.SEASON2_LEADERBOARD_OUT, IMAGES.SEASON2_LEADERBOARD_IN, IMAGES.SEASON2_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, undefined, ui.LEADERBOARD_SEASON2) }, -185, 521, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LeaderboardSeason2);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Season3 leaderboard
	this.LEADERBOARD_SEASON3 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (183, 66, "",
		[IMAGES.SEASON3_LEADERBOARD_OUT, IMAGES.SEASON3_LEADERBOARD_IN, IMAGES.SEASON3_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, undefined, ui.LEADERBOARD_SEASON3) }, -80, 521, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LeaderboardSeason3);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Season4 leaderboard
	this.LEADERBOARD_SEASON4 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (183, 66, "",
		[IMAGES.SEASON4_LEADERBOARD_OUT, IMAGES.SEASON4_LEADERBOARD_IN, IMAGES.SEASON4_LEADERBOARD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, undefined, undefined, ui.LEADERBOARD_SEASON4) }, 25, 521, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LeaderboardSeason4);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	// Currency lot 1
	this.buttons[COUNTER] = gui_create_button (232, 352, "",
		[IMAGES.CURRENCY1_OUT, IMAGES.CURRENCY1_IN, IMAGES.CURRENCY1_CLICK],
		__HD__, __NO_BREATH__, function () {
		if (!_this.isUserLogged()) {
			select_subview (__LOGIN__);
			return;
		}
		purchase('300_bread', function () {
			buyBread('300_bread');
		}, function () {console.log('error')})
	}, -330, 135, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCurrency1);
	this.buttons[COUNTER++].view = __BUY__;

	// Currency lot 2
	this.buttons[COUNTER] = gui_create_button (232, 352, "",
		[IMAGES.CURRENCY2_OUT, IMAGES.CURRENCY2_IN, IMAGES.CURRENCY2_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
		purchase('600_bread', function () {
			buyBread('600_bread');
		}, function () {console.log('error')})
		}, -195, 135, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCurrency2);
	this.buttons[COUNTER++].view = __BUY__;

	// Currency lot 3
	this.buttons[COUNTER] = gui_create_button (243, 374, "",
		[IMAGES.CURRENCY3_OUT, IMAGES.CURRENCY3_IN, IMAGES.CURRENCY3_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
		purchase('2600_bread', function () {
			buyBread('2600_bread');
		}, function () {console.log('error')})
	}, -60, 130, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCurrency3);
	this.buttons[COUNTER++].view = __BUY__;

	// Currency lot 4
	this.buttons[COUNTER] = gui_create_button (232, 352, "",
		[IMAGES.CURRENCY4_OUT, IMAGES.CURRENCY4_IN, IMAGES.CURRENCY4_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('7000_bread', function () {
				buyBread('7000_bread');
			}, function () {console.log('error')})
		}, 78, 135, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCurrency4);
	this.buttons[COUNTER++].view = __BUY__;

	// Currency lot 5
	this.buttons[COUNTER] = gui_create_button (243, 374, "",
		[IMAGES.CURRENCY5_OUT, IMAGES.CURRENCY5_IN, IMAGES.CURRENCY5_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('20000_bread', function () {
				buyBread('20000_bread');
			}, function () {console.log('error')})
		}, 213, 130, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCurrency5);
	this.buttons[COUNTER++].view = __BUY__;

	// Close Box
	this.buttons[COUNTER] = gui_create_button (58, 64, "",
		[IMAGES.CLOSE_BUTTON_OUT, IMAGES.CLOSE_BUTTON_IN, IMAGES.CLOSE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__GAME__) }, 300, 88, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.BuyBreadCloseBtn);
	this.buttons[COUNTER++].view = __BUY__;

	/// Skins buttons interface
	//SKin Button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.SKIN_BUTTON_OUT, IMAGES.SKIN_BUTTON_IN, IMAGES.SKIN_BUTTON_CLICK],
		__HD__, __NO_BREATH__,  function () { select_subview (__SKIN__); skinSelector.initSelector (); }, -315, 185, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinSkinBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//Accessory button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.ACCESSORY_BUTTON_OUT, IMAGES.ACCESSORY_BUTTON_IN, IMAGES.ACCESSORY_BUTTON_CLICK],
		__HD__, __NO_BREATH__,  function () { select_subview (__ACCESSORY__); accessorySelector.initSelector (); }, -315, 321, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.SkinAccessoryBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//Bag button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.BAG_BUTTON_OUT, IMAGES.BAG_BUTTON_IN, IMAGES.BAG_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__BAG__); bagSelector.initSelector (); }, 153, 185, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.SkinBagBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//Book button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.BOOK_BUTTON_OUT, IMAGES.BOOK_BUTTON_IN, IMAGES.BOOK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__BOOK__); bookSelector.initSelector (); }, 153, 321, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBookBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//Dead Box button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.CRATE_BUTTON_OUT, IMAGES.CRATE_BUTTON_IN, IMAGES.CRATE_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__CRATE__); deadSelector.initSelector (); }, 153, 463, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinDeadboxBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//Dead Box button
	this.buttons[COUNTER] = gui_create_button (323, 112, "",
		[IMAGES.LOOT_BUTTON_OUT, IMAGES.LOOT_BUTTON_IN, IMAGES.LOOT_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__LOOT__); crateSelector.initSelector (); }, -315, 463, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinLootboxBtn);
	this.buttons[COUNTER++].view = __COSMETICS__;

	//SEASON 4
	this.buttons[COUNTER] = gui_create_button (327, 117, "",
		[IMAGES.SEASON_4, IMAGES.SEASON_4_IN, IMAGES.SEASON_4_OUT],
		__HD__, __NO_BREATH__,  function () { select_subview (__SEASON4__) }, 155, 70, __LEFT__ , __DISPLAY__, Mogs.Season4Btn);
	this.buttons[COUNTER++].view = __GAME__;

	///Alert Locked Skin
	// SHOP button
	this.buttons[COUNTER] = gui_create_button (130, 129, "",
		[IMAGES.SHOP_BUTTON_OUT, IMAGES.SHOP_BUTTON_IN, IMAGES.SHOP_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { update_subview (__LOCKED_SKIN__, __HIDE__, "none"); select_subview (__SHOP__); }, 10, 40, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LockedSkinBtn);
	this.buttons[COUNTER++].view = __LOCKED_SKIN__;

	///Alert Locked Custom
	// SHOP button
	this.buttons[COUNTER] = gui_create_button (130, 129, "",
		[IMAGES.SHOP_BUTTON_OUT, IMAGES.SHOP_BUTTON_IN, IMAGES.SHOP_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { update_subview (__LOCKED_ACC__, __HIDE__, "none"); select_subview (__SHOP__) }, 10, 40, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.LockedCustBtn);
	this.buttons[COUNTER++].view = __LOCKED_ACC__;

	///SHOP Private server
	this.buttons[COUNTER] = gui_create_button (390, 278, "",
		[IMAGES.BUY_PRIVATE_SERVER_OUT, IMAGES.BUY_PRIVATE_SERVER_IN, IMAGES.BUY_PRIVATE_SERVER_CLICK],
		__HD__, __NO_BREATH__, function () {
			// if (_this.isUserLogged ()) select_subview (__SERVER_LOCATION__);
			if (true) select_subview (__SERVER_LOCATION__);
			else select_subview (__LOGIN__);
		}, -385, 388, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopBuyPrivateServerBtn);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 200, 140, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationBackBtn);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.ATLANTA_OUT, IMAGES.ATLANTA_IN, IMAGES.ATLANTA_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Atlanta"); }, -265, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationAtlanta);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.DALLAS_OUT, IMAGES.DALLAS_IN, IMAGES.DALLAS_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Dallas"); }, -130, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationDallas);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.FREMONT_OUT, IMAGES.FREMONT_IN, IMAGES.FREMONT_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Fremont"); }, 5, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationFremont);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.NEWARK_OUT, IMAGES.NEWARK_IN, IMAGES.NEWARK_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Newark"); }, 140, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationNewark);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.LONDON_OUT, IMAGES.LONDON_IN, IMAGES.LONDON_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("London"); }, -265, 365, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationLondon);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.FRANKFURT_OUT, IMAGES.FRANKFURT_IN, IMAGES.FRANKFURT_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Frankfurt"); }, -130, 365, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationFrankfurt);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.SINGAPORE_OUT, IMAGES.SINGAPORE_IN, IMAGES.SINGAPORE_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Singapore"); }, 5, 365, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationSingapore);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.TOKYO_OUT, IMAGES.TOKYO_IN, IMAGES.TOKYO_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Tokyo"); }, 140, 365, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationTokyo);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.TORONTO_OUT, IMAGES.TORONTO_IN, IMAGES.TORONTO_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Toronto"); }, -265, 430, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationToronto);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (253, 110, "",
		[IMAGES.MUMBAI_OUT, IMAGES.MUMBAI_IN, IMAGES.MUMBAI_CLICK],
		__HD__, __NO_BREATH__, function () { regionPreference ("Mumbai"); }, -130, 430, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LocationMumbai);
	this.buttons[COUNTER++].view = __SERVER_LOCATION__;

	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SERVER_LOCATION__) }, 230, 140, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.DurationBackBtn);
	this.buttons[COUNTER++].view = __SERVER_DURATION__;

	this.buttons[COUNTER] = gui_create_button (230, 352, "",
		[IMAGES.DAYS3_OUT, IMAGES.DAYS3_IN, IMAGES.DAYS3_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('3_server', function () {
				buyServer('3_server');
			}, function () {console.log('error')})
		}, -280, 240, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Duration3Days);
	this.buttons[COUNTER++].view = __SERVER_DURATION__;

	this.buttons[COUNTER] = gui_create_button (230, 352, "",
		[IMAGES.DAYS7_OUT, IMAGES.DAYS7_IN, IMAGES.DAYS7_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('7_server', function () {
				buyServer('7_server');
			}, function () {console.log('error')})
		}, -130, 240, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Duration7Days);
	this.buttons[COUNTER++].view = __SERVER_DURATION__;

	this.buttons[COUNTER] = gui_create_button (230, 352, "",
		[IMAGES.DAYS30_OUT, IMAGES.DAYS30_IN, IMAGES.DAYS30_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('30_server', function () {
				buyServer('30_server');
			}, function () {console.log('error')})
		}, 20, 240, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Duration30Days);
	this.buttons[COUNTER++].view = __SERVER_DURATION__;

	this.buttons[COUNTER] = gui_create_button (230, 352, "",
		[IMAGES.DAYS90_OUT, IMAGES.DAYS90_IN, IMAGES.DAYS90_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (!_this.isUserLogged()) {
				select_subview (__LOGIN__);
				return;
			}
			purchase('90_server', function () {
				buyServer('90_server');
			}, function () {console.log('error')})
		}, 170, 240, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Duration90Days);
	this.buttons[COUNTER++].view = __SERVER_DURATION__;

	this.buttons[COUNTER] = gui_create_button (105, 119, "",
		[IMAGES.COPY_PASTE_OUT, IMAGES.COPY_PASTE_IN, IMAGES.COPY_PASTE_CLICK],
		__HD__, __NO_BREATH__, function () {
			document.getElementById ("serverAddressInput")["select"] ();
			document["execCommand"]('copy');
		}, 170, 310, __MIDDLE_X__ | __TOP__, __HIDE__);
	this.buttons[COUNTER++].view = __SERVER_ACCESS__;

	this.buttons[COUNTER] = gui_create_button (105, 119, "",
		[IMAGES.RESTART_OUT, IMAGES.RESTART_IN, IMAGES.RESTART_CLICK],
		__HD__, __NO_BREATH__, function () { rebootServer (); }, 235, 310, __MIDDLE_X__ | __TOP__, __HIDE__);
	this.buttons[COUNTER++].view = __SERVER_ACCESS__;

	this.buttons[COUNTER] = gui_create_button (204, 115, "",
		[IMAGES.GUIDE_OUT, IMAGES.GUIDE_IN, IMAGES.GUIDE_CLICK],
		__HD__, __NO_BREATH__, function () {
			window.open ("./commands.html", "_blank"); }, -265, 490, __MIDDLE_X__ | __TOP__, __HIDE__);
	this.buttons[COUNTER++].view = __SERVER_ACCESS__;
	/// SHOP prices
	// Price1 button
	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE5_OUT, IMAGES.PRICE5_IN, IMAGES.PRICE5_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_1__) }, -210, 170, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn1);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE1_OUT, IMAGES.PRICE1_IN, IMAGES.PRICE1_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_4__) }, 70, 170, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn2);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE2_OUT, IMAGES.PRICE2_IN, IMAGES.PRICE2_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_2__) }, 70, 204, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn3);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE3_OUT, IMAGES.PRICE3_IN, IMAGES.PRICE3_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_5__) }, -210, 204, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn4);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE3_OUT, IMAGES.PRICE3_IN, IMAGES.PRICE3_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_6__) }, 70, 238, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn5);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE3_OUT, IMAGES.PRICE3_IN, IMAGES.PRICE3_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buyKit (0, 300);
			else select_subview (__LOGIN__); }, 307, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn6);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE4_OUT, IMAGES.PRICE4_IN, IMAGES.PRICE4_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SPIN_3__) }, -210, 238, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn7);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (145, 69, "",
		[IMAGES.PRICE4_OUT, IMAGES.PRICE4_IN, IMAGES.PRICE4_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buyKit (1, 600);
			else select_subview (__LOGIN__); }, 307, 239, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopPriceBtn8);
	this.buttons[COUNTER++].view = __SHOP__;

	this.buttons[COUNTER] = gui_create_button (192, 101, "",
		[IMAGES.YES_BUTTON_OUT, IMAGES.YES_BUTTON_IN, IMAGES.YES_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { buyNameChanger (); }, -100, 250, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileNicknameBtnYes);
	this.buttons[COUNTER++].view = __CHANGE_NICKNAME0__;

	this.buttons[COUNTER] = gui_create_button (192, 104, "",
		[IMAGES.YES_300_BUTTON_OUT, IMAGES.YES_300_BUTTON_IN, IMAGES.YES_300_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { buyNameChanger (); }, -100, 239, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileNicknameBtnYes);
	this.buttons[COUNTER++].view = __CHANGE_NICKNAME1__;

	this.buttons[COUNTER] = gui_create_button (192, 101, "",
		[IMAGES.NO_BUTTON_OUT, IMAGES.NO_BUTTON_IN, IMAGES.NO_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__PROFILE__); }, 10, 250, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileNicknameBtnNo);
	this.buttons[COUNTER++].view = __CHANGE_NICKNAME0__;

	this.buttons[COUNTER] = gui_create_button (192, 104, "",
		[IMAGES.NO_THANKS_BUTTON_OUT, IMAGES.NO_THANKS_BUTTON_IN, IMAGES.NO_THANKS_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__PROFILE__); }, 10, 239, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileNicknameBtnNo);
	this.buttons[COUNTER++].view = __CHANGE_NICKNAME1__;

	///Custom Skin Interface
	RARITY_BUTTON = [];
	RARITY_BUTTON[RARITY.FREE] = [IMAGES.FREE_ITEM_OUT, IMAGES.FREE_ITEM_IN, IMAGES.FREE_ITEM_CLICK];
	RARITY_BUTTON[RARITY.WOOD] = [IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK];
	RARITY_BUTTON[RARITY.STONE] = [IMAGES.STONE_ITEM_OUT, IMAGES.STONE_ITEM_IN, IMAGES.STONE_ITEM_CLICK];
	RARITY_BUTTON[RARITY.GOLD] = [IMAGES.GOLD_ITEM_OUT, IMAGES.GOLD_ITEM_IN, IMAGES.GOLD_ITEM_CLICK];
	RARITY_BUTTON[RARITY.DIAMOND] = [IMAGES.DIAMOND_ITEM_OUT, IMAGES.DIAMOND_ITEM_IN, IMAGES.DIAMOND_ITEM_CLICK];
	RARITY_BUTTON[RARITY.AMETHYST] = [IMAGES.AMETHYST_ITEM_OUT, IMAGES.AMETHYST_ITEM_IN, IMAGES.AMETHYST_ITEM_CLICK];
	RARITY_BUTTON[RARITY.REIDITE] = [IMAGES.REIDITE_ITEM_OUT, IMAGES.REIDITE_ITEM_IN, IMAGES.REIDITE_ITEM_CLICK];
	RARITY_BUTTON[RARITY.LEVEL] = [IMAGES.LEVEL_ITEM_OUT, IMAGES.LEVEL_ITEM_IN, IMAGES.LEVEL_ITEM_CLICK];
	RARITY_BUTTON[RARITY.SPECIAL] = [IMAGES.SPECIAL_ITEM_OUT, IMAGES.SPECIAL_ITEM_IN, IMAGES.SPECIAL_ITEM_CLICK];


	// Mogs.WoodItem1.par = 'CustomskinBox';
	// Mogs.WoodItem2.par = 'CustomskinBox';
	// Mogs.WoodItem3.par = 'CustomskinBox';
	// Mogs.WoodItem4.par = 'CustomskinBox';
	// Mogs.WoodItem5.par = 'CustomskinBox';
	// Mogs.WoodItem6.par = 'CustomskinBox';
	// Mogs.WoodItem7.par = 'CustomskinBox';
	// Mogs.WoodItem8.par = 'CustomskinBox';
	// Mogs.WoodItem9.par = 'CustomskinBox';


	///ITEMS
	FIRST_BUTTON_SKIN = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Skin);
	this.buttons[COUNTER++].view = __SKIN__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevSkin);
	this.buttons[COUNTER++].view = __SKIN__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextSkin);
	this.buttons[COUNTER++].view = __SKIN__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackSkin);
	this.buttons[COUNTER++].view = __SKIN__;




	// Mogs.WoodItem1.par = 'AccessoriesBox';
	// Mogs.WoodItem2.par = 'AccessoriesBox';
	// Mogs.WoodItem3.par = 'AccessoriesBox';
	// Mogs.WoodItem4.par = 'AccessoriesBox';
	// Mogs.WoodItem5.par = 'AccessoriesBox';
	// Mogs.WoodItem6.par = 'AccessoriesBox';
	// Mogs.WoodItem7.par = 'AccessoriesBox';
	// Mogs.WoodItem8.par = 'AccessoriesBox';
	// Mogs.WoodItem9.par = 'AccessoriesBox';

///Accessories Interface
	///ITEMS
	FIRST_BUTTON_ACCESSORY = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Acce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevAcce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextAcce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackAcce);
	this.buttons[COUNTER++].view = __ACCESSORY__;

///Custom loot Interface


	// Mogs.WoodItem1.par = 'LootBox';
	// Mogs.WoodItem2.par = 'LootBox';
	// Mogs.WoodItem3.par = 'LootBox';
	// Mogs.WoodItem4.par = 'LootBox';
	// Mogs.WoodItem5.par = 'LootBox';
	// Mogs.WoodItem6.par = 'LootBox';
	// Mogs.WoodItem7.par = 'LootBox';
	// Mogs.WoodItem8.par = 'LootBox';
	// Mogs.WoodItem9.par = 'LootBox';


	///ITEMS
	FIRST_BUTTON_LOOT = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Loot);
	this.buttons[COUNTER++].view = __LOOT__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevLoot);
	this.buttons[COUNTER++].view = __LOOT__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextLoot);
	this.buttons[COUNTER++].view = __LOOT__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackLoot);
	this.buttons[COUNTER++].view = __LOOT__;

	//
	//
	// Mogs.WoodItem1.par = 'BagBox';
	// Mogs.WoodItem2.par = 'BagBox';
	// Mogs.WoodItem3.par = 'BagBox';
	// Mogs.WoodItem4.par = 'BagBox';
	// Mogs.WoodItem5.par = 'BagBox';
	// Mogs.WoodItem6.par = 'BagBox';
	// Mogs.WoodItem7.par = 'BagBox';
	// Mogs.WoodItem8.par = 'BagBox';
	// Mogs.WoodItem9.par = 'BagBox';


///BAG Interface
	///ITEMS
	FIRST_BUTTON_BAG = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Bagg);
	this.buttons[COUNTER++].view = __BAG__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevBagg);
	this.buttons[COUNTER++].view = __BAG__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextBagg);
	this.buttons[COUNTER++].view = __BAG__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackBagg);
	this.buttons[COUNTER++].view = __BAG__;

///Book Interface
	///ITEMS
	FIRST_BUTTON_BOOK = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Book);
	this.buttons[COUNTER++].view = __BOOK__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Book);
	this.buttons[COUNTER++].view = __BOOK__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevBook);
	this.buttons[COUNTER++].view = __BOOK__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextBook);
	this.buttons[COUNTER++].view = __BOOK__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackBook);
	this.buttons[COUNTER++].view = __BOOK__;

//Crate Interface
	///ITEMS





	// Mogs.WoodItem1.par = 'DeadBox';
	// Mogs.WoodItem2.par = 'DeadBox';
	// Mogs.WoodItem3.par = 'DeadBox';
	// Mogs.WoodItem4.par = 'DeadBox';
	// Mogs.WoodItem5.par = 'DeadBox';
	// Mogs.WoodItem6.par = 'DeadBox';
	// Mogs.WoodItem7.par = 'DeadBox';
	// Mogs.WoodItem8.par = 'DeadBox';
	// Mogs.WoodItem9.par = 'DeadBox';

	FIRST_BUTTON_CRATE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem1Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem2Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, -29, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem3Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem4Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem5Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 65, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem6Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 205, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem7Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 300, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem8Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	this.buttons[COUNTER] = gui_create_button (178, 182, "",
		[IMAGES.WOOD_ITEM_OUT, IMAGES.WOOD_ITEM_IN, IMAGES.WOOD_ITEM_CLICK],
		__HD__, __NO_BREATH__, undefined, 159, 395, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.WoodItem9Dead);
	this.buttons[COUNTER++].view = __CRATE__;

	// Skin previous
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_PREVIOUS_OUT, IMAGES.SKIN_PREVIOUS_IN, IMAGES.SKIN_PREVIOUS_CLICK],
		__HD__, __NO_BREATH__, undefined, -61, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinPrevDead);
	this.buttons[COUNTER++].view = __CRATE__;

	// Skin next
	this.buttons[COUNTER] = gui_create_button (39, 122, "",
		[IMAGES.SKIN_NEXT_OUT, IMAGES.SKIN_NEXT_IN, IMAGES.SKIN_NEXT_CLICK],
		__HD__, __NO_BREATH__, undefined, 260, 315, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinNextDead);
	this.buttons[COUNTER++].view = __CRATE__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__COSMETICS__) }, -320, 470, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.SkinBackDead);
	this.buttons[COUNTER++].view = __CRATE__;

	/// Spin1 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_1_OUT, IMAGES.SPIN_BUTTON_1_IN, IMAGES.SPIN_BUTTON_1_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (3, 50);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin4Btn);
	this.buttons[COUNTER++].view = __SPIN_4__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin4Back);
	this.buttons[COUNTER++].view = __SPIN_4__;


/// Spin2 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_2_OUT, IMAGES.SPIN_BUTTON_2_IN, IMAGES.SPIN_BUTTON_2_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (0, 100);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.Spin1Btn);
	this.buttons[COUNTER++].view = __SPIN_1__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin1Back);
	this.buttons[COUNTER++].view = __SPIN_1__;

/// Spin3 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_3_OUT, IMAGES.SPIN_BUTTON_3_IN, IMAGES.SPIN_BUTTON_3_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (4, 150);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.Spin5Btn);
	this.buttons[COUNTER++].view = __SPIN_2__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin5Back);
	this.buttons[COUNTER++].view = __SPIN_2__;

/// Spin4 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_4_OUT, IMAGES.SPIN_BUTTON_4_IN, IMAGES.SPIN_BUTTON_4_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (1, 300);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin2Btn);
	this.buttons[COUNTER++].view = __SPIN_5__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin2Back);
	this.buttons[COUNTER++].view = __SPIN_5__;

/// Spin5 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_5_OUT, IMAGES.SPIN_BUTTON_5_IN, IMAGES.SPIN_BUTTON_5_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (2, 600);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin3Btn);
	this.buttons[COUNTER++].view = __SPIN_3__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin3Back);
	this.buttons[COUNTER++].view = __SPIN_3__;

/// Spin5 button
	this.buttons[COUNTER] = gui_create_button (260, 260, "",
		[IMAGES.SPIN_BUTTON_4_OUT, IMAGES.SPIN_BUTTON_4_IN, IMAGES.SPIN_BUTTON_4_CLICK],
		__HD__, __NO_BREATH__, function () {
			if (_this.isUserLogged ()) buySpin (5, 300);
			else select_subview (__LOGIN__) }, -/*IMAGES.SPIN_BUTTON_2_OUT.width*/260 / 4, 150 + /*IMAGES.SPIN1.height*/448 / 4 - /*IMAGES.SPIN_BUTTON_2_OUT.height*/260 / 4, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.Spin6Btn);
	this.buttons[COUNTER++].view = __SPIN_6__;

	// Button BACK
	this.buttons[COUNTER] = gui_create_button (115, 73, "",
		[IMAGES.BACK_BUTTON_OUT, IMAGES.BACK_BUTTON_IN, IMAGES.BACK_BUTTON_CLICK],
		__HD__, __NO_BREATH__, function () { select_subview (__SHOP__) }, 309, 180, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.Spin6Back);
	this.buttons[COUNTER++].view = __SPIN_6__;

	///PROFILE
	//Season1
	var SCORE_MODE_SEASON1 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (205, 67, "",
		[IMAGES.SEASON1_PROFILE_OUT, IMAGES.SEASON1_PROFILE_IN, IMAGES.SEASON1_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (undefined, 0); }, -305, 125, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileSeason1);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Season2
	var SCORE_MODE_SEASON2 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (205, 67, "",
		[IMAGES.SEASON2_PROFILE_OUT, IMAGES.SEASON2_PROFILE_IN, IMAGES.SEASON2_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (undefined, 1); }, -305, 170, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileSeason2);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Season3
	var SCORE_MODE_SEASON3 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (205, 67, "",
		[IMAGES.SEASON3_PROFILE_OUT, IMAGES.SEASON3_PROFILE_IN, IMAGES.SEASON3_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (undefined, 2); }, -305, 215, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileSeason3);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Season4
	var SCORE_MODE_SEASON4 = COUNTER;
	this.buttons[COUNTER] = gui_create_button (205, 67, "",
		[IMAGES.SEASON4_PROFILE_OUT, IMAGES.SEASON4_PROFILE_IN, IMAGES.SEASON4_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (undefined, 3); }, -305, 260, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileSeason4);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Total
	var SCORE_MODE_TOTAL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (460, 73, "",
		[IMAGES.TOTAL_PROFILE_OUT, IMAGES.TOTAL_PROFILE_IN, IMAGES.TOTAL_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (-1); }, -180, 170, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileModeTotal);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Normal
	var SCORE_MODE_NORMAL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (222, 68, "",
		[IMAGES.NORMAL_PROFILE_OUT, IMAGES.NORMAL_PROFILE_IN, IMAGES.NORMAL_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (WORLD.MODE_PVP); }, -180, 215, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileModeNormal);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Forest
	var SCORE_MODE_FOREST = COUNTER;
	this.buttons[COUNTER] = gui_create_button (222, 68, "",
		[IMAGES.FOREST_PROFILE_OUT, IMAGES.FOREST_PROFILE_IN, IMAGES.FOREST_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (WORLD.MODE_LEGACY); }, -180, 260, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileModeForest);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Zombie
	var SCORE_MODE_ZOMBIE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (222, 68, "",
		[IMAGES.ZOMBIE_PROFILE_OUT, IMAGES.ZOMBIE_PROFILE_IN, IMAGES.ZOMBIE_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (WORLD.MODE_ZOMBIES); }, -60, 215, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileModeZombie);
	this.buttons[COUNTER++].view = __PROFILE__;

	//Vampire
	var SCORE_MODE_VAMPIRE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (222, 68, "",
		[IMAGES.VAMPIRE_PROFILE_OUT, IMAGES.VAMPIRE_PROFILE_IN, IMAGES.VAMPIRE_PROFILE_CLICK],
		__HD__, __NO_BREATH__, function () { init_profile (WORLD.MODE_VAMPIRES); }, -60, 260, __MIDDLE_X__ | __TOP__, __HIDE__,
		Mogs.ProfileModeVampire);
	this.buttons[COUNTER++].view = __PROFILE__;

	///Leaderboard
	//Total
	this.LEADERBOARD_TOTAL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (143, 66, "",
		[IMAGES.TOTAL_LEAD_OUT, IMAGES.TOTAL_LEAD_IN, IMAGES.TOTAL_LEAD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, ui.LEADERBOARD_TOTAL); }, -298, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardTotalBtn);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	//Normal
	this.LEADERBOARD_NORMAL = COUNTER;
	this.buttons[COUNTER] = gui_create_button (104, 66, "",
		[IMAGES.NORMAL_LEAD_OUT, IMAGES.NORMAL_LEAD_IN, IMAGES.NORMAL_LEAD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, ui.LEADERBOARD_NORMAL); }, -223, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardNormal);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	//Forest
	this.LEADERBOARD_FOREST = COUNTER;
	this.buttons[COUNTER] = gui_create_button (110, 66, "",
		[IMAGES.FOREST_LEAD_OUT, IMAGES.FOREST_LEAD_IN, IMAGES.FOREST_LEAD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, ui.LEADERBOARD_FOREST); }, -168, 110, __MIDDLE_X__ | __TOP__, __HIDE__,Mogs.LeaderboardForest);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	//Zombie
	this.LEADERBOARD_ZOMBIE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (88, 66, "",
		[IMAGES.ZOMBIE_LEAD_OUT, IMAGES.ZOMBIE_LEAD_IN, IMAGES.ZOMBIE_LEAD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, ui.LEADERBOARD_ZOMBIE); }, -110, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardZombie);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	//Vampire
	this.LEADERBOARD_VAMPIRE = COUNTER;
	this.buttons[COUNTER] = gui_create_button (88, 66, "",
		[IMAGES.VAMPIRE_LEAD_OUT, IMAGES.VAMPIRE_LEAD_IN, IMAGES.VAMPIRE_LEAD_CLICK],
		__HD__, __NO_BREATH__, function () { getLeaderboard (undefined, ui.LEADERBOARD_VAMPIRE); }, -63, 110, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.LeaderboardVampire);
	this.buttons[COUNTER++].view = __LEADERBOARD__;

	/// Shop
	// Terms button
	this.buttons[COUNTER] = gui_create_button (86, 44, "",
		[IMAGES.TERMS_BUTTON_OUT, IMAGES.TERMS_BUTTON_IN, IMAGES.TERMS_BUTTON_CLICK],
		__HD__, __NO_BREATH__,  function () { window.open ("./terms.html", "_blank"); }, 349, 290, __MIDDLE_X__ | __TOP__, __HIDE__, Mogs.ShopTermsBtn);
	this.buttons[COUNTER++].view = __SHOP__;

	var skinSelector = new CosmeticSelector (COSMETICS.SKIN, FIRST_BUTTON_SKIN, function (v) {
		ui.skin = v; if (ui.unlock.skin[v] === 1) Cookies.set ("starve_skin", ""+v, { expires: 30 }); }, this.skin, this.unlock.skin);
	var bagSelector = new CosmeticSelector (COSMETICS.BAG, FIRST_BUTTON_BAG, function (v) {
		ui.bag = v; if (ui.unlock.bag[v] === 1) Cookies.set ("starve_bag", ""+v, { expires: 30 });}, this.bag, this.unlock.bag);
	var bookSelector = new CosmeticSelector (COSMETICS.BOOK, FIRST_BUTTON_BOOK, function (v) {
		ui.book = v; if (ui.unlock.book[v] === 1) Cookies.set ("starve_book", ""+v, { expires: 30 }) ;}, this.book, this.unlock.book);
	var deadSelector = new CosmeticSelector (COSMETICS.CRATE, FIRST_BUTTON_CRATE, function (v) {
		ui.dead = v; if (ui.unlock.dead[v] === 1) Cookies.set ("starve_dead", ""+v, { expires: 30 });}, this.dead, this.unlock.dead);
	var crateSelector = new CosmeticSelector (COSMETICS.CRATE, FIRST_BUTTON_LOOT, function (v) {
		ui.crate = v; if (ui.unlock.crate[v] === 1) Cookies.set ("starve_crate", ""+v, { expires: 30 });}, this.crate, this.unlock.crate);
	var accessorySelector = new CosmeticSelector (COSMETICS.ACCESSORY, FIRST_BUTTON_ACCESSORY, function (v) {
		ui.accessory = v; if (ui.unlock.accessory[v] === 1) Cookies.set ("starve_accessory", ""+v, { expires: 30 }); }, this.accessory,
		this.unlock.accessory);

	this.trigger_mousedown = function (evt) {

		mouse.pos = get_mouse_pos (_this.can, evt);

		for (var i = 0 ; i < _this.buttons.length ; i++) {
			if (_this.buttons[i].info.active === __DISPLAY__)
				_this.buttons[i].trigger (_this.can, mouse.pos, MOUSE_DOWN);
		}
	};

	this.trigger_mouseup = function (evt) {


		mouse.pos = get_mouse_pos (_this.can, evt);

		for (var i = 0 ; i < _this.buttons.length ; i++) {
			var button = _this.buttons[i];
			if (button.info.active === __DISPLAY__) {
				if (button.trigger (_this.can, mouse.pos, MOUSE_UP)) {
					button.info.callback ();
					return;
				}
			}
		}
	};

	this.current_cursor = false;
	this.trigger_mousemove = function (evt) {

		mouse.pos = get_mouse_pos (_this.can, evt);

		var cursor = false;

		for (var i = 0 ; i < _this.buttons.length ; i++) {
			if (_this.buttons[i].info.active === __DISPLAY__)
				cursor |= _this.buttons[i].trigger (_this.can, mouse.pos, MOUSE_MOVE);
		}

		// Set pointer or default cursor
		if (_this.current_cursor !== cursor) {
			_this.current_cursor = cursor;
			if (cursor) can.style["cursor"] = _this.cursor1;
			else can.style["cursor"] = _this.cursor0;
		}
	}

	this.add_event_listener = function () {
		document.querySelector('#game_canvas').addEventListener('mousedown', this.trigger_mousedown,  false);
		document.querySelector('#game_canvas').addEventListener('mouseup',   this.trigger_mouseup,    false);
		document.querySelector('#game_canvas').addEventListener ('mousemove', this.trigger_mousemove,  false);
	}

	this.remove_event_listener = function () {
		document.querySelector('#game_canvas').removeEventListener ('mousedown', this.trigger_mousedown, false);
		document.querySelector('#game_canvas').removeEventListener ('mouseup',   this.trigger_mouseup,   false);
		document.querySelector('#game_canvas').removeEventListener ('mousemove', this.trigger_mousemove, false);
	}



	Tub.initAll();
	Tub.initBook();
	Tub.initBag();
	Tub.initLeaderboard();
	Tub.initPadDir();
	Tub.updateLeaderBagBookVisibility(false);
}
