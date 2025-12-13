export function createContact() {
    const container = document.createElement('div');
    container.className = 'contact-container';
    
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    
    // Contact info section
    const infoSection = document.createElement('div');
    infoSection.className = 'contact-info';
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Get In Touch';
    
    const address = document.createElement('p');
    address.innerHTML = '<strong>Address:</strong><br>123 Main Street<br>New York, NY 10001';
    
    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Phone:</strong><br>(555) 123-4567';
    
    const email = document.createElement('p');
    email.innerHTML = '<strong>Email:</strong><br>info@restaurant.com';
    
    const hours = document.createElement('p');
    hours.innerHTML = '<strong>Hours:</strong><br>Mon-Fri: 11am - 10pm<br>Sat-Sun: 10am - 11pm';
    
    infoSection.appendChild(infoTitle);
    infoSection.appendChild(address);
    infoSection.appendChild(phone);
    infoSection.appendChild(email);
    infoSection.appendChild(hours);
    
    // Contact form section
    const formSection = document.createElement('div');
    formSection.className = 'contact-form';
    
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Send Us a Message';
    
    const form = document.createElement('form');
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your Email';
    emailInput.required = true;
    
    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Your Message';
    messageInput.rows = 5;
    messageInput.required = true;
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';
    
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitBtn);
    
    formSection.appendChild(formTitle);
    formSection.appendChild(form);
    
    container.appendChild(title);
    container.appendChild(infoSection);
    container.appendChild(formSection);
    
    return container;
}