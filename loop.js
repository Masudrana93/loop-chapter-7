//******Loop****** */

//example-1:
const numbers = [12, 14, 42, 75, 87,50];
for(const num of numbers){
    console.log(num);
}

//Example-2:
const fruits = ['mango', 'banana', 'orange', 'lichi', 'apple'];

for(const item of fruits){
    console.log(item);
}


//Practice

//1. তুই 5টা পছন্দের সাবজেক্টের নাম লেখ। তারপর প্রোগ্রাম লিখে দেখ, কীভাবে লুপ ব্যবহার করে সব সাবজেক্টের নাম আলাদাভাবে প্রিন্ট হবে।

const books = ['bangla', 'english', 'science', 'islam', 'math'];

for(const bookNames of books){
    console.log(bookNames);
}

//2. তোর একদম পছন্দের খাবারগুলোর নাম লেখ। এখন লুপ ব্যবহার করে প্রোগ্রাম লিখে দেখ, কীভাবে সব খাবারের নাম আলাদা আলাদা প্রিন্ট হবে।

const favFood = ['kachchi','khichori', 'elish', 'teheri','pizza'];

for(const itemFood of favFood){
    console.log(itemFood);
}

//3. একটা অ্যারের মধ্যে তোর ফ্যামিলি মেম্বাদের জন্মসাল লিখে ফেল। তারপর লুপ চালিয়ে সবার জন্মসাল আউটপুট হিসেবে দেখা।

const birthYear = [1988, 1995, 2017, 2024];

for(const bYear of birthYear){
    console.log(bYear);
}

//4. ক্রিকেট বা ফুটবল খেলায় তোর প্রিয় একাদশের একটা টিম বানিয়ে তোর প্রিয় খেলোয়াড়দের নাম একটা অ্যারের মধ্যে রাখ। তারপর কনসোল লগ করে সব খেলোয়াড়দের নাম আউটপুট হিসেবে দেখা।

const cTeam = ['kamal', 'jamal','salam','alam', 'balam'];

for(const playerFav of cTeam){
    console.log(playerFav);
}

//5. নেক্সট কবে কবে পরীক্ষা আছে, সেই তারিখগুলো অ্যারের মধ্যে লিখে ফেল। তারপর লুপ ব্যবহার করে পরীক্ষার তারিখগুলো কনসোল লগ কর।

const examDate = [14, 16, 19, 20, 25];

for(const date of examDate){
    console.log(date);
}

