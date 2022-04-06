import * as functions from './functions.js';

function footer() {
    // Main header container.
    const footer = functions.createHtmlElement('footer', null, null, null);
    const footercontainer = functions.createHtmlElement('div', null, ['container'], null);

    // Title.
    const title = functions.createHtmlElement('h2', null, ['title', 'large'], 'Slim\'s Burgers');

    // Links.
    const footerInfo = functions.createHtmlElement('div', null, ['footer-info'], null);
    const footerDesc = functions.createHtmlElement('p', null, null, `© 2022 Brychan Morris-Dafydd`);
    functions.appendElements( footerInfo, [footerDesc] );

    // Append all the above to the main header container.
    functions.nestElements([footer, footercontainer, [title, footerInfo]]);

    return footer;
}

export default footer;