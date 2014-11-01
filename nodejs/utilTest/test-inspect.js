var util = require('util');

function Person()
{
    this.name = 'sunnyandpj';
    this.toString = function () {
        return this.name;
    };
}

var obj = new Person();
//console.log(util.inspect(obj));
//console.log('');
//console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true,10,true));