/*
 * lib/order/market.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function market(action, quantity) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');

  return _.extend(_.clone(require('./_defaults')), {
    action: action,
    orderType: 'MKT',
    totalQuantity: quantity
  });
}

// Public API
module.exports = exports = market;
