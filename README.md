# week4-node-plugin

## 1. Persiapan Lingkungan
- Node.js terpasang (versi 24.7.0)
- Package manager: **npm** (bisa juga pakai pnpm/yarn)

Cek instalasi Node.js:
```bash
node -v
npm -vA
 - buah folder projek
 mkdir week4-node-plugin
 cd week4-node-plugin

 - inisialisasi project Node.js:
 npm init -y

 - Instalasi package
 npm install chalk cowsay figlet darjs gradient-string

 package yang terpasang:
 - chalk = styling teks
 - cowsay = ASCII art karakter
 - figlet = tulisan ASCII
 - dayjs = menampilkan tanggal & waktu
 - gradient-string = gradasi teks

 - buat file index.js
 touch index.js
```

## Jalankan program
jalankan perintah:
```bash
node index.js "Nama - NIM" 
```

