'use strict';
const el = function( tagName, children ) {
  const $el = document.createElement( tagName );
  if ( $el instanceof Node && children && children.length ) {
    for ( const i of children ) {
      if ( typeof i === 'string' ) {
        $el.appendChild( document.createTextNode( i ) );
      } else if ( i instanceof Node ) {
        $el.appendChild( i );
      }
    }
  }
  return $el;
};
for( const tagName of [ 'p', 'table', 'td', 'th', 'tr' ] ) {
  el[tagName] = (children) => el( tagName, children );
}
const b = document.querySelector('body');
b.appendChild( el.p( 'dynamically added text inside a dynamically created paragraph' ) );
const table = el.table( [ el.tr( [
  el.th( 'Name' ),
  el.th( 'Value' )
] ) ] );
for(const i of ['isSecureContext', 'crypto']) {
  const tr = el.tr( [
    el.td( i ),
    el.td( String( window[ i ] ) )
  ] );
  table.appendChild( tr );
}
b.appendChild( table );
