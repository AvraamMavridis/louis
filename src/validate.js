/**
* Validation submodule
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** External Dependecies **/
import * as joi from 'joi';
import { red } from 'cli-color';

/** Internal Dependecies **/
import { performanceBudgetSchema, optionsSchema } from './constants';

/**
 * Validates the passed params against a schema
 *
 * @param { object} passed options
 * @param { object } validation schema
 */
function validateHelper( options, schema ) {
  joi.validate( options, schema, function ( err ) {
    if ( err !== null ) {
      let length = err.details.length;

      while ( length-- ) {
        const message = err.details[ length ].message;
        console.log( red.bgBlack( 'Error on options: ' + message ) );
        throw new Error( message );
      }
    }
  } );
}

export const validate = function ( options = {} ) {
  validateHelper( options, optionsSchema );
  validateHelper( options.performanceBudget, performanceBudgetSchema );
  return true;
};
