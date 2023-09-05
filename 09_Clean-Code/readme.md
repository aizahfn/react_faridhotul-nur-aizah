# (09)Clean Code

## 1. Clean Code
Clean code merupakan istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer. Tujuannya adalah agar code tersebut tidak hanya bisa dipahami oleh pembuat kode, namun bisa dipahami oleh orang lain. Clean code dilakukan untuk kolaborasi kerja bersama orang lain / tim, faster development dan feature development.

## 2. Karakteristik Clean Code
1. Mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good function
8. Gunakan konvensi
Misalnya menggunakan style guide, penggunaan airbnb untuk javascript dan google untuk python.
9. Formatting
- lebar baris code 80 - 120 karakter
- Satu class 300 - 500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dengan pemanggilnya
- Deklarasi variabel berdekatan dengan penggunanya
- Perhatikan indentasi
- Menggunakan prettier atau formatter

## Prinsip Clean Code
1. KISS (Keep It So Simple)
- Fungsi atau class harus kecil
- Fungsi dibuat untuk melakukan satu tugas saja
- Jangan gunakan terlalu banyak argumen pada fungsi
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal
2. DRY (Dont Repeat Yourself)
Duplikasi code terjasi karena sering copy paste. Untuk menghindarinya, buatlah fungsi yang dapat digunakan secara berulang-ulang.
3. Refactoring
Merupakan proses restrukturisasi kode yang dibuat dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
Refactoring dapat dicapai dengan membuat sebuah abstraksi, memecah kode dengan fungsi/class, memperbaiki penamaan dan lokasi code, dan mendeteksi kode yang memiliki duplikasi..