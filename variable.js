// 1. Use strict
// add in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'glabal name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
console.log(age);

// var (don't ever use this!)
// var hiisting
// has no block scope
{
    var age;
    age=4;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class-funtion
// 값에 상관없이 type은 number
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - spacial numeric values: Infinity, -Infinity, NaN
const infinity = 1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
//문자던 문자열이던 const 사용.
const char = 'c';
const brendan = 'brendan';
const greeting ='hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(String)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + ' type: '+ typeof helloBob);

// boolean
// false: 0, null, undefuned, NaN, ''(비워져있는 string)
// true: any other value
const canRead = true; //바로 할당 가능
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 비어있는 값이라고 선언, 할당
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; //선언이 되어 있지만, 비어있음 아직 값이 없음.
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

//symbol, create uniquw identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //false
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie={name:'ellie',age:20};
ellie.age=21; //{}안의 속성들은 변경 가능.

// 5. Dynamic typing: dynamically typed language
let text='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //type: string
text=1;
console.log(`value: ${text}, type: ${typeof text}`); //type: number
text='7'+5; //string + number 5 인데도 불구하고
console.log(`value: ${text}, type: ${typeof text}`); // 숫자 5를 문자5로 변경 -> 75 출력
text='8'/'2'; //문자 8과 문자 2이지만 /(나누기)연산자를 사용했으므로 숫자로 인식
console.log(`value: ${text}, type: ${typeof text}`); //number 4
console.log(text.charAt(0)); //중간에 text 타입이 number로 바뀌었기 때문에 error발생
// -> 때문에 TypeScript 개발