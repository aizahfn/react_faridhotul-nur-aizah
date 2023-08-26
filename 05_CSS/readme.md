# (05)CSS

## 1. Introduction CSS
CSS atau Cascading Style SHeets merupakan bahasa sederhana yang digunakan untuk menambahkan gaya/styling ke sebuah halaman website. CSS dapat digunakan untuk menghias halaman web seperti (color, font, background, width, height) dan dapat mengatur posisi pada halaman web seperti (float, align, display, position).

## 2. Menambahkan file CSS
Terdapat 3 cara menambahkan file CSS ke dalam HTML :
1. External CSS
dengan menuliskan <link rel="stylesheet" href="main.css"> ke dalam tag <head> pada HTML.
2. Internal CSS
Internal CSS dapat dilakukan dengan menggunakan syntax dalam satu file HTML. Syntax ini didefinisikan di dalam elemen <style>, di dalam bagian <head> atau di dalam bagian <body>.
3. Inline CSS
Misalkan <h1 style="color: #19355f;">Hello World</h1>
SYntax ini dapat digunakan untuk elemen tunggal pada HTML, namun syntax ini di prioritaskan untuk menerapkan style yang unik.

## 3. CSS Properties
Fonts
- Font : digunakan untuk menetapkan semua properti font dalam satu deklarasi.
- Font-family : digunaka untuk menentukan kelompok font teks
- Font-size : digunakan untuk menentukan ukuran font teks
- Font-weight : digunakan untuk menentukan ketebalan font teks
- Font-style : digunakan untuk menentukan font teks menjadi miring

Background
- Background-color : menetapkan warna background pada suatu elemen
- Background-image : menentukan gambar background pada suatu elemen
- Background-repeat : menentukan gambar background untuk di ulang
- Background-size : menentukan ukuran gambar untuk background
- Background-position : mengatur posisi awal gamnbar background

Link
:hover : kondisi style ketika mouse/cursor berada diatas elemen
:active : style ketika link "a" ditekan
:visited : style dimana elemen link "a" telah dikunjungi atau di klik

Display
Block : dimulai pada baris baru (kiri-kanan)
Inline-Block : membutuhkan lebar sesuai yang diperlukan
None : menyembunyikan elemen untuk tidak ditampilkan

Tabel
Border : digunakan untuk menambahkan border pada table, th dan td
Border-collapse : digunakan untuk membuat border menjadi single border
:nth-child(even) : digunakan untuk membuat background stripe