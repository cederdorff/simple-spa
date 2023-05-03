"use strict";

window.addEventListener("load", initApp);

function initApp() {
    initTabs();
}

function initTabs() {
    document.querySelectorAll(".tab-link").forEach(addClick); // add click event to all tab-links
    // if hash - if tab already selected (see #hash in browser)
    if (location.hash) {
        showTab(location.hash);
    } else {
        showTab("#home");
    }
}

function addClick(tabLink) {
    tabLink.addEventListener("click", () => showTab(tabLink.getAttribute("href")));
}

function showTab(selector) {
    const tabLink = document.querySelector(`a.tab-link[href="${selector}"]`); // reference to link
    hideAllTabs(); // hide all tabs
    tabLink.classList.add("active"); // add .active to "this" link
    document.querySelector(selector).classList.add("active"); // add .active to the tab you want to show
}

function hideAllTabs() {
    // remove .active for all .tab-content elements (all tabs) and .tab-link elements (all links)
    document.querySelectorAll(".tab-content").forEach(link => link.classList.remove("active"));
    document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
}
