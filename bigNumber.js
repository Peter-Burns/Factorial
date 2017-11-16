function factorial(n) {
    if(n<0)return null;
    var num = [1];
    for (var i = 1; i <= n; i++) {
        num = multArray(num, i);
    }
    return num.join('');
}
function multArray(array, multiplier) {
    var arrayHolder = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayHolder.unshift(array[i] * multiplier);
    }
    array = [];
    while (arrayHolder.length) {
        var arrayPlace = arrayHolder.pop();
        if (arrayPlace > 9) {
            var numArr = arrayPlace.toString().split('');
            array.unshift(numArr.pop());
            if (arrayHolder.length) {
                arrayHolder[arrayHolder.length - 1] += parseInt(numArr.join(''));
            }
            else{
                arrayHolder.push(parseInt(numArr.join('')));
            }
        }
        else {
            array.unshift(arrayPlace);
        }
    }
    return array;
}
// var numArray = [9, 0, 3, 1, 0];
// var multiplyingFactor =27;
// var check = parseInt(numArray.join(''));
// console.log(multArray(numArray, multiplyingFactor));
// console.log(check*multiplyingFactor);
// console.log(check * multiplyingFactor === parseInt(multArray(numArray, multiplyingFactor).join('')));
var userInput = prompt('What number would you like the factorial of?');
document.write(factorial(userInput));

