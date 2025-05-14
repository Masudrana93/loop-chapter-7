//****loop দিয়ে যোগফল *****/

// while loop দিয়ে 1 থেকে 10 পর্যন্ত প্রিন্ট কর।
let num = 1;
while(num <=10 ){
    console.log(num);
    num++;
}

//while loop দিয়ে 1 থেকে 10 পর্যন্ত সংখ্যাগুলোর যোগফল প্রিন্ট কর।

let number = 1;
let sum = 0;
while(number <= 10){
    console.log(number);
    sum = sum + number ;
    number++;
}
console.log('Sum:', sum);


//Practice

//1. while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।

let qty = 50;
while(qty <= 100){
    console.log(qty);
    qty++;
}

//2. while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।

let productQTY = 5;
let suM = 0;

while(productQTY <= 15){
    console.log(productQTY);
    suM = suM + productQTY;
    productQTY++;
}

console.log('Sum:', suM);

//3. তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let roll = 1;
let jogfal = 0;

while(roll <= 50){
    console.log(roll);
    jogfal = jogfal + roll ;
    roll++;
}
console.log("Sum:", jogfal);

//4. while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।

let numbergolo = 21;
let sumJogfal = 0;

while(numbergolo <= 50){
    sumJogfal = sumJogfal + numbergolo;
    numbergolo++;
    console.log(sumJogfal);  // প্রতিবারের যোগফল
    
}
console.log('Sum:', sumJogfal);  //  সংখ্যাগুলোর total যোগফল

//5. 20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখাবি।

let numberS = 20;
let sumation = 0;

while(numberS <= 40){
    sumation = sumation + numberS;
    numberS++;
    
}
console.log('Final Total=', sumation);
