#!/usr/bin/env node --harmony

'use strict';

import meow from 'meow';
import connect from 'connect';
import serveStatic from 'serve-static';
import {yellow} from 'cli-color';
import louis from './louis';

const cli = meow( `
  Usage
    $ louis <url>

  Options
    --timeout      set a timeout [15s]
    --engine       webkit or gecko [webkit]
    --user-agent   user agent [Chrome/37.0.2062.120]
    --viewport     view port ['1280x1024']
  Examples
    $ louis http://www.example.com
    $ louis http://www.example.com --timeout 1000
    $ louis http://www.example.com --timeout 1000
`, {
  alias : {
    h : 'help',
  }
} );

var url = cli.input[ 0 ];

if ( ! url ) {
  url = 'localhost:8888'

  connect()
    .use(serveStatic(process.cwd()))
    .listen(8888);
}

cli.flags.url = url;

louis( url, cli.flags )
  .then( function() {
    console.log( 'DONE!' );
  } )
  .catch( function( error ) {
    console.log( error );
  } );
