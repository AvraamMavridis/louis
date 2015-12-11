/**
* Constants
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** External Dependecies **/
import { whiteBright, red, green, black } from 'cli-color';

/**
 * Checks the results against the performance budget
 *
 * @param { object} budgetOptions
 * @param { object } actual results
 */
const _checkBudget = function ( budgetOptions, data, callback ) {
  const metrics = data.metrics;
  const bOptions = Object.keys( budgetOptions );
  let bLength = bOptions.length;

  console.log( '\n' + black.bgWhiteBright( 'Metrics analyzed against performance budget' ) + '\n' );

  while ( bLength-- ) {
    if ( metrics[ bOptions[ bLength ] ] > budgetOptions[ bOptions[ bLength ] ] ) {
      console.log( whiteBright.bgRed( bOptions[ bLength ] + ': ' ) +
                  red.bgWhiteBright( ' Expected < ' + budgetOptions[ bOptions[ bLength ] ] ) +
                  red.bgWhiteBright.underline( ' Actual = ' + metrics[ bOptions [ bLength ] ] ) );
    }
    else {
      console.log( whiteBright.bgGreen( bOptions[ bLength ] + ': ' ) +
                   green.bgWhiteBright( ' Expected < ' + budgetOptions[ bOptions[ bLength ] ] ) +
                   green.bgWhiteBright.underline( ' Actual = ' + metrics[ bOptions[ bLength ] ] ) );
    }
    delete metrics[ bOptions[ bLength ] ];
    callback();
  }
};

export const checkBudget = _checkBudget;
