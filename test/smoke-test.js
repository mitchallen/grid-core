/**
    Module: @mitchallen/grid-core
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../dist/grid-core";

describe('module smoke test', function() {

    var _module = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('module should exist', function(done) {
        should.exist(_module);
        done();
    });

    it('create method with no spec should return valid object', function(done) {
        var obj = _module.create();
        should.exist(obj);
        done();
    });

    it('create method with valid x and y parameters should return object', function(done) {
        var obj = _module.create({ x: 5, y: 5 });
        should.exist(obj);
        done();
    });

    it('rows should return number of rows', function(done) {
        let rows = 5;
        let sizeY = 6;
        var obj = _module.create({ rows: rows });
        obj.rows.should.eql(rows);
        done();
    });

    it('set method with valid parameter should return true', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        var result = obj.set(0,0,5);
        result.should.eql(true);
        done();
    });

    it('get method with valid parameter should return value', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('get method with invalid x parameter should return null', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = -1;
        let tY = 0;
        let tValue = 5;
        var result = obj.get(tX,tY);
        should.not.exist(result);
        done();
    });

    it('get method with invalid y parameter should return null', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = 0;
        let tY = -1;
        let tValue = 5;
        var result = obj.get(tX,tY);
        should.not.exist(result);
        done();
    });

    it('isCell method with valid x and y parameters should return true', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = rows - 1;
        let tY = 0;
        let tValue = 20;
        var condition = obj.set(tX,tY,tValue);
        var result = obj.isCell(tX, tY);
        result.should.eql(true);
        done();
    });

    it('fill method with valid integer should fill grid with integer', function(done) {
        let xSize = 5;
        let rows = 10;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = rows - 1;
        let tY = 0;
        let tValue = 20;
        obj.set(tX,tY,tValue).should.eql(true);
        var fillValue = 999;
        var result = obj.fill(fillValue);
        obj.get(tX,tY).should.eql(fillValue);
        done();
    });

   it('cloneArray method should return a clone of the internal array', function(done) {
        var rows = 5;
        var obj = _module.create({ rows: rows });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let tValue = 100;
        var result = obj.set(tX,tY,tValue);
        result.should.eql(true);
        var arr = obj.cloneArray();
        arr[tX][tY].should.eql(tValue);
        done();
    });

    it('log method should not throw exception', function(done) {
        var rows = 5;
        var grid = _module.create({ rows: rows });
        should.exist(grid);
        grid.fill(10)
        grid.set(0,0,20);
        grid.set(rows - 1, 0,30);
        grid.set(rows - 1, 6,40);
        grid.log();
        done();
    });

    it('rowSize should return zero for new grid', function(done) {
        let rows = 5;
        let sizeY = 6;
        var obj = _module.create({ rows: rows });
        obj.rowSize(rows-1).should.eql(0);
        done();
    });

    it('rowSize should return row size', function(done) {
        let rows = 5;
        let sizeY = 6;
        var grid = _module.create({ rows: rows });
        grid.set(rows-1,0,20);
        grid.rowSize(rows-1).should.eql(1);
        done();
    });

    it('rowSize should return zero for negative row value', function(done) {
        let rows = 5;
        let sizeY = 6;
        var grid = _module.create({ rows: rows });
        grid.rowSize(-1).should.eql(0);
        done();
    });

    it('rowSize should return zero for max row value', function(done) {
        let rows = 5;
        let sizeY = 6;
        var grid = _module.create({ rows: rows });
        grid.rowSize(rows).should.eql(0);
        done();
    });
});