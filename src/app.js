// Here is the starting point for your application code.

// Small helpers you might want to keep
import './helpers/context_menu.js';
import './helpers/external_links.js';

const author = () => {
	return "Ozu94VP";
};

document.querySelector('#author strong').innerHTML = author();
