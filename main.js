// var name = 'Sergey';
// const name2 = 'Sergey';
// let number = 16;
// number=20;
// console.log(number);

// const number2 =100;
// number2=200;
// console.log(number2);

// const number1 = 100;
// number2 =10;
// let result = number1+number2;
// console.log(result);
// result=number2*number1;
// console.log(result);

// const firstname='yuri';
// lastname='samarin';
// space=' ';
// let result2 = firstname +space+ lastname;
// console.log(result2);


// let firstname='yuri';
// let lastname='samara';
// let fullName=`${firstname} ${lastname}`;
// console.log(fullName);


// let variable1=true;
// let variable2=false;
// let user={
//     id: 1,
//     firstname: 'Alex',
//     age:22
// };
// if(8==8){
//     console.log('Hello pidr');
// }

// const height= 40;
// const width= 70;
// let result = height*width;
// console.log(result);

// const time = 2;
// const speedOfFirst = 95;
// const speedOfSecond = 114;
// let result1=speedOfFirst*time;
// let result2=speedOfSecond*time;
// let result3=result1+result2;
// console.log(result3);

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if(randomNumber < 20){
    console.log("randomNumber меньше 20");
}
    else if (randomNumber > 50){
        console.log("randomNumber больше 50");
    }
else{
    console.log("randomNumber больше 20, и меньше 50");
}