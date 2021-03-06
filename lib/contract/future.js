/*
 * lib/contract/future.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function future(symbol, expiry, exchange, currency) {
  assert(_.isString(symbol), 'Symbol must be a string.');
  assert(_.isString(expiry), 'Expiry must be a string.');

  return _.extend(_.clone(require('./_defaults')), {
    currency: currency || 'USD',
    exchange: exchange,
    expiry: expiry,
    secType: 'FUT',
    symbol: symbol
  });
}

// Public API
module.exports = exports = future;
