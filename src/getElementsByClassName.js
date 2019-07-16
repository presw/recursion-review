// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
let getElementsByClassName = function(className) {
  // your code here
  let domArray;
  if (arguments.length === 1) {
    domArray = document.childNodes;
  } else {
    domArray = arguments[1];
  }
  let output = [];

  for (let i = 0; i < domArray.length; i++) {
    if (typeof domArray[i] !== 'undefined' && typeof domArray[i].className !== 'undefined') {
      if (typeof domArray[i].className === 'string' && domArray[i].className.includes(className)) {
        output.push(domArray[i]);
      }
    }
    if (domArray[i].hasChildNodes()) {
      output = output.concat(getElementsByClassName(className, domArray[i].childNodes));
    }
  }
  return output;
};
