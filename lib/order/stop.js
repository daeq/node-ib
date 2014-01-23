/*
 * lib/order/stop.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function stop(action, quantity, price) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');
  assert(_.isNumber(price), 'Price must be a number.');

  return _.extend(_.clone(require('./_defaults')), {
    action: action,
    auxPrice: price,
    orderType: 'STP',
    totalQuantity: quantity
  });
}

// Public API
module.exports = exports = stop;
