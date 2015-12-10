/**
* Constants
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** External Dependecies **/
import * as clc from 'cli-color';

/**
 * Checks the results against the performance budget
 *
 * @param { object} budgetOptions
 * @param { object } actual results
 */
const _checkBudget = function ( budgetOptions, data ) {
  const metrics = data.metrics;
  const bOptions = Object.keys( budgetOptions );
  let bLength = bOptions.length;

  console.log( '\n' + clc.black.bgWhiteBright( 'Metrics analyzed against performance budget' ) + '\n' );

  while ( bLength-- ) {
    if ( metrics[ bOptions[ bLength ] ] > budgetOptions[ bOptions[ bLength ] ] ) {
      console.log( clc.whiteBright.bgRed( bOptions[ bLength ] + ': ' ) +
                  clc.red.bgWhiteBright( ' Expected < ' + budgetOptions[ bOptions[ bLength ] ] ) +
                  clc.red.bgWhiteBright.underline( ' Actual = ' + metrics[ bOptions [ bLength ] ] ) );
    }
    else {
      console.log( clc.whiteBright.bgGreen( bOptions[ bLength ] + ': ' ) +
                   clc.green.bgWhiteBright( ' Expected < ' + budgetOptions[ bOptions[ bLength ] ] ) +
                   clc.green.bgWhiteBright.underline( ' Actual = ' + metrics[ bOptions[ bLength ] ] ) );
    }
    delete metrics[ bOptions[ bLength ] ];
  }
};

export const checkBudget = _checkBudget;
