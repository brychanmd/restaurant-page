import * as functions from './functions.js';

function bodyAbout() {
    // Main body container.
    const body = functions.createHtmlElement('article', null, ['container'], null);

    // Subtitle.
    const title = functions.createHtmlElement('h2', null, ['image-text__title'], 'Our story');

    // Paragraph
    let paragraphText = `Brothers Omar (who's childhood nickname was "Slim") and Yunes grew up with a respect for hard work, and an appreciation for the value of fresh ingredients having both spent many hours working in their father's grocery as teenagers. They carried their strong work ethic and the appreciation of fresh food with them and, in 2011, opened pizza place in New Hope, MN. It wasn't long, however, before they decided to expand both menu and venue. In February of 2013, the brothers moved back to their roots and opened Slim's on busy and bustling Brooklyn Boulevard in Brooklyn Center, where it's still about the basics: hard work and fresh food.`;
    const paragraph = functions.createHtmlElement('p', null, null, paragraphText)

    // Image.
    const imagewrapper = functions.createHtmlElement('div', null, ['img-wrapper'], null)
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

export default bodyAbout;