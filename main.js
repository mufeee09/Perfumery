const products = [
    {
        name: "Midnight Rose",
        description: "A seductive blend of dark rose and vanilla",
        price: "₹129.99",
        image: "Logo/photo-1587017539504-67cfbddac569.jpeg",
        whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Midnight%20Rose%20perfume",
        instagram: "https://instagram.com/rolscheventon.official"
    },
    {
        name: "Ocean Breeze",
        description: "Fresh marine notes with citrus undertones",
        price: "₹89.99",
        image: "Logo/photo-1588405748880-12d1d2a59f75.jpeg",
        whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Ocean%20Breeze%20perfume",
        instagram: "https://instagram.com/rolscheventon.official"
    },
    {
        name: "Golden Amber",
        description: "Warm amber mixed with exotic spices",
        price: "₹149.99",
        image: "Logo/641460.jpg",
        whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Golden%20Amber%20perfume",
        instagram: "https://instagram.com/rolscheventon.official"
    },
    {
        name: "Pure Jasmine",
        description: "Delicate jasmine with subtle woody notes",
        price: "₹109.99",
        image: "Logo/photo-1594035910387-fea47794261f.jpeg",
        whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Pure%20Jasmine%20perfume",
        instagram: "https://instagram.com/rolscheventon.official"
    }
    // {
    //     name: "Golden Amber",
    //     description: "Warm amber mixed with exotic spices",
    //     price: "₹149.99",
    //     image: "4ba156baf348906f49b50423a2a1cfb4.jpg",
    //     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Golden%20Amber%20perfume",
    //     instagram: "https://instagram.com/rolscheventon.official"
    // },
    // {
    //     name: "Pure Jasmine",
    //     description: "Delicate jasmine with subtle woody notes",
    //     price: "₹109.99",
    //     image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
    //     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Pure%20Jasmine%20perfume",
    //     instagram: "https://instagram.com/rolscheventon.official"
    // }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price}</span>
                <div class="order-buttons">
                    <a href="${product.whatsapp}" target="_blank" class="order-btn whatsapp">
                        <i class="fab fa-whatsapp"></i> Order via WhatsApp
                    </a>
                    <a href="${product.instagram}" target="_blank" class="order-btn instagram">
                        <i class="fab fa-instagram"></i> Order via Instagram
                    </a>
                </div>
            </div>
        </div>
    `;
}

function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product => {
        const searchString = searchTerm.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchString) ||
            product.description.toLowerCase().includes(searchString) ||
            product.price.toLowerCase().includes(searchString)
        );
    });
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = filteredProducts.map(createProductCard).join('');
}

function initializeProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(createProductCard).join('');
}

// Modal functionality
function showOrderModal(product) {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProducts);

const btn = document.getElementById('button');
const messageDiv = document.getElementById('message'); // Assuming you have a div to show messages

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const uName = document.getElementById('from_name').value;
    const currentEmail = document.getElementById('to_email').value;

    // Set the email address to send to
    document.getElementById('to_email').value = 'mmufeed493@gmail.com';

    // Get the last sent time from local storage
    const lastSentTime = localStorage.getItem(currentEmail);
    const currentTime = new Date().getTime();

    // Check if the email was sent within the last 5 days (5 days = 5 * 24 * 60 * 60 * 1000 milliseconds)
    if (lastSentTime && (currentTime - lastSentTime < 2 * 24 * 60 * 60 * 1000)) {
        alert('We value your engagement, but to ensure a premium experience, emails from the same ID is disabled for two days. Thank you for your understanding and cooperation ✨.');
        this.reset();
        return; 
    }

    // Update the last sent time in local storage
    localStorage.setItem(currentEmail, currentTime);
    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_rpdplsl';
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            this.reset();
            // messageDiv.textContent = `Email sent by: ${uName}`;
            alert('Email sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});

window.oncontextmenu = function () {
    window.alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.")
    return false;
 }
