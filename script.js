document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from refreshing

    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('status-message');
    
    // 1. Lock the button so they can't double-click
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    statusMsg.innerText = "";

    // 2. Collect the data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // 3. Send data to Make.com
    const endpoint = "https://hook.eu1.make.com/lp2sw015b5yql797f46ffxu8i6jsp3o8"; 

    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // Make.com sends a text response like "Accepted"
        if (response.ok) {
            statusMsg.innerText = "✅ Message sent successfully!";
            statusMsg.style.color = "green";
            document.getElementById('contactForm').reset(); // Clear the form
        } else {
            throw new Error("Server error");
        }
    })
    .catch(error => {
        statusMsg.innerText = "❌ Error sending message. Please try again.";
        statusMsg.style.color = "red";
        console.error(error);
    })
    .finally(() => {
        // 4. Unlock the button
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    });
});