"use strict";

window.addEventListener("load", initApp);

function initApp() {
    initTabs();
}

function initTabs() {
    window.addEventListener("hashchange", showTab); // whenever the hash changes (you hit a link)
    showTab(); // by default, call showTab to display the first view
}

function showTab() {
    let tab = "#home"; // default tab

    if (location.hash) {
        tab = location.hash;
    }

    hideAllTabs(); // hide all tabs

    const tabLink = document.querySelector(`a.tab-link[href="${tab}"]`); // reference to link in nav bar
    tabLink.classList.add("active"); // add .active to active link in tab bar

    document.querySelector(tab).classList.add("active"); // add .active to the tab view you want to show
}

function hideAllTabs() {
    // remove .active for all .tab-content elements (all tabs) and .tab-link elements (all links)
    document.querySelectorAll(".tab-content").forEach(link => link.classList.remove("active"));
    document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
}
