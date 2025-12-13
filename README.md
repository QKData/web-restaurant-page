# 🍽️ Restaurant Website

A modern, dynamic restaurant website built with vanilla JavaScript and Webpack. Features a single-page application with tabbed navigation between Home, Menu, and Contact sections.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## ✨ Features

- **Single Page Application (SPA)**: Smooth tab switching without page reloads
- **Dynamic Content Loading**: JavaScript-generated DOM elements for all page content
- **Responsive Design**: Modern, mobile-friendly interface
- **Webpack Bundling**: Optimized asset management and module bundling
- **Development Server**: Hot-reload development environment
- **Three Main Sections**:
  - **Home**: Welcome message, about section, and opening hours
  - **Menu**: Display of restaurant dishes with images
  - **Contact**: Contact information and inquiry form

## 🎯 Demo

The website includes:
- Navigation bar with Home, Menu, and Contact tabs
- Dynamic content rendering based on active tab
- Smooth tab transitions with active state indicators
- Professional styling with CSS

## 🛠️ Technologies

- **JavaScript (ES6+)**: Modern JavaScript with modules
- **HTML5**: Semantic markup
- **CSS3**: Custom styling
- **Webpack 5**: Module bundler
  - `webpack-dev-server`: Development server with live reload
  - `html-webpack-plugin`: HTML file generation
  - `css-loader` & `style-loader`: CSS handling
- **npm**: Package management

## 📁 Project Structure

```
web-restaurant-page/
├── dist/                   # Production build output
├── src/
│   ├── index.js           # Main entry point, tab switching logic
│   ├── home.js            # Home page content generator
│   ├── menu.js            # Menu page content generator
│   ├── contact.js         # Contact page content generator
│   ├── styles.css         # Global styles
│   ├── template.html      # HTML template
│   └── image/             # Image assets
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
├── LICENSE                # License file
└── README.md             # Project documentation
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-restaurant-page.git
   cd web-restaurant-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will open at `http://localhost:8080` (or another available port).

### Production Build

Create an optimized production build:

```bash
npm run build
```

The bundled files will be generated in the `dist/` directory.

## 💻 Development

### Webpack Configuration

The project uses Webpack with the following configuration:

- **Entry Point**: `./src/index.js`
- **Output**: `./dist/main.js`
- **Mode**: Development (with eval-source-map for debugging)
- **Dev Server**: Watches `template.html` for changes
- **Loaders**: CSS files are processed with style-loader and css-loader

### Adding New Content

To add new sections or modify existing ones:

1. **Home Page**: Edit [src/home.js](src/home.js)
2. **Menu Page**: Edit [src/menu.js](src/menu.js)
3. **Contact Page**: Edit [src/contact.js](src/contact.js)
4. **Styles**: Modify [src/styles.css](src/styles.css)

Each module exports a function that creates and returns a DOM element with the page content.

## 🌐 Deployment

### GitHub Pages

Deploy to GitHub Pages using the included script:

```bash
npm run deploy
```

This command pushes the `dist/` folder to the `gh-pages` branch.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your web server.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

Tran Quang Kien - [GitHub Profile](https://github.com/qkdata)

---

**Note**: This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practice DOM manipulation and Webpack configuration.