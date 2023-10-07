# (21)Authentication In React

## 1. Authentication

Fungsi penetapan hak akses/privilege terhadap sumber daya, yang berkaitan dengan keamanan informasi secara umum, dan pengendalian akses pada khususnya. Otorisasi yang lebih formal adalah dengan mendefinisikan kebijakan akses. Autentikasi adalah bagian kritis dari keamanan aplikasi web, dan melaksanakannya dengan benar adalah hal yang penting untuk menjaga data dan privasi pengguna.

Langkah umum melakukan autentikasi pada aplikasi react :

- Setup dan Installasi: Pertama, Anda perlu mengatur dan menginstal alat dan pustaka yang dibutuhkan untuk autentikasi dalam proyek React Anda. Beberapa pustaka populer untuk autentikasi termasuk Firebase Authentication, Auth0, Okta, atau menggunakan autentikasi berbasis token dengan server sendiri.
- Membuat Komponen Autentikasi: Biasanya, Anda akan membuat komponen khusus untuk autentikasi, seperti Login, Register, dan Logout. Komponen ini akan berisi formulir untuk masuk atau mendaftar pengguna.
- Menyimpan Data Pengguna: Setelah pengguna berhasil masuk atau mendaftar, Anda perlu menyimpan data pengguna, seperti token akses, di dalam penyimpanan lokal (local storage) atau dalam state aplikasi.
- Proteksi Rute: Untuk mengamankan rute-rute yang hanya dapat diakses oleh pengguna yang sudah masuk, Anda perlu menerapkan proteksi rute. Dalam React, Anda bisa menggunakan library seperti react-router untuk mengatur proteksi rute dengan mudah.
- Logout: Buat fungsi logout yang memungkinkan pengguna keluar dari sesi mereka. Hal ini akan menghapus data pengguna dari penyimpanan lokal dan mematikan akses ke rute yang dilindungi.
- Manajemen Token: Anda perlu memastikan token akses (dan jika digunakan, refresh token) dikelola dengan baik. Token harus dikirim dalam header permintaan ke server untuk mengotentikasi pengguna pada setiap permintaan ke API yang memerlukan autentikasi.
- Penanganan Kesalahan: Perlakukan kasus kesalahan dengan baik, seperti ketika login gagal atau token kedaluwarsa. Berikan pesan kesalahan yang informatif kepada pengguna dan pastikan aplikasi berperilaku dengan benar dalam skenario kesalahan.
- Pengujian: Ujilah autentikasi dengan baik untuk memastikan bahwa semua fitur terkait autentikasi berfungsi dengan baik. Uji skenario masuk, mendaftar, keluar, dan manajemen kesalahan.
- Dokumentasi: Jika Anda mengembangkan aplikasi yang akan digunakan oleh orang lain atau tim lain, buatlah dokumentasi yang jelas tentang cara menggunakan autentikasi dalam proyek React Anda.

## 2. Login

Dalam keamanan komputer, masuk adalah proses di mana seseorang memperoleh akses ke sistem komputer dengan mengidentifikasi dan mengautentikasi dirinya sendiri.

## Simple Login

Open App -> Auth_Token available?
Yes -> Attempt Login -> Successful? -> Yes : Show UserviewController, No : Show Login Srcreen -> Enter Credentials.
No -> Show Login Screen -> Enter Credentials.
