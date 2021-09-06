'use strict';
const el = function( tagName, ...rest ) {
  const $el = document.createElement( tagName );
  if ( typeof rest[0] === 'string' ) {
    $el.appendChild( document.createTextNode( rest[0] ) );
  }
  return $el;
};
for( const tagName of [ 'p', 'table', 'td', 'th', 'tr' ] ) {
  el[tagName] = (...rest) => el( tagName, ...rest );
}
const b = document.querySelector('body');
b.appendChild( el.p( 'dynamically added text inside a dynamically created paragraph' ) );
const table = el.table();
const headRow = el.tr();
headRow.appendChild( el.th( 'Name' ) );
headRow.appendChild( el.th( 'Value' ) );
table.appendChild( headRow );
for(const i of ['isSecureContext', 'crypto']) {
  const tr = el.tr();
  tr.appendChild( el.td( i ) );
  tr.appendChild( el.td( String( window[i] ) ) );
  table.appendChild( tr );
}
b.appendChild( table );
