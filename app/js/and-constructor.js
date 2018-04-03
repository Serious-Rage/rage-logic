
// Function constructor
function And_( q , a ,b ){
    this.q = q || null;
    this.a = a || null;
    this.b = b || null;
    counter = 0;
};

// output method for all and gate functions
And_.prototype.output = function() {

    if ( a === 1 && b === 1 ) {
      q = 1;
    }
    else if ( a === 1 || b === 1) {
    q = 1;
    }
    else {
    q = 0
    }
    counter = ++counter;
  return q;
};

/*
CREATING AND GATE OBJECTS
var and1 = new And_(q, a, b); // example args if first to receive
                              // signal as setup on logicBoard

var and2 = new And_(null, a = q1, b = q2 );
*/

var and1 = new And_(0, 1, 1);

and1.output();
