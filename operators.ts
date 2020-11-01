interface IPerson {
    name: string
    age: number
}

type PersonKeys = keyof IPerson         //'name'|'age'
let key: PersonKeys = 'name';
key = 'age';


//=======================================================
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysWithoutMeta = Exclude<keyof User, '_id' | 'createdAt'>      //'name'|'email'
type UserKeysWithoutMeta2 = Pick<User, 'name' | 'email'>      //'name'|'email'
