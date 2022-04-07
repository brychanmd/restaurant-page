import { appendElements } from "./functions.js";
import header from "./header.js";
import * as body from "./body.js";
import footer from "./footer.js";
import './style.css';

// Main content div.
const content = document.getElementById('content');
    
// Initialize homepage on load.
let sections = [
    header(),
    body.about(),
    footer()
];
appendElements( content, sections );

// Listen to menu buttons. Replace body section depending on click.
const buttons = document.querySelectorAll('.menu-item');
buttons.forEach( elem => {
    elem.addEventListener('click', (e) => {

        buttons.forEach( item => { item.classList.remove("active") });
        e.target.classList.add("active");

        let existing = document.querySelector('article');
        let replacement;
        if ( 'btnMenu' === e.target.id ) {
            replacement = body.menu();
            content.replaceChild( replacement, existing );
        } else if ('btnContact' === e.target.id ) {
            replacement = body.contact();
            content.replaceChild( replacement, existing );
        } else if ('btnAbout' === e.target.id ) {
            replacement = body.about();
            content.replaceChild( replacement, existing );
        } else {
            console.log('Oops something went wrong...');
        }
    });
})