
@mitchallen/grid-core
==
Grid core
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/grid-core --save
  
* * *

## Usage

Create a new folder and do the following at the command line:

    $ npm init
    $ npm install @mitchallen/grid-core --save

In the same folder create a file called __index.js__ with the content below:

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
    
At the command line, execute the following:

    $ node index.js
    
Output:

    size: 5: 
    [ [], [], [], [], [ , , , 999 ] ]
    grid value:  999
  
An example similar to this exists on the __examples__ folder out on the repo.


## Browser Usage

    var core = window.MitchAllen.GridCore;
    var grid = core.create( { rows: 5 } );

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/grid-core.git](https://bitbucket.org/mitchallen/grid-core.git)
* [github.com/mitchallen/grid-core.git](https://github.com/mitchallen/grid-core.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.3

* Removed dist from .npmignore

#### Version 0.1.2 

* fixed browserify standalone setting
* used __window.MitchAllen.GridCore__ to access from the browser

#### Version 0.1.1 

* removed obsolete file

#### Version 0.1.0 

* initial release

* * *
