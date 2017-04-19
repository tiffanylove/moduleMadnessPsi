function convertUsd(aNumber){
var numberString = aNumber.toString();
var usd ='$';


  if (numberString.length < 4) {
    usd += numberString;
  } else if (numberString.length < 7) {
    usd += numberString.substring(0, numberString.length - 3) + ',' +
           numberString.substring(numberString.length - 3);
  } else if (numberString.length < 10 ){
    usd += numberString.substring(0, numberString.length - 6) + ',' +
           numberString.substring(numberString.length - 6, numberString.length - 3) + ',' +
           numberString.substring(numberString.length - 3);
  }
  console.log('usd function: ' + usd);
  return usd;
}
module.exports = convertUsd;
