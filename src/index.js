import './style.css';
import './kbbqImg.jpg';
import './korean.png';
import './restaurantLocation.png';
//import {test, onLoad, removeStartPage, enterButton} from './loadPage';
import{testLoader} from './loadPage';
import * as hangul from 'hangul-js';
import{homeLoader} from './loadHomePage';
import{menuLoader} from './loadMenuPage';

const load = testLoader();
const loadHome = homeLoader();
const loadMenu = menuLoader();
let firstLoad = true;

window.addEventListener('load', load.onLoad(), {once: true});

const homeBtn = load.homeButton;
const menuFirstPageBtn = load.menuButton;

homeBtn.addEventListener('click', function nextPage() {
    if(firstLoad === true){
        load.removeStartPage();
        firstLoad === false;
    }
    loadHome.loadHomeTab();
    console.log('works');
})

menuFirstPageBtn.addEventListener('click', function nextPage() {
    load.removeStartPage();
    loadMenu.executeBinds();
});

const menuHomePageBtn = loadHome.menu;

menuHomePageBtn.addEventListener('click', function nextPage(){ 
    if(firstLoad === true) {
        load.removeStartPage();
    }
    loadMenu.executeBinds();
})

const homeMenuBtn = loadMenu.restaurantName;

homeMenuBtn.addEventListener('click', function nextPage(){
    load.removeStartPage();
    loadHome.loadHomeTab();
})

console.log(hangul);
console.log('불고기');