// Products Database
// Products Database with Subcategories
const products = [
    // ===== GAMING - Mobile Legends (5 products) =====
    { id: 1, name: "86 Diamond", category: "gaming", subcategory: "Mobile Legends", price: 20000, description: "Top up 86 diamond", icon: "🎮" },
    { id: 2, name: "172 Diamond", category: "gaming", subcategory: "Mobile Legends", price: 38000, description: "Top up 172 diamond", icon: "🎮" },
    { id: 3, name: "344 Diamond", category: "gaming", subcategory: "Mobile Legends", price: 75000, description: "Top up 344 diamond", icon: "🎮" },
    { id: 4, name: "720 Diamond", category: "gaming", subcategory: "Mobile Legends", price: 155000, description: "Top up 720 diamond", icon: "🎮" },
    { id: 5, name: "1440 Diamond", category: "gaming", subcategory: "Mobile Legends", price: 305000, description: "Top up 1440 diamond", icon: "🎮" },

    // ===== GAMING - Free Fire (5 products) =====
    { id: 6, name: "100 Diamond", category: "gaming", subcategory: "Free Fire", price: 15000, description: "Top up 100 diamond", icon: "🔥" },
    { id: 7, name: "310 Diamond", category: "gaming", subcategory: "Free Fire", price: 45000, description: "Top up 310 diamond", icon: "🔥" },
    { id: 8, name: "520 Diamond", category: "gaming", subcategory: "Free Fire", price: 72000, description: "Top up 520 diamond", icon: "🔥" },
    { id: 9, name: "1060 Diamond", category: "gaming", subcategory: "Free Fire", price: 145000, description: "Top up 1060 diamond", icon: "🔥" },
    { id: 10, name: "2180 Diamond", category: "gaming", subcategory: "Free Fire", price: 290000, description: "Top up 2180 diamond", icon: "🔥" },

    // ===== GAMING - PUBG Mobile (5 products) =====
    { id: 11, name: "60 UC", category: "gaming", subcategory: "PUBG Mobile", price: 15000, description: "Top up 60 UC", icon: "🎯" },
    { id: 12, name: "325 UC", category: "gaming", subcategory: "PUBG Mobile", price: 50000, description: "Top up 325 UC", icon: "🎯" },
    { id: 13, name: "660 UC", category: "gaming", subcategory: "PUBG Mobile", price: 95000, description: "Top up 660 UC", icon: "🎯" },
    { id: 14, name: "1800 UC", category: "gaming", subcategory: "PUBG Mobile", price: 250000, description: "Top up 1800 UC", icon: "🎯" },
    { id: 15, name: "3850 UC", category: "gaming", subcategory: "PUBG Mobile", price: 500000, description: "Top up 3850 UC", icon: "🎯" },

    // ===== GAMING - Roblox (5 products) =====
    { id: 16, name: "400 Robux", category: "gaming", subcategory: "Roblox", price: 45000, description: "Top up 400 Robux", icon: "🎲" },
    { id: 17, name: "800 Robux", category: "gaming", subcategory: "Roblox", price: 85000, description: "Top up 800 Robux", icon: "🎲" },
    { id: 18, name: "1700 Robux", category: "gaming", subcategory: "Roblox", price: 175000, description: "Top up 1700 Robux", icon: "🎲" },
    { id: 19, name: "4500 Robux", category: "gaming", subcategory: "Roblox", price: 450000, description: "Top up 4500 Robux", icon: "🎲" },
    { id: 20, name: "10000 Robux", category: "gaming", subcategory: "Roblox", price: 950000, description: "Top up 10000 Robux", icon: "🎲" },

    // ===== GAMING - Genshin Impact (4 products) =====
    { id: 21, name: "Welkin Moon", category: "gaming", subcategory: "Genshin Impact", price: 65000, description: "Blessing 30 hari", icon: "⚔️" },
    { id: 22, name: "330 Crystal", category: "gaming", subcategory: "Genshin Impact", price: 75000, description: "Genesis Crystal 330", icon: "⚔️" },
    { id: 23, name: "980 Crystal", category: "gaming", subcategory: "Genshin Impact", price: 195000, description: "Genesis Crystal 980", icon: "⚔️" },
    { id: 24, name: "1980 Crystal", category: "gaming", subcategory: "Genshin Impact", price: 385000, description: "Genesis Crystal 1980", icon: "⚔️" },

    // ===== GAMING - Valorant (4 products) =====
    { id: 25, name: "475 VP", category: "gaming", subcategory: "Valorant", price: 50000, description: "Valorant Points 475", icon: "🎯" },
    { id: 26, name: "1000 VP", category: "gaming", subcategory: "Valorant", price: 95000, description: "Valorant Points 1000", icon: "🎯" },
    { id: 27, name: "2050 VP", category: "gaming", subcategory: "Valorant", price: 190000, description: "Valorant Points 2050", icon: "🎯" },
    { id: 28, name: "3650 VP", category: "gaming", subcategory: "Valorant", price: 330000, description: "Valorant Points 3650", icon: "🎯" },

    // ===== STREAMING - Netflix (3 products) =====
    { id: 29, name: "Premium 1 Bulan", category: "streaming", subcategory: "Netflix", price: 54000, description: "4K UHD", icon: "🎬" },
    { id: 30, name: "Premium 3 Bulan", category: "streaming", subcategory: "Netflix", price: 155000, description: "4K UHD", icon: "🎬" },
    { id: 31, name: "Premium 6 Bulan", category: "streaming", subcategory: "Netflix", price: 299000, description: "4K UHD", icon: "🎬" },

    // ===== STREAMING - Disney+ (3 products) =====
    { id: 32, name: "Hotstar 1 Bulan", category: "streaming", subcategory: "Disney+", price: 39000, description: "Premium", icon: "🏰" },
    { id: 33, name: "Hotstar 3 Bulan", category: "streaming", subcategory: "Disney+", price: 109000, description: "Premium", icon: "🏰" },
    { id: 34, name: "Hotstar 12 Bulan", category: "streaming", subcategory: "Disney+", price: 399000, description: "Premium", icon: "🏰" },

    // ===== STREAMING - YouTube (3 products) =====
    { id: 35, name: "Premium 1 Bulan", category: "streaming", subcategory: "YouTube", price: 35000, description: "Tanpa iklan", icon: "📺" },
    { id: 36, name: "Premium 3 Bulan", category: "streaming", subcategory: "YouTube", price: 99000, description: "Tanpa iklan", icon: "📺" },
    { id: 37, name: "Family 1 Bulan", category: "streaming", subcategory: "YouTube", price: 75000, description: "6 akun", icon: "📺" },

    // ===== MUSIC - Spotify (4 products) =====
    { id: 38, name: "Premium 1 Bulan", category: "music", subcategory: "Spotify", price: 27000, description: "Individual", icon: "🎵" },
    { id: 39, name: "Premium 3 Bulan", category: "music", subcategory: "Spotify", price: 75000, description: "Individual", icon: "🎵" },
    { id: 40, name: "Premium 6 Bulan", category: "music", subcategory: "Spotify", price: 145000, description: "Individual", icon: "🎵" },
    { id: 41, name: "Family 1 Bulan", category: "music", subcategory: "Spotify", price: 85000, description: "6 akun", icon: "🎵" },

    // ===== MUSIC - Apple Music (3 products) =====
    { id: 42, name: "Individual 1 Bulan", category: "music", subcategory: "Apple Music", price: 30000, description: "1 akun", icon: "🍎" },
    { id: 43, name: "Individual 3 Bulan", category: "music", subcategory: "Apple Music", price: 85000, description: "1 akun", icon: "🍎" },
    { id: 44, name: "Family 1 Bulan", category: "music", subcategory: "Apple Music", price: 55000, description: "6 akun", icon: "🍎" },

    // ===== SOFTWARE - Microsoft 365 (3 products) =====
    { id: 45, name: "Personal 1 Bulan", category: "software", subcategory: "Microsoft 365", price: 85000, description: "1 pengguna", icon: "💼" },
    { id: 46, name: "Personal 1 Tahun", category: "software", subcategory: "Microsoft 365", price: 899000, description: "1 pengguna", icon: "💼" },
    { id: 47, name: "Family 1 Tahun", category: "software", subcategory: "Microsoft 365", price: 1299000, description: "6 pengguna", icon: "💼" },

    // ===== SOFTWARE - Adobe (3 products) =====
    { id: 48, name: "All Apps 1 Bulan", category: "software", subcategory: "Adobe", price: 150000, description: "Semua aplikasi", icon: "🖌️" },
    { id: 49, name: "Photography", category: "software", subcategory: "Adobe", price: 95000, description: "PS + LR", icon: "🖌️" },
    { id: 50, name: "Single App", category: "software", subcategory: "Adobe", price: 120000, description: "1 aplikasi", icon: "🖌️" },

    // ===== SOFTWARE - Canva (3 products) =====
    { id: 51, name: "Pro 1 Bulan", category: "software", subcategory: "Canva", price: 70000, description: "1 pengguna", icon: "🎨" },
    { id: 52, name: "Pro 6 Bulan", category: "software", subcategory: "Canva", price: 370000, description: "1 pengguna", icon: "🎨" },
    { id: 53, name: "Pro 1 Tahun", category: "software", subcategory: "Canva", price: 699000, description: "1 pengguna", icon: "🎨" }
];

// Cart
let cart = [];

// Slider Variables
let currentSlide = 1;
let slideInterval;

// Product Image Data
function getProductImageData(subcategory) {
    const imageData = {
        // Gaming
        "Mobile Legends": {
            image: "https://i.imgur.com/6oMKwVq.png",
            bgGradient: "linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            iconClass: "fas fa-crown"
        },
        "Free Fire": {
            image: "https://i.imgur.com/7rGPkVF.png",
            bgGradient: "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
            iconClass: "fas fa-fire"
        },
        "PUBG Mobile": {
            image: "https://i.imgur.com/xB8QJKZ.png",
            bgGradient: "linear-gradient(135deg, #FFA500 0%, #FF6347 50%, #FF4500 100%)",
            iconClass: "fas fa-crosshairs"
        },
        "Roblox": {
            image: "https://i.imgur.com/mFALKzs.png",
            bgGradient: "linear-gradient(135deg, #E94057 0%, #8A2387 50%, #F27121 100%)",
            iconClass: "fas fa-cube"
        },
        "Genshin Impact": {
            image: "https://i.imgur.com/V7rGhZR.png",
            bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            iconClass: "fas fa-gem"
        },
        "Valorant": {
            image: "https://i.imgur.com/pMDfGcL.png",
            bgGradient: "linear-gradient(135deg, #FF0844 0%, #FFB199 100%)",
            iconClass: "fas fa-bullseye"
        },
        // Streaming
        "Netflix": {
            image: "https://logo.clearbit.com/netflix.com",
            bgGradient: "linear-gradient(135deg, #E50914 0%, #8E0000 100%)",
            iconClass: "fas fa-film"
        },
        "Disney+": {
            image: "https://logo.clearbit.com/disneyplus.com",
            bgGradient: "linear-gradient(135deg, #113CCF 0%, #042D86 100%)",
            iconClass: "fas fa-star"
        },
        "YouTube": {
            image: "https://logo.clearbit.com/youtube.com",
            bgGradient: "linear-gradient(135deg, #FF0000 0%, #8B0000 100%)",
            iconClass: "fab fa-youtube"
        },
        // Music
        "Spotify": {
            image: "https://logo.clearbit.com/spotify.com",
            bgGradient: "linear-gradient(135deg, #1DB954 0%, #1AA34A 50%, #1ED760 100%)",
            iconClass: "fab fa-spotify"
        },
        "Apple Music": {
            image: "https://logo.clearbit.com/apple.com",
            bgGradient: "linear-gradient(135deg, #FA233B 0%, #FB5C74 50%, #FE9496 100%)",
            iconClass: "fab fa-apple"
        },
        // Software
        "Microsoft 365": {
            image: "https://logo.clearbit.com/microsoft.com",
            bgGradient: "linear-gradient(135deg, #0078D4 0%, #005A9E 50%, #00BCF2 100%)",
            iconClass: "fab fa-microsoft"
        },
        "Adobe": {
            image: "https://logo.clearbit.com/adobe.com",
            bgGradient: "linear-gradient(135deg, #FF0000 0%, #ED1C24 50%, #FA0F00 100%)",
            iconClass: "fas fa-bezier-curve"
        },
        "Canva": {
            image: "https://logo.clearbit.com/canva.com",
            bgGradient: "linear-gradient(135deg, #00C4CC 0%, #7C2AE8 50%, #FF66C4 100%)",
            iconClass: "fas fa-paint-brush"
        }
    };

    return imageData[subcategory] || {
        image: null,
        bgGradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        iconClass: "fas fa-star"
    };
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
    startSlider();
    updateProductCount();
});

// Current filters
let currentFilter = { category: 'all', subcategory: null, search: '' };

// Load Products
function loadProducts(filter = 'all', subcategory = null, searchQuery = '') {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    // Update current filter
    currentFilter = { category: filter, subcategory: subcategory, search: searchQuery };

    let filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    // Apply subcategory filter
    if (subcategory) {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }

    // Apply search filter if query exists
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });

    updateProductCount(filteredProducts.length);

    // Update subcategory navigation
    updateSubcategoryNav(filter);
}

// Get Subcategories for a Category
function getSubcategories(category) {
    if (category === 'all') return [];
    const subcategories = [...new Set(products.filter(p => p.category === category).map(p => p.subcategory))];
    return subcategories;
}

// Update Subcategory Navigation
function updateSubcategoryNav(category) {
    const subcatContainer = document.getElementById('subcategoryNav');
    if (!subcatContainer) return;

    if (category === 'all') {
        subcatContainer.style.display = 'none';
        return;
    }

    const subcategories = getSubcategories(category);
    if (subcategories.length === 0) {
        subcatContainer.style.display = 'none';
        return;
    }

    subcatContainer.style.display = 'block';
    subcatContainer.innerHTML = `
        <div class="subcategory-pills">
            <button class="subcat-pill active" onclick="filterBySubcategory(null)">Semua</button>
            ${subcategories.map(sub =>
                `<button class="subcat-pill" onclick="filterBySubcategory('${sub}')">${sub}</button>`
            ).join('')}
        </div>
    `;
}

// Filter by Subcategory
function filterBySubcategory(subcategory) {
    const pills = document.querySelectorAll('.subcat-pill');
    pills.forEach(pill => pill.classList.remove('active'));
    event.target.classList.add('active');

    loadProducts(currentFilter.category, subcategory, currentFilter.search);
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.subcategory = product.subcategory || '';

    const imageData = getProductImageData(product.subcategory);

    card.innerHTML = `
        <div class="product-image" style="background: ${imageData.bgGradient}">
            ${imageData.image
                ? `<img src="${imageData.image}" alt="${product.subcategory}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                   <div class="image-fallback" style="display:none;">
                       <i class="${imageData.iconClass}"></i>
                   </div>`
                : `<div class="image-fallback" style="display:flex;">
                       <i class="${imageData.iconClass}"></i>
                   </div>`
            }
        </div>
        <div class="product-info">
            <span class="product-subcategory">${product.subcategory || getCategoryName(product.category)}</span>
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

// Update Product Count
function updateProductCount(count) {
    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
        productCountElement.textContent = count !== undefined ? count : products.length;
    }
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
    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            const searchInput = document.getElementById('searchInput');
            searchInput.value = ''; // Clear search when switching categories
            loadProducts(category);
            document.getElementById('products').scrollIntoView({behavior: 'smooth'});
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        const searchQuery = searchInput.value;
        const activeCategory = document.querySelector('.category-tab.active');
        const currentFilter = activeCategory ? activeCategory.dataset.category : 'all';
        loadProducts(currentFilter, searchQuery);
    }

    searchBtn.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Real-time search (optional - search while typing)
    searchInput.addEventListener('input', function() {
        const activeCategory = document.querySelector('.category-tab.active');
        const currentFilter = activeCategory ? activeCategory.dataset.category : 'all';
        loadProducts(currentFilter, this.value);
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

// ===== SLIDER/CAROUSEL FUNCTIONS =====

// Start Auto Slider
function startSlider() {
    showSlide(currentSlide);
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Move Slide
function moveSlide(n) {
    clearInterval(slideInterval);
    currentSlide += n;
    const slides = document.querySelectorAll('.slide');

    if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    if (currentSlide < 1) {
        currentSlide = slides.length;
    }

    showSlide(currentSlide);

    // Restart auto-slide
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Show Specific Slide
function goToSlide(n) {
    clearInterval(slideInterval);
    currentSlide = n;
    showSlide(currentSlide);

    // Restart auto-slide
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Show Slide Function
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[n - 1]) {
        slides[n - 1].classList.add('active');
    }
    if (dots[n - 1]) {
        dots[n - 1].classList.add('active');
    }
}
