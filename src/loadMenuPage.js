const menuLoader = () => {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.id = "header";
    
    const restaurantName = document.createElement('h1');
    restaurantName.id =  "restaurantNameHome";
    restaurantName.textContent = "Bulgogi Master's BBQ";

    const logo = document.createElement('div');
    logo.id = "logo";

    const _bindHeaderElements = () => {
        header.appendChild(restaurantName);
        header.appendChild(logo);
        content.appendChild(header);
    }

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";

    const menuLabel = document.createElement('div');
    menuLabel.id = "menuLabel";

    const menuLabelText = document.createElement('h1');
    menuLabelText.id = "theMenu";
    menuLabelText.textContent = "Menu";

    const _bindMenuLabel = () => {
        menuLabel.appendChild(menuLabelText);
        menuContainer.appendChild(menuLabel);
        content.appendChild(menuContainer);
    }

    const menuItemOne = document.createElement('div');
    menuItemOne.classList.add("menuItem");

    const menuItemLabel = document.createElement('div');
    menuItemLabel.classList.add("menuItemLabels");

    const itemNumberOne = document.createElement('h2');
    itemNumberOne.classList.add("itemNumber");
    itemNumberOne.textContent = "1.";

    const itemNumberOneName = document.createElement('h2');
    itemNumberOneName.classList.add("itemName");
    itemNumberOneName.textContent = "불고기";

    const itemNameEnglish = document.createElement('h2');
    itemNameEnglish.classList.add("itemNameEnglish");
    itemNameEnglish.textContent = "Bulgogi";

    const itemOnePrice = document.createElement('h2');
    itemOnePrice.classList.add("price");
    itemOnePrice.textContent = "$19.99";

    const itemOneDescription = document.createElement('p');
    itemOneDescription.classList.add("menuItemDescription");
    itemOneDescription.textContent = " Bulgogi is thinly sliced ribeye that is marinated in Bulgogi Master's secret sauce, which is a mix of soy sauce, sugar, garlic, onion, apple, black pepper , and sesame oil all blended until they are the perfect consistency.";

    const _bindFirstMenuItem = () => {
        menuItemLabel.appendChild(itemNumberOne);
        menuItemLabel.appendChild(itemNumberOneName);
        menuItemLabel.appendChild(itemNameEnglish);
        menuItemLabel.appendChild(itemOnePrice);
        menuItemOne.appendChild(menuItemLabel);
        menuItemOne.appendChild(itemOneDescription);
        menuContainer.appendChild(menuItemOne);
    }

    const menuItemTwo = document.createElement('div');
    menuItemTwo.classList.add("menuItem");

    const menuItemTwoLabel = document.createElement('div');
    menuItemTwoLabel.classList.add("menuItemLabels");

    const itemNumberTwo = document.createElement('h2');
    itemNumberTwo.classList.add("itemNumber");
    itemNumberTwo.textContent = "2.";


    const itemNumberTwoName = document.createElement('h2');
    itemNumberTwoName.classList.add("itemName");
    itemNumberTwoName.textContent = "매운 돼지 불고기";

    const itemNumberTwoEnglish = document.createElement('h2');
    itemNumberTwoEnglish.classList.add("itemNameEnglish");
    itemNumberTwoEnglish.textContent = "Spicy Pork Bulgogi";
    
    const itemNumberTwoPrice = document.createElement('h2');
    itemNumberTwoPrice.classList.add("price");
    itemNumberTwoPrice.textContent = "$19.99";

    const itemNumberTwoDescription = document.createElement('p');
    itemNumberTwoDescription.classList.add("menuItemDescription");
    itemNumberTwoDescription.textContent = "Spicy pork bulgogi is very similar to bulgogi with the addition of gochugaru(korean chili flakes) which gives the pork its spice and red color. Sake is added into this marinade.  This is Bulgogi Master's favorite meal.";

    const _bindSecondMenuItem = () => {
        menuItemTwoLabel.appendChild(itemNumberTwo);
        menuItemTwoLabel.appendChild(itemNumberTwoName);
        menuItemTwoLabel.appendChild(itemNumberTwoEnglish);
        menuItemTwoLabel.appendChild(itemNumberTwoPrice);
        menuItemTwo.appendChild(menuItemTwoLabel);
        menuItemTwo.appendChild(itemNumberTwoDescription);
        menuContainer.appendChild(menuItemTwo);
    }

    const menuItemThree = document.createElement('div');
    menuItemThree.classList.add("menuItem");

    const menuItemThreeLabel = document.createElement('div');
    menuItemThreeLabel.classList.add("menuItemLabels");

    const itemNumberThree = document.createElement('h2');
    itemNumberThree.classList.add("itemNumber");
    itemNumberThree.textContent = "3.";


    const itemNumberThreeName = document.createElement('h2');
    itemNumberThreeName.classList.add("itemName");
    itemNumberThreeName.textContent = "갈비";

    const itemNumberThreeEnglish = document.createElement('h2');
    itemNumberThreeEnglish.classList.add("itemNameEnglish");
    itemNumberThreeEnglish.textContent = "Galbi";
    
    const itemNumberThreePrice = document.createElement('h2');
    itemNumberThreePrice.classList.add("price");
    itemNumberThreePrice.textContent = "$22.99";

    const itemNumberThreeDescription = document.createElement('p');
    itemNumberThreeDescription.classList.add("menuItemDescription");
    itemNumberThreeDescription.textContent = "Galbi is marinated beef short-ribs, bone is left in. This is the favorite of Bulgogi Master's partner.";

    const _bindThirdMenuItem = () => {
        menuItemThreeLabel.appendChild(itemNumberThree);
        menuItemThreeLabel.appendChild(itemNumberThreeName);
        menuItemThreeLabel.appendChild(itemNumberThreeEnglish);
        menuItemThreeLabel.appendChild(itemNumberThreePrice);
        menuItemThree.appendChild(menuItemThreeLabel);
        menuItemThree.appendChild(itemNumberThreeDescription);
        menuContainer.appendChild(menuItemThree);
    }

    const menuItemFour = document.createElement('div');
    menuItemFour.classList.add("menuItem");

    const menuItemFourLabel = document.createElement('div');
    menuItemFourLabel.classList.add("menuItemLabels");

    const itemNumberFour = document.createElement('h2');
    itemNumberFour.classList.add("itemNumber");
    itemNumberFour.textContent = "4.";


    const itemNumberFourName = document.createElement('h2');
    itemNumberFourName.classList.add("itemName");
    itemNumberFourName.textContent = "닭 불고기";

    const itemNumberFourEnglish = document.createElement('h2');
    itemNumberFourEnglish.classList.add("itemNameEnglish");
    itemNumberFourEnglish.textContent = "Galbi";
    
    const itemNumberFourPrice = document.createElement('h2');
    itemNumberFourPrice.classList.add("price");
    itemNumberFourPrice.textContent = "$17.99";

    const itemNumberFourDescription = document.createElement('p');
    itemNumberFourDescription.classList.add("menuItemDescription");
    itemNumberFourDescription.textContent = "Chicken Bulgogi is marinated in the same way as the beef bulgogi, however it is cut into chunks rather than sliced";

    const _bindFourthMenuItem = () => {
        menuItemFourLabel.appendChild(itemNumberFour);
        menuItemFourLabel.appendChild(itemNumberFourName);
        menuItemFourLabel.appendChild(itemNumberFourEnglish);
        menuItemFourLabel.appendChild(itemNumberFourPrice);
        menuItemFour.appendChild(menuItemFourLabel);
        menuItemFour.appendChild(itemNumberFourDescription);
        menuContainer.appendChild(menuItemFour);
    }

    const _bindMenuItems = () => {
        content.appendChild(menuContainer);
    }

    const executeBinds = () => {
        _bindHeaderElements();
        _bindMenuLabel();
        _bindFirstMenuItem();
        _bindSecondMenuItem();
        _bindThirdMenuItem();
        _bindFourthMenuItem();
        _bindMenuItems();
    }

    return {
        executeBinds,
        restaurantName,
    }

}    


export {
    menuLoader,
};