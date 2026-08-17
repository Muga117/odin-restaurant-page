import "./styles.css";
import {addMenuContent} from "./menu.js";
import {addHomeContent} from "./home.js";
import {addAboutContent} from "./about.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener('click', event => addHomeContent());
menuBtn.addEventListener('click', event => addMenuContent());
aboutBtn.addEventListener('click', event => addAboutContent());

addHomeContent();

console.log("Hello World!");