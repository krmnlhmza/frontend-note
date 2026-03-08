console.log("Hello, World!"); //consola yazar
document.writeln("Goodbye, World! <br>"); //belgeye yazar
document.write("Hello again, World!"); //belgeye yazar
alert("sayfa ulaşılamıyor"); //uyarı penceresi açar
prompt("Bir şey yazın:"); // kullanıcıdan girdi alır
confirm("Devam etmek istiyor musunuz?"); // onay penceresi açar

//Window nesnesi
console.log(window.innerWidth); // pencere genişliğini yazdırır
console.log(window.innerHeight); // pencere yüksekliğini yazdırır

//Scope
let x = 10; // global değişken
function myFunction() {
    let y = 20; // local değişken
    console.log(x + y);
}

myFunction();
//Block Scope
{
    let z = 30; // block scope değişken
    console.log(x + y + z);
}

//const değişkeni ise block scope'a sahiptir. Aynı isimle birden fazla kez tanımlanamaz ve değeri değiştirilemez. Obje olarak tanımlanabilir ve içindeki değerler değiştirilebilir.
//var değişkeni ise fonksiyonel scope'a sahiptir. Yeniden tanımlanabilir.
// let değişkeni ise block scope'a sahiptir. Aynı isimle birden fazla kez tanımlanamaz.


let functionName = function() {
    // function body
    console.log("Hello from functionName");
};

functionName(); // fonksiyonu çağırır

//debugger ise kodun belirli bir noktasında duraklatma noktası koymak için kullanılır.

//foreach döngüsü, bir dizinin her bir elemanı üzerinde işlem yapmak için kullanılır.
let array = [1, 2, 3, 4, 5];
array.forEach(function(item) {
    console.log("Item: " + item);
});



//dizi methodları____________
let numbers = [1, 2, 3, 4, 5];

// push: dizi sonuna eleman ekler
numbers.push(6);
console.log("After push: " + numbers);

// pop: dizinin sonundaki elemanı çıkarır
numbers.pop();
console.log("After pop: " + numbers);

// shift: dizinin başındaki elemanı çıkarır
numbers.shift();
console.log("After shift: " + numbers);

// unshift: dizinin başına eleman ekler
numbers.unshift(0);
console.log("After unshift: " + numbers);

// slice: dizinin belirli bir bölümünü alır
let sliced = numbers.slice(1, 4);
console.log("Sliced: " + sliced);

// splice: dizinin belirli bir bölümünü değiştirir
numbers.splice(1, 2, 7, 8);
console.log("After splice: " + numbers);

//ToString: diziyi string'e çevirir
let numbersString = numbers.toString();
console.log("To String: " + numbersString);

//join: diziyi belirli bir ayırıcı ile birleştirir
let joined = numbers.join(" - ");
console.log("Joined: " + joined);

//concat: dizileri birleştirir
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenated = array1.concat(array2);
console.log("Concat: " + concatenated);

//length: dizinin eleman sayısını verir
let length = numbers.length;
console.log("Length: " + length);

//reverse: dizinin elemanlarını ters çevirir
numbers.reverse();
console.log("After reverse: " + numbers);

//split: diziyi belirli bir ayırıcı ile böler
let sentence = "Bu bir cümledir";
let words = sentence.split(" ");
console.log("Split: " + words);

//indexof: dizideki bir elemanın indeksini bulur
let index = numbers.indexOf(3);
console.log("Index of 3: " + index);

//lastIndexOf: dizideki bir elemanın son indeksini bulur
let lastIndex = numbers.lastIndexOf(3);
console.log("Last Index of 3: " + lastIndex);

//includes: dizideki bir elemanın var olup olmadığını kontrol eder
let includes = numbers.includes(3);
console.log("Includes 3: " + includes);



//string methodları____________________________
let str = "Bu bir örnek cümledir.";
console.log("Original String: " + str);

//toUpperCase: stringi büyük harfe çevirir
let upper = str.toUpperCase();
console.log("To Upper Case: " + upper);

//toLowerCase: stringi küçük harfe çevirir
let lower = str.toLowerCase();
console.log("To Lower Case: " + lower);

//substring: stringin belirli bir bölümünü alır
let sub = str.substring(3, 7);
console.log("Substring: " + sub);

//split: stringi belirli bir ayırıcı ile böler
let words2 = str.split(" ");
console.log("Split: " + words);

//indexOf: stringdeki bir alt dizeyi bulur
let index2 = str.indexOf("örnek");
console.log("Index of 'örnek': " + index2);

//lastIndexOf: stringdeki bir alt dizeyi son kez bulur
let lastIndex2 = str.lastIndexOf("i");
console.log("Last Index of 'i': " + lastIndex2);

//charAt: stringdeki bir karakteri bulur
let charAt = str.charAt(5);
console.log("Character at index 5: " + charAt);

//concat: stringleri birleştirir
let str2 = " Bu da ikinci cümledir.";
let concatenated2 = str.concat(str2);
console.log("Concat: " + concatenated2);

//trim: stringin başındaki ve sonundaki boşlukları temizler
let trimmed = str.trim();
console.log("Trimmed: " + trimmed);

//slice: stringin belirli bir bölümünü alır
let sliced2 = str.slice(3, 7);
console.log("Sliced: " + sliced2);

//replace: stringdeki bir alt dizeyi değiştirir
let replaced = str.replace("örnek", "örnek (değiştirildi)");
console.log("Replaced: " + replaced);

//valueOf: stringin primitive değerini alır
let value = str.valueOf();
console.log("Value Of: " + value);

//startsWith: stringin belirli bir alt dize ile başlayıp başlamadığını kontrol eder
let startsWith = str.startsWith("Bu");
console.log("Starts With 'Bu': " + startsWith);

//endsWith: stringin belirli bir alt dize ile bitip bitmediğini kontrol eder
let endsWith = str.endsWith("cümledir.");
console.log("Ends With 'cümledir.': " + endsWith);

//includes: stringde bir alt dize var mı kontrol eder
let includes3 = str.includes("örnek");
console.log("Includes 'örnek': " + includes3);


//math sınıf methodları_____________
let num1 = 10;
let num2 = 20;

//max: iki sayının en büyüğünü alır
let max = Math.max(num1, num2);
console.log("Max: " + max);

//min: iki sayının en küçüğünü alır
let min = Math.min(num1, num2);
console.log("Min: " + min);

//round: sayıyı en yakın tam sayıya yuvarlar
let rounded = Math.round(5.7);
console.log("Rounded: " + rounded);

//floor: sayıyı aşağıya yuvarlar
let floored = Math.floor(5.7);
console.log("Floored: " + floored);

//ceil: sayıyı yukarıya yuvarlar
let ceiled = Math.ceil(5.1);
console.log("Ceiled: " + ceiled);

//random: 0 ile 1 arasında rastgele bir sayı döner
let random = Math.random();
console.log("Random: " + random);

//abs: bir sayının mutlak değerini alır
let absolute = Math.abs(-5);
console.log("Absolute: " + absolute);

//pow: bir sayıyı üssüne yükseltir
let power = Math.pow(2, 3);
console.log("Power: " + power);

//sqrt: bir sayının karekökünü alır
let squareRoot = Math.sqrt(16);
console.log("Square Root: " + squareRoot);


//Tarih methodları________________________
let date = new Date(); //   bir Date nesnesi oluşturur
console.log("Current Date: " + date);

//getFullYear: yılı alır
let year = date.getFullYear();
console.log("Year: " + year);

//getMonth: ayı alır (0-11 arası)
let month = date.getMonth();
console.log("Month: " + month);

//getDate: günü alır
let day = date.getDate();
console.log("Day: " + day);

//getHours: saati alır
let hours = date.getHours();
console.log("Hours: " + hours);

//getMinutes: dakikayı alır
let minutes = date.getMinutes();
console.log("Minutes: " + minutes);

//getSeconds: saniyeyi alır
let seconds = date.getSeconds();
console.log("Seconds: " + seconds);

//setFullYear: yılı ayarlar
date.setFullYear(2025);
console.log("Updated Year: " + date.getFullYear());

//setMonth: ayı ayarlar
date.setMonth(11);
console.log("Updated Month: " + date.getMonth());

//setDate: günü ayarlar
date.setDate(25);
console.log("Updated Day: " + date.getDate());

//setHours: saati ayarlar
date.setHours(10);
console.log("Updated Hours: " + date.getHours());

//setMinutes: dakikayı ayarlar
date.setMinutes(30);
console.log("Updated Minutes: " + date.getMinutes());

//setSeconds: saniyeyi ayarlar
date.setSeconds(45);
console.log("Updated Seconds: " + date.getSeconds());





//----------------------------------------------- boş iş-------------------------- vue öğreneceğiz
// Sayfanın adres (URL) bilgilerini almak
console.log(document.location.host);     // Sitenin adını verir (örn: 127.0.0.1 veya google.com)
console.log(document.location.port);     // Çalıştığı portu verir (örn: 5500)
console.log(document.domain);            // Domain adını verir
console.log(document.title);             // Sekmede yazan sayfa başlığını verir

// Sayfadaki tüm Linkleri (<a> etiketlerini) yakalamak
let linkler = document.links;            // Sayfadaki tüm linkleri liste(array) olarak getirir.
let dorduncuLink = document.links[4];    // Sadece 4. sıradaki linki yakalar.

// Yakalanan elementin özelliklerini (Attribute) çekmek
console.log(dorduncuLink.id);            // O linkin HTML'deki id="btn-1" değerini okur.
console.log(dorduncuLink.className);     // O linkin tüm class'larını tek bir metin olarak okur.

// Class'ları Liste (Array) olarak parçalayıp almak
// (Örn: class="btn btn-primary mt-3" ise ve bize sadece 'mt-3' lazımsa)
let sinifListesi = dorduncuLink.classList;
console.log(sinifListesi[2]);            // 3. sıradaki class'ı (mt-3) verir.

// Sayfadaki Formları (<form> etiketlerini) yakalamak
let formlar = document.forms;            // Tüm formları getirir.
let ikinciForm = document.forms[1];      // 1. indeksteki (yani 2. sıradaki) formu yakalar.
console.log(ikinciForm.name);            // O formun name="form2" değerini okur.



//bir elemanı seçmek için kullanabileceğin yöntemler:

// 1. ID ile seçmek (CSS'deki gibi başına # koyulur)
let temizleButonu = document.querySelector("#todoClearButton");

// 2. Class ile seçmek (CSS'deki gibi başına . koyulur)
let listeElemani = document.querySelector(".list-group-item"); // DİKKAT: Sadece ilk bulduğunu getirir!

// 3. Etiket adı ile seçmek (Direkt etiketin adı yazılır)
let baslik = document.querySelector("h1");


//birden fazla elemanı seçmek:

// Sayfadaki "list-group-item" class'ına sahip TÜM elemanları yakalar.
let tumListeElemanlari = document.querySelectorAll(".list-group-item");

// Yakaladığın bu listenin üzerinde döngü kurup hepsinin rengini değiştirebilirsin:
tumListeElemanlari.forEach(function(eleman) {
    eleman.style.backgroundColor = "lightgray"; // Hepsini gri yapar
});


//yakalanan elemanların özelliklerini değiştirmek:

let myButon = document.querySelector("#myBtn"); // Butonu yakala

// 1. İçindeki Yazıyı Değiştirmek
myButon.textContent = "Bana Tıkla!"; // Sadece düz yazı yazar.
myButon.innerHTML = "<b>Bana Tıkla!</b>"; // HTML etiketlerini (kalınlaştırma vb.) de çalıştırır.

// 2. Class Ekleyip Çıkarmak
console.log(myButon.className);      // Mevcut class'ları düz metin olarak okur.
myButon.classList.add("btn-danger"); // Yeni bir class ekler.
myButon.classList.remove("mt-3");    // Var olan bir class'ı siler.

// 3. Özellik (Attribute) Okumak
console.log(myButon.getAttribute("type")); // "submit" veya "button" olduğunu söyler.



// child elemanları seçmek:

// Listedeki sadece İLK elemanı seçer
let ilkCocuk = document.querySelector("li:first-child");

// Listedeki sadece SON elemanı seçer
let sonCocuk = document.querySelector("li:last-child");

// Listedeki sadece 2. elemanı seçer (indeks değil, normal sayma sayısıdır)
let ikinciCocuk = document.querySelector("li:nth-child(2)");

// Tek sayı sırasındaki (1, 3, 5) elemanları seçer (Hepsi için querySelectorAll şart)
let tekler = document.querySelectorAll("li:nth-child(odd)");

// Çift sayı sırasındaki (2, 4, 6) elemanları seçer
let ciftler = document.querySelectorAll("li:nth-child(even)");

//-----------------------------------------------

// EcmaScript 6 

//arrow function!  
const topla = (a, b) => a + b;  //tek satırsa fonksiyon içi o zaman süslü parantez kullanmaya gerek yoktur.

//Destructuring (Des) ile Değişken Tanımlama
const kisi = { ad: "Ali", yas: 30 };
const { ad, yas } = kisi;  //kisi nesnesinden ad ve yas değişkenlerini çıkarır.
console.log(ad);  //Ali
console.log(yas);  //30

const obje = { meslek: "Mühendis", sehir: "İstanbul" }; //süslü parantez, köşeli parantez değil.
const { meslek, sehir } = obje;
console.log(meslek);  //Mühendis
console.log(sehir);  //İstanbul

//spread operator
let kisiler = ["Ahmet", "Memo", "Hamza", "Kadir"];

function listeyiYazdir() {
    kisiler.forEach(function(kisi) {
        console.log(kisi);
    });
}
listeyiYazdir(...kisiler); // Ahmet Memo Hamza Kadir'i index kullanmadan fonksiyona gönderir.





//map kullanımı:

// 1. Map Oluşturma
const myMap = new Map();

// 2. Değer Ekleme (.set)
myMap.set(34, "İstanbul");      // Key: Number, Value: String
myMap.set("06", "Ankara");      // Key: String, Value: String
myMap.set(true, "Aktif");       // Key: Boolean, Value: String

// 3. Değer Okuma (.get)
console.log(myMap.get(34));     // Çıktı: "İstanbul"

// 4. Map'in Boyutunu Bulma (.size)
console.log(myMap.size);        // Çıktı: 3

// 5. Değer Silme (.delete) ve Sorgulama (.has)
myMap.delete(34);               // 34 anahtarını siler (Başarılıysa true döner)
console.log(myMap.has("06"));   // "06" diye bir anahtar var mı? (Çıktı: true)

// 6. Map Üzerinde Döngü Kurma (for...of ve Destructuring ile)
for (let [anahtar, deger] of myMap) {
    console.log(`Plaka: ${anahtar}, Şehir: ${deger}`);
}

// 7. Map'i Klasik Diziye (Array) Çevirme
const maptenDiziye = Array.from(myMap);


//set kullanımı: 

// 1. Set Oluşturma
const mySet = new Set();

// 2. Değer Ekleme (.add)
mySet.add("Enes");
mySet.add(3.14);
mySet.add("Enes"); // DİKKAT: Bunu eklemez! "Enes" zaten var.

// 3. Boyut ve Sorgulama
console.log(mySet.size);        // Çıktı: 2 (İkinci Enes'i saymadı)
console.log(mySet.has(3.14));   // İçinde 3.14 var mı? (Çıktı: true)

// 4. Değer Silme (.delete)
mySet.delete("Enes");           // Enes'i siler.

// 5. Set Üzerinde Döngü Kurma (for...of)
for (let deger of mySet) {
    console.log(deger);
}

// 6. Dizi (Array) ile Set Arasında Dönüşüm (Vue'da çok kullanılır)
let karisikDizi = [1, 1, 2, 2, 3, 3, 3];
let temizSet = new Set(karisikDizi);          // Tekrarlar silindi: Set {1, 2, 3}
let temizDizi = Array.from(temizSet);         // Tekrar diziye çevrildi: [1, 2, 3]



//referans tuzağı:

const map2 = new Map();
map2.set([1, 2, 3], "Şifreler");

// YANLIŞ KULLANIM (Bulamaz)
console.log(map2.get([1, 2, 3])); // Çıktı: undefined (Çünkü RAM'de ikisi farklı dizilerdir)

// DOĞRU KULLANIM
const benimDizim = [1, 2, 3];
map2.set(benimDizim, "Şifreler");
console.log(map2.get(benimDizim)); // Çıktı: "Şifreler" (Çünkü aynı değişkene/adrese bakıyorlar)

//template literals
const adı = "Ali";
const yaşı = 30;
const mesaj = `Benim adım ${adı} ve yaşım ${yaşı}.`; //ters tırnak.
console.log(mesaj); 

