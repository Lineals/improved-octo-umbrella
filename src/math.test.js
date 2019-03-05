const Util = require('./math');

describe('Factorial', function () {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(

        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });

});

describe('Prime', function () {
    test.each([
        [-1, false],
        [0, false],
        [1, false],
        [2, true],
        [3, true],
        [4, false],
        [5, true],
    ])(

        'Prime %i is %p',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        },
    );
});

describe('Sum Prime', function () {
    test.each([
        [6, 10],
        [8, 17]
    ])(

        'Sum prime between 2 and %i is %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        },
    );

    test('sum Prime of numbers < 2 throw exception', () => {
        expect(()=> {Util.sumPrime(1)}).toThrow();
    });
});

describe('Fizz buzz', function () {

    test('Fizz 15 is correct', () => {
        let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        expect(Util.fizzBuzz(15)).toEqual(expected)
    })

    test('Fizz buzz 0 is impossible', () => {
        expect(()=> {Util.fizzBuzz(0)}).toThrow();
    });
})


describe('Cipher', function () {
    test.each([
        ["Test Unitaire", "Uftu Vojubjsf"],
        ["Salut", "Tbmvu"],
        ["Z", "A"],
        ["z", "a"],
        [-13622, ""]
    ])(

        'Cipher %s is %s',
        (s, expected) => {
            expect(Util.cipher(s)).toEqual(expected);
        },
    );
})