# (07)Javascript Refreshment

## 1. Javascript Introduction
Bahasa pemrograman yang high-level, scripting, untyped dan interpreted. Javascript merupakan pemroraman yang digunakan untuk pengembangan website agar lebih dinamis dan interaktif.

## 2. Pengertian Var, Let, Const
Var (jarang dipakai)
var num1
console.log(num1)
undefined

Let (digunakan saat membutuhkan nilai yang dapat diubah)
let num2
console.log(num2)
undefined

Const (digunakan saat membutuhkan nilai yang tidak bisa di "reassign")
const num3
console.log(num3)
Uncaught SyntaxError: Missing initializer in const declaration.

- Declaration merupakan proses pembuatan variabel untuk menyimpan data.
- Scoping digunakan untuk menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode kita. Ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.
- Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses / digunakan dalam kode sebelum di deklarasikan. 

## 3. Primitive dan Objects
Primitive
Primitive merupakan unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
Yang termasuk dalam primitive adalah :
- String
- Boolean
- Number
- BigInt (ES11)
- Undefined
- Null
- Symbol (ES6)

Object
Merupakan unit yang menyimpan properti dan fungsi (method)
Yang termasuk dalam object adalah :
- Object
- Array
- Function
- Date
- Set
- Map
- Weak Set
- Weak Map