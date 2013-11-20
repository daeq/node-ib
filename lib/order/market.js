/*
 * lib/order/market.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function limit(action, quantity) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');

  return _.extend(require('./_defaults'), {
    action: action,
    orderType: 'MKT',
    totalQuantity: quantity
  });
}

// Public API
module.exports = exports = limit;
