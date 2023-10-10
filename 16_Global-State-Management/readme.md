# (16)Global State Management

Link Vercel : https://react-deploy-beta-hazel.vercel.app/

## 1. Global State Introduction

Redux merupakan library untuk management state global, menggunakan struktur one way data flow, dan menggunakan beberapa tipe code.
Saat yang tepat untuk melakukan redux :

- Banyak state yang perlu ditaruh di banyak tempat
- State pada app sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang sedang-besar dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

## 2. Redux Thunk

Thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux thunk digunakan untuk menghandle side effect logic yang kompleks, untuk logic async seperti request data.

## 3. Data Fetching

Cara - cara fetching data di react :

1. Fetch API
2. Axios
3. React Query Library
