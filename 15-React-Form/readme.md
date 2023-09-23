# (15)React Form

## 1. Basic Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
Contoh form :

- Elemen <input>, biasanya digunakan inputan yang tidak terlalu panjang.
- Elemen <textarea>, digunakan inputan yang cukup panjang.
- Elemen <select>, digunakan untuk inputan yang pilihannya sudah ditentukan.
- Radio button, dimana kita hanya bisa memilih 1 pilihan menggunakan radio button.
- Checkbox, dimana kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

## 2. Controlled Component

Controlled component merupakan sebuah elemen masukan form yang nilainya dikontrol oleh react. Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan react dengan menggunakan state pada react, kemudian komponen react yang me render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.

- Textarea, di react <textarea> menggunakan atribut value. Dengan cara ini sebuah form yang menggunakan <textarea> dapat dituli dengan cara yang mirip dengan sebuah form yang menggunakan input satu baris.
- Tag Select, di react kita menggunakan atribut value di tag select. Kita bisa memasukkan array ke atribut value yang memungkinkan kita memilih beberapa opsi dalam tag select.

## 3. Uncontrolled Component

Uncontrolled component merupakan alternatif lain dari controlled component dimana data form akan ditangani oleh DOM nya sendiri. Untuk menulis uncontrolled component, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

Atribut defaultValue, atribut value pada elemen form akan menimpa nilai pada DOM, dengan uncontrolled component, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

Tag File Input, dalam react sebuah tag file input merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

## 4. Basic Validation

3 alasan mengapa validasi form :

- Mencari input data yang benar dan sesuai format.
- Melindungi akun pengguna.
- Melindungi sistem / aplikasi.

Tipe validasi data formulir :

- Client side validation, dilakukan validasi pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form sebelum data form dikirimkan ke server.
- Server side validation, dilakukan pada sisi server yang bertuga untuk memvalidasi data kemabli sebelum disimpen ke database.
