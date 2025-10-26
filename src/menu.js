export function createMenu() {
    const container = document.createElement("div");
    container.className = "menu-container";

    const title = document.createElement('h1');
    title.textContent = 'Our Menu';

    const unit = document.createElement("div");

    container.appendChild(title);

    return container;
}