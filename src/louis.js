/**
* Louis main
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** External Dependecies **/
const connect = require( 'gulp-connect' );

/** Internal Dependecies **/
import { possibleOptions } from './constants';
import { analyze } from './analyze';
import { defaultOptions } from './constants';

const louis = function () {

  const passedOptions = { performanceBudget: {} };

  process.argv.forEach( function ( val, index, array ) {
    const param = val.split( '=' );

    if ( possibleOptions.indexOf( param[ 0 ] ) > -1 ) {
      passedOptions.performanceBudget[ param[ 0 ] ] = param[ 1 ];
    }
  } );

  const options = Object.assign( {}, defaultOptions, passedOptions );

  connect.server( {
    port: 8888,
  } );

  analyze( options, connect.serverClose );
};

louis();

module.exports = louis;
