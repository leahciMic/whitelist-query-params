/* eslint-env jest */
const whitelistQueryParams = require('./index.js').default;

describe('Whitelist query params', () => {
  it('should filter everything out by default', () => {
    expect(whitelistQueryParams('http://google.com/?foo=bar')).toEqual('http://google.com/');
  });
  it('should pass through params on whitelist', () => {
    expect(whitelistQueryParams('http://google.com/?foo=bar', ['foo'])).toEqual(
      'http://google.com/?foo=bar'
    );
  });
  it('should pass through params on whitelist, and remove ones that are not', () => {
    expect(whitelistQueryParams('http://google.com/?foo=bar&bar=baz', ['foo'])).toEqual(
      'http://google.com/?foo=bar'
    );
  });
  it('should pass in duplicate params', () => {
    expect(
      whitelistQueryParams('http://google.com/?foo=bar&foo=baz&baz=bar&baz=qux', ['foo'])
    ).toEqual('http://google.com/?foo=bar&foo=baz');
  });
});
