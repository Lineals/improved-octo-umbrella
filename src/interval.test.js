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

describe('Union', function () {
    test.each([
        [1, 2, 1, 2, [new Interval(1,2)]],
        [0, 1, 1, 2, [new Interval(0,2)]],
        [1, 2, 0, 1, [new Interval(0,2)]],
        [3, 10, 5, 10, [new Interval(3,10)]],
        [5, 10, 4, 9, [new Interval(4,10)]],
        [1, 2, 4, 9, [new Interval(1,2), new Interval(4,9)]],
        [1, 20, 0, 9, [new Interval(0,20)]],
        [10, 20, 1, 2, [new Interval(1,2), new Interval(10, 20)]]
    ])(

        'Interval (%i,%i) (%i,%i)',
        (a1,a2,b1,b2, expected) => {
            expected.forEach(function(element){
                expect(new Interval(a1,a2).union(new Interval(b1,b2))).toContainEqual(element);
            });
        },
    );
});

describe('Intersection', function () {
    test.each([
        [3, 10, 4, 9, new Interval(4,9)],
        [5, 10, 4, 9, new Interval(5,9)],
        [1, 2, 4, 9, []],
        [1, 20, 0, 9, new Interval(1,9)],
        [10, 20, 1, 2, []]
    ])(

        'Interval (%i,%i) (%i,%i)',
        (a1,a2,b1,b2, expected) => {
            expect(new Interval(a1,a2).intersection(new Interval(b1,b2))).toEqual(expected);
        },
    );
});

describe('Exclusion', function () {
    test.each([
        [3, 10, 4, 9, [new Interval(3,4), new Interval(9,10)]],
        [5, 10, 4, 9, [new Interval(4,5), new Interval(9,10)]],
        [1, 2, 4, 9, [new Interval(1,2), new Interval(4,9)]],
        [1, 20, 0, 9, [new Interval(0,1), new Interval(9,20)]],
        [10, 15, 4, 8, [new Interval(4,8), new Interval(10,15)]]
    ])(

        'Exclusion (%i,%i) (%i,%i)',
        (a1,a2,b1,b2, expected) => {
            expected.forEach(function(element){
                expect(new Interval(a1,a2).exclusion(new Interval(b1,b2))).toContainEqual(element);
            });
        },
    );
});