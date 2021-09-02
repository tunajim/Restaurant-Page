"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuLoader = void 0;

var menuLoader = function menuLoader() {
  var content = document.getElementById('content');
  var header = document.createElement('header');
  header.id = "header";
  var restaurantName = document.createElement('h1');
  restaurantName.id = "restaurantNameHome";
  restaurantName.textContent = "Bulgogi Master's BBQ";
  var logo = document.createElement('div');
  logo.id = "logo";

  var _bindHeaderElements = function _bindHeaderElements() {
    header.appendChild(restaurantName);
    header.appendChild(logo);
    content.appendChild(header);
  };

  var menuContainer = document.createElement('div');
  menuContainer.id = "menuContainer";
  var menuLabel = document.createElement('div');
  menuLabel.id = "menuLabel";
  var menuLabelText = document.createElement('h1');
  menuLabelText.id = "theMenu";
  menuLabelText.textContent = "Menu";

  var _bindMenuLabel = function _bindMenuLabel() {
    menuLabel.appendChild(menuLabelText);
    menuContainer.appendChild(menuLabel);
    content.appendChild(menuContainer);
  };

  var menuItemOne = document.createElement('div');
  menuItemOne.classList.add("menuItem");
  var menuItemLabel = document.createElement('div');
  menuItemLabel.classList.add("menuItemLabels");
  var itemNumberOne = document.createElement('h2');
  itemNumberOne.classList.add("itemNumber");
  itemNumberOne.textContent = "1.";
  var itemNumberOneName = document.createElement('h2');
  itemNumberOneName.classList.add("itemName");
  itemNumberOneName.textContent = "불고기";
  var itemNameEnglish = document.createElement('h2');
  itemNameEnglish.classList.add("itemNameEnglish");
  itemNameEnglish.textContent = "Bulgogi";
  var itemOnePrice = document.createElement('h2');
  itemOnePrice.classList.add("price");
  itemOnePrice.textContent = "$19.99";
  var itemOneDescription = document.createElement('p');
  itemOneDescription.classList.add("menuItemDescription");
  itemOneDescription.textContent = " Bulgogi is thinly sliced ribeye that is marinated in Bulgogi Master's secret sauce, which is a mix of soy sauce, sugar, garlic, onion, apple, black pepper , and sesame oil all blended until they are the perfect consistency.";

  var _bindFirstMenuItem = function _bindFirstMenuItem() {
    menuItemLabel.appendChild(itemNumberOne);
    menuItemLabel.appendChild(itemNumberOneName);
    menuItemLabel.appendChild(itemNameEnglish);
    menuItemLabel.appendChild(itemOnePrice);
    menuItemOne.appendChild(menuItemLabel);
    menuItemOne.appendChild(itemOneDescription);
    menuContainer.appendChild(menuItemOne);
  };

  var menuItemTwo = document.createElement('div');
  menuItemTwo.classList.add("menuItem");
  var menuItemTwoLabel = document.createElement('div');
  menuItemTwoLabel.classList.add("menuItemLabels");
  var itemNumberTwo = document.createElement('h2');
  itemNumberTwo.classList.add("itemNumber");
  itemNumberTwo.textContent = "2.";
  var itemNumberTwoName = document.createElement('h2');
  itemNumberTwoName.classList.add("itemName");
  itemNumberTwoName.textContent = "매운 돼지 불고기";
  var itemNumberTwoEnglish = document.createElement('h2');
  itemNumberTwoEnglish.classList.add("itemNameEnglish");
  itemNumberTwoEnglish.textContent = "Spicy Pork Bulgogi";
  var itemNumberTwoPrice = document.createElement('h2');
  itemNumberTwoPrice.classList.add("price");
  itemNumberTwoPrice.textContent = "$19.99";
  var itemNumberTwoDescription = document.createElement('p');
  itemNumberTwoDescription.classList.add("menuItemDescription");
  itemNumberTwoDescription.textContent = "Spicy pork bulgogi is very similar to bulgogi with the addition of gochugaru(korean chili flakes) which gives the pork its spice and red color. Sake is added into this marinade.  This is Bulgogi Master's favorite meal.";

  var _bindSecondMenuItem = function _bindSecondMenuItem() {
    menuItemTwoLabel.appendChild(itemNumberTwo);
    menuItemTwoLabel.appendChild(itemNumberTwoName);
    menuItemTwoLabel.appendChild(itemNumberTwoEnglish);
    menuItemTwoLabel.appendChild(itemNumberTwoPrice);
    menuItemTwo.appendChild(menuItemTwoLabel);
    menuItemTwo.appendChild(itemNumberTwoDescription);
    menuContainer.appendChild(menuItemTwo);
  };

  var menuItemThree = document.createElement('div');
  menuItemThree.classList.add("menuItem");
  var menuItemThreeLabel = document.createElement('div');
  menuItemThreeLabel.classList.add("menuItemLabels");
  var itemNumberThree = document.createElement('h2');
  itemNumberThree.classList.add("itemNumber");
  itemNumberThree.textContent = "3.";
  var itemNumberThreeName = document.createElement('h2');
  itemNumberThreeName.classList.add("itemName");
  itemNumberThreeName.textContent = "갈비";
  var itemNumberThreeEnglish = document.createElement('h2');
  itemNumberThreeEnglish.classList.add("itemNameEnglish");
  itemNumberThreeEnglish.textContent = "Galbi";
  var itemNumberThreePrice = document.createElement('h2');
  itemNumberThreePrice.classList.add("price");
  itemNumberThreePrice.textContent = "$22.99";
  var itemNumberThreeDescription = document.createElement('p');
  itemNumberThreeDescription.classList.add("menuItemDescription");
  itemNumberThreeDescription.textContent = "Galbi is marinated beef short-ribs, bone is left in. This is the favorite of Bulgogi Master's partner.";

  var _bindThirdMenuItem = function _bindThirdMenuItem() {
    menuItemThreeLabel.appendChild(itemNumberThree);
    menuItemThreeLabel.appendChild(itemNumberThreeName);
    menuItemThreeLabel.appendChild(itemNumberThreeEnglish);
    menuItemThreeLabel.appendChild(itemNumberThreePrice);
    menuItemThree.appendChild(menuItemThreeLabel);
    menuItemThree.appendChild(itemNumberThreeDescription);
    menuContainer.appendChild(menuItemThree);
  };

  var menuItemFour = document.createElement('div');
  menuItemFour.classList.add("menuItem");
  var menuItemFourLabel = document.createElement('div');
  menuItemFourLabel.classList.add("menuItemLabels");
  var itemNumberFour = document.createElement('h2');
  itemNumberFour.classList.add("itemNumber");
  itemNumberFour.textContent = "4.";
  var itemNumberFourName = document.createElement('h2');
  itemNumberFourName.classList.add("itemName");
  itemNumberFourName.textContent = "닭 불고기";
  var itemNumberFourEnglish = document.createElement('h2');
  itemNumberFourEnglish.classList.add("itemNameEnglish");
  itemNumberFourEnglish.textContent = "Galbi";
  var itemNumberFourPrice = document.createElement('h2');
  itemNumberFourPrice.classList.add("price");
  itemNumberFourPrice.textContent = "$17.99";
  var itemNumberFourDescription = document.createElement('p');
  itemNumberFourDescription.classList.add("menuItemDescription");
  itemNumberFourDescription.textContent = "Chicken Bulgogi is marinated in the same way as the beef bulgogi, however it is cut into chunks rather than sliced";

  var _bindFourthMenuItem = function _bindFourthMenuItem() {
    menuItemFourLabel.appendChild(itemNumberFour);
    menuItemFourLabel.appendChild(itemNumberFourName);
    menuItemFourLabel.appendChild(itemNumberFourEnglish);
    menuItemFourLabel.appendChild(itemNumberFourPrice);
    menuItemFour.appendChild(menuItemFourLabel);
    menuItemFour.appendChild(itemNumberFourDescription);
    menuContainer.appendChild(menuItemFour);
  };

  var _bindMenuItems = function _bindMenuItems() {
    content.appendChild(menuContainer);
  };

  var executeBinds = function executeBinds() {
    _bindHeaderElements();

    _bindMenuLabel();

    _bindFirstMenuItem();

    _bindSecondMenuItem();

    _bindThirdMenuItem();

    _bindFourthMenuItem();

    _bindMenuItems();
  };

  return {
    executeBinds: executeBinds,
    restaurantName: restaurantName
  };
};

exports.menuLoader = menuLoader;