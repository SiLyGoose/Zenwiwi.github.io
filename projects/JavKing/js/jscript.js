// var sampleURL = ""; //?access_token=7GucdFP80bdtMEVKk1w1eBgdezXHBI&token_type=Bearer&state=547956499545325589&guildIdList=289609899892015106,343572980351107077,449324919541727264,576722095526903828
var id = getCookie("SID");

var guildMember = {};

$ = $.noConflict(true);

const getCookie = function (cookieName) {
	let name = cookieName + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

const innerWidth = function (event) {
	return event?.target?.innerWidth || event?.currentTarget?.innerWidth || event?.innerWidth;
};

const needChange = function ({ width }, newWidth) {
	return !width || !newWidth || (width >= 1024 && newWidth < 1024) || (width < 1024 && newWidth >= 1024);
};

const loaded = function (object) {
	return object.html !== undefined || object.static;
};

const updated = function (object) {
	// return object.updated;
	return true;
};

const addHrefListener = function (selector, { name, href }) {
	name = name.toLowerCase();
	$(selector + name).click(function (event) {
		event.preventDefault();
		if (name === "dashboard") {
			href += id ? `?id=${id}` : "";
		}
		location.href = href;
		return false;
	});
};

const load = async function (event) {
	// let url = `http://localhost:9925/guild-member` + (id ? `/${id}` : "");
	localhostGet(`https://javking-api.herokuapp.com/guild-member/${id}`, function (response) {
		guildMember = response;

		createHeaderNavItems(event);
		createHeaderNavMenuDropdown(event);

		createHeaderNavUserItems(event);
		createHeaderNavUserLogin(event);

		// window.history.pushState("", "", "./home.html");

		setTimeout(() => {
			$(".loader-wrapper").fadeOut("slow");
		}, 1000);
	});
};

const resize = function (event) {
	createHeaderNavItems(event);
};

window.onload = load;
window.onresize = resize;

const headerNavItems = {};
const headerNavMenuItems = {};
const headerNavUserItems = {};
const headerNavUserLogin = {};

// constructs header nav links
let headerNavItemList = [
	{ name: "Commands", href: "../commands.html" },
	{ name: "Dashboard", href: "./src/players/dashboard.html" },
];

function createHeaderNavItems(event) {
	let width = innerWidth(event);
	if (!needChange(headerNavItems, width)) return;

	headerNavItems.width = width;
	if (headerNavItems.width >= 1024) {
		headerNavItems.html = `<ul class="header-nav-list">`;
		for (let i = 0; i < headerNavItemList.length; i++) {
			headerNavItems.html += constructHeaderNavItem(headerNavItemList[i]);
		}
		headerNavItems.html += `</ul>`;
	} else {
		headerNavItems.html = `<div class="header-nav-dropdown-wrapper dropdown-compartment dropdown-compartment-no-border">
                                    <button id="menu" aria-expanded="false" type="button" class="box-selected">
                                        <span class="box-selected-name font-friendly-menu">Menu</span>
                                        <span class="dropdown-box-arrow"></span>
                                    </button>
                                </div>`;
	}

	$("#header-nav").html(headerNavItems.html);

	const menu = $("#menu");
	menu.click(function (event) {
		event.preventDefault();
		var dropdownExist = $(".option-list-class-name").length;
		toggleHeaderNavMenuDropdown(!dropdownExist);
		return false;
	});

	let headerNavItemSelectorList = [".header-nav-list-item[aria-id=nav-item-"];
	headerNavItemList.forEach((item) => {
		for (let i = 0; i < headerNavItemSelectorList.length; i++) {
			addHrefListener(headerNavItemSelectorList[i], item);
		}
	});

	headerNavItems.width = width;
	return headerNavItems.html;
}

function createHeaderNavMenuDropdown(event) {
	if (loaded(headerNavMenuItems)) return;

	headerNavMenuItems.width = innerWidth(event);
	headerNavMenuItems.html = `<ul class="box-selected-list-wrapper option-list-class-name">`;
	for (let i = 0; i < headerNavItemList.length; i++) {
		headerNavMenuItems.html += constructHeaderMenuItem(headerNavItemList[i]);
	}
	headerNavMenuItems.html += `</ul>`;
	headerNavMenuItems.static = true;

	return headerNavMenuItems.html;
}

function createHeaderNavUserItems(event) {
	if (loaded(headerNavUserItems)) return;

	headerNavUserItems.width = innerWidth(event);
	headerNavUserItems.html = `<ul class="box-selected-list-wrapper header-user-logged-in-dropdown">`;
	// TODO: add redirects to items
	var headerNavUserLoggedInDropdownItems = [
		{ name: "Logout", icon: "/images/logout.svg" },
		{ name: "My Servers", icon: "/images/myServers.svg" },
	];
	for (let i = 0; i < headerNavUserLoggedInDropdownItems.length; i++) {
		let item = headerNavUserLoggedInDropdownItems[i];
		headerNavUserItems.html += constructHeaderNavUserLoggedInDropdownItems(item);
	}
	headerNavUserItems.html += `</ul>`;
	headerNavUserItems.static = true;
}

// check if clicked target NOT dropdown button(s) classes
// nav menu and user dropdown both contain class="box-selected-list-wrapper"
$(document).click(function (event) {
	event.preventDefault();
	if ($(event.target).not(".box-selected-list-wrapper")) {
		toggleHeaderNavMenuDropdown(false);
		toggleHeaderUserLoggedInDropdown(false);
	}
	return false;
});

function constructHeaderNavItem({ name, href }) {
	return `<li class="font-header header-nav-link-list-item">
                <a class="header-nav-list-item" aria-id="nav-item-${name.toLowerCase()}" href="${href}">
                    <span>${name}</span>
                </a>
            </li>`;
}

function constructHeaderMenuItem({ name, href }) {
	return `<li>
                <a class="font-friendly-menu-item dropdown-item-btn" aria-id="dropdown-item-btn-${name.toLowerCase()}" href="${href}">
                    <span class="dropdown-option-item-name">${name}</span>
                </a>
            </li>`;
}

function constructHeaderNavUserLoggedInDropdownItems({ name, icon }) {
	return `<li>
                <button id="${name.split(" ").join("-").toLowerCase()}" class="dropdown-item-btn font-friendly-dropdown" type="button">
                    <span class="dropdown-item-btn-image-wrapper">
                        <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                            <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                <img aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                            </span>
                            <img alt=${name} src=${icon} decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: fill;">
                            <noscript></noscript>
                        </span>                                    
                    </span>
                    <span class="dropdown-item-btn-name">${name}</span>
                </button>
            </li>`;
}

function createHeaderNavUserLogin(event) {
	if (loaded(headerNavUserLogin)) return;

	headerNavUserLogin.width = innerWidth(event);
	headerNavUserLogin.static = true;
	headerNavUserLogin.html = `<div class="header-user-login-dropdown">
									${createHeaderNavUserLoginBtn(guildMember)}
                           		</div>`;

	$(".header-user-login").append(headerNavUserLogin.html);

	const expanded = $(".header-user-logged-in-btn");
	expanded.click(function (event) {
		event.preventDefault();
		var dropdownExist = $(".header-user-logged-in-dropdown").length;
		toggleHeaderUserLoggedInDropdown(!dropdownExist);
		return false;
	});

	const login = $(".button-compartment-hollow");
	login.click(function (event) {
		event.preventDefault();
		location.href =
			"https://discord.com/api/oauth2/authorize?client_id=676672920625610753&redirect_uri=http://localhost:8080/guild-member-login-callback&response_type=code&scope=identify%20guilds&state=/home.html";
		return false;
	});
}

function createHeaderNavUserLoginBtn({ id, data }) {
	if (!id) {
		return `<div class="button-compartment-hollow button-compartment-shape-rounded size-df-button">
					<a class="button-tag capital-case">
						<span class="button-content">
							<span>Login</span>
						</span>
					</a>
				</div>`;
	} else {
		let { avatar, username } = data;
		return `<button type="button" aria-expanded="false" class="box-selected header-user-logged-in-btn">
					<span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
						<span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
							<img aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
						</span>
					<img alt="${username}" src="https://cdn.discordapp.com/avatars/${id}/${avatar}.png" decoding="async" data-nimg="intrinsic" class="box-selected-image" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: fill;">
					<noscript></noscript>
					</span>
					<span class="box-selected-name header-user-logged-in-title font-default-user">${username}</span>
					<span class="dropdown-box-arrow"></span>
				</button>`;
	}
}

function localhostDelete(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.callback = callback;
	xhr.onload = xhrSuccess;
	xhr.onerror = xhrError;
	xhr.open("DELETE", url, true);
	xhr.send(null);
}

function localhostGet(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.callback = callback;
	xhr.onload = xhrSuccess;
	xhr.onerror = xhrError;
	xhr.open("GET", url, true);
	xhr.send(null);
}

function xhrSuccess() {
	console.log(this.response)
	this.callback(JSON.parse(this.response.replace(/\<|\>/gm, "")));
}

function xhrError() {
	console.error(this.statusText);
}

function toggleHeaderUserLoggedInDropdown(show) {
	const expanded = $(".header-user-logged-in-btn");
	if (show) {
		toggleHeaderNavMenuDropdown(false);
		expanded.append(headerNavUserItems.html);
		expanded.attr("aria-expanded", "true");
		// make logout function
		$(`#logout`).click(function (event) {
			event.preventDefault();
			localhostDelete(`https://javking-api.herokuapp.com/guild-member/remove/${id}`, function (response) {
				location.href = "/projects/JavKing/home.html";
			});
			return false;
		});
		$(`#my-servers`).click(function (event) {
			event.preventDefault();
			location.href = "/projects/JavKing/src/players/dashboard.html?id=" + id;
			return false;
		});
	} else {
		$(".header-user-logged-in-dropdown").remove();
		expanded.attr("aria-expanded", "false");
	}
}

function toggleHeaderNavMenuDropdown(show) {
	const expanded = $("#menu");
	if (show) {
		toggleHeaderUserLoggedInDropdown(false);
		expanded.append(headerNavMenuItems.html);
		let headerNavMenuItemSelectorList = [".dropdown-item-btn[aria-id=dropdown-item-btn-"];

		headerNavItemList.forEach((item) => {
			for (let i = 0; i < headerNavMenuItemSelectorList.length; i++) {
				addHrefListener(headerNavMenuItemSelectorList[i], item);
			}
		});
		expanded.attr("aria-expanded", "true");
	} else {
		$(".box-selected-list-wrapper").remove();
		expanded.attr("aria-expanded", "false");
	}
}