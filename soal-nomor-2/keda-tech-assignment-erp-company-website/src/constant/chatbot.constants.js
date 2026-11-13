export const CHATBOT_INITIAL_MESSAGES = [
  {
    id: 1,
    role: "assistant",
    text: "Halo! Selamat datang di KeDA Tech ERP. Ada yang bisa saya bantu?",
  },
];

export const CHATBOT_RESPONSES = [
  {
    keywords: ["harga", "paket", "pricing", "biaya"],
    response:
      "KeDa Tech ERP memiliki 3 paket: Basic Rp 99rb, Business Rp 249rb, dan Entrepreneur Rp 499rb per bulan. Kamu bisa melihat detailnya di bagian Pricing.",
  },
  {
    keywords: ["fitur", "stok", "barang"],
    response:
      "KeDA Tech ERP membantu mencatat barang masuk dan keluar, memantau keuntungan, serta menganalisis penjualan.",
  },
  {
    keywords: ["kontak", "email", "hubungi"],
    response:
      "Kamu bisa menghubungi tim kami melalui formulir Contact Us di halaman ini.",
  },
];

export const CHATBOT_DEFAULT_RESPONSE =
  "Terima kasih atas pertanyaannya! Untuk informasi lebih lanjut, silakan hubungi tim KeDA Tech ERP melalui Contact Us.";
