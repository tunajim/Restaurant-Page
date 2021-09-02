"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("./style.css");

require("./kbbqImg.jpg");

require("./korean.png");

require("./restaurantLocation.png");

var _loadPage = require("./loadPage");

var hangul = _interopRequireWildcard(require("hangul-js"));

var _loadHomePage = require("./loadHomePage");

var _loadMenuPage = require("./loadMenuPage");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import {test, onLoad, removeStartPage, enterButton} from './loadPage';
var load = (0, _loadPage.testLoader)();
var loadHome = (0, _loadHomePage.homeLoader)();
var loadMenu = (0, _loadMenuPage.menuLoader)();
var firstLoad = true;
window.addEventListener('load', load.onLoad(), {
  once: true
});
var homeBtn = load.homeButton;
var menuFirstPageBtn = load.menuButton;
homeBtn.addEventListener('click', function nextPage() {
  if (firstLoad === true) {
    load.removeStartPage();
    firstLoad === false;
  }

  loadHome.loadHomeTab();
  console.log('works');
});
menuFirstPageBtn.addEventListener('click', function nextPage() {
  load.removeStartPage();
  loadMenu.executeBinds();
});
var menuHomePageBtn = loadHome.menu;
menuHomePageBtn.addEventListener('click', function nextPage() {
  if (firstLoad === true) {
    load.removeStartPage();
  }

  loadMenu.executeBinds();
});
var homeMenuBtn = loadMenu.restaurantName;
homeMenuBtn.addEventListener('click', function nextPage() {
  load.removeStartPage();
  loadHome.loadHomeTab();
});
console.log(hangul);
console.log('불고기');