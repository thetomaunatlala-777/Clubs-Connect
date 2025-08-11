# Clubs Connect

Clubs Connect is a web application designed to bring together university clubs, societies, offices, and councils for the holistic benefit of students.

## 🌟 Key Features
- Dedicated entity pages
- Messaging system (personal, group, communal)
- Event calendar integration
- Membership & follower control
- Polls, forms, and elections
- Collaboration requests
- SGO oversight panel
- Sponsor and company profiles

## 🧠 APIs
- Authentication API
- Messaging API
- Posts & Feed API
- Membership Management API
- Collaboration Request API
- Notification API
- Calendar Events API
- Admin Tools API

## 🖼️ UI Pages
- Homepage
- Login/Signup
- Role-based Dashboard
- Entity Profile Page
- Messaging
- Event Calendar
- Collaboration Requests
- Polls & Forms
- Notifications
- SGO Admin Panel

## 🗃️ Database Tables
- Users
- Entities
- Posts
- Events
- Messages
- Memberships
- Collaboration Requests
- Polls & Forms
- Notifications

## 🔗 External APIs
- Google Calendar API
- Google Maps API
- Twilio or Stream Chat API

## Project File Structure
```
clubs-connect/
├── public/ # Static files (index.html, favicon, etc.)
├── src/ # Source code
│ ├── components/ # Reusable React components
│ ├── pages/ # React pages/views
│ ├── api/ # API interaction modules (e.g., Supabase)
│ ├── hooks/ # Custom React hooks
│ ├── styles/ # CSS/Sass files or styling modules
│ ├── tests/ # Test files
│ ├── App.js # Main React app component
│ ├── index.js # React DOM rendering entry point
│ └── ... # Other source files
├── .github/ # GitHub configs (workflows, ISSUE_TEMPLATE, etc.)
│ └── workflows/ # GitHub Actions workflow files
├── node_modules/ # npm dependencies (auto-generated)
├── package.json # Project dependencies and scripts
├── eslint.config.mjs # ESLint configuration file
├── README.md # Project documentation
└── ... # Other config files (e.g., .gitignore)
```
