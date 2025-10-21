export function createHome() {
    const container = document.createElement('div');
    container.className = 'home-container';
    
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Our Restaurant';
    
    const tagline = document.createElement('p');
    tagline.className = 'tagline';
    tagline.textContent = 'Experience the finest cuisine in town';
    
    const homeContent = document.createElement('div');
    const about = document.createElement('section');
    about.className = 'about';

    const h2About = document.createElement('h2');
    h2About.textContent = 'About Us';
    
    const p1 = document.createElement('p');
    p1.textContent = "We serve delicious, authentic food made with the freshest ingredients.\
                        Our chefs bring years of experience and passion to every dish.";

    const hours = document.createElement('section');
    hours.className = 'hours';
    const h2Hours = document.createElement('h2');
    h2Hours.textContent = 'Opening Hours';
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'Monday - Friday: 11:00 AM - 10:00 PM';
    const li2 = document.createElement('li');
    li2.textContent = 'Saturday: 10:00 AM - 11:00 PM';
    const li3 = document.createElement('li');
    li3.textContent = 'Sunday: 10:00 AM - 9:00 PM';

    const location = document.createElement('section');
    location.className = 'location';
    const h2Location = document.createElement('h2');
    h2Location.textContent = 'Location';
    const p2 = document.createElement('p');
    p2.textContent = '123 Main Street, Your City, State 12345';

    about.appendChild(h2About);
    about.appendChild(p1);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    hours.appendChild(ul);
    location.appendChild(h2Location);
    location.appendChild(p2);
    homeContent.appendChild(about);
    homeContent.appendChild(hours);
    homeContent.appendChild(location);
    container.appendChild(title);
    container.appendChild(tagline);
    container.appendChild(homeContent);
    
    return container;
}