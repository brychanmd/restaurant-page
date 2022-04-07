import * as functions from './functions.js';

function header() {
    // Main header container.
    const header = functions.createHtmlElement('header', null, null, null);
    const headercontainer = functions.createHtmlElement('div', null, ['container'], null);

    // Title.
    const title = functions.createHtmlElement('h1', null, ['title', 'large'], 'Slim\'s Burgers');

    // Menu.
    const menu = functions.createHtmlElement('menu');
    let menuItemsList = ['About', 'Menu', 'Contact'];
    let menuItemsElements = [];
    let firstIteration = true;
    menuItemsList.forEach( item => {
        let button = functions.createHtmlElement( 'button', `btn${item}`, firstIteration ? ['menu-item', 'active'] : ['menu-item'], item );
        menuItemsElements.push(button);
        firstIteration = false;
    } );
    functions.appendElements(menu, menuItemsElements);

    // Append all the above to the main header container.
    functions.nestElements([header, headercontainer, [title, menu]]);

    return header;
}

export default header;