"use strict";
var rage1 = rage1 || (function(){
var a = 1,
    b = 1,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0,
    h = 0,
    q,
    counter,
    dataArray = [q,a,b,c,d,e,f,g,h];


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
      /* Below suitable for an OR gate
      else if ( a === 1 || b === 1) {
      q = 1;
      }
      */
      else {
      q = 0
      }
    //  counter = ++counter;
    //  var "q"+counter = q;
    console.log(q);

  };

  /*
  CREATING AND GATE OBJECTS
var and1 = new And_(q, a, b);          // example args if first to receive
var and2 = new And_(null, a = q1, b = q2 );
  */
var and1 = new And_(q, a, b);
var and2 = new And_(q, 0, 0);

and1.output();
and2.output();

})();
