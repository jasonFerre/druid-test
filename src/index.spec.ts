import { countDuplications } from './index';

test('should return the numbers of repetions for a letter', () => {
    var result = JSON.parse(countDuplications('TTt'));
    expect(result['t']).toBe(3);
});

test('should return empty object in case of no duplications letter', () => {
    var result = JSON.parse(countDuplications('abcde'));
    expect(result).toEqual({});
});


test('should return empty object in case of empty input', () => {
    var result = JSON.parse(countDuplications('abcde'));
    expect(result).toEqual({});
});


test('should return the numbers of repetions for a input letters', () => {
    var result = JSON.parse(countDuplications('AWSaws'));
    expect(result['a']).toBe(2);
    expect(result['w']).toBe(2);
    expect(result['s']).toBe(2);
});
