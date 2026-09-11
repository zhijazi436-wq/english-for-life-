/**
 * NovaStore - Main Application JavaScript
 * Fully interactive shopping cart, product filter, search, modals & toasts.
 */

// ==========================================
// 1. Product Catalog Data
// ==========================================
const PRODUCTS = [
  {
    id: 1,
    name: "Aura Noise-Cancelling Headphones",
    category: "electronics",
    price: 189.99,
    oldPrice: 249.99,
    rating: 4.9,
    reviewCount: 142,
    badge: "sale",
    badgeLabel: "Save $60",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    description: "Immerse yourself in pure studio sound with active hybrid noise cancellation, 40-hour battery life, and ultra-plush memory foam earcups.",
    features: [
      "Active Hybrid Noise Cancellation (ANC)",
      "Up to 40 hours of playback per charge",
      "Bluetooth 5.3 & Low Latency Audio",
      "Built-in crystal clear microphone array"
    ]
  },
  {
    id: 2,
    name: "Minimalist Chrono Watch",
    category: "accessories",
    price: 129.00,
    oldPrice: 155.00,
    rating: 4.8,
    reviewCount: 98,
    badge: "popular",
    badgeLabel: "Best Seller",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    description: "Crafted with 316L surgical stainless steel and scratch-resistant sapphire crystal glass, this timepiece combines classic elegance with everyday durability.",
    features: [
      "Japanese Quartz Movement",
      "Water resistant to 50 meters (5 ATM)",
      "Genuine Italian leather interchangeable strap",
      "Ultra-slim 7.5mm case profile"
    ]
  },
  {
    id: 3,
    name: "Urban Organic Cotton Hoodie",
    category: "fashion",
    price: 64.50,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 64,
    badge: "new",
    badgeLabel: "New Arrival",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80",
    description: "Spun from 100% certified organic heavyweight cotton. Features a relaxed unisex silhouette, brushed interior fleece, and reinforced stitching.",
    features: [
      "100% GOTS Certified Organic Cotton",
      "Pre-shrunk fabric to retain shape wash after wash",
      "Kangaroo pocket with hidden headphone pass-through",
      "Eco-friendly non-toxic dyes"
    ]
  },
  {
    id: 4,
    name: "Smart Ambient LED Desk Lamp",
    category: "lifestyle",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.6,
    reviewCount: 81,
    badge: "sale",
    badgeLabel: "Sale",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
    description: "Engineered to eliminate glare and eye strain. Features stepless dimming, 5 color temperature modes, wireless phone charging base, and touch controls.",
    features: [
      "10W Fast Qi Wireless Charging pad built into base",
      "Color temperature range 2700K - 6500K",
      "Auto-off 45-minute sleep timer",
      "Multi-angle foldable aluminum alloy arm"
    ]
  },
  {
    id: 5,
    name: "Full-Grain Leather Everyday Backpack",
    category: "accessories",
    price: 145.00,
    oldPrice: 180.00,
    rating: 4.9,
    reviewCount: 112,
    badge: "popular",
    badgeLabel: "Popular",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
    description: "A timeless companion for work, travel, and commutes. Fits up to a 16-inch laptop with dedicated shock-proof padding and weather-resistant zippers.",
    features: [
      "Padded compartment fits up to 16\" laptop",
      "Water-repellent vegetable-tanned leather finish",
      "Ergonomic breathable mesh shoulder straps",
      "Luggage pass-through strap for easy travel"
    ]
  },
  {
    id: 6,
    name: "True Wireless Studio Earbuds",
    category: "electronics",
    price: 89.00,
    oldPrice: 110.00,
    rating: 4.7,
    reviewCount: 230,
    badge: "sale",
    badgeLabel: "20% OFF",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80",
    description: "Compact in-ear wireless earphones offering deep dynamic bass, IPX7 sweat resistance, and up to 32 hours total playtime with the pocket charging case.",
    features: [
      "IPX7 waterproof and sweatproof rating",
      "8 hours battery per charge + 24 hours in case",
      "Intuitive smart touch controls for tracks and calls",
      "Fast Type-C charging (10 min charge = 2 hrs playtime)"
    ]
  },
  {
    id: 7,
    name: "Heritage Canvas Low-Top Sneakers",
    category: "fashion",
    price: 75.00,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 57,
    badge: "new",
    badgeLabel: "New",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=80",
    description: "Classic court-inspired canvas sneakers engineered with an orthopedic cushioned footbed and durable vulcanized rubber outsole for all-day comfort.",
    features: [
      "Breathable double-ply heavy cotton canvas",
      "Cushioned memory foam arch support insole",
      "Non-slip vulcanized waffle rubber sole",
      "Reinforced aluminum lace eyelets"
    ]
  },
  {
    id: 8,
    name: "Ceramic Pour-Over Coffee Dripper Set",
    category: "lifestyle",
    price: 38.00,
    oldPrice: 48.00,
    rating: 4.9,
    reviewCount: 76,
    badge: "popular",
    badgeLabel: "Top Rated",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80",
    description: "Master the art of handcrafted artisanal coffee. Heat-retentive matte ceramic dripper coupled with a 600ml borosilicate glass decanter.",
    features: [
      "High-fired thermal ceramic cone dripper",
      "Heat-resistant 600ml borosilicate glass carafe",
      "Includes 40 biodegradable unbleached cone filters",
      "Dishwasher safe and easy to clean"
    ]
  }
];

// Fallback SVG placeholder in case image fails to load
const FALLBACK_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%2364748b">NovaStore Product</text></svg>`;

// ==========================================
// 2. Application State
// ==========================================
let cart = [];
let currentCategory = "all";
let currentSearch = "";

// Load cart from LocalStorage on initialization
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("novastore_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to parse cart from storage:", e);
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("novastore_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to storage:", e);
  }
}

// ==========================================
// 3. DOM Elements Cache
// ==========================================
const productsGrid = document.getElementById("productsGrid");
const emptyResults = document.getElementById("emptyResults");
const resultsCount = document.getElementById("resultsCount");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetFilterBtn = document.getElementById("resetFilterBtn");

// Cart Elements
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartEmptyState = document.getElementById("cartEmptyState");
const cartFooter = document.getElementById("cartFooter");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartShipping = document.getElementById("cartShipping");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const startShoppingBtn = document.getElementById("startShoppingBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Quick View Modal Elements
const quickViewBackdrop = document.getElementById("quickViewBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalBody = document.getElementById("modalBody");

// Checkout Success Modal Elements
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const finishCheckoutBtn = document.getElementById("finishCheckoutBtn");
const orderNumber = document.getElementById("orderNumber");
const checkoutOrderSummary = document.getElementById("checkoutOrderSummary");

// Newsletter Form & Mobile Navigation
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const toastContainer = document.getElementById("toastContainer");

// ==========================================
// 4. Product Rendering & Filtering
// ==========================================
function renderProducts() {
  const filtered = PRODUCTS.filter((item) => {
    const matchCat = (currentCategory === "all") || (item.category === currentCategory);
    const query = currentSearch.trim().toLowerCase();
    const matchSearch = query === "" || 
      item.name.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  // Update status label
  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    emptyResults.style.display = "block";
    resultsCount.textContent = "No products found";
    return;
  }

  emptyResults.style.display = "none";
  const catLabel = currentCategory === "all" ? "all categories" : currentCategory;
  resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products (${catLabel})`;

  productsGrid.innerHTML = filtered.map(product => {
    let badgeHtml = "";
    if (product.badge === "sale") {
      badgeHtml = `<span class="badge-tag badge-sale">${product.badgeLabel || 'Sale'}</span>`;
    } else if (product.badge === "new") {
      badgeHtml = `<span class="badge-tag badge-new">${product.badgeLabel || 'New'}</span>`;
    } else if (product.badge === "popular") {
      badgeHtml = `<span class="badge-tag badge-popular">${product.badgeLabel || 'Popular'}</span>`;
    }

    const oldPriceHtml = product.oldPrice 
      ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` 
      : "";

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          ${badgeHtml}
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
          >
          <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">
            👁️ Quick View
          </button>
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            <span class="stars">★</span>
            <span><strong>${product.rating.toFixed(1)}</strong> (${product.reviewCount})</span>
          </div>
          <div class="product-bottom">
            <div class="price-container">
              <span class="current-price">$${product.price.toFixed(2)}</span>
              ${oldPriceHtml}
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
              <span>+ Add</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================
// 5. Shopping Cart Functionality
// ==========================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${product.name}" to cart!`, "success");
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId, false);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId, notify = true) {
  const itemIndex = cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    const itemName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    saveCartToStorage();
    updateCartUI();
    if (notify) {
      showToast(`Removed "${itemName}" from cart`, "info");
    }
  }
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast("Your cart has been cleared", "info");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9.99;
  const grandTotal = subtotal + shipping;

  // Header & Drawer count badges
  cartCountBadge.textContent = totalCount;
  cartTotalItems.textContent = totalCount;

  // Empty cart toggle
  if (cart.length === 0) {
    cartEmptyState.style.display = "flex";
    cartItemsContainer.style.display = "none";
    cartFooter.style.display = "none";
  } else {
    cartEmptyState.style.display = "none";
    cartItemsContainer.style.display = "flex";
    cartFooter.style.display = "block";

    // Render cart items
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="cart-item-img"
          onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
        >
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-delete" onclick="removeFromCart(${item.id})">
              🗑️ Remove
            </button>
          </div>
        </div>
      </div>
    `).join("");

    // Update totals
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartShipping.textContent = subtotal > 50 ? "FREE" : `$${shipping.toFixed(2)}`;
    cartTotal.textContent = `$${grandTotal.toFixed(2)}`;
  }
}

// Open/Close Cart Drawer
function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 6. Quick View Modal
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const oldPriceHtml = product.oldPrice 
    ? `<span class="modal-old-price">$${product.oldPrice.toFixed(2)}</span>` 
    : "";

  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
      >
    </div>
    <div class="modal-details">
      <span class="modal-category">${product.category}</span>
      <h2 class="modal-title">${product.name}</h2>
      <div class="product-rating" style="margin-bottom: 0.75rem;">
        <span class="stars">★★★★★</span>
        <span><strong>${product.rating.toFixed(1)}</strong> out of 5 (${product.reviewCount} customer reviews)</span>
      </div>
      <div class="modal-price-row">
        <span class="modal-price">$${product.price.toFixed(2)}</span>
        ${oldPriceHtml}
      </div>
      <p class="modal-desc">${product.description}</p>
      
      <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Key Highlights:</h4>
      <ul class="modal-features-list">
        ${product.features.map(f => `<li>✓ ${f}</li>`).join("")}
      </ul>

      <div style="margin-top: auto; display: flex; gap: 1rem;">
        <button class="btn btn-primary" style="flex: 1;" onclick="addToCart(${product.id}); closeQuickView();">
          🛍️ Add to Cart - $${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;

  quickViewBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  quickViewBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 7. Checkout Process Simulation
// ==========================================
function handleCheckout() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;
  const randomOrder = Math.floor(10000 + Math.random() * 90000);

  orderNumber.textContent = randomOrder;
  checkoutOrderSummary.innerHTML = `
    <div class="order-summary-row">
      <span>Total Items:</span>
      <span>${cart.reduce((s, i) => s + i.quantity, 0)} units</span>
    </div>
    <div class="order-summary-row">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="order-summary-row">
      <span>Shipping:</span>
      <span>${shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}</span>
    </div>
    <div class="order-summary-row total-row">
      <span>Total Paid:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;

  // Close drawer, clear cart, open order confirmed modal
  closeCart();
  cart = [];
  saveCartToStorage();
  updateCartUI();

  checkoutBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  checkoutBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 8. Toast Notifications
// ==========================================
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "⚠️";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// ==========================================
// 9. Event Listeners Setup
// ==========================================
function initEvents() {
  // Category Pill Filters
  categoryFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-pill")) {
      categoryFilters.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.getAttribute("data-category");
      renderProducts();
    }
  });

  // Search Input Filter
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.style.display = currentSearch ? "block" : "none";
    renderProducts();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.style.display = "none";
    renderProducts();
  });

  resetFilterBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.style.display = "none";
    currentCategory = "all";
    categoryFilters.querySelectorAll(".filter-pill").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-category") === "all");
    });
    renderProducts();
  });

  // Cart Drawer Events
  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);
  startShoppingBtn.addEventListener("click", () => {
    closeCart();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
  checkoutBtn.addEventListener("click", handleCheckout);

  // Quick View Modal Events
  closeModalBtn.addEventListener("click", closeQuickView);
  quickViewBackdrop.addEventListener("click", (e) => {
    if (e.target === quickViewBackdrop) closeQuickView();
  });

  // Checkout Modal Events
  finishCheckoutBtn.addEventListener("click", closeCheckoutModal);
  checkoutBackdrop.addEventListener("click", (e) => {
    if (e.target === checkoutBackdrop) closeCheckoutModal();
  });

  // Keyboard shortcut: Escape to close drawer and modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeQuickView();
      closeCheckoutModal();
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  // Close mobile menu when a navigation link is clicked
  navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
    });
  });

  // Newsletter form submission
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    if (email) {
      showToast(`Thank you for subscribing (${email})! Check your inbox for 15% off.`, "success");
      newsletterEmail.value = "";
    }
  });
}

// ==========================================
// 10. Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  initEvents();
  renderProducts();
  updateCartUI();
});
