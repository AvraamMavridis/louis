// External dependencies
const connect = require( 'gulp-connect' );

// Internal dependencies
const analyze = require( './analyze' );

import { possibleOptions } from './constants';

console.log( possibleOptions );

const defaultOptions = {
  timeout: 60,
  runs: 1,
  url: 'http://www.gmail.com', // the url to be tested
  viewport: '1280x1024',
  engine: 'webkit', // experimental webkit, gecko
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false, // --no-externals block requests to 3rd party domains
  performanceBudget: {
    requests: 2,
    medianLatency: 10,
    slowestResponse: 1000,
  },
};

const louis = function () {

  const passedOptions = {};

  process.argv.forEach( function ( val, index, array ) {
    const param = val.split( '=' );
    if ( possibleOptions.indexOf( param[ 0 ] ) > -1 ){
      passedOptions[ param[ 0 ] ] = param[ 1 ];
    }
  } );

  const options = Object.assign( {}, defaultOptions, passedOptions );

  console.log( options );

  connect.server( {
    port: 8888,
  } );

  analyze( options, connect.serverClose );
};


louis();

module.exports = louis;
