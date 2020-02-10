# Auth

## Tujuan
Program ini berfungs untuk melihat data pegawai berdasarkan departemen dan posisi pegawai, yang mana ada 5 tingkatan user, akan tetepi hanya superadmin yang dapat mengedit dan menghapus data user.

## install
Untuk menggunankan program ini, terlebih dahulu clone github ini dan ketika selesai silahkan ketik command di bawah di cmd.
```
npm install
```
Dan ketika selesai, anda dapat mengunakan command dibawah ini untuk menjalankan program.
```
npm start
```
## Cara Kerja
![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/Login.png)
Tampilan diatas merupakan login menggunakan postman, respon dari backend yaitu token JWT yang akan digunakan untuk akses ke service API lainnya.

![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/Regist.png)
Diatas merupakan tampilan postman ketika menambahkan user baru dan responnya sama seperti login yaitu toket JWT.

#### CRUD data
Dalam program terdapat service untuk mendata pegawai berdasarkan nama, posisi, dan departemen,
![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/read_data.png)
Berikut adalah cara mendapatkan list data pegawai dengan metode GET.

![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/create_data.png)
Diatas untuk meupload data pegawai dengan metode POST.

![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/create_data2.png)
Dan untuk otorisasi, hanya superadmin yang dapat mengedit dan menghapus data.

![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/update_data.png)
Untuk mengedit data dapat menggunakan metode PUT.

![Login Image](https://github.com/teguh-elektro/Auth/blob/master/image/delete_data.png)
Terakhir yaitu menghapus data menggunakan metode DELETE.

