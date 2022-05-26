// var message = "in global" ;
// console.log("global: message = " + message) ;


// var a = function(){
//     var message = "inside a" ;
//     console.log("a: message  = " + message ) ;
//     b() ;
// }

// function b(){
//     console.log("b: message = " + message) ;
// }

// a() ;

// var x ;
// console.log(x) ;
// if(x == undefined){
//     console.log("x is undefined")
// }else{
//     console.log("x is defined")
// }

// x = 5 ;
// if(x == undefined){
//     console.log("x is undefined")
// }else{
//     console.log("x is defined")
// }

function makeMultiplier(multiplier) {
    var myFunFunc = function (x) {
      return multiplier * x;
    };
    
    return myFunFunc;
}

  
var operation = makeMultiplier(10);
operation(10)
console.log(operation(10));