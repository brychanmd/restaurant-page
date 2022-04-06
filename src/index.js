import * as functions from './functions.js';
import header from './header.js';
import bodyAbout from './bodyAbout.js';
import footer from './footer.js';
import './style.css';

const content = document.getElementById('content');

content.appendChild( header() );
content.appendChild( bodyAbout() );
content.appendChild( footer() );
