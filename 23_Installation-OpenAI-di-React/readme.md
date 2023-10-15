# (23)Installation OpenAI di React

## 1. Kenapa Belajar Open AI?
- Gratis (trial)
- Mudah di pasang
- Dipakai banyak user
- Jumlah parameter: 175 miliar (model davinci 03)

## 2. Hal yang harus dipersiapkan
- Pemahaman terkait react
- Dapat menggunakan git dan github / sejenisnya
- Menginstall NPM / yarn / ets
- Mempunyai code editor (visual studio)
- Laptop dan internet

## 3. Langkah pemasangan AI di React
1. Membuat react project
2. Install Open AI package
- Install openai package
- Buka terminal dan masukkan perintah npm install openai
3. Import module yang diperlukan
- Mengimpor modul yang dibutuhkan yaitu useState, Configuration, dan OpenAIApi dari package react dan openai
4. Deklarasi objek
Deklarasikan objek configuration dan OpenAIApi dengan menggunakan API key yang diberikan oleh OpenAI.
5. Deklarasi state
Deklarasikan beberapa state dengan menggunakan useState.
6. Deklarasi hadleclick
Membuat request ke OpenAI API dengan menggunakan method createCompletion
7. Rendering komponen
Rendering komponen textarea, button dan pre untuk menampikan input dari user, tombol generate dan hasil generate dari OpenAI API.
