"use strict";

var gridFactory = require("@mitchallen/grid-core");

var rows = 5;

var grid = gridFactory.create( { rows: rows } );

if(!grid) {
    console.error("couldn't create grid");
}

var i = rows - 1,
    j = 3,
    value = 999;

if(! grid.set( i, j, value )) {
    console.error("couldn't set grid value");
}

grid.log();

if(! grid.isCell( i, j ) ) {
    console.error("parameters not within grid");
}

let result = grid.get( i, j );

if(! result) {
    console.error("couldn't get grid value");
} else {
    console.log("grid value: ", result );
}