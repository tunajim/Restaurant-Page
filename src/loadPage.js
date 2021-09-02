
const testLoader = () => {
    const content = document.getElementById("content");

    const startingContainer = document.createElement("div");
    startingContainer.id = "container";

    const restaurantName = document.createElement("h1");
    restaurantName.id = "restaurantName";
    restaurantName.setAttribute('style', 'white-space: pre;');
    restaurantName.textContent = "Bulgogi Master's \r\n BBQ";

    const homeButton = document.createElement("button");
    homeButton.id = "home";
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menu";
    menuButton.textContent = "Menu";

    const logoDiv = document.createElement("div");
    logoDiv.id = "logoContainer";

    const bbqLogo = document.createElement("img");
    bbqLogo.id = "logo";

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "buttonContainer";

    const onLoad = () => {
        content.appendChild(startingContainer);
        content.appendChild(buttonContainer);
        buttonContainer.appendChild(homeButton);
        buttonContainer.appendChild(menuButton);
        startingContainer.appendChild(restaurantName);
        startingContainer.appendChild(logoDiv);
        logoDiv.appendChild(bbqLogo);
    }

    const test = () => {
        console.log("it works");
        console.log(content);
    }

    const removeStartPage = () => {
        while(content.firstChild){
            content.removeChild(content.lastChild);
        }
    }

    return {
        onLoad,
        test,
        removeStartPage,
        homeButton,
        menuButton
    }
}


//export{test, onLoad, removeStartPage, homeButton, menuButton};
export{testLoader}