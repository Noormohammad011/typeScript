// Basic Types
let id: number = 5
let company: string = 'Noor'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Noor'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number
pid = '22'


// Enum --set of name constants
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction2.Down)
console.log(Direction1.Down)


// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}


// Type Assertion
let cid: any = 1
let customerId2 = <string>cid

let customerId = cid as number
console.log(customerId)


// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}
// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y



interface PersonInterface {
  id: number
  name: string
  register(): string
}



// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const rokibul = new Person(1, 'Rokibul Hasan')
const noor = new Person(2, 'Noor Mohammad')
console.log(rokibul.register())


// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register())


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Noor', 'Nayan', 'Rokibul'])

strArray.push('Hello') 
console.log(strArray)