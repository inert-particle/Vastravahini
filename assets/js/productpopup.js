let _currentProduct = null;

/* ── OPEN ── */
function openProductModal(id) {
	const p = products.find(x => x.id === id);
	if (!p) return;
	_currentProduct = p;

	const img       = `assets/${p.images.thumbnail}`;
	const rating    = 4;
	const pct       = Math.round((1 - p.price.discounted / p.price.original) * 100);
	const saving    = p.price.original - p.price.discounted;
	const emoji     = EMOJI_MAP[p.subcategory] || "🛍";
	const reviews   = Math.floor(rating * 22 + id * 3);

	/* image */
	const mainImg = document.getElementById("pm-img");
	mainImg.style.display = "";
	mainImg.src = img;
	mainImg.alt = p.name;
	document.getElementById("pm-img-ph").innerHTML = emoji;
	document.getElementById("pm-img-ph").style.display = "none";

	/* badge */
	const badge = document.getElementById("pm-badge");
	if (pct > 0) { badge.textContent = pct + "% OFF"; badge.style.display = ""; }
	else { badge.style.display = "none"; }

	// /* thumbnails (same image 3×) */
	// document.getElementById("pm-thumbs").innerHTML = [img, img, img].map((src, i) =>
	// 	`<div class="pmodal-thumb ${i===0?"active":""}" onclick="pmSetThumb(this,'${src}')">
	// 		<img src="${src}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
	// 		<div class="pmodal-thumb-ph" style="display:none">${emoji}</div>
	// 	</div>`).join("");

	/* text */
	document.getElementById("pm-cat").textContent = p.category;
	document.getElementById("pm-subcat").textContent = p.subcategory;
	document.getElementById("pm-name").textContent = p.name;

	/* stars */
	document.getElementById("pm-stars").innerHTML =
		Array.from({length:5}, (_,i) =>
			`<span class="pmodal-star${i<rating?"":" empty"}">★</span>`).join("");
	document.getElementById("pm-rating-num").textContent = rating + ".0";
	document.getElementById("pm-reviews").textContent = `(${reviews} reviews)`;

	/* price */
	document.getElementById("pm-price").textContent = "₹" + p.price.discounted.toLocaleString("en-IN");
	document.getElementById("pm-mrp").textContent   = "₹" + p.price.original.toLocaleString("en-IN");
	document.getElementById("pm-save").textContent  = saving > 0 ? "Save ₹" + saving.toLocaleString("en-IN") : "";
	document.getElementById("pm-save").style.display = saving > 0 ? "" : "none";

	/* description */
	document.getElementById("pm-desc").textContent = p.description || "";

	/* size section visibility */
	document.getElementById("pm-size-section").style.display =
		SIZED_CATS.has(p.subcategory) ? "" : "none";
	/* reset size selection */
	document.querySelectorAll(".pmodal-size-opt:not(.oos)").forEach((b,i) => {
		b.classList.toggle("active", i === 1);
	});
	document.getElementById("pm-size-label").textContent = "— S";

	/* qty reset */
	document.getElementById("pm-qty").value = 1;

	/* cart / wishlist state */
	pmUpdateCartBtn();
	pmUpdateWlBtn();

	/* open */
	document.getElementById("pmodal-overlay").classList.add("open");
	document.body.style.overflow = "hidden";
}

function closeProductModal() {
	document.getElementById("pmodal-overlay").classList.remove("open");
	document.body.style.overflow = "";
}

function handleOverlayClick(e) {
	if (e.target === document.getElementById("pmodal-overlay")) closeProductModal();
}

document.addEventListener("keydown", e => {
	if (e.key === "Escape") closeProductModal();
});

/* ── INTERACTIONS ── */
function pmSetThumb(el, src) {
	document.querySelectorAll(".pmodal-thumb").forEach(t => t.classList.remove("active"));
	el.classList.add("active");
	const img = document.getElementById("pm-img");
	img.style.display = "";
	img.src = src;
}

function pmSelectSize(btn, size) {
	document.querySelectorAll(".pmodal-size-opt").forEach(b => b.classList.remove("active"));
	btn.classList.add("active");
	document.getElementById("pm-size-label").textContent = "— " + size;
}

function pmChangeQty(delta) {
	const inp = document.getElementById("pm-qty");
	inp.value = Math.max(1, Math.min(10, parseInt(inp.value) + delta));
}

/* ── CART ── */
function pmGetCart()     { return JSON.parse(localStorage.getItem("cart")) || []; }
function pmSaveCart(c)   { localStorage.setItem("cart", JSON.stringify(c)); }
function pmGetWishlist() { return JSON.parse(localStorage.getItem("wishlist")) || []; }
function pmSaveWishlist(w){ localStorage.setItem("wishlist", JSON.stringify(w)); }

function pmUpdateCartBtn() {
	if (!_currentProduct) return;
	const btn = document.getElementById("pm-btn-cart");
	const inCart = pmGetCart().includes(String(_currentProduct.id));
	btn.classList.toggle("in-cart", inCart);
	btn.innerHTML = inCart
		? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> In Cart`
		: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Add to Cart`;
}

function pmUpdateWlBtn() {
	if (!_currentProduct) return;
	const inWL = pmGetWishlist().includes(String(_currentProduct.id));
	document.getElementById("pm-btn-wl").classList.toggle("active", inWL);
}

function pmAddToCart() {
	const id = String(_currentProduct.id);
	let cart = pmGetCart();
	if (cart.includes(id)) {
		cart = cart.filter(x => x !== id);
		pmShowToast("Removed from cart", "🛍️");
	} else {
		cart.push(id);
		pmShowToast("Added to cart!", "🛒");
	}
	pmSaveCart(cart);
	pmUpdateCartBtn();
	/* update any cart badge on your page */
	if (typeof updateCartBadge === "function") updateCartBadge();
}

function pmBuyNow() {
	const id = String(_currentProduct.id);
	let cart = pmGetCart();
	if (!cart.includes(id)) { cart.push(id); pmSaveCart(cart); }
	pmUpdateCartBtn();
	if (typeof updateCartBadge === "function") updateCartBadge();
	closeProductModal();
	window.location.href = "checkout.html";
}

function pmToggleWishlist() {
	const id = String(_currentProduct.id);
	let wl = pmGetWishlist();
	if (wl.includes(id)) {
		wl = wl.filter(x => x !== id);
		pmShowToast("Removed from wishlist", "🤍");
	} else {
		wl.push(id);
		pmShowToast("Added to wishlist!", "❤️");
	}
	pmSaveWishlist(wl);
	pmUpdateWlBtn();
	/* keep wishlist page in sync if open */
	if (typeof renderWishlist === "function") renderWishlist();
}

/* ── TOAST ── */
function pmShowToast(msg, icon = "✓") {
	document.getElementById("pm-toast-msg").textContent = msg;
	document.getElementById("pm-toast-icon").textContent = icon;
	const t = document.getElementById("pm-toast");
	t.classList.add("show");
	clearTimeout(t._tid);
	t._tid = setTimeout(() => t.classList.remove("show"), 3000);
}