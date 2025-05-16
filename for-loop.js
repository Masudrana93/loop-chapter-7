// ******* for লুপের খিচুড়ি ********

//**for loop structure**

//for(declare loop variable; loop condition; change loop variable){ one or more lines of code that will be repeated}


//example-1: for লুপ দিয়ে 1 থেকে 10 পর্যন্ত প্রিন্ট কর।

for(let num = 1; num <= 10 ; num++){
    console.log(num);
}

//example-2: 50 থেকে 100 পর্যন্ত আউটপুট দেখা।

for(let a = 50 ; a<=100 ; a++){
    console.log(a);
}

//example-3: 11 থেকে 20 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।

let sum = 0 ;
for(let b =11; b <= 20 ; b++){
    sum = sum + b;
}
console.log('sum of numbers 11 to 20 is:', sum);

//Practice:

//1. for লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর।

for(let numbers = 150 ; numbers <= 170 ; numbers++){
    console.log(numbers);
}

//2. তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let sumation = 0;
for(let roll = 31 ; roll <= 58; roll++){
    sumation = sumation + roll;
}
console.log('sum of roll numbers:', sumation);

//3. for লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।

let totalSum = 0;
for(let sonkha = 25; sonkha <= 75; sonkha++){
    totalSum = totalSum + sonkha;
    console.log(totalSum);
}
console.log('total output:', totalSum);
