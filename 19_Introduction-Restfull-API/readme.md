# (19) Introduction Restfull API

## 1. API (Application Programming Iterface)

API merupakan sekumpulan fungsi dan prosedur yang memungkinkan pembuatan aplikasi yang mengakses fitur atau data sistem operasi, aplikasi, atau layanan lainnya. API menyediakan cara untuk satu program atau sistem untuk mengakses dan menggunakan fungsi atau data yang disediakan oleh program atau sistem lainnya, tanpa harus memahami detail internal dari program tersebut.
API dapat digunakan dalam berbagai konteks, termasuk perangkat lunak, web, perangkat keras, dan database, untuk memungkinkan berbagai aplikasi dan sistem untuk bekerja bersama dan berbagi data dengan cara yang terstruktur. Dalam konteks web, API web umumnya digunakan untuk mengakses layanan online atau berinteraksi dengan situs web, seperti mengambil data dari situs web atau melakukan tindakan tertentu melalui jaringan.

## 2. Bagaimana API bekerja?

- Permintaan (Request): API bekerja dengan cara komponen perangkat lunak pertama (biasanya disebut klien) mengirim permintaan kepada API yang kedua (biasanya disebut server). Permintaan ini berisi informasi tentang tindakan yang ingin dilakukan oleh API, seperti mengambil data, mengirim data, atau melakukan operasi lainnya.
- Proses: Server yang memiliki API akan memproses permintaan yang diterima. Ini melibatkan pengecekan validitas permintaan, menjalankan operasi yang diminta, mengakses data dari database, atau berinteraksi dengan berbagai sumber daya yang dibutuhkan untuk menangani permintaan tersebut.
- Respons (Response): Setelah proses selesai, server akan mengirim respons kepada klien. Respons ini berisi hasil dari operasi yang dilakukan oleh API. Respons juga bisa berisi informasi tambahan, seperti status operasi, data tambahan, atau pesan kesalahan jika terjadi masalah.

## 3. REST (REpresentational State Transfer)

Use : HTTP Protocol
Example : https://www.instagram.com/graphql/query
Request and Response format :

- JSON
- XML
- SOAP

HTTP request method :

- GET
- POST
- PUT
- DELETE
- HEAD
- OPTION
- PATCH

## 4. JSON (JavaScript Object Notation)

HTTP Response Code :
200 : OK
201 : Created
400 : Bad Request
404 : Not Found
401 : Unathourized
405 : Method Not Allowed
500 : Internal Server Error
