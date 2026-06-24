/**
    Module: @mitchallen/grid-core
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../src/index";

describe('module smoke test', function() {

    var _module = null;

    before(function() {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
    });

    after(function() {
        // Call after all tests
    });

    beforeEach(function() {
        // Call before each test
    });

    afterEach(function() {
        // Call after eeach test
    });

    it('module should exist', function() {
        assert.ok(_module != null);
    });

    it('create method with no spec should return valid object', function() {
        var obj = _module.create();
        assert.ok(obj != null);
    });

    it('create method with valid x and y parameters should return object', function() {
        var obj = _module.create({ x: 5, y: 5 });
        assert.ok(obj != null);
    });

    it('rows should return number of rows', function() {
        let rows = 5;
        var obj = _module.create({ rows: rows });
        assert.deepStrictEqual(obj.rows, rows);
    });

    it('set method with valid parameter should return true', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        var result = obj.set(0,0,5);
        assert.deepStrictEqual(result, true);
    });

    it('set method with negative parameters should return false', function() {
        var obj = _module.create({ rows: 5 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.set(-1, 0, 5), false);
        assert.deepStrictEqual(obj.set(0, -1, 5), false);
    });

    it('get method with valid parameter should return value', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('get method with invalid x parameter should return null', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = -1;
        let tY = 0;
        var result = obj.get(tX,tY);
        assert.ok(result == null);
    });

    it('get method with invalid y parameter should return null', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = 0;
        let tY = -1;
        var result = obj.get(tX,tY);
        assert.ok(result == null);
    });

    it('isCell method with valid x and y parameters should return true', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = rows - 1;
        let tY = 0;
        let tValue = 20;
        var condition = obj.set(tX,tY,tValue);
        var result = obj.isCell(tX, tY);
        assert.deepStrictEqual(result, true);
    });

    it('fill method with valid integer should fill grid with integer', function() {
        let rows = 10;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = rows - 1;
        let tY = 0;
        let tValue = 20;
        assert.deepStrictEqual(obj.set(tX,tY,tValue), true);
        var fillValue = 999;
        var result = obj.fill(fillValue);
        assert.deepStrictEqual(obj.get(tX,tY), fillValue);
    });

   it('cloneArray method should return a clone of the internal array', function() {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        assert.ok(obj != null);
        let tX = 0;
        let tY = 0;
        let tValue = 100;
        var result = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(result, true);
        var arr = obj.cloneArray();
        assert.deepStrictEqual(arr[tX][tY], tValue);
    });

    it('log method should not throw exception', function() {
        var rows = 5;
        var grid = _module.create({ rows: rows });
        assert.ok(grid != null);
        grid.fill(10)
        grid.set(0,0,20);
        grid.set(rows - 1, 0,30);
        grid.set(rows - 1, 6,40);
        grid.log();
    });

    it('rowSize should return zero for new grid', function() {
        let rows = 5;
        var obj = _module.create({ rows: rows });
        assert.deepStrictEqual(obj.rowSize(rows), 0);
    });

    it('rowSize should return row size', function() {
        let rows = 5;
        var grid = _module.create({ rows: rows });
        grid.set(rows-1,0,20);
        assert.deepStrictEqual(grid.rowSize(rows-1), 1);
    });

    it('rowSize should return zero for negative row value', function() {
        let rows = 5;
        var grid = _module.create({ rows: rows });
        assert.deepStrictEqual(grid.rowSize(-1), 0);
    });

    it('rowSize should return zero for max row value', function() {
        let rows = 5;
        var grid = _module.create({ rows: rows });
        assert.deepStrictEqual(grid.rowSize(rows), 0);
    });
});
