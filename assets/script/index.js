function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

let a = 5;
let b = 7;

if (a > b){
    console.log('a daugiau už b.');
}else if (b > a){
    console.log('b daugiau už a.');
}else{
    console.log('a lygu b.');
}

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for(let i = 0; i < 5; i++){
    console.log(randomSkaicius(1,10));
}

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let number;

while(number != 5){
    number = randomSkaicius(1, 10);
    console.log(number);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

let array = [];
let length = randomSkaicius(20, 30);
let max = array[0];
let max_index = 0;
let max2 = 0;

for(let i = 0; i < length; i++){
    array[i] = randomSkaicius(10, 30);
}
for(let i = 0; i < length; i++){
    if (array[i] > max){
        max = array[i];
        max_index = i;
    }
}
for(let i = 0; i < length; i++){
    if ((array[i] > max2) && (array[i] != max)){
        max2 = array[i];
    }
}
console.log('Antra didžiausia masyvo reikšmė:', max2);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let letters = ['A', 'B', 'C', 'D'];
let array7 = [];

function sum_letter(letter, array){
    let sum_l = 0;
    for(i = 0; i < array.length; i++){
        if (letter == array[i]){
            sum_l++;
        }
    }
    return sum_l;
}

for(let i = 0; i < 100; i++){
    array7[i] = letters[randomSkaicius(0,3)];
}
console.log(array7);
console.log('A raidžių:',sum_letter('A', array7));
console.log('B raidžių:',sum_letter('B', array7));
console.log('C raidžių:',sum_letter('C', array7));
console.log('D raidžių:',sum_letter('D', array7));

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma (a, b){
    if(a.length > 1 && b.length > 1){
        if ((a.length + b.length) % 2 != 0){
            console.log('Suma nelyginė.');
        }
        return a.length + b.length;
    }else if(a.length > 1 || b.length > 1){
        console.log('Netinkami argumentai.');
    }else{
        if ((a + b) % 2 != 0){
            console.log('Suma nelyginė.');
        }
        return a + b;
    }
}

// let ar1 = [1,5,4,6,4,7];
// let ar2 = [1,5,7,4];

// console.log('suma:', lygineSuma(2,ar2));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(a){
    if(!isNaN(a)){
        if((a % a) == 0 && (a % 2) != 0){
            console.log('Skaičius yra pirminis.');
            return true;
        }else{
            console.log('Skaičius nėra pirminis.');
        }
    }
    return false;
}

// console.log(pirminisSkaicius(26));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

let arraytel = [1234567891, 9876543215];
console.log(arraytel);

function telefonoNumeris(array){
    let phone_ar = [];
    for(let i = 0; i < array.length; i++){
        let p_line = array[i].toString();
        let phone = '(';
        for(let j = 0; j < 3; j++){
            phone = phone + p_line.charAt(j);
        }
        phone += ') ';
        for(let j = 3; j < 6; j++){
            phone += p_line.charAt(j);
        }
        phone += '-';
        for(let j = 6; j < 10; j++){
            phone += p_line.charAt(j);
        }
        phone_ar[i] = phone;      
    }
    return phone_ar;
}

console.log(telefonoNumeris(arraytel));