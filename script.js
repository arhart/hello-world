'use strict';
const b = document.querySelector('body');
const p = document.createElement('p');
const t = document.createTextNode( 'dynamically added text inside a dynamically created paragraph' );
p.appendChild( t );
b.appendChild( p );
const table = document.createElement('table');
const headRow = document.createElement('tr');
const $headerName = document.createElement('th');
$headerName.appendChild( document.createTextNode( 'Name' ) );
headRow.appendChild( $headerName );
const $headerValue = document.createElement('th');
$headerValue.appendChild( document.createTextNode( 'Value' ) );
headRow.appendChild( $headerValue );
table.appendChild( headRow );
for(const i of ['isSecureContext', 'crypto']) {
  const tr = document.createElement('tr');
  const $name = document.createElement('td');
  $name.appendChild( document.createTextNode( i ) );
  const $value = document.createElement('td');
  $value.appendChild( document.createTextNode( window[i] ) );
  tr.appendChild( $name );
  tr.appendChild( $value );
  table.appendChild( tr );
}
b.appendChild( table );
