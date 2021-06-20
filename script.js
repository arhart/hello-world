'use strict';
const b = document.querySelector('body');
const p = document.createElement('p');
const t = document.createTextNode( 'dynamically added text inside a dynamically created paragraph' );
p.appendChild( t );
b.appendChild( p );
