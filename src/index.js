import * as functions from './functions.js';
import header from './header.js';
import bodyAbout from './bodyAbout.js';
import './style.css';

const content = document.getElementById('content');

content.appendChild( header() );
content.appendChild( bodyAbout() );
