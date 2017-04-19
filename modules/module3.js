var randomNumber = require('./module1.js');
var toUsd = require('./module2.js');

var accountBalance;
var rand = randomNumber(100, 1000000);
accountBalance = toUsd(rand);

var heading = 'Account Balance:\n';

module.exports = {
accountBalance: accountBalance,
heading: heading
};
