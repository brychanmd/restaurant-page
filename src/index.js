import { appendElements } from "./functions.js";
import header from "./header.js";
import bodyAbout from "./bodyAbout.js";
import bodyMenu from "./bodyMenu.js";
import bodyContact from "./bodyContact.js";
import footer from "./footer.js";
import './style.css';

// Main content div.
const content = document.getElementById('content');
    
// Initialize homepage on load.
let sections = [
    header(),
    bodyAbout(),
    footer()
];
appendElements( content, sections );

// Listen to menu buttons. Replace body section depending on click.
const buttons = document.querySelectorAll('.menu-item');
buttons.forEach( elem => {
    elem.addEventListener('click', (e) => {
        let existing;
        let replacement;
        switch(e.target.id) {
            case 'btnMenu':
                existing = document.querySelector('article');
                replacement = bodyMenu();
                content.replaceChild( replacement, existing );
                break;
            case 'btnContact':
                existing = document.querySelector('article');
                replacement = bodyContact();
                content.replaceChild( replacement, existing );
                break;
            case 'btnAbout':
                existing = document.querySelector('article');
                replacement = bodyAbout();
                content.replaceChild( replacement, existing );
                break;
            default:
                console.log('oops something went wrong!');
    
        }
    });
})