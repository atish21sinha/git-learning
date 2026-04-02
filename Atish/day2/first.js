// non primitive data type
//array,object,function
//array
//let arr=[10,20,50];
//console.log(arr);
let arr=[10,20,50,"rohit","atish"];
console.log(typeof arr);
//object
//key:value
let obj={
    user_name:"atish",
    accout_number:567667676676,
    balance:420

}
console.log(obj);
//function
let fun=function(){
    console.log("hello world")
    return 10;


}
//console.log(typeof fun);
console.log(fun());
// type conversion
let account_balance="10";
let num=Number(account_balance);
console.log(typeof num);
//boolean convert to number
let x=true;
console.log(Number(x));


let account="100xs"
let bal="200s"
console.log(Number(account));
console.log(Number(bal));

//null
let x1=null;
console.log(Number(x1));
//string ke ander convert
let ab=20;
console.log(String(ab));

let ax=false;
console.log(String(ax));
console.log(Boolean("Str"))
//arithematic operators
console.log(4*8-15);
console.log(20%3);
//++ increment -- decrement operator
let sum=20;
//
//sum--
++sum
console.log(sum);
//assignment operator
let y = 20;
y+=10;
console.log(y);
