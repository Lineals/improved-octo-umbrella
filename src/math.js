const Alphabet = require('alphabet');

let Util = {};

Util.factorial = (n) => {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => true
 * Util.isPrime(6) => false
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    for(let i = 2; i < n; i++)
        if(n % i === 0) return false;
    return n > 1;
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    if (n < 2) throw 'Illegal value for n'

    let result = 0
    for (let i = 2; i < n; i++)
        if (Util.isPrime(i)) result += i
    return result
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    if (n < 1) throw 'Illegal value for n'
    let result = []
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz")
        else if (i % 5 === 0) result.push("Buzz")
        else if (i % 3 === 0) result.push("Fizz")
        else result.push(i)
    }
    return result
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    let al_low = Alphabet.lower
    let al_up = Alphabet.upper
    let encrypt = ""
    for (let i = 0; i < phrase.length; i++){
        if (al_low.includes(phrase[i])) encrypt += al_low[(al_low.indexOf(phrase[i]) + 1) % al_low.length]
        else if (al_up.includes(phrase[i])) encrypt += al_up[(al_up.indexOf(phrase[i]) + 1) % al_up.length]
        else encrypt += " "
    }
    return encrypt
};


module.exports = Util;

