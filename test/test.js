// Dependencies
import { validate } from '../lib/validate';
import { expect } from 'chai';

describe('validation tests', function(){
  it('should have validate method defined',function(){
      expect( validate ).to.exist;
    })
});
