/**
* Louis main
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** Internal Dependecies **/
import { possiblePerformanceBudgetOptions, possibleRunnerOptions } from './constants';
import { analyze } from './analyze';
import { defaultOptions } from './constants';

const louis = function (url, options) {
  return new Promise( function( resolve, reject ) {
    const passedOptions = { performanceBudget: {} };

    Object.keys( options ).forEach( function ( key ) {
      const value = options[ key ];

      if ( possiblePerformanceBudgetOptions.indexOf( key ) > -1 ) {
        passedOptions.performanceBudget[ key ] = value;
      }

      else if ( possibleRunnerOptions.indexOf( key ) > -1 ) {
        passedOptions[ key ] = value;
      }

    } );

    options = Object.assign( {}, defaultOptions, passedOptions );

    analyze( options, resolve );
  } );
};

export default louis;
