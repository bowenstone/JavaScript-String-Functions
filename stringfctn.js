console.log ('here we go');

const string = prompt('Enter a string to changed to proper case without spaces... ');

function camelCase(input)   {
    let newword = [];
    newword.push(input[0].toUpperCase());

    for (let letter=1; letter< input.length; letter++)   {
        if (input[letter] === ' ') {
            letter++;
            newword.push(input[letter].toUpperCase());
        } else {
            newword.push(input[letter]);        }
    }
    return newword;
}



let newstring = camelCase(string);
let spreaded = newstring.join('');
alert (`" ${string} "  has been changed to " ${spreaded} "`);

