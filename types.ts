//string
const str: string = 'Hello';

//boolean
const isFetching: boolean = false;

//number
const int: number = 45;
const float: number = 4.88;
const num: number = 3e10;

//array
const numberArray: number[] = [1.2, 2, 87];
const numberArray2: Array<number> = [1.2, 2, 87];

const wordsArray: string[] = ['hello', 'world'];

//tuple
const contact: [string, number] = ['Bob', 555];

//any
let variable: any = 'string';  //string
variable = 888;                //number

//func
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Hayzenberg');

//never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
    }
}

//type
type Login = string
const login: Login = 'admin';

type ID = string | number
const id1: ID = 123;
const id2: ID = '123';

//null undefined
type SomeType=string|null|undefined

