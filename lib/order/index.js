/*
 * lib/order/index.js
 */

'use strict';

var _ = require('underscore');

exports.create = function(data) {
  return _.extend(_.clone(require('./_defaults')), data);
};

exports.limit = require('./limit');
exports.stop = require('./stop');
exports.market = require('./market');
