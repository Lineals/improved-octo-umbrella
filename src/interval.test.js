const Interval = require('./interval')

describe('Overlaps', function () {
    test.each([
        [3, 10, 4, 9, true],
        [5, 10, 4, 9, true],
        [1, 2, 4, 9, false],
        [1, 20, 0, 9, true],
        [10, 20, 1, 2, false]
    ])(

        'Interval (%i,%i) overlaps (%i,%i) : %p',
        (a1,a2,b1,b2, expected) => {
            expect(new Interval(a1,a2).overlaps(new Interval(b1,b2))).toBe(expected);
        },
    );
});

describe('Includes', function () {
    test.each([
        [3, 10, 4, 9, true],
        [5, 10, 4, 9, false],
        [1, 2, 4, 9, false],
        [1, 20, 0, 9, false],
        [10, 20, 1, 2, false]
    ])(

        'Interval (%i,%i) is around (%i,%i) : %p',
        (a1,a2,b1,b2, expected) => {
            expect(new Interval(a1,a2).includes(new Interval(b1,b2))).toBe(expected);
        },
    );
});