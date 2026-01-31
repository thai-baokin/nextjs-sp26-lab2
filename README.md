# MarketLab - Premium E-commerce Application

MarketLab is a modern, responsive e-commerce web application inspired by premium tech designs. It is built with Next.js 15, Tailwind CSS v4, and ShadCN UI components.

## Features

- **Home Page**: Displays a curated list of products with a responsive grid layout.
- **Product Cards**: Glassmorphism effect, hover animations, quick view buttons.
- **Authentication Pages**: 
  - Login & Register pages with full form validation.
  - Interactive UI with loading states.
- **Design**: Dark mode support (default), premium color palette, and smooth transitions.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [ShadCN UI](https://ui.shadcn.com)
- **Icons**: Lucide React & Google Fonts

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    cd marketlab
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- `src/app`: Application routes and layouts.
  - `page.tsx`: Home page.
  - `login/page.tsx`: Login page.
  - `register/page.tsx`: Register page.
  - `globals.css`: Global styles and theme variables.
- `src/components`: Reusable UI components.
  - `ui/`: ShadCN base components.
  - `Header.tsx`, `Footer.tsx`: Layout components.
  - `ProductCard.tsx`: Product display component.
- `src/data`: Static data files (products list).

## Submission Info

This project is ready for submission. Please update the `SUBMISSION_INFO.md` file with your specific deployment URL after deploying to Vercel/Netlify.
