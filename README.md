# 🎫 VoucherKu - Aplikasi Jual Voucher Digital & Akun Premium

Website e-commerce modern untuk menjual voucher digital dan akun premium dengan sistem pembayaran terintegrasi.

## ✨ Fitur Lengkap

✅ **17 Produk Siap Jual** - Gaming, Streaming, Musik, Software  
✅ **4 Kategori Produk** - Filter produk dengan mudah  
✅ **Sistem Keranjang** - Tambah/hapus produk dinamis  
✅ **8 Metode Pembayaran** - E-wallet & Transfer Bank  
✅ **Checkout Otomatis** - Form lengkap dengan validasi  
✅ **Notifikasi Real-time** - Feedback untuk setiap aksi  
✅ **Responsive Design** - Mobile & Desktop friendly  
✅ **Konfirmasi Pemesanan** - Detail order lengkap  

## 📦 Produk yang Tersedia

### 🎮 Gaming (5 produk)
- Mobile Legends 86 Diamond - Rp 20.000
- Free Fire 100 Diamond - Rp 15.000
- PUBG Mobile 325 UC - Rp 50.000
- Genshin Impact Blessing - Rp 65.000
- Steam Wallet 60K - Rp 60.000

### 📺 Streaming (4 produk)
- Netflix Premium 1 Bulan - Rp 54.000
- Disney+ Hotstar 1 Bulan - Rp 39.000
- YouTube Premium 1 Bulan - Rp 35.000
- Vidio Premier League - Rp 45.000

### 🎵 Musik (4 produk)
- Spotify Premium 1 Bulan - Rp 27.000
- Spotify Premium 3 Bulan - Rp 75.000
- Apple Music 1 Bulan - Rp 30.000
- Joox VIP 1 Bulan - Rp 20.000

### 💼 Software (4 produk)
- Microsoft 365 Personal - Rp 85.000
- Canva Pro 1 Bulan - Rp 70.000
- Adobe Creative Cloud - Rp 150.000
- Grammarly Premium - Rp 65.000

## 🚀 Cara Menggunakan

### Metode 1: Buka Langsung di Browser
1. Download semua file (index.html, styles.css, script.js)
2. Simpan di satu folder yang sama
3. Double-click file `index.html`
4. Website langsung jalan! 🎉

### Metode 2: Menggunakan Local Server (Recommended)

**Dengan Python:**
```bash
python -m http.server 8000
# Buka: http://localhost:8000
```

**Dengan Node.js:**
```bash
npx http-server
# Buka: http://localhost:8080
```

**Dengan PHP:**
```bash
php -S localhost:8000
# Buka: http://localhost:8000
```

## 🎨 Kustomisasi

### 1. Menambah/Edit Produk

Buka file `script.js`, cari bagian `const products` dan edit:

```javascript
const products = [
    {
        id: 18,  // ID unik
        name: "Nama Produk Baru",
        category: "gaming",  // gaming, streaming, music, software
        price: 50000,  // Harga dalam Rupiah
        description: "Deskripsi produk Anda",
        icon: "🎮"  // Emoji atau icon
    },
    // ... produk lainnya
];
```

### 2. Mengubah Warna/Tema

Buka file `styles.css`, edit bagian `:root`:

```css
:root {
    --primary-color: #6366f1;  /* Warna utama */
    --secondary-color: #8b5cf6;  /* Warna sekunder */
    --dark-color: #1e293b;  /* Warna gelap */
    --success-color: #10b981;  /* Warna sukses */
    --danger-color: #ef4444;  /* Warna error */
}
```

### 3. Menambah Metode Pembayaran

Edit file `index.html`, bagian `<select id="paymentMethod">`:

```html
<option value="linkaja">LinkAja</option>
<option value="kredivo">Kredivo</option>
<option value="alfamart">Alfamart</option>
```

Lalu update fungsi di `script.js`:

```javascript
function getPaymentMethodName(method) {
    const methods = {
        // ... metode lainnya
        linkaja: 'LinkAja',
        kredivo: 'Kredivo',
        alfamart: 'Alfamart'
    };
    return methods[method] || method;
}
```

### 4. Mengubah Informasi Kontak

Edit bagian contact di `index.html`:

```html
<p>support@tokosaya.com</p>
<p>+62 812-XXXX-XXXX</p>
```

## 💳 Integrasi Payment Gateway

Website ini siap diintegrasikan dengan payment gateway populer:

### 1. Midtrans (Recommended)

```javascript
// Tambahkan di index.html
<script src="https://app.midtrans.com/snap/snap.js" 
        data-client-key="YOUR_CLIENT_KEY"></script>

// Di script.js, fungsi processPayment()
snap.pay('TRANSACTION_TOKEN', {
    onSuccess: function(result){
        showSuccessModal(orderData);
    },
    onPending: function(result){
        alert('Menunggu pembayaran');
    },
    onError: function(result){
        alert('Pembayaran gagal');
    }
});
```

**Cara Setup Midtrans:**
1. Daftar di https://midtrans.com
2. Dapatkan Client Key & Server Key
3. Buat backend untuk generate token
4. Integrasikan dengan kode di atas

### 2. Xendit

```javascript
// Install Xendit SDK di backend
npm install xendit-node

// Buat invoice
const Xendit = require('xendit-node');
const x = new Xendit({ secretKey: 'YOUR_SECRET_KEY' });

const { Invoice } = x;
const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);

const resp = await i.createInvoice({
    externalID: orderNumber,
    amount: total,
    description: 'Pembelian Voucher'
});
```

### 3. Manual Payment (QRIS/Transfer)

Untuk pembayaran manual, tambahkan di checkout:

```html
<!-- Tambahkan di modal checkout -->
<div class="payment-info">
    <h4>Informasi Pembayaran</h4>
    <p>Transfer ke:</p>
    <p>BCA: 1234567890 a.n. Toko VoucherKu</p>
    <p>Mandiri: 0987654321 a.n. Toko VoucherKu</p>
    <img src="qris-code.png" alt="QRIS" style="width: 200px;">
</div>
```

## 📧 Integrasi Email Otomatis

### Menggunakan EmailJS (Gratis & Mudah)

1. Daftar di https://www.emailjs.com
2. Setup email service dan template
3. Tambahkan script:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

4. Update fungsi `sendConfirmationEmail()`:

```javascript
function sendConfirmationEmail(orderData) {
    emailjs.send('service_id', 'template_id', {
        to_email: orderData.customerEmail,
        to_name: orderData.customerName,
        order_number: orderData.orderNumber,
        total: formatPrice(orderData.total),
        items: orderData.items.map(i => i.name).join(', ')
    }).then(
        function(response) {
            console.log('Email sent!', response);
        },
        function(error) {
            console.log('Email failed...', error);
        }
    );
}
```

### Menggunakan SendGrid

```javascript
// Backend dengan Node.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_API_KEY');

const msg = {
    to: customerEmail,
    from: 'noreply@voucherku.com',
    subject: 'Kode Voucher - ' + orderNumber,
    text: 'Terima kasih atas pembelian Anda',
    html: emailTemplate,
};

await sgMail.send(msg);
```

## 🗄️ Integrasi Database

### Firebase (Recommended untuk Pemula)

```javascript
// 1. Tambahkan Firebase SDK
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

// 2. Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3. Simpan order
await db.collection('orders').add({
    orderNumber: orderNumber,
    customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone
    },
    items: cart,
    total: total,
    paymentMethod: paymentMethod,
    status: 'pending',
    createdAt: new Date()
});
```

### MySQL/PostgreSQL

```sql
-- Buat tabel orders
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_number VARCHAR(50) UNIQUE,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(20),
    payment_method VARCHAR(50),
    total_amount DECIMAL(10,2),
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Buat tabel order_items
CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
```

## 🌐 Deploy ke Internet

### 1. Netlify (Paling Mudah & Gratis)

1. Buat akun di https://netlify.com
2. Drag & drop folder website Anda
3. Website langsung online!

**Atau dengan Git:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### 2. Vercel (Gratis)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### 3. GitHub Pages (Gratis)

1. Push code ke GitHub repository
2. Settings → Pages → Deploy from main branch
3. Website online di username.github.io/repo-name

### 4. Hosting Berbayar Indonesia

- **Niagahoster** - Mulai Rp 10.000/bulan
- **IDCloudHost** - Mulai Rp 15.000/bulan
- **Dewaweb** - Mulai Rp 20.000/bulan

## 🔐 Keamanan untuk Production

Implementasikan fitur keamanan:

```javascript
// 1. Input Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 2. Sanitize Input
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}

// 3. Rate Limiting
let orderCount = 0;
const MAX_ORDERS_PER_HOUR = 10;

function checkRateLimit() {
    if (orderCount >= MAX_ORDERS_PER_HOUR) {
        alert('Terlalu banyak pesanan. Coba lagi nanti.');
        return false;
    }
    orderCount++;
    return true;
}
```

**Checklist Production:**
- ✅ HTTPS/SSL Certificate (wajib!)
- ✅ Environment variables untuk API keys
- ✅ Input validation & sanitization
- ✅ Rate limiting
- ✅ CSRF protection
- ✅ Database backup otomatis
- ✅ Error logging & monitoring

## 📱 WhatsApp Integration

Kirim notifikasi via WhatsApp:

```javascript
// Menggunakan WhatsApp Business API
async function sendWhatsAppNotification(phone, orderData) {
    const message = `
Halo ${orderData.customerName}! 🎉

Pesanan Anda berhasil!
Order: ${orderData.orderNumber}
Total: ${formatPrice(orderData.total)}

Kode voucher akan dikirim ke email Anda.

Terima kasih! 
- VoucherKu
    `;
    
    // Integrate dengan Fonnte, Wablas, atau WA Business API
    const response = await fetch('YOUR_WA_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            target: phone,
            message: message
        })
    });
}
```

## 🎯 Tips Bisnis

1. **Pricing Strategy**
   - Markup 5-15% dari harga modal
   - Tawarkan bundle/paket hemat
   - Buat program loyalty/cashback

2. **Marketing**
   - Promosi di social media (Instagram, TikTok)
   - Join grup WhatsApp/Telegram gamer
   - Buat konten review produk
   - Kolaborasi dengan influencer

3. **Customer Service**
   - Fast response (< 5 menit)
   - Berikan garansi 100%
   - Follow up setelah transaksi

4. **Automation**
   - Auto-send voucher code
   - Auto-reply WhatsApp
   - Auto-reminder pembayaran

## 🆘 Troubleshooting

**Website tidak tampil dengan benar?**
- Pastikan semua file (HTML, CSS, JS) ada di folder yang sama
- Cek console browser (F12) untuk error
- Clear cache browser (Ctrl + Shift + Del)

**Produk tidak muncul?**
- Periksa file script.js sudah di-load
- Cek console untuk error JavaScript

**Modal tidak berfungsi?**
- Pastikan Font Awesome CSS sudah di-load
- Periksa tidak ada error JavaScript

## 📞 Support & Bantuan

Butuh bantuan? Hubungi:
- Email: support@voucherku.com
- WhatsApp: +62 812-3456-7890
- Jam Operasional: Senin - Minggu (08:00 - 22:00)

## 📄 License

Website ini bebas digunakan dan dimodifikasi untuk keperluan bisnis Anda.

## ⚡ Next Steps

1. ✅ Customize produk dan harga
2. ✅ Setup metode pembayaran
3. ✅ Integrasikan email service
4. ✅ Deploy ke hosting
5. ✅ Mulai marketing & promosi!

---

**Selamat berbisnis! Semoga sukses! 🚀💰**

*Dibuat dengan ❤️ untuk para entrepreneur Indonesia*
