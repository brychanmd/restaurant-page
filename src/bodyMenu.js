import * as functions from './functions.js';

function bodyMenu() {
    // Main body container.
    const body = functions.createHtmlElement('article', null, ['container'], null);

    // Subtitle.
    const title = functions.createHtmlElement('h2', null, ['image-text__title'], 'Our story');

    // Paragraph
    let paragraphText = `Something different`;
    const paragraph = functions.createHtmlElement('p', null, ['shrink'], paragraphText)

    // Image.
    const imagewrapper = functions.createHtmlElement('div', null, ['img-wrapper', 'shrink'], null)
    const image = new Image();
    image.src = './images/about-burgers.jpg';
    functions.nestElements([imagewrapper, image])

    // Add items to an image-text div.
    const textImage = functions.createHtmlElement('div', null, ['image-text'], null)
    functions.appendElements(textImage,[ paragraph, imagewrapper]);

    // Append all to body.
    functions.appendElements(body, [title, textImage]);

    return body;
}

export default bodyMenu;