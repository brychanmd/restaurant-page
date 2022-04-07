import * as functions from './functions.js';

function about() {
    // Main body container.
    const body = functions.createHtmlElement('article', 'bodyAbout', ['container'], null);

    // Subtitle.
    const title = functions.createHtmlElement('h2', null, ['image-text__title'], 'Our story');

    // Paragraph
    let paragraphText = `Brothers Omar (who's childhood nickname was "Slim") and Yunes grew up with a respect for hard work, and an appreciation for the value of fresh ingredients having both spent many hours working in their father's grocery as teenagers. They carried their strong work ethic and the appreciation of fresh food with them and, in 2011, opened pizza place in New Hope, MN. It wasn't long, however, before they decided to expand both menu and venue. In February of 2013, the brothers moved back to their roots and opened Slim's on busy and bustling Brooklyn Boulevard in Brooklyn Center, where it's still about the basics: hard work and fresh food.`;
    const paragraph = functions.createHtmlElement('p', null, ['shrink'], paragraphText)

    // Image.
    const imagewrapper = functions.createHtmlElement('div', null, ['img-wrapper', 'shrink'], null)
    const image = new Image();
    image.src = './images/about-burgers.jpg';
    functions.nestElements([imagewrapper, image]);

    // Add items to an image-text div.
    const textImage = functions.createHtmlElement('div', null, ['image-text'], null)
    functions.appendElements(textImage,[ paragraph, imagewrapper]);

    // Append all to body.
    functions.appendElements(body, [title, textImage]);

    return body;
}

function menu() {
    // Main body container.
    const body = functions.createHtmlElement('article', null, ['container'], null);

    // Subtitle.
    const title = functions.createHtmlElement('h2', null, ['image-text__title'], 'Our menu');

    // Paragraph
    let paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
    const paragraph = functions.createHtmlElement('p', null, ['shrink'], paragraphText)

    // Cards.
    let cardsInfo = [
        {
            title: 'Beef Burger',
            description: `Honest beef, red onion relish and lettuce.`,
            price: '£10.00',
            calories: '656kcals'
        },
        {
            title: 'Plant Burger',
            description: `Beyond Meat burger, vegan smoked Gouda, Rubies Chipotle ‘Mayo’, mustard, red onion, pickles, lettuce.`,
            price: '£13.00',
            calories: '726kcals'
        },
        {
            title: 'Cluckin\' Burger',
            description: `Free-range chicken breast, basil pesto, mustard mayo, tomato and rocket.`,
            price: '£12.50',
            calories: '630kcals'
        },
        {
            title: 'Honest Burger',
            description: `Honest beef, red onion relish, smoked bacon, cheddar, lettuce and pickles.`,
            price: '£13.75',
            calories: '733kcals'
        },

    ]
    let cardsElements = [];

    const cardsWrapper = functions.createHtmlElement( 'div', null, ['cards'], null );
    cardsInfo.forEach(element => {
        let card = functions.createHtmlElement('div', null, ['card'], null);
        let title = functions.createHtmlElement('h3', null, ['card__title'], element.title);
        let description = functions.createHtmlElement('div', null, ['card__description'], element.description);
        let price = functions.createHtmlElement('div', null, ['card__price'], element.price);
        let calories = functions.createHtmlElement('div', null, ['card__cals'], element.calories);

        functions.appendElements(card, [title, description, price, calories]);

        cardsElements.push( card );
    });

    // Append all to body.
    functions.appendElements(cardsWrapper, cardsElements);
    functions.nestElements( [ body, [title, paragraph, cardsWrapper] ] );

    return body;
}

function contact() {
    // Main body container.
    const body = functions.createHtmlElement('article', null, ['container'], null);

    // Subtitle.
    const title = functions.createHtmlElement('h2', null, ['image-text__title'], 'Contact us');

    // Paragraph
    let paragraphText = `Something different about CONTACT`;
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

export {about, menu, contact};