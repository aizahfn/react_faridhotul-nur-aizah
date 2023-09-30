# (17)React Testing

## 1. Testing

Testing merupakan proes memverifikasi bahwa test assertions kita benar dan code kita benar sepanjang masa aplikasi. Tes assertion merupakan ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
Kategori testing :

1. Rendering component trees
   di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan aplikasi lengkap
   di dalam environment browser asli dan dikenal dengan end to end.

Rekomendasi Tools yang digunakan :
Jest, jest merupakan test runner pada javascript yang memungkinkan mengakses DOM melalui jsdom. Jsdom merupakan perkiraan cara kerja browser dan cukup baik dalam mengetes komponen react. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur yang powerfull seperti mocking modules dan timers sehingga dapat memiliki kontrol lebih pada kode yang dijalankan.

## 2. Create Basic Testing

RENDERING
Render dan Debug :
Fungsi render RTL akan merender file JSX, setelah itu baru bisa memiliki akses ke komponen react yang di test. Untuk meyakinkan file JSX sudah terender, bisa menggunakan fungsi debug RTL.

MEMILIH ELEMEN
React testing library menawarkan berbagai fungsi untuk mendapatkan elemen. Elemen selanjutnya digunakan untuk assertions / untuk interaksi pengguna. Salah satu contohnya adalah getByText untuk memilih teks dari elemen yang sudah dipilih.

KATEGORI TESTING

- LabelText: getByLabelText: <label for="search"/>
- PlaceholderText:getByPlaceholderText: <input placeholder="Search"/>
- AltText: getByAltText: <img alt="profile"/>
- DisplayValue: getByDisplayValue: <input value="JavaScript"/>

HANDLE ASYNCHRONUS
Digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini perlu membuat mock untuk aaxios. Kemudian perlu membuat mock promise hasilnya ketika resolve atau reject.

## 3. Testing Custom Hook

Library yang digunakan :
React Hooks Testing Library, akan memberikan kita alat untuk mengetes hooks tanpa merender satu komponen, dengan npm install -D @testing-library/react-hooks
