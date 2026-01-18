var DB = "https://account.starve.io/";

var __GOOGLE_LOGIN__ = 0;
var __FACEBOOK_LOGIN__ = 1;

var userLoginType = undefined;
var userToken = undefined;
var userId = undefined;
var userData = undefined;

var userAlreadyLoggedIn = 0;

window.onUserLogin = function () {

	userAlreadyLoggedIn = 1;
}

function loginWithGoogle () {

	window["gapi"]["auth2"]["getAuthInstance"] ()["signIn"] ();
}

var ip = undefined;

var xsolla_options = {

	"access_token": 'ACCESS_TOKEN', //TODO use access token, received on previous step
	//"sandbox": true, //TODO please do not forget to remove this setting when going live
};

var s = document.createElement ('script');
s["type"] = "text/javascript";
s["async"] = true;
s["src"] = "https://static.xsolla.com/embed/paystation/1.0.7/widget.min.js";
s["addEventListener"] ('load', function (e) {
	window["XPayStationWidget"]["init"] (xsolla_options);
	window["XPayStationWidget"]["on"] ('status-done', claimBread);
}, false);
var head = document.getElementsByTagName ('head')[0];
head.appendChild (s);

//IF YOU HAVE A BUILT IN METHOD TO GRAB CLIENT IP, USE THAT INSTEAD

//Facebook Login
window["fbAsyncInit"] = function () {

	window["FB"]["init"] ({
		"appId"      : '642017356260407', //CHANGE TO YOUR APP ID
		"cookie"     : true,
		"xfbml"      : true,
		"version"    : 'v3.3'
	});

	window["FB"]["AppEvents"]["logPageView"] ();

	login ();
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function logWithFacebook () {

	window["FB"]["login"] (function (response) {

		if (response["authResponse"]) {

			window["FB"]["api"] ('/me', function (response) {

				userLoginType = __FACEBOOK_LOGIN__;
				userToken = window["FB"]["getAuthResponse"] ()["accessToken"];
				login ();
				window.onUserLogin (userId);
			});

			// FAIL
		} else {}
	});
}

//Google Login
var auth2 = undefined; // The Sign-In object.
var googleUser = undefined; // The current user.

/**
 * Calls startAuth after Sign in V2 finishes setting up.
 */
var appStart = function () {

	window["gapi"]["load"] ('auth2', initSigninV2);
};

/**
 * Initializes Signin v2 and sets up listeners.
 */
var initSigninV2 = function () {

	auth2 = window["gapi"]["auth2"]["init"] ({
		"client_id": "604822901057-k3dp7j5qpl6pnfr86rvi4r2qp20nk1oh.apps.googleusercontent.com", //CHANGE TO YOUR CLIENT ID
		"scope": 'profile'
	});

	// Listen for sign-in state changes.
	auth2["isSignedIn"]["listen"] (signinChanged);

	// Listen for changes to current user.
	auth2["currentUser"]["listen"] (userChanged);

	// Sign in the user if they are currently signed in.
	if (auth2["isSignedIn"]["get"] () === true)
		auth2["signIn"] ();

	// Start with the current live values.
	refreshValues ();
};

/**
 * Listener method for sign-out live value.
 * @param {boolean} val the updated signed out state.
 */
var signinChanged = function (val) {
};

/**
 * Listener method for when the user changes.
 * @param {GoogleUser} user the updated user.
 */
var userChanged = function (user) {

	login ();
	if (userToken === undefined && googleUser !== undefined) {

		userToken = googleUser["getAuthResponse"] ()["id_token"];

		if (userToken !== undefined) {
			userLoginType = __GOOGLE_LOGIN__;
			window.onUserLogin (userId);
		}
	}

	if (user !== undefined && user["isSignedIn"] () === true)
		googleUser = user;
};

/**
 * Retrieves the current user and signed in states from the GoogleAuth
 * object.
 */
var refreshValues = function () {

	if (auth2)
		googleUser = auth2["currentUser"]["get"] ();
}

window.onload = function () {

	appStart ();
};

function logout () {

	if(userLoginType === __FACEBOOK_LOGIN__ && window["FB"]["getUserID"] ())
		window["FB"]["logout"] ();

	if(userLoginType === __GOOGLE_LOGIN__ && googleUser !== undefined) {
		window["gapi"]["auth2"]["getAuthInstance"] ()["signOut"] ();
		googleUser = undefined;
	}

	// Reset account details
	userId = undefined;
	userToken = undefined;
	userLoginType = undefined;
	ui.kit = 0;
	ui.bread = 0;
	ui.score = 0;
	ui.unlock_cosmetics ();

	onUserLogout ();
}

function login () {

	// The user is already logged
	if (userId !== undefined) return;

	// Restore the user id if possible
	getUserId ();

	// We can't restore any connection
	if(!userId) return
}

function getUserId () {

	try {
		if(window["FB"]) {
			if(window["FB"]["getUserID"] ()) {

				userId = window["FB"]["getUserID"] ();

				// Restore facebook token
				if (userToken === undefined) {
					window["FB"]["getLoginStatus"] (function () {
						userLoginType = __FACEBOOK_LOGIN__;
						userToken = window["FB"]["getAuthResponse"] ()["accessToken"];
						window.onUserLogin (userId);
					});
				}
			}
		}
	} catch (e) {}

	try {
		userId = googleUser["getBasicProfile"] ()["getId"] ();
	} catch (e) {}
}

// Open xsolla popup
function openXsolla (amount) {

	if(!userId) return

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'xsolla?userid=' + userId + '&item=' + amount);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {

				xsolla_options["access_token"] = xhr.responseText;
				window["XPayStationWidget"]["init"] (xsolla_options);
				window["XPayStationWidget"]["open"] ();
			}
		}
	};

	xhr.send ();
}

function buyBread (sku) {

	if(!userId) return

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'buyBread?userid=' + userId + '&token=' + userToken + '&sku=' + sku);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {
				console.info('added bread', xhr.responseText);
				window.location.reload();
			}
		}
	};

	xhr.send ();
}

function buyServer (sku) {
	if(!userId) return

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'buyServer?userid=' + userId + '&token=' + userToken + '&sku=' + sku);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {
				console.info('added server', xhr.responseText);
			}
		}
	};

	xhr.send ();
}

// Restore user data (or alternatively create a new account)
function getUserDetails (_callback) {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'login?token=' + userToken + '&type=' + userLoginType);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState === 4 && this.status === 200) {

			if (xhr.responseText !== '0')
				_callback (JSON.parse (xhr.responseText));
			/* I think it's causing a bug
			else
				logout ();
			*/
		}
	};

	xhr.send ();
}

// Ask for server rebooting
function rebootServer () {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'rebootServer?token=' + userToken + '&userid=' + userId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState === 4 && this.status === 200) {

			// Get next view
			if (xhr.responseText !== '0')
				location.href = document.getElementById ("serverAddressInput").value;
		}
	};

	xhr.send ();
};

// Send region preference
function regionPreference (region) {

	if (true) {
		ui.select_subview(ui.__SERVER_DURATION__);
	}	else {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', DB + 'setRegion?token=' + userToken + '&userid=' + userId + '&region=' + region);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		xhr.onreadystatechange = function() {

			if (this.readyState === 4 && this.status === 200) {

				// Get next view
				if (xhr.responseText !== '0')
					ui.select_subview (ui.__SERVER_DURATION__);
				else
					ui.select_subview (ui.__GAME__);
			}
		};

		xhr.send ();
	}


};

// Buy a spin round
function buySpin (spinId, bread) {

	// The spin is already used
	if (ui.spin > 0)
		return;

	// Can't buy a spin if no enough bread in the wallet
	if (ui.bread < bread) {
		ui.select_subview (ui.__BUY__);
		return;
	}

	// Init spin effect
	ui.spin = 2;
	ui.spin_effect = 0;
	ui.spin_target = 100;

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'buySpin?token=' + userToken + '&userid=' + userId + '&spin=' + spinId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			// Play spin
			if (xhr.responseText !== '0') {

				var data = JSON.parse (xhr.responseText);
				ui.play_spin (data["rand"] * Math.PI * 2, data["type"], data["id"]);
				ui.bread -= bread;
			} else
				ui.spin = 0;
		}
	};

	xhr.send ();
}

// Buy a name changer
function buyNameChanger () {

	// Can't buy a name changer if no enough bread in the wallet
	if (ui.bread < 300 && ui.firstName > 0)
		return;

	var nickname = document.getElementById ('account_nickname_input').value.trim ();
	document.getElementById ('account_nickname_input').value = nickname;

	// The nickname is not authorized
	if (nickname.length < 1 || nickname.length > 20)
		return;

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'changeNickname?token=' + userToken + '&userid=' + userId +
		'&nickname=' + encodeURIComponent (nickname));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			// A new kit was bought
			if (xhr.responseText !== '0') {

				var bread = Number (xhr.responseText);
				if (bread > 0) ui.bread -= bread;
				ui.firstName = 1;
				ui.select_subview (ui.__PROFILE__);
			}
		}
	};

	xhr.send ();
}

// Buy a starter kit
function buyKit (kitId, bread) {

	// Can't buy a kit if no enough bread in the wallet
	if (ui.bread < bread) {
		ui.select_subview (ui.__BUY__);
		return;
	}

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'buyKit?token=' + userToken + '&userid=' + userId + '&kit=' + kitId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			// A new kit was bought
			if (xhr.responseText !== '0') {

				var data = JSON.parse (xhr.responseText);
				ui.bread -= bread;
				ui.kit = Date.now () + Number (data);
			}
		}
	};

	xhr.send ();
}

// Claim user bread
function claimBread () {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'claimBread?userid=' + userId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {

				var bread = Number (xhr.responseText);
				if (!isNaN (bread))
					ui.bread = bread;
			}
		}
	};

	xhr.send ();
};

// Get bread amount
function getBreadAndScore () {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'getBreadAndScore?userid=' + userId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {

				var data = JSON.parse (xhr.responseText);
				var d = data["b"] - ui.bread;

				ui.bread = data["b"];
				ui.score = data["s"];
				ui.lvl = ui.level_formula (ui.score);
				ui.xp_dest = ui.xp_formula (ui.score);
				ui.xp = 0;

				document.getElementById ('breadWonInner').innerHTML = '' + d;
			}
		}
	};

	xhr.send ();
}

function sendCheat () {

	xhr.open('GET', DB + 'getScore?userid=' + userId);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0')
				var data = JSON.parse (xhr.responseText);
		}
	};

	xhr.send ();
};

// Get leaderboard
function getLeaderboard (range, mode, sorted, season) {

	range = (range === undefined) ? ui.leaderboard_range : range;
	mode = (mode === undefined) ? ui.leaderboard_mode : mode;
	sorted = (sorted === undefined) ? ui.leaderboard_sorted : sorted;
	season = (season === undefined) ? ui.leaderboard_season : season;

	// Do not reload the leaderboard for nothing
	if (range === ui.leaderboard_range && mode === ui.leaderboard_mode &&
		sorted === ui.leaderboard_sorted && season === ui.leaderboard_season)
		return;

	ui.leaderboard_range = range;
	ui.leaderboard_mode = mode;
	ui.leaderboard_sorted = sorted;
	ui.leaderboard_season = season;

	if (ui.LEADERBOARD_SEASON1 === season)
		season = "0";
	else if (ui.LEADERBOARD_SEASON2 === season)
		season = "1";
	else if (ui.LEADERBOARD_SEASON3 === season)
		season = "2";
	else if (ui.LEADERBOARD_SEASON4 === season)
		season = "3";

	if (ui.LEADERBOARD_TOTAL === mode)
		mode = "total";
	else if (ui.LEADERBOARD_NORMAL === mode)
		mode = "normal";
	else if (ui.LEADERBOARD_ZOMBIE === mode)
		mode = "zombie";
	else if (ui.LEADERBOARD_VAMPIRE === mode)
		mode = "vampire";
	else if (ui.LEADERBOARD_FOREST === mode)
		mode = "forest";

	if (ui.LEADERBOARD_ALL === range)
		range = "all";
	if (ui.LEADERBOARD_WEEK === range)
		range = "week";
	if (ui.LEADERBOARD_TODAY === range)
		range = "today";

	if (ui.LEADERBOARD_KILL === sorted)
		sorted = "kill";
	else if (ui.LEADERBOARD_SCORE === sorted)
		sorted = "score";
	else if (ui.LEADERBOARD_TIME === sorted)
		sorted = "time";

	var xhr = new XMLHttpRequest();

	xhr.open('GET', DB + 'leaderboard?range=' + range + '&mode=' + mode +
		'&sort=' + sorted + '&season=' + season);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			if (xhr.responseText !== '0') {

				var data = JSON.parse (xhr.responseText);
				var leaderboard = "";
				for (var i = 0 ; i < data.length ; i++) {

					line = data[i];
					var nickname = line[1];
					if (nickname.indexOf ("Starver#") === -1)
						nickname = window["decodeURIComponent"](window["escape"](window["atob"] (nickname)));
					leaderboard += '<div class="lineLeaderboard">';
					leaderboard += '<div class="rank">'; leaderboard += (i + 1) + ''; leaderboard += '</div>';
					leaderboard += '<div class="name">'; leaderboard += nickname; leaderboard += '</div>';
					leaderboard += '<div class="lvl">'; leaderboard += (ui.level_formula (line[6]) + 1) + ''; leaderboard += '</div>';
					leaderboard += '<div class="kills">'; leaderboard += line[5] + ''; leaderboard += '</div>';
					leaderboard += '<div class="time">'; leaderboard += line[4] + ''; leaderboard += '</div>';
					leaderboard += '<div class="score">'; leaderboard += line[3] + ''; leaderboard += '</div>';
					leaderboard += '</div>';
				}

				document.getElementById ("leaderboard").innerHTML = leaderboard;
			}
		}
	};

	xhr.send ();
}
