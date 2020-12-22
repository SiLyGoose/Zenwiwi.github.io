$(window).on('load', function () {
    setTimeout(() => {
        $('.loader-wrapper').fadeOut('slow');
    }, 1000);
});

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const circle = document.querySelector('.circle');

logo.addEventListener('click', () => {
    if (!$('.menu.active')[0]) circle.classList.add('expand');
})

function toggleMenu() {
    menu.classList.toggle('active');
    // if (menu.classList.contains('active')) {
    // menu.classList.remove('active');
    // if (menu.querySelector('.submenu-active')) menu.querySelector('.submenu-active').classList.remove('submenu-active');
    // toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
    // } else {
    // menu.classList.add('active');
    // toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
    // }
}

toggle.addEventListener('click', toggleMenu, false);

// const items = document.querySelectorAll('.item');

// function toggleItem() {
//     if (this.classList.contains('submenu-active')) {
//         this.classList.remove('submenu-active');
//     } else if (menu.querySelector('.submenu-active')) {
//         menu.querySelector('.submenu-active').classList.remove('submenu-active');
//         this.classList.add('submenu-active');
//     } else {
//         this.classList.add('submenu-active');
//     }
// }

// for (let item of items) {
//     if (item.querySelector('.submenu')) {
//         item.addEventListener('click', toggleItem, false);
//         item.addEventListener('keypress', toggleItem, false);
//     }
// }

function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside || menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('.submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);

const menuToggleBtn = document.querySelector('.menu-btn');
// var menuOpen = false;
function toggleMenuBtn() {
    menuToggleBtn.classList.toggle('open')
    // if (!menuOpen) {
    //     menuToggleBtn.classList.add('open');
    //     menuOpen = true;
    // } else {
    //     menuToggleBtn.classList.remove('open');
    //     menuOpen = false;
    // }
}
menuToggleBtn.addEventListener('click', toggleMenuBtn);

function delayUrlLoad(url, s) {
    if (!$('.menu.active')[0]) {
        setTimeout(() => {
            window.location.href = window.location.origin + url;
        }, s * 1000);
    }
}