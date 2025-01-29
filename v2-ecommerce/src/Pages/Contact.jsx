import React, { useState } from 'react';
import "./Contact.css";

export default function Form() {
    const handleSubmit = (event) => {
        // Prevents the form from submitting bad info
        event.preventDefault(); 

        // Get form values
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const email = document.getElementById('your_email').value.trim();
        const rating = document.getElementById('rating').value;

        // Validation
        if (!firstName || !lastName || !email || !rating) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, you can proceed with form submission
        alert('Form submitted successfully!');
        // Here you can add your form submission logic (e.g., sending data to a server)
    };

    return (
        <div>
            <h2>We hope you found everything okay, if you'd like the news on our latest updates please leave your name and email. Also please leave a review, Thank You!</h2>
            <div className="forms-folders">
                <div className="form-container">
                    <form id="feedbackForm" onSubmit={handleSubmit}>
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" id="first_name" placeholder="First Name" required />

                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text" id="last_name" placeholder="Last Name" required />

                        <label htmlFor="your_email">Your Email:</label>
                        <input type="email" id="your_email" placeholder="Email" required />

                        <label htmlFor="rating">Rate Your Experience:</label>
                        <select id="rating" name="rating" required>
                            <option value="">Select</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="poor">Poor</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

