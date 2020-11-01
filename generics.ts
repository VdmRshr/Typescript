const arrayOfNumbers: Array<number> = [1, 2, 3, 3, 56, 7];
const arrayOfStrings: Array<string> = ['hello', 'world'];

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)