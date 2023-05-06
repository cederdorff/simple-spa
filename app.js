"use strict";

window.addEventListener("load", initApp);

function initApp() {
    window.addEventListener("hashchange", showTab);
    showTab();
}

function showTab() {
    let tab = "#home";
    if (location.hash) {
        tab = location.hash;
    }

    const tabLink = document.querySelector(`a.tab-link[href="${tab}"]`); // reference to link
    hideAllTabs(); // hide all tabs
    tabLink.classList.add("active"); // add .active to "this" link
    document.querySelector(tab).classList.add("active"); // add .active to the tab you want to show
}

function hideAllTabs() {
    // remove .active for all .tab-content elements (all tabs) and .tab-link elements (all links)
    document.querySelectorAll(".tab-content").forEach(link => link.classList.remove("active"));
    document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
}
