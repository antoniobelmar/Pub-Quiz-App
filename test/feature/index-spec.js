'use strict';
const Browser = require('zombie');
const expect = require('chai').expect;

Browser.localhost('example.com', 3000);

describe('User visit index page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('should be successful', function() {
    browser.assert.success();
  });

  it('the page should show Home Page', function() {
    expect(browser.text('body')).contain('QuizLife!')
  });
});
