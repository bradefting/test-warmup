"use strict";

let app = require('../testingArray.js');
let expect = require('chai').expect;

describe('plusOneSum', function(){
  it('adds 1 to every index in array and then totals correctly', function(){
    expect(app.plusOneSum([1,2,3,4])).to.equal(14);
  });
  it('should equal 0 if empty array', function(){
    expect(app.plusOneSum([])).to.equal(0);
  });
  it('expects an array/object as input', () => {
    expect(app.plusOneSum('str')).to.be.an('object');
  });

});
