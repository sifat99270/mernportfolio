// header or navbar
const barOpenIcon = document.querySelector(".header__mobile-icon");
// bar close button
const barClose = document.querySelector("#bar__close");

// mobile navigation bar
const headerMobile = document.querySelector(".header__mobile");

// mobile header unordered list
const mobileHeaderUl = document.querySelector(".header__mobile .header__list");
// mobile header list item array
const mobileHeaderLi = document.querySelectorAll(
  ".header__mobile .header__list li"
);
// desktop header list item array
const desktopHeaderLi = document.querySelectorAll(
  ".header__desktop .header__list li"
);
// mobile dark mode light mode button
const mobileThemeButtton = document.querySelector(
  ".header__mobile .header__mode"
);
//desktop dark mode night button
const desktopThemeButton = document.querySelector(
  ".header__desktop .header__information .header__mode"
);
// mode change function
function changeTheme() {
  document.documentElement.classList.toggle("light");
}
// mobile navigation open function
function headerOpen() {
  headerMobile.classList.add("active");
}

// mobile navigation close function
function headerClose() {
  headerMobile.classList.remove("active");
}

// change active class when click nav item
function headerAddActiveClass(index) {
  const catchMobileActiveItem = document.querySelector(
    ".header__mobile .header__list li.active"
  );
  const catchDesktopActiveItem = document.querySelector(
    ".header__desktop .header__list li.active"
  );
  catchMobileActiveItem.classList.remove("active");
  catchDesktopActiveItem.classList.remove("active");
  headerMobile.classList.remove("active");
  desktopHeaderLi[index].classList.add("active");
  mobileHeaderLi[index].classList.add("active");
}

// navbar close eventlistener
barClose.addEventListener("click", headerClose);

// navbar open eventlistener
barOpenIcon.addEventListener("click", headerOpen);

// mobile navigation click eventlistener
mobileHeaderLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    headerAddActiveClass(index);
  });
});

// desktop or tab navigation click eventlistener
desktopHeaderLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    headerAddActiveClass(index);
  });
});

// mobile theme change eventListener
mobileThemeButtton.addEventListener("click", changeTheme);
// desktop theme change eventListener
desktopThemeButton.addEventListener("click", changeTheme);
