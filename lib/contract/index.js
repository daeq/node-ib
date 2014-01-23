/*
 * lib/contract/index.js
 */

'use strict';

var _ = require('underscore');

exports.create = function(data) {
  return _.extend(_.clone(require('./_defaults')), data);
};

exports.combo = require('./combo');
exports.forex = require('./forex');
exports.future = require('./future');
exports.option = require('./option');
exports.stock = require('./stock');
