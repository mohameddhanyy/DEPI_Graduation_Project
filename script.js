const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const registerForm = document.querySelector('.sign-up form');
const loginForm = document.querySelector('.sign-in form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    if (name && email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Registration successful!');
    } else {
        alert('Please fill all fields.');
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = 'https://mohameddhanyy.github.io/DEPI_Graduation_Project/home'; // Replace with your actual home page URL
    } else {
        alert('Invalid credentials. Please try again.');
    }
    });


const socialMediaButtons = document.querySelectorAll('.social-icons a');

socialMediaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const socialPlatform = e.target.classList[1];
        alert(`Redirecting to ${socialPlatform} sign-in...`);
        window.location.href = `https://www.${socialPlatform}.com/login`;
    });
});

// Array to store waiting and cart items
let waitingList = JSON.parse(localStorage.getItem('waitingList')) || [];
let cartList = JSON.parse(localStorage.getItem('cartList')) || [];

// Add to waiting list
document.querySelectorAll('.add-to-waiting').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        const item = { title, price };
        
        waitingList.push(item);
        localStorage.setItem('waitingList', JSON.stringify(waitingList));
        alert(`${title} added to Waiting List!`);
    });
});

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        const item = { title, price };
        
        cartList.push(item);
        localStorage.setItem('cartList', JSON.stringify(cartList));
        alert(`${title} added to Cart!`);
    });
});
