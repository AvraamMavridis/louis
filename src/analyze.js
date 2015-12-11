/**
* Constants
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/** External Dependecies **/
import { black, yellow } from 'cli-color';
import * as fs from 'fs';
import { exec } from 'child_process';

/** Internal Dependecies **/
import { validate } from './validate';
import { checkBudget } from './performanceBudget';

/**
 * Returns the current Date in dd-mm-yyyy format
 *
 * @return { string } Date in dd-mm-yyyy format
 */
function getCurrentDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if ( dd < 10 ) {
    dd = '0' + dd;
  }
  if ( mm < 10 ) {
    mm ='0'+ mm;
  }

  today = `${dd}-${mm}-${yyyy}`;
  return today;
}

/**
 * Returns the results filename
 *
 * @return { string } filename
 */
function getResultsFileName() {
  return `results-${getCurrentDate()}.json`;
}

/**
 * Builds the command than will be passed to phantomas
 *
 * @param { object} options
 * @return { string } command to run on phantomas
 */
function buildCommand( options ) {
  const optionsIsValid = validate( options );

  if ( !optionsIsValid ) {
    throw new Error( 'Invalid options' );
  }

  let command = __dirname + '/../node_modules/.bin/phantomas ' + options.url;

  command += ' --engine ' + options.engine;
  command += ' --runs ' + options.runs;
  command += ' --timeout ' + options.timeout;
  command += ' --viewport ' + options.viewport;

  if ( options.noExternals )
  {
    command += '--no-externals';
  }

  command += ` --reporter=json > ${getResultsFileName()}`;

  return command;
}

/**
 * Analyzes the results and prints them on the console
 *
 * @param { object} options
 */
function _analyze( options, callback ) {
  const command = buildCommand( options );

  exec( command, function ( error, stdout, stderr ) {
    if ( error !== null ) {
      console.log( error );
      return false;
    }

    fs.readFile( getResultsFileName(), function ( err, data ) {

      data = JSON.parse( data );
      const metrics = data.metrics;
      const m = Object.keys( metrics );
      let mLength = m.length;

      // If the performanceBudget object is not empty analyze based on that
      if ( Object.keys( options.performanceBudget ).length ) {
        checkBudget( options.performanceBudget, data );
      }
      else {
        console.log( '\n' + black.bgWhiteBright( 'Metrics analyzed' ) + '\n' );
        while ( mLength-- ) {
          console.log( black.bgYellowBright.underline( m[ mLength ] ) + ' ' + yellow.bgBlack( metrics[ m[ mLength ] ] ) );
        }
        callback();
      }
    } );

  } );

}

export const analyze = _analyze;
