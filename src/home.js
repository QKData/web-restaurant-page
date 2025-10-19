export function createHome() {
    const container = document.createElement('div');
    container.className = 'home-container';
    
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Our Restaurant';
    
    const tagline = document.createElement('p');
    tagline.className = 'tagline';
    tagline.textContent = 'Experience the finest cuisine in town';
    
    container.appendChild(title);
    container.appendChild(tagline);
    
    return container;
}