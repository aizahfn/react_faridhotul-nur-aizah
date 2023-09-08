# (11)React Fundamental

## 1. JSX
JSX / JavaScript XML adalah ekstensi pada javascript. JSX dibuatkan berdasarkan fakta bahwa logika rendering sangat terikat dengan logic UI. JSX tidak wajib digunakan, namun apabila kita membuat / menulis aplikasi react maka JSX akan memudahkan kita. 

- Spesifikasi jenis elemen react
Menggunakan kapitalisasi untuk komponen react, dan menggunakan huruf kecil / lowercase untuk komponen bawaan.
- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal.
- Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript.
- Kita dapat menentukan atribut dengan tanda kutip untuk menentukan string literal, kurung kurawal untuk menyematkan ekspresi JavaScript dan menggunakan camelCase sebagai konvensi penamaan React DOM.
- Jika tag bersifat kosong / tidak memiliki elemen anak, maka bisa menutup dengan />.

## 2. Komponen dan Properti
Komponen react merupakan bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavor dan state sebagian UI.
Properti membuat kita dapat memberikan argumen / data pada komponen dan membantu untuk membuat komponen menjadi lebih dinamis. Props dioper ke komponen sama seperti memberikan atribut pada tag HTML, props pada component adalah read-only dan tidak dapat diubah.

## 3. React Lifecycle
Lifecycle method yang umum digunakan adalah :
1. render()
- Fungsi yang paling sering dipakai
- Required pada class component
- Pure function, tidak boleh ada setState()
2. componentDidMount()
- Dipanggil ketika component sudah di render untuk pertama kali
- Tempat yang tepat untuk pemanggilan API
- Boleh ada setState()
3. componenDidUpdate()
- Dipanggil ketika terjadi update(props atau state berubah)
4. componentWillUnmount()
- DIpanggil ketika component akan dihancurkan
- Cocok untuk clean up actions

Lifecycle method lainnya :
1. shouldComponentUpdate()
2. static getDerivedStateFromProps()
3. getSnapshotBeforeUpdate()
