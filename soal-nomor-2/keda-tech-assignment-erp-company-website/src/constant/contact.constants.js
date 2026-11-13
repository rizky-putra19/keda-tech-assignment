export const CONTACT_INFO = [
  {
    id: "email",
    icon: "/icons/mail.svg",
    text: "support@keda.tech",
  },
  {
    id: "hours",
    icon: "/icons/clock.svg",
    text: "Senin–Jumat, 09.00 – 18.00 WIB",
  },
];

export const CONTACT_FIELDS = [
  {
    id: "name",
    name: "name",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Nama Anda",
    required: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "nama@email.com",
    required: true,
  },
  {
    id: "message",
    name: "message",
    label: "Pesan",
    type: "textarea",
    placeholder:
      "Ceritakan kebutuhan bisnis Anda dan cantumkan nomor kontak yang bisa kami hubungi...",
    required: true,
  },
];

export const CONTACT_SUCCESS_MESSAGE =
  "Pesan berhasil dikirim. Tim kami akan segera merespon 1 x 24jam yaa!";
