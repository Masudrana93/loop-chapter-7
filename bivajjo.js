// ******Divisible- বিভাজ্য*****

//Example:

for(let i = 1; i <= 30; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}


//Practice

//1. তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা ।

for(let num = 20; num <= 50; num++){
    if(num % 7 == 0){
        console.log(num);
    }
}

//2. এইবার 40 তেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা ।

for(let number = 40; number <= 80; number++){
    if(number % 5 == 0 && number % 7 == 0){
        console.log('result=', number);
    }
}

//3. এখন তোর প্রবলেম হলো 1 তেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর।
let sum =0;
for(let numbers = 1; numbers <= 40; numbers++){
    if(numbers % 13==0){
        console.log(numbers);
        sum = sum + numbers;
    }
    
}
console.log(sum);

//4. for লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি।

for(let name = 1; name <= 50; name += 4){
    console.log(name);
}

//5. 0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 এবং 6 দিয়ে বিভাজ্য।

for(let ourNum = 0; ourNum <= 100; ourNum++){
    if(ourNum % 9 ==0 && ourNum % 6 ==0){
        console.log('output:' ,ourNum);
    }
}

//6. 1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য  এবং সংখ্যাগুলোর যোগফল বের কর।

let sumation = 0;

for(let theirNum = 1; theirNum <= 50; theirNum++){
    if(theirNum % 3 ==0 && theirNum % 4 ==0){
        console.log(theirNum);
        sumation = sumation + theirNum;
    }
}
console.log('total sum:' , sumation);
