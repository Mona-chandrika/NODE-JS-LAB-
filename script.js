// =====================
// REGISTER
// =====================
function registerUser() {
    let name = document.getElementById("name")?.value;
    let email = document.getElementById("email")?.value;
    let password = document.getElementById("password")?.value;
    let confirm = document.getElementById("confirmPassword")?.value;

    if (!name || !email || !password || !confirm) {
        alert("Please fill all fields");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    let user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
    return false;
}

// =====================
// LOGIN
// =====================
function loginUser() {
    let email = document.getElementById("email")?.value;
    let password = document.getElementById("password")?.value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No registered user found!");
        return false;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }

    return false;
}

// =====================
// ADD TO CART
// =====================
function addToCart(title, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ title, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(title + " added to cart!");
    updateCartCount();
}

// =====================
// LOAD CART
// =====================
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cartItems");
    let total = 0;

    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
            <div class="card mb-2 p-3">
                <h5>${item.title}</h5>
                <p>₹${item.price}</p>
                <button class="btn btn-danger btn-sm"
                    onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;

    updateCartCount();
}

// =====================
// REMOVE ITEM
// =====================
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// =====================
// LOGOUT
// =====================
function logoutUser() {
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// =====================
// CART COUNT
// =====================
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = document.getElementById("cartCount");
    if (badge) {
        badge.innerText = cart.length;
    }
}

updateCartCount();
