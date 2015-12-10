import { performanceBudgetSchema, optionsSchema } from './constants';
import * as joi from 'joi';
import * as clc from 'cli-color';

function validateHelper( options, schema ) {
  joi.validate( options, schema, function ( err ) {
    if ( err !== null ) {
      let length = err.details.length;

      while ( length-- ) {
        const message = err.details[ length ].message;
        console.log( clc.red.bgBlack( 'Error on options: ' + message ) );
        throw new Error( message );
      }
    }
  } );
}

export const validate = function ( options ) {
  validateHelper( options, optionsSchema );
  validateHelper( options.performanceBudget, performanceBudgetSchema );
  return true;
};
