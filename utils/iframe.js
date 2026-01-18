function reloadIframe () {

	try {
		// Is loaded inside iframe
		if (window.self !== window.top) {

			loaded = Cookies.get ("inIframe");

			// We already reloaded the page
			if (loaded)
				Cookies.remove ("inIframe");
			else {
				Cookies.set ("inIframe", "1");
				// Reload the page
				location.href = "http://starve.io";
			}
		}

	} catch (e) {}
}

reloadIframe ();
