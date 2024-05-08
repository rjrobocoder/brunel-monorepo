# Brunel React.js Project Setup

Welcome to Brunel, your premier platform for staff augmentation services! Follow these steps to set up Brunel on your local machine and start crafting exceptional experiences.

**Live Demo**: [Brunel App on Netlify](https://brunelapp.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js 14 or higher
  - Download from the [Node.js official website](https://nodejs.org/)

## Getting Started

1. Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/rjrobocoder/brunel-monorepo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd brunel-monorepo/frontend
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Create a local environment file by copying the example file:

   ```bash
   cp .env.example .env
   ```

## Running the Development Server

To start the development server and run the project locally, use the following command:

```bash
npm start
```

This command will start the development server, and you can access the project in your web browser at `http://localhost:3000`.

## Building the Project

To build the project for production deployment, use the following command:

```bash
npm run build
```

This command will generate optimized production-ready files in the `build` directory.

## Running the Production Build

To serve the production build locally, you can use `npx serve`. If you don't have `serve` installed globally, you can install it locally as a development dependency:

```bash
npm install --save-dev serve
```

Then, run the following command to serve the production build:

```bash
npx serve -s build
```

The production version of your app will be available at `http://localhost:5000`.

## Project Structure

The project structure should look something like this:

```
brunel-monorepo/
└── frontend/
    ├── node_modules/
    ├── public/
    │   ├── index.html
    │   ├── ...
    ├── src/
    │   ├── App.js
    │   ├── ...
    ├── .env.example
    ├── .env
    ├── package.json
    ├── README.md
    └── ...
```
