import { initViews } from "./view-router.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app.js is running 🎉");
    initViews();
}
