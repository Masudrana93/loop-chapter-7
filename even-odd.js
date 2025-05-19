// ******* জোড় বিজোড় লুপের শর্ত ********

// কন্ডিশান if দিয়ে জোড়সংখ্যা লেখার নিয়ম

for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
        console.log('even numbers:' , i);
    }
}

// কন্ডিশান if দিয়ে বিজোড়সংখ্যা লেখার নিয়ম

for(let m = 0; m < 20; m++){
    if(m % 2 == 1){
        console.log('odd numbers:' , m);
    }
}

// কন্ডিশন ছাড়া শুধুমাত্র for লুপের মাধ্যমে জোড়সংখ্যা/বিজোড়সংখ্যা লেখার নিয়ম (i++/m++ শুধুমাত্র এই ফর্মূলাটি পরিবর্তন করে- i = i + 2 or i += 2 লিখতে হবে)

//বিজোড়সংখ্যা: 1 to 20

for(let man = 1; man < 20 ; man = man + 2){
    console.log(man);
}

//জোড়সংখ্যা: 1 to 20

for(let woman = 2; woman <= 20; woman = woman + 2){
    console.log(woman);
}






