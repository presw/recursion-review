// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (obj === null) {
    return `${obj}`;
  }
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return null;
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return `[${arr}]`;
  } else {
    var outputObj = {};
    if (Object.keys(obj).length === 0) {
      return `{}`;
    }
    var outputArr = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        outputArr.push(stringifyJSON(key) + `:` + stringifyJSON(obj[key]));
      }
    }
    return `{${outputArr}}`;
  }
};
