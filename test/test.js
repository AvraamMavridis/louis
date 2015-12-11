// Dependencies
import { validate } from '../lib/validate';
import { expect } from 'chai';

const mockOptions = {
  timeout          : 60,
  runs             : 1,
  url              : 'http://www.tests.com',
};

/**
 * Validation module tests
 */
describe( 'validation tests', function () {

  it( 'should have validate method defined', function () {
    expect( validate ).to.exist;
  } );

  it( 'should return true if not options are passed', function () {
    expect( validate() ).to.be.true;
  } );

  it( 'should accept valid options', function () {
    expect( validate( mockOptions ) ).to.be.true;
  } );

  it( 'should accept valid options for the performanceBudget', function () {
    let c = { ...mockOptions };
    c.performanceBudget = { requests: 10 };
    expect( validate( c ) ).to.be.true;
  } );

  it( 'should throw an error if we pass an invalid option', function () {
    let c = { ...mockOptions };
    c.invalidOption = -1;
    expect( () => validate( c ) ).to.throw( 'invalidOption is not allowed' );
  } );

  it( 'should throw an error if we pass an invalid performanceBudget option', function () {
    let c = { ...mockOptions };
    c.performanceBudget = { invalidOption: 10 };
    expect( () => validate( c ) ).to.throw( 'invalidOption is not allowed' );
  } );

  it( 'should throw an error if we pass an validate performanceBudget integers', function () {
    let c = { ...mockOptions };
    c.performanceBudget = { requests: -10 };
    expect( () => validate( c ) ).to.throw( Error );
  } );

} );
