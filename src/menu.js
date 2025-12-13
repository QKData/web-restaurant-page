export function createMenu() {
    const wrapper = document.createElement("div");
    wrapper.className = "menu-wrapper";

    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    
    const container = document.createElement("div");
    container.className = "menu-container";

    class Dish {
        constructor(name) {
            this.name = name;
            // this.imageSrc = imageSrc;
        }

        createElement() {
            const dishDiv = document.createElement("div");
            dishDiv.className = "dish";

            const dishImage = document.createElement("div");
            dishImage.className = `dish-image ${this.name.toLowerCase()}`;

            const dishName = document.createElement("h2");
            dishName.textContent = this.name;

            dishDiv.appendChild(dishImage);
            dishDiv.appendChild(dishName);

            return dishDiv;
        }
    }

    const salad = new Dish("Salad");
    const pasta = new Dish("Pasta");
    const cheese = new Dish("Cheese");
    const fish = new Dish("Fish");
    const hamburger = new Dish("Hamburger");
    const crepes = new Dish("Fruit Crepes");

    container.appendChild(salad.createElement());
    container.appendChild(pasta.createElement());
    container.appendChild(cheese.createElement());
    container.appendChild(fish.createElement());
    container.appendChild(hamburger.createElement());
    container.appendChild(crepes.createElement());

    wrapper.appendChild(title);
    wrapper.appendChild(container);

    return wrapper;
}