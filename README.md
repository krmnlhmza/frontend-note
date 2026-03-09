# Frontend Temelleri ve Modern JS Rehberi

Bu depo, modern frontend framework'lerine (özellikle **Vue.js 3** ve modern CSS kütüphanelerine) geçiş yapmadan önce web geliştirmenin çekirdek yapılarını, HTML/CSS iskeletini, ES6+ standartlarını ve API haberleşme mantığını oturtmak amacıyla hazırlanmış pratik bir referans kaynağıdır.

Gereksiz teorik kalabalıklardan arındırılmış, doğrudan "gerçek projelerde sorunlar nasıl en sade şekilde çözülür?" odaklı kod örnekleri içerir. Özellikle **Spring Boot** tabanlı backend sistemleriyle ve Yapay Zeka (AI Agent) entegrasyonlarıyla haberleşecek yapının (Axios/Fetch) temelleri bu notlarda mevcuttur.

## İçerik ve Kapsam

Bu repoda yer alan referanslar 5 ana mühendislik başlığı etrafında şekillenmiştir:

* **1. HTML5 & CSS3 İskeleti:** Semantik (anlamlı) HTML etiket kullanımı, form donanımları ve responsive (duyarlı) modern tasarım yerleşimleri.
* **2. DOM Manipülasyonu:** JavaScript ile HTML elemanlarını (`querySelector`) yakalama ve CSS özelliklerini dinamik yönetme. (Vue.js'in Sanal DOM ile arka planda yapacağı işlemlerin teknik temeli).
* **3. ES6+ ve Gelişmiş Veri Yapıları:** Klasik dizilerin yetersiz kaldığı noktalarda `Map` (Anahtar-Değer eşleşmesi) ve `Set` (Benzersiz Değerler) yapıları.
* **4. Promise Mimarisi:** Asenkron kodların yönetimi. `Pending`, `Resolved`, `Rejected` durumları, `.then()` zincirleri ve `Promise.all()` ile eşzamanlı çoklu istek yönetimi.
* **5. Async / Await & Fetch API:** "Callback Hell" ve "Promise Chain" karmaşasını bitiren, asenkron işlemleri senkron bir kod gibi yukarıdan aşağıya temiz bir şekilde akıtan modern API istek yöntemleri.
