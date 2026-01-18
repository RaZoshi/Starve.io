function open_twitter () {

		Utils.open_in_new_box ('https://twitter.com/intent/tweet?text=I%20survived%20' + user.day +'%20days%20with%20' + user.die.score + '%20points%20in%20http%3A%2F%2Fstarve.io%2F%20%23starve.io');
}

function open_facebook () {

		Utils.open_in_new_box ('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.starve.io%2F&display=popup&ref=plugin&src=like&kid_directed_site=0');
}

function Scoreboard (can, ctx) {

	this.can        = can;
	this.ctx        = ctx;

	/* WATCH OUT, I'M NOT SURE ABOUT THIS TRICK, IT MAY BE A SOURCE OF BUG *
	 * That seem work for use this object in a event listener              */
	var _this = this;

	this.enable_interface = false;

	this.sb = {

		id    : document.getElementById ("scoreboard"),
		style : document.getElementById ("scoreboard").style,
		height : 0,
		translate : { x : 0, y : 0 },
		mog: Mogs.ScoreBoardElementPostGame,
		position: __MIDDLE_X__ | __TOP__,
		update : function () {

			if (!isMobile) {
				this.style.left  = this.translate.x + "px";
				this.style.top   = this.translate.y + "px";
			}	else {
				this.style.marginTop = '0px'
				this.style.marginBottom = '0px'
				// this.translate.x = canw * .5;
				// this.translate.y = 0;
				this.mog.h = this.id.clientHeight;
				Tub.centerElement(this.id, this.mog);
			}

		},
		init : function () {

			this.id.innerHTML = '<div style="position:absolute;"> <img src="./img/scoreboard.png"style="width:250px;transform:translate(125px, -80px);"> </img> </div><div><div id="whokilled">' + user.die.howdie + '</div></div><div class="deco" style="margin-top:35px;"></div><div class="deco"></div><div><div class="stats"> ' + LANG[TEXT.DAYS_SURVIVED] + ' : ' + user.day + '</div><div class="stats"> ' + LANG[TEXT.KILL] + ' : ' + user.die.kill + '</div></div>' + '<div id="flexDisplay"><div id="score"> ' + LANG[TEXT.SCORE] + ' : ' + user.die.score + '</div><div id="breadWon"><span id="breadWonInner">0</span><img src="./img/golden-bread.png" style="width:50px;margin-left:-25px;transform: translate(37px, 8px);"></img></div></div><div><div id="points"> ' + user.die.bank + ' ' + LANG[TEXT.POINTS] + '</div></div><div id="shop_points">' + LANG[TEXT.KIT_NEXT] + '</div><div style="display:inline-block;"><div class="social" id="tttwitter">' + LANG[TEXT.TWITTER] + '</div><div class="social" id="fffacebook">' + LANG[TEXT.FACEBOOK] + '</div></div><div id="bbback">' + LANG[TEXT.BACK_TO_THE_GAME] + '</div>';

				this.style.display = 'inline-block';
				document.getElementById ("tttwitter").addEventListener ("mouseup", open_twitter, false);
				document.getElementById ("bbback").addEventListener ("mouseup", function () {scoreboard.quit (ui.run);}, false);
				document.getElementById ("fffacebook").addEventListener ("mouseup", open_facebook, false);

				this.height = Math.floor (this.id.clientHeight / 2)

				// Update stats in the user interface
				getBreadAndScore ();
			}
		}

		/* Appear effect, all content appear from the bottom */
		var appear_effect_step = 0;
		var appear_effect_max_step = 30;
		var appear_effect = function () {

			_this.update ();
			appear_effect_step++;
			if (appear_effect_step == appear_effect_max_step) {
				_this.update ();
				return;
			}

			window.setTimeout (appear_effect, 33);
		}

		/* Quit UI with nicke effect */
		this.quit = function (fun) {

			if (_this.enable_interface === true) {

				_this.enable_interface = false;

				/* Will be run after quit */
				fun_after_quit = fun;

				/* Make nice quit effect */
				quit_effect_step = -1;
				quit_effect ();

				/* Refresh ads */
				// refreshAds ();
				console.log('calling triggerAd');
				callTriggerAd();
			}
		}

		/* Quit effect, all content escape from the top */
		var fun_after_quit;
		var quit_effect_step = -1;
		var quit_effect_max_step = 30;
		var quit_effect = function () {

			_this.update ();
			quit_effect_step++;
			if (quit_effect_step == quit_effect_max_step) {

				_this.stop ();
				_this.sb.style.display = 'none';
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
			_this.sb.init ();

			ui.trevda.style.display = "inline-block";

		_this.is_run = true;
		_this.enable_interface = true;
		quit_effect_step = -1;
		appear_effect_step = 0;
		appear_effect ();
	}

	/* Update position of object, usefull for trigger */
	this.update = function () {

		this.sb.translate.x = Math.floor (canw2  - 275);
		this.sb.translate.y = Math.floor (canh2  - this.sb.height - 28);

		ui.trevda.translate.x = this.sb.translate.x - 350;
		ui.trevda.translate.y = this.sb.translate.y + 0;
		ui.trevda.update ();

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

			this.sb.translate.y        -= move_effect;
		}

		this.sb.update ();
	}

	this.draw = function () {

		/* Draw fake world */
		draw_fake_world ();

		/* Draw alert message */
		user.alert.draw ("#FFF", "#000");
	}
}
