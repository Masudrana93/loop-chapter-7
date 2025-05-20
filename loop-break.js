// ****** লুপের Break *******

//example-1: 1 থেকে 15 পর্যন্ত লুপ চালানো হল, যা 7 এরপর গিয়ে break করবে।

for(let number = 1; number < 15; number++ ){
    console.log(number);
    if(number > 7){
        break;
    }
}

//example-2: 1 থেকে 15 পর্যন্ত লুপ চালানো হল, যা 7 এ গিয়ে break করবে।

for(let num = 1; num < 15 ; num++){
    console.log(num);
    if(num >= 7){
        break;
    }
}

//example-3: 1 থেকে 10 পর্যন্ত লুপ চালানো হল, কিন্তু 6 কে স্কিপ করবে বা বাদ দিবে।

for(let ourNum = 1; ourNum < 10; ourNum++){
    if(ourNum == 6){
        continue;
    }
    console.log(ourNum);
}

//example-4: 1 থেকে 20 পর্যন্ত লুপ চালানো হল, কিন্তু জোড়সংখ্যাগুলোকে স্কিপ করবে বা বাদ দিবে।


for(let eNum = 1; eNum < 20; eNum++){
    if(eNum % 2 == 0){
        continue;
    }
    console.log(eNum);
}

//example-5: 1 থেকে 20 পর্যন্ত লুপ চালানো হল, কিন্তু বিজোড়সংখ্যাগুলোকে স্কিপ করবে বা বাদ দিবে।


for(let odNum = 1; odNum < 20; odNum++){
     if(odNum % 2 ==1){
        continue;
     }
     console.log(odNum);
}

// Practice:

//1. ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট বন্ধ হবে, থেমে যাবে।

for(let shNUM = 1; shNUM <= 30; shNUM++){
    console.log(shNUM);
    if( shNUM > 15){
        break;
    }
}

//2. তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21 ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।

for(let bNum = 1; bNum <= 30; bNum++ ){
    if(bNum % 7 == 0){
        continue;
    }
    console.log(bNum);
}

//3.  তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকিসব সংখ্যা প্রিন্ট হবে।

for(let anumb = 1; anumb <= 15; anumb++){
    if(anumb == 9){
        continue;
    }
    console.log(anumb);
}

//4.  1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদে। একটা প্রোগ্রাম লিখ, যেখানে 12 স্কিপ হয়ে যাবে আর বাকিসব সংখ্যা প্রিন্ট হবে।

for(let cNum = 1; cNum <=20; cNum++){
    if(cNum == 12){
        continue;
    }
    console.log(cNum);
}

//5. 1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যাগুলো বাদে।

for(let dNum = 1; dNum <=25 ; dNum++){
    if(dNum % 3 == 0){
        continue;
    }
    console.log(dNum);
}

//6. 91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হয়ে যাবে, থেমে যাবে।

for( let fNum = 91; fNum <= 120; fNum++){
    console.log(fNum);
    if(fNum % 10 == 0){
        break;
    }
}
