# (08)Introduction Data Structure

## 1. Introduction data structure
- Data merupakan cakupan luas yang merujuk pada semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dan lain-lain).
- Data structure merupakan bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer.
- Data dapat dikelola dengan berbagai cara.
Basic data structure terdiri dari array dan set, namun pada set tidak mengizinkan adanya duplikasi.

## 2. Operasi Data Structure
- Read
Array : digunakan untuk melihat nilai yang terkandung pada indeks tertentu di dalam array, operasi efisien, dan tercccepat karena hanya membutuhkan 1 steps.
Set : dapat menggunakan forEach
- Search
Array : digunakan untuk mencari nilai tertentu dalam array, ketika melakukan searching pada array komputer tidak dapat melompat langsung ke nilai tertentu, komputer tidak tahu nilai apa yang tergantung dalam setiap memori.
Set : dapat menggunakan has method
- Insert
Array : efisiensi insertion tergantung dimana kita memasukkan value, dimana memasukkan value pada akhir array hanya membutuhkan 1 step. jika ingin memasukkan value baru di awal / tengah array perlu menggeser data yang sudah ada pada array sehingga membutuhkan steps tambahan.
Set : perlu step tambahan untuk memastikan bahwa value yang ingin dimasukkan tidak ada dalam set, sehingga operasi search akan dijalankan terlebih dahulu untuk melihat valuenya.
- Delete
Array : digunakan untuk menghilangkan value pada indeks tertentu, membutuhkan jumlah N steps untuk array yang mengandung N data.
Set : dapat menggunakan method delete()

## 3. Deskripsi
-  Untuk mengetahui performa dari sebuah data structure di suatu aplikasi penting untuk menganalisa jumlah setps.
- Reading, searching dan deletion pada array dan set memiliki efisiensi berurutan yaitu 1 steps, N steps, dan N steps. Pada insert, skenario terbaik pada array yaitu 1 steps, pada set N+1 steps.
- Set penting saat ingin data structure yang terbebas dari duplikasi, namun jika tidak membutuhkan pemeriksaan duplikasi maka menggunakan array lebih disarankan.
