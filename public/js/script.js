document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();// Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Display the processing message
    const responseMessageDiv = document.getElementById('responseMessage');
    responseMessageDiv.innerText = 'Processing...';
    responseMessageDiv.classList.add('show');
     
    // Hide the form immediately
    document.getElementById('contactForm').style.display = 'none';

    // Scroll up by 300 pixels
    window.scrollBy({ top: -300, behavior: 'smooth' });


    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phoneNumber, subject, message })
        });

        const result = await response.json();
        document.getElementById('contactForm').classList.add('fade-out');
        responseMessageDiv.innerText = result.message;
    } catch (error) {
        document.getElementById('contactForm').classList.add('fade-out');
        responseMessageDiv.innerText = 'Failed to send message, check your internet connection and try again';
    }
});