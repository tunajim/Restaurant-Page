import {testLoader} from './loadPage';

const test = testLoader();

const homeLoader = () => {


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

    const mainDiv = document.createElement('div');
    mainDiv.id = "homePageDiv";
    
    const statement = document.createElement('div');
    statement.id = "statement";

    const welcome = document.createElement('h2');
    welcome.id = "welcome";

    const statementContent = document.createElement('p');
    statementContent.id = "statementContent";
    statementContent.textContent = "Bulgogi Master has ventured far and wide in search of the ultimate bulgogi, after many years, he discovered that the flavor and texture of these dishes were simply inadequate. Bulgogi Master, than took it upon himself to create a bulgogi so good, that even he would be satisfied.  He challenges you to experience what very well could be, the perfect bulgogi."

    let menu = document.createElement('button');
    menu.id = "menu";
    menu.textContent = "Menu";

    const _bindStatementElements = () => {
        statement.appendChild(welcome);
        statement.appendChild(statementContent);
        statement.appendChild(menu);
        mainDiv.appendChild(statement);


    }

    const information = document.createElement('div');
    information.id = "information";

    const hoursDiv = document.createElement('div');
    hoursDiv.id = "hours";

    const hoursLabel = document.createElement('h2');
    hoursLabel.id = "hoursLabel";
    hoursLabel.textContent = "Hours:";

    const hoursMonFriDiv = document.createElement('div');
    hoursMonFriDiv.classList.add("hoursValue");

    const mondayFridayLabel = document.createElement('p');
    mondayFridayLabel.textContent = "Monday-Friday";

    const monFriHours = document.createElement('p');
    monFriHours.textContent = "10:00 AM - 10:00 PM";

    const hoursSaturday = document.createElement('div');
    hoursSaturday.classList.add("hoursValue");

    const hoursLabelSaturday = document.createElement('p');
    hoursLabelSaturday.textContent = "Saturday";

    const hoursValueSaturday = document.createElement('p');
    hoursValueSaturday.textContent = "12:00 PM - 12:00 PM";

    const hoursSunday = document.createElement('div');
    hoursSunday.classList.add("hoursValue");

    const hoursLabelSunday = document.createElement('p');
    hoursLabelSunday.textContent = "Sunday";

    const hoursValueSunday = document.createElement('p');
    hoursValueSunday.textContent = "12:00 PM - 9:00 PM";

    const location = document.createElement('div');
    location.id = "location";

    const locationLabel = document.createElement('h2');
    locationLabel.id = "locationLabel";
    locationLabel.textContent = "Location:";

    const locationImg = document.createElement('div');
    locationImg.id = "locationImage";

    const _bindInformationElements = () => {
        hoursDiv.appendChild(hoursLabel);
        hoursMonFriDiv.appendChild(mondayFridayLabel);
        hoursMonFriDiv.appendChild(monFriHours);

        hoursDiv.appendChild(hoursMonFriDiv);

        hoursSaturday.appendChild(hoursLabelSaturday);
        hoursSaturday.appendChild(hoursValueSaturday);
        hoursDiv.appendChild(hoursSaturday);

        hoursSunday.appendChild(hoursLabelSunday);
        hoursSunday.appendChild(hoursValueSunday);
        hoursDiv.appendChild(hoursSunday);

        information.appendChild(hoursDiv);

        location.appendChild(locationLabel);
        location.appendChild(locationImg);
        information.appendChild(location);

        mainDiv.appendChild(information);
    }


    const contact = document.createElement('div');
    contact.id = "contact";

    const contactLabel = document.createElement('h2');
    contactLabel.id = "contactLabel";
    contactLabel.textContent = "Contact:";

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "(555)BUL-GOGI";

    const email = document.createElement('p');
    email.textContent = "bulgogimaster@gmail.com";

    const _bindContactElements = () => {
        contact.appendChild(contactLabel);
        contact.appendChild(phoneNumber);
        contact.appendChild(email);
        mainDiv.appendChild(contact);

        content.appendChild(mainDiv);
    }

    const loadHomeTab = () => {
        _bindHeaderElements();
        _bindStatementElements();
        _bindInformationElements();
        _bindContactElements();
    }

    return {
        loadHomeTab,
        menu
    }
}

export {homeLoader}