let a = "hello"
a = "bye"
a = "hi"
// a = 1 

let b : boolean = false;
b = true;
// b = '123';

let c = [1,2,3];
let d : number[] = [];
c.push(1)
d.push(2)
// d.push("3")

type Player = {
    name: string,
    age?: number
}

const player1 : Player = {
    name: 'jack',
    // age: 20
}

if(player1.age && player1.age < 10){
    console.log(player1.age)
}
function playerMaker(name:string) : Player{
    return {
        name,
        age: 20
    }
}
        // 위와 동일
        // {
        //     name: name
        // }
playerMaker('jack');

type PlayerMaker = (a : number) => number;
const playerMaker2 : PlayerMaker = () => {
    return 12;
}

// readonly로 변수에 할당한 값을 변경하지 못하게 할 수 있음
const numbers : readonly number[] = [1,2,3];
// numbers.push(1)