document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const year = document.getElementById('year').value;

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Year: ${year}`);
    alert('Thank you for registering! We will contact you soon.');
});
