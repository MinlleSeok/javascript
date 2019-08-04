// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name:'Lee', gender:'male' };

// Array
var array = [ 1, 2, 3 ];

// function
var foo = function() {};

// 산술 연산자
var area = 5 * 4; // 20

//  문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4); // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT +0900 (한국 표준시)

// 암묵적 강제 형변환
var foo = 1 + '10'; // '110'
var bar = 1 * '10'; // 10

// 변수의 선언
var x = 5 + 6;

// 함수의 선언
function foo (arg) {
    // 함수 종료 및 값의 반환
    return ++arg;
}

var i = 0;
// 반복문
while (1) {
    if (i > 5) {
        // 반복문 탈출
        break;
    }
    console.log(i);
    i++;
}

// 주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용한다. 코드는 읽기(이해하기) 쉬워야 한다.

/*
    주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용한다.
    코드는 읽기(이해하기) 쉬워야 한다.
*/

// Bad
// 변수 x는 나이를 나타낸다. x에는 정수 10을 할당한다.

// Good
var age = 10;

var x = 5;
var y = 6;
var z = x + y;
console.log(z);

// 함수
function myFunction(x, y) {
    return x + y;
}

// if 문
if (x > 0) {
    // do something
}

// for 문
for (var i = 0; i < 10; i++) {
    // do something
}

var time = 10;
var greeting;
