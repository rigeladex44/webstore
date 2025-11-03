// Products Database
const products = [
    // Gaming
    {
        id: 1,
        name: "Mobile Legends 86 Diamond",
        category: "gaming",
        price: 20000,
        description: "Top up 86 diamond untuk Mobile Legends",
        icon: "🎮"
    },
    {
        id: 2,
        name: "Free Fire 100 Diamond",
        category: "gaming",
        price: 15000,
        description: "Top up 100 diamond untuk Free Fire",
        icon: "🔥"
    },
    {
        id: 3,
        name: "PUBG Mobile 325 UC",
        category: "gaming",
        price: 50000,
        description: "Top up 325 UC untuk PUBG Mobile",
        icon: "🎯"
    },
    {
        id: 4,
        name: "Genshin Impact Blessing",
        category: "gaming",
        price: 65000,
        description: "Blessing of the Welkin Moon",
        icon: "⚔️"
    },
    {
        id: 5,
        name: "Steam Wallet 60K",
        category: "gaming",
        price: 60000,
        description: "Voucher Steam Wallet IDR 60.000",
        icon: "💨"
    },
    // Streaming
    {
        id: 6,
        name: "Netflix Premium 1 Bulan",
        category: "streaming",
        price: 54000,
        description: "Akses Netflix Premium 1 bulan - 4K UHD",
        icon: "🎬"
    },
    {
        id: 7,
        name: "Disney+ Hotstar 1 Bulan",
        category: "streaming",
        price: 39000,
        description: "Akses Disney+ Hotstar Premium 1 bulan",
        icon: "🏰"
    },
    {
        id: 8,
        name: "YouTube Premium 1 Bulan",
        category: "streaming",
        price: 35000,
        description: "YouTube Premium tanpa iklan + YouTube Music",
        icon: "📺"
    },
    {
        id: 9,
        name: "Vidio Premier League",
        category: "streaming",
        price: 45000,
        description: "Nonton Premier League 1 bulan",
        icon: "⚽"
    },
    // Music
    {
        id: 10,
        name: "Spotify Premium 1 Bulan",
        category: "music",
        price: 27000,
        description: "Spotify Premium Individual 1 bulan",
        icon: "🎵"
    },
    {
        id: 11,
        name: "Spotify Premium 3 Bulan",
        category: "music",
        price: 75000,
        description: "Spotify Premium Individual 3 bulan",
        icon: "🎶"
    },
    {
        id: 12,
        name: "Apple Music 1 Bulan",
        category: "music",
        price: 30000,
        description: "Apple Music Individual 1 bulan",
        icon: "🍎"
    },
    {
        id: 13,
        name: "Joox VIP 1 Bulan",
        category: "music",
        price: 20000,
        description: "Joox VIP Premium 1 bulan",
        icon: "🎤"
    },
    // Software
    {
        id: 14,
        name: "Microsoft 365 Personal",
        category: "software",
        price: 85000,
        description: "Microsoft 365 Personal 1 bulan",
        icon: "💼"
    },
    {
        id: 15,
        name: "Canva Pro 1 Bulan",
        category: "software",
        price: 70000,
        description: "Canva Pro dengan semua fitur premium",
        icon: "🎨"
    },
    {
        id: 16,
        name: "Adobe Creative Cloud",
        category: "software",
        price: 150000,
        description: "Adobe CC All Apps 1 bulan",
        icon: "🖌️"
    },
    {
        id: 17,
        name: "Grammarly Premium",
        category: "software",
        price: 65000,
        description: "Grammarly Premium 1 bulan",
        icon: "✍️"
    }
];

// Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

// Load Products
function loadProducts(filter = 'all') {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-image">
            <span style="font-size: 4rem;">${product.icon}</span>
        </div>
        <div class="product-info">
            <span class="product-category">${getCategoryName(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${formatPrice(product.price)}</span>
                <button class="buy-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Beli
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Get Category Name
function getCategoryName(category) {
    const categories = {
        gaming: 'Gaming',
        streaming: 'Streaming',
        music: 'Musik',
        software: 'Software'
    };
    return categories[category] || category;
}

// Format Price
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCartCount();
        showNotification('Produk ditambahkan ke keranjang!');
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Display Cart Items
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Keranjang kosong</p>';
        totalPrice.textContent = 'Rp 0';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Jumlah: ${item.quantity} x ${formatPrice(item.price)}</p>
                <p class="cart-item-price">${formatPrice(itemTotal)}</p>
            </div>
            <div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Hapus
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = formatPrice(total);
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProducts(this.dataset.filter);
        });
    });
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            document.querySelector(`[data-filter="${category}"]`).click();
            document.getElementById('products').scrollIntoView({behavior: 'smooth'});
        });
    });
    
    // Cart icon
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cartModal');
    cartIcon.addEventListener('click', function() {
        displayCartItems();
        cartModal.style.display = 'block';
    });
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Keranjang kosong!', 'error');
            return;
        }
        cartModal.style.display = 'none';
        showCheckoutModal();
    });
    
    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processPayment();
    });
    
    // Close modals
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Show Checkout Modal
function showCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    let total = 0;
    checkoutItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span>${formatPrice(itemTotal)}</span>
        `;
        checkoutItems.appendChild(summaryItem);
    });
    
    checkoutTotal.textContent = formatPrice(total);
    checkoutModal.style.display = 'block';
}

// Process Payment
function processPayment() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!paymentMethod) {
        showNotification('Pilih metode pembayaran!', 'error');
        return;
    }
    
    // Simulate payment processing
    showNotification('Memproses pembayaran...', 'info');
    
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'VO-' + Date.now().toString().slice(-8);
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Close checkout modal
        document.getElementById('checkoutModal').style.display = 'none';
        
        // Show success modal
        showSuccessModal({
            orderNumber: orderNumber,
            customerName: customerName,
            customerEmail: customerEmail,
            customerPhone: customerPhone,
            paymentMethod: getPaymentMethodName(paymentMethod),
            total: total,
            items: [...cart]
        });
        
        // Clear cart
        cart = [];
        updateCartCount();
        
        // Reset form
        document.getElementById('checkoutForm').reset();
    }, 2000);
}

// Get Payment Method Name
function getPaymentMethodName(method) {
    const methods = {
        gopay: 'GoPay',
        ovo: 'OVO',
        dana: 'DANA',
        shopeepay: 'ShopeePay',
        bca: 'Transfer BCA',
        mandiri: 'Transfer Mandiri',
        bri: 'Transfer BRI',
        bni: 'Transfer BNI'
    };
    return methods[method] || method;
}

// Show Success Modal
function showSuccessModal(orderData) {
    const successModal = document.getElementById('successModal');
    const orderDetails = document.getElementById('orderDetails');
    
    let itemsList = '';
    orderData.items.forEach(item => {
        itemsList += `<p><strong>${item.name}</strong> (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}</p>`;
    });
    
    orderDetails.innerHTML = `
        <p><strong>No. Pesanan:</strong> ${orderData.orderNumber}</p>
        <p><strong>Nama:</strong> ${orderData.customerName}</p>
        <p><strong>Email:</strong> ${orderData.customerEmail}</p>
        <p><strong>WhatsApp:</strong> ${orderData.customerPhone}</p>
        <p><strong>Metode Pembayaran:</strong> ${orderData.paymentMethod}</p>
        <hr style="margin: 1rem 0;">
        ${itemsList}
        <hr style="margin: 1rem 0;">
        <p style="font-size: 1.25rem;"><strong>Total:</strong> ${formatPrice(orderData.total)}</p>
    `;
    
    successModal.style.display = 'block';
    
    // Send confirmation email (simulated)
    sendConfirmationEmail(orderData);
}

// Close Success Modal
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Send Confirmation Email (Simulated)
function sendConfirmationEmail(orderData) {
    console.log('Sending confirmation email to:', orderData.customerEmail);
    console.log('Order details:', orderData);
    
    // In production, integrate with email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Or your own SMTP server
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
