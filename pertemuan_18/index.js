//Array 

let nilai = [90, 80, 75, 95, 85];

for(let i=0; i<nilai.length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1]);


let exel = ["Exel", "Timothy", 19, false];
console.log(exel[exel.length - 1]);
console.log(exel);

//toString()
console.log(exel.toString());
//join()
console.log(exel.join(" - "));

//pop()
exel.pop();
console.log(exel.join(" - "))
//push()
exel.push(false);
exel.push("Hello");
console.log(exel.join(" - "));

//shift()
exel.shift();
console.log(exel.join(" - "));

//unshift
exel.unshift("Exel");
exel.unshift("Prof");
console.log(exel.join(" - "));

//splice()
exel.splice(3,0, "Husain","adalah nama saya");
console.log(exel.join(" - "));

//concat()
let buah = ["Pisang", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Kentang"];
let biji = ["Kedelai", "Kacang Tanah", "Kacang Merah"];

let makanan = buah.concat(sayur, buah);
console.log(makanan);

//slice()
let cemilan = ["Kripik singkong", "Kripik kentang", "Kripik ikan", "Permen"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih);
console.log(cemilanManis);

//sort()
let fruits = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort();

console.log(fruits); 

// let bilangan = [30, 1, 2, 3.5, 10, 100];
// bilangan.sort();
// console.log(bilangan); 

let bilangan = [30, 1, 2, 3.5, 10, 100];

let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//Reverse()
let buahBuahan = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buahBuahan);