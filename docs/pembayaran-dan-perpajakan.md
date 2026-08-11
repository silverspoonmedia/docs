---
title: Pembayaran dan perpajakan
description: Bagaimana Silverspoon memilah pembayaran dan kewajiban perpajakan untuk pelanggan Indonesia versus internasional.
sidebar_label: Pembayaran & pajak
---

# Pembayaran dan perpajakan

Dokumen ini menjelaskan **cara aplikasi memilah alur pembayaran** dan **siapa yang menanggung perpajakan** bergantung pada **lokasi atau status pelanggan** relatif terhadap Indonesia.

> **Catatan mengenai permintaan asli:** poin kedua dalam daftar kebutuhan tertulis dengan kalimat pembuka yang sama dengan poin pertama (“transaksi terhadap orang Indonesia”). Secara substansi, alur **Merchant of Record (MoR)** seperti Polar atau Lemon Squeezy dipakai untuk **pelanggan di luar Indonesia / transaksi internasional**. Isi di bawah mengikuti interpretasi itu. Jika kebijakan internal Anda berbeda, sesuaikan teks ini.

---

## 1. Pelanggan Indonesia

Jika transaksi dilakukan oleh **pelanggan yang berada dalam lingkup Indonesia** (yang ditangani sebagai transaksi domestik menurut kebijakan produk Anda):

- **Pembayaran** diproses melalui **payment gateway Indonesia**, dan transaksi tersebut **dilakukan atas nama Silverspoon** (Silverspoon tampil sebagai pihak penjual/pemungut pembayaran dari sudut pandang pelanggan, sesuai konfigurasi gateway dan kontrak).
- **Perpajakan** terkait transaksi domestik tersebut **ditangani oleh Silverspoon**, karena Silverspoon merupakan **subjek hukum (entitas) yang berkedudukan di Indonesia** dan bertanggung jawab atas pemenuhan kewajiban perpajakan yang melekat pada penjualan dalam negeri sesuai peraturan yang berlaku.

**Mengapa logikanya begitu:** gateway domestik + entitas Indonesia menggabungkan **arus kas**, **faktur/struk**, dan **kewajiban pajak penjualan/PPh** dalam satu rantai yang berada di yurisdiksi Indonesia, sehingga tidak perlu memindahkan peran penjual ke pihak asing untuk transaksi yang memang domestik.

---

## 2. Pelanggan di luar Indonesia (alur Merchant of Record)

Jika transaksi dilakukan oleh **pelanggan yang bukan dalam lingkup transaksi domestik Indonesia** (misalnya pelanggan internasional), pembayaran dapat diproses melalui **platform MoR** (misalnya **Polar**, **Lemon Squeezy**, atau penyedia sejenis):

- **Pembayaran dan pemenuhan pajak konsumen di negara pelanggan** (VAT/GST/sales tax, pemotongan yang relevan, dll., sesama aturan penyedia) umumnya **ditangani oleh entitas MoR** di masing-masing negara sesuai kemampuan dan model hukum penyedia tersebut.
- **Transaksi antara pelanggan luar Indonesia dan MoR** dilakukan **atas nama entitas MoR**, **bukan** atas nama Silverspoon sebagai penjual langsung ke konsumen akhir pada lapisan checkout MoR.
- **Kewajiban perpajakan Silverspoon** pada jalur ini **tidak menggantikan** pajak yang sudah dipenuhi di sisi MoR; yang dilaporkan/diperhitungkan untuk Silverspoon adalah **pajak atas pendapatan yang diterima Silverspoon** (misalnya bagi hasil, fee, atau settlement setelah MoR memotong komisi, pajak transaksi, dan biaya sesuai kontrak dengan MoR) **setelah** kewajiban perpajakan di sisi MoR dan negara terkait telah terpenuhi sesuai ketentuan yang berlaku.

**Mengapa logikanya begitu:** MoR meminjam **legal “skin”** mereka sebagai penjual catatan resmi ke konsumen, sehingga **invoice dan tax collection** mengikuti aturan **negara konsumen** dan **ketentuan MoR**. Silverspoon di sini lebih mirip **penerima net revenue** dari hubungan B2B dengan MoR; pajak Indonesia atas Silverspoon mengikuti **karakter pendapatan yang masuk ke entitas Indonesia** (bukan seluruh bruto checkout pelanggan luar negeri).

---

## Ringkasan perbandingan

| Aspek | Indonesia (Silverspoon langsung) | Internasional (MoR) |
|--------|-----------------------------------|----------------------|
| Jalur pembayaran | Payment gateway Indonesia | Platform MoR (Polar, Lemon Squeezy, dll.) |
| Nama pada transaksi ke pelanggan | Silverspoon | Entitas MoR |
| Fokus pemenuhan pajak transaksi | Silverspoon (yurisdiksi Indonesia) | MoR + aturan negara pelanggan |
| Posisi Silverspoon | Penjual domestik | Penerima pendapatan pasca-MoR (sesuai kontrak) |

---

Dokumen ini bersifat **penjelasan operasional dan kebijakan internal** untuk dokumentasi produk. Untuk klasifikasi transaksi per negara, tarif, dan pelaporan pajak konkret, **wajib** dikunci bersama penasihat pajak dan hukum yang berwenang.
