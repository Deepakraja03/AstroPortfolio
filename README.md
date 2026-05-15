# AstroPortfolio

AstroPortfolio is a full-stack personal portfolio and client-engagement platform built with a React frontend and an Express/MongoDB backend. It combines a public-facing portfolio experience with contact workflows, blog publishing, admin management, and slot-based booking.

## What this project does

- Presents a portfolio-style landing experience with about, services, testimonials, and contact pages
- Supports blog publishing and browsing through an admin-managed content flow
- Lets visitors submit contact details and book available slots
- Includes an admin area for login, slot management, blog operations, and submitted data review
- Supports multilingual UI behavior through the frontend i18n setup

## Tech stack

### Frontend
- React
- React Router
- Tailwind CSS
- Framer Motion
- i18next
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- bcryptjs
- CORS
- dotenv

## Project structure

```text
AstroPortfolio/
|-- frontend/
|   |-- src/
|   |   |-- components/        # Shared UI such as landing, navbar, footer, contact form
|   |   |-- pages/             # Home, About, Contact, Thankyou, blog and admin screens
|   |   |-- styles/            # Frontend styling assets
|   |   |-- i18n configuration
|   |-- public/
|   |-- package.json
|
|-- backend/
|   |-- index.js               # Express server and API routes
|   |-- package files
```

## Main frontend routes

- `/` - Landing page
- `/about` - About page
- `/contact` - Contact page
- `/display` - Blog listing page
- `/blog/:id` - Blog detail page
- `/login` - Admin login
- `/admin` and `/addslot` - Slot management after login
- `/upload` - Blog upload after login
- `/deleteblog` - Blog removal view
- `/viewdata` - Submitted data viewer

## Main backend capabilities

- Admin registration and login
- Slot creation, listing, and booking
- Contact or lead data capture
- Blog creation, listing, filtering, detail, and deletion
- Category creation and listing

## Getting started

### Frontend

```bash
git clone https://github.com/Deepakraja03/AstroPortfolio.git
cd AstroPortfolio/frontend
npm install
npm start
```

### Backend

```bash
cd ../backend
npm install
npm run dev
```

## Environment variables

Create a `.env` file in the backend folder.

```env
DB=your_mongodb_connection_string
PORT=5000
```

Update frontend API configuration as needed so it points to the running backend.

## Why this repo matters

This project is more than a static portfolio. It is a small productized personal-brand platform that mixes marketing pages, scheduling, content management, and lead collection into one stack.

## Future improvements

- Add JWT or session-based admin auth instead of local flag checks
- Split backend routes into separate controller files
- Add validation and rate limiting for public forms
- Add tests for booking and blog flows
- Add deployment docs for frontend and backend environments
