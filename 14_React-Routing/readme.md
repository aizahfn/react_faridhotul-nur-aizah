# (14)React Routing

## 1. Routes

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada single page application. Single page application merupakan salah satu jenis aplikasi website yang dimana hanya ada 1 halaman yang menanangani semua aktivitas yang terjadi dalam aplikasi tersebut.
React router dapat diinstall dengan :
npm install react-router-dom --save
Terdapat beberapa react router version 5, yaitu :

1. Browser router, digunakan sebagai router yang menggunakan API history dari HTML 5 sehingga dapat menggunakan location untuk sinkronisasi UI dengan URL.
2. Route, digunakan sebagai pengarah jalan raya nya lalu lintas suatu aplikasi web.
3. Switch, digunakan untuk membungkus kumpulan beberapa component route.
4. Link, digunakan untuk berpindah antar halaman property to tersebut merujuk pada path di route yang akan dituju.

## 2. Menggunakan URL Param React

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

Perbedaan link dan redirect
Link :

- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan click seperti a href
  Redirect
- Lebih sering digunakan pada halaman 404
- Menimpa history pada browser
- Bereaksi dengan suatu kondisi

## 3. Hook Routing React

- useHistory, memberikan akses ke instance riwayat yang dapat digunakan untuk bernavigasi.
- useLocation
- useParams, digunakan untuk mengembalikan objek pasangan kunci / nilai parameter URL.
- useRouteMatch, mencoba mencocokkan URL saat ini dengan cara seperti <Route>.

## 4. React Routing Baru

- New update, terdapat fitur baru pada react 6 yaitu penanganan routing berbasis hook, penanganan error lebih baik, pengelolaan routing yang lebih terpusat, perubahan pada konsep penggunaan URL.
- Komponen route secara statis, saat menggunakan komponen route untuk mendefinisikan dua rute, ketika path sesuai dengan salah satu rute, komponen terkait akan ditampilkan dalam aplikasi.
- Komponen route dinamis
- Parameter, dalam menggunakan parameter, kita dapat membuat rute yang dapat menyesuaikan diri dengan nilai yang berbeda dan mengakses nilai tersebut dalam komponen terkait.
- Nested Route, dengan menggunakan nested route kita dapat membuat tampilan yang terstruktur secara hierarkis aplikasi react.
- Link, dengan menggunakan link kita dapat membuat pengguna melakukan navigasi ke halaman yang lain dengan melakukan click atau tap.
