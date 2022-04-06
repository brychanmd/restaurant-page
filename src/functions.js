/**
 * Create a single html element.
 * 
 * @param {string} tag - The html element tag.
 * @param {string} id - The element id.
 * @param {Array} tag - List of classes to add.
 * @param {string} id - The element id.
 */
function createHtmlElement( tag, id, classes, innerText ) {

    let element = document.createElement(tag);

    if ( id ) element.id = id;
    if ( classes && Array.isArray( classes ) ) element.classList.add( ...classes );
    if ( innerText ) element.innerText = innerText;

    return element;
}


/**
 * Nest elements within each other.  
 * First element is parent, second element is child level one, third is child level 2 etc.
 * You can also provide an array of elements inside the main array, these will be appended as multiple children.
 * 
 * @param {Array} elements - Array of elements.
 */
function nestElements( elements ) {

    // Reverse items.
    elements.reverse();
    // Append each item to the next one in the array.
    for ( let i = 0; i < elements.length -1; i++ ) {
        // Check if array and isn't last item in array.
        if ( i + 1 !== elements.length && Array.isArray( elements[i] ) ) {
            appendElements( elements[i + 1], elements[i] )
        } else {
            elements[i + 1].appendChild( elements[i] );
        }
    }
}

/**
 * Append elements to a parent container.  
 * All elements will be direct children of the parent element.
 *
 * @param {element} parent - The parent element. 
 * @param {Array} elements - Array of elements.
 */
function appendElements( parent, children ) {

    children.forEach( element => {
        parent.appendChild( element );
    });


}

export { createHtmlElement, nestElements, appendElements };